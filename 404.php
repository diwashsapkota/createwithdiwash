<?php
http_response_code(404);
require_once __DIR__ . '/data/services.php';
$pageTitle = 'Page Not Found';
$pageDescription = 'That page does not exist.';
$canonicalPath = '/404.php';
require __DIR__ . '/includes/header.php';
?>
<div class="flex min-h-[60vh] items-center px-6 pt-24 md:pt-28">
  <div class="mx-auto max-w-xl text-center">
    <p class="kicker justify-center">404</p>
    <h1 class="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">We couldn&rsquo;t find that page</h1>
    <p class="mt-5 text-lg leading-relaxed text-stone-600 dark:text-stone-400">The page may have moved. Try the homepage or services list.</p>
    <div class="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
      <a href="/" class="btn-primary px-7 py-3.5 text-sm">Go home</a>
      <a href="/services/" class="btn-outline px-7 py-3.5 text-sm">See services</a>
    </div>
  </div>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
