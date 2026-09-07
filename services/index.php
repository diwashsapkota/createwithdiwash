<?php
require_once __DIR__ . '/../data/services.php';
$pageTitle = 'Services';
$pageDescription = 'Digital marketing, websites, mobile apps, Church CRM, automation, and creative work for ministries.';
$canonicalPath = '/services/';
require __DIR__ . '/../includes/header.php';
?>

<div class="pt-24 md:pt-28">
  <section class="mx-auto max-w-7xl px-6 py-20 md:py-28">
    <div class="reveal">
      <h1 class="max-w-3xl font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">Services</h1>
      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">Ten lines of work. Most churches start with a website and a member system. Pricing lives on each service page.</p>
    </div>

    <?php require __DIR__ . '/../includes/service-list.php'; ?>

    <div class="mt-16">
      <a href="/contact/" class="btn-dark px-7 py-3.5 text-sm">
        Ask for a quote
        <?php icon('arrow-right', 'h-4 w-4'); ?>
      </a>
    </div>
  </section>
</div>

<?php require __DIR__ . '/../includes/footer.php'; ?>
