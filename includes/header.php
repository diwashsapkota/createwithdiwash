<?php
/**
 * Shared page shell: <head>, skip link, nav, opens <main>.
 * Expects the including page to set, before requiring this file:
 *   $pageTitle        string  e.g. "About" (page-only title; omit for the home page)
 *   $pageDescription  string  meta description for this page
 *   $canonicalPath    string  path from the site root, always starting and ending with "/", e.g. "/about/"
 *   $isHome           bool    true only for the homepage (controls the transparent-over-hero nav)
 *   $extraJsonLd      array   optional additional JSON-LD block(s) to emit (e.g. per-page Service/CreativeWork lists)
 */

require_once __DIR__ . '/icons.php';

$isHome = $isHome ?? false;
$canonicalPath = $canonicalPath ?? '/';
$baseUrl = 'https://createwithdiwash.com';
$fullTitle = isset($pageTitle) && $pageTitle !== ''
    ? htmlspecialchars($pageTitle, ENT_QUOTES) . ' | Create with Diwash'
    : 'Create with Diwash - Digital Solutions for Churches & Faith-Based Organizations';

$navLinks = [
    ['href' => '/', 'label' => 'Home'],
    ['href' => '/about/', 'label' => 'About'],
    ['href' => '/services/', 'label' => 'Services'],
    ['href' => '/portfolio/', 'label' => 'Portfolio'],
    ['href' => '/contact/', 'label' => 'Contact'],
];

function is_active_path(string $current, string $href): bool
{
    if ($href === '/') {
        return $current === '/';
    }
    return $current === $href || str_starts_with($current, $href);
}

$siteJsonLd = [
    '@context' => 'https://schema.org',
    '@type' => 'ProfessionalService',
    'name' => 'Create with Diwash',
    'description' => 'Digital solutions for churches and faith-based organizations including website development, mobile apps, Church CRM, digital marketing, and creative services',
    'url' => $baseUrl,
    'logo' => $baseUrl . '/logo.png',
    'contactPoint' => [
        '@type' => 'ContactPoint',
        'contactType' => 'Customer Service',
        'availableLanguage' => 'English',
    ],
    'areaServed' => 'Worldwide',
    'serviceType' => [
        'Website Development', 'Mobile Application Development', 'Digital Marketing',
        'Email Marketing', 'Church CRM Systems', 'Data Analytics', 'System Automation',
        'Graphic Design', 'Web Design', 'Video Editing',
    ],
    'audience' => ['@type' => 'Audience', 'audienceType' => 'Churches and Faith-Based Organizations'],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= $fullTitle ?></title>
<meta name="description" content="<?= htmlspecialchars($pageDescription ?? '', ENT_QUOTES) ?>">
<link rel="canonical" href="<?= $baseUrl . $canonicalPath ?>">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="Create with Diwash">
<meta property="og:title" content="<?= $fullTitle ?>">
<meta property="og:description" content="<?= htmlspecialchars($pageDescription ?? '', ENT_QUOTES) ?>">
<meta property="og:url" content="<?= $baseUrl . $canonicalPath ?>">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?= $fullTitle ?>">
<meta name="twitter:description" content="<?= htmlspecialchars($pageDescription ?? '', ENT_QUOTES) ?>">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="manifest" href="/manifest.json">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/styles.css">
<script type="application/ld+json"><?= json_encode($siteJsonLd, JSON_UNESCAPED_SLASHES) ?></script>
<?php if (!empty($extraJsonLd)): foreach ($extraJsonLd as $block): ?>
<script type="application/ld+json"><?= json_encode($block, JSON_UNESCAPED_SLASHES) ?></script>
<?php endforeach; endif; ?>
</head>
<body class="min-h-dvh bg-paper text-stone-900 dark:bg-navy-950 dark:text-stone-100<?= $isHome ? ' is-home' : '' ?>">
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-amber-400 focus:px-5 focus:py-2.5 focus:font-semibold focus:text-slate-950">Skip to main content</a>

<header id="site-header" class="fixed inset-x-0 top-0 z-50 transition-all duration-300<?= $isHome ? '' : ' is-solid' ?>">
  <nav class="max-w-7xl mx-auto px-6" aria-label="Main navigation">
    <div class="flex h-16 items-center justify-between md:h-20">
      <a href="/" class="site-brand font-display text-xl font-semibold tracking-tight md:text-2xl">Create with Diwash<span class="text-amber-400">.</span></a>

      <div class="hidden items-center gap-8 md:flex">
        <ul class="flex items-center gap-7">
          <?php foreach ($navLinks as $link): $active = is_active_path($canonicalPath, $link['href']); ?>
          <li>
            <a href="<?= $link['href'] ?>" <?= $active ? 'aria-current="page"' : '' ?> class="nav-link relative inline-flex min-h-11 items-center text-sm font-medium transition-colors duration-200<?= $active ? ' is-active' : '' ?>">
              <?= $link['label'] ?>
              <?php if ($active): ?><span class="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-amber-400"></span><?php endif; ?>
            </a>
          </li>
          <?php endforeach; ?>
        </ul>
        <a href="/contact/" class="btn-primary min-h-11 px-5 py-2.5 text-sm">Start a Project</a>
      </div>

      <details id="mobile-menu-details" class="md:hidden">
        <summary aria-label="Open menu" class="mobile-menu-btn flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full transition-colors [&::-webkit-details-marker]:hidden">
          <?php icon('menu', 'h-6 w-6 menu-icon-open'); ?>
          <?php icon('close', 'h-6 w-6 menu-icon-close'); ?>
        </summary>
      </details>
    </div>
  </nav>
</header>

<!--
  Deliberately a sibling of <header>, not nested inside it: a position:fixed
  ancestor (the header) constrains this fixed-position panel's containing
  block in some engines, collapsing its height. Living outside <header>
  keeps it sized against the real viewport. Shown/hidden by the toggle
  listener in footer.php, which also drives the header's solid-background
  state while the menu is open.
-->
<div id="mobile-menu-panel" class="fixed inset-x-0 top-16 bottom-0 z-40 hidden overflow-y-auto border-t border-stone-200/70 bg-paper dark:border-slate-800/70 dark:bg-navy-950 md:hidden">
  <ul class="space-y-2 px-6 py-8">
    <?php foreach ($navLinks as $link): $active = is_active_path($canonicalPath, $link['href']); ?>
    <li>
      <a href="<?= $link['href'] ?>" <?= $active ? 'aria-current="page"' : '' ?> class="block py-3 font-display text-3xl font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-400<?= $active ? ' text-amber-600 dark:text-amber-400' : ' text-stone-900 dark:text-white' ?>">
        <?= $link['label'] ?>
      </a>
    </li>
    <?php endforeach; ?>
  </ul>
  <div class="px-6 pb-10">
    <a href="/contact/" class="btn-primary w-full px-6 py-4 text-base">Start a Project</a>
  </div>
</div>

<main id="main" class="relative">
