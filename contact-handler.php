<?php
/**
 * htmx POST target for the contact form. Validates, then forwards to Formspree
 * (same endpoint the site has always used) and returns an HTML fragment that
 * htmx swaps into #contact-result.
 */

header('Content-Type: text/html; charset=utf-8');

function render_result(string $type, string $message): void
{
    $styles = [
        'success' => 'border-green-300 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/40 dark:text-green-300',
        'too_fast' => 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200',
        'error' => 'border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300',
    ];
    $role = $type === 'error' || $type === 'too_fast' ? 'alert' : 'status';
    echo '<div role="' . $role . '" class="mt-6 rounded-xl border p-4 text-sm ' . $styles[$type] . '">' . htmlspecialchars($message, ENT_QUOTES) . '</div>';
    if ($type === 'success') {
        echo '<script>(function(){var f=document.getElementById("contact-form");if(f)f.reset();})();</script>';
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    render_result('error', 'Something went wrong. Please try again later.');
    exit;
}

// Honeypot: a filled hidden field means a bot filled every input, humans never see it.
if (!empty($_POST['website'])) {
    render_result('error', 'Something went wrong. Please try again later.');
    exit;
}

// Minimum time-on-page, mirrors the previous React form's bot filter.
$startedAt = (int) ($_POST['form_started_at'] ?? 0);
if ($startedAt <= 0 || (time() - $startedAt) < 3) {
    render_result('too_fast', 'Please wait a moment, then send again. This helps us filter automated submissions.');
    exit;
}

$firstName = trim($_POST['firstName'] ?? '');
$lastName = trim($_POST['lastName'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($firstName === '' || $lastName === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    render_result('error', 'Please fill in every field with a valid email address.');
    exit;
}

$payload = json_encode([
    'firstName' => $firstName,
    'lastName' => $lastName,
    'email' => $email,
    'message' => $message,
], JSON_UNESCAPED_SLASHES);

$formspreeUrl = 'https://formspree.io/f/xnjndabz';
$ok = false;

if (function_exists('curl_init')) {
    $ch = curl_init($formspreeUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
    ]);
    curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $ok = $status >= 200 && $status < 300;
} else {
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\nAccept: application/json\r\n",
            'content' => $payload,
            'timeout' => 15,
            'ignore_errors' => true,
        ],
    ]);
    $result = @file_get_contents($formspreeUrl, false, $context);
    if ($result !== false && isset($http_response_header)) {
        $ok = (bool) preg_match('#^HTTP/\S+\s+2\d\d#', $http_response_header[0] ?? '');
    }
}

if ($ok) {
    render_result('success', "Message sent successfully! We'll get back to you soon.");
} else {
    render_result('error', 'Something went wrong. Please try again later.');
}
