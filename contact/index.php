<?php
require_once __DIR__ . '/../data/services.php';
$pageTitle = 'Contact';
$pageDescription = 'Tell us about your church and what you need built. First conversation is free.';
$canonicalPath = '/contact/';
require __DIR__ . '/../includes/header.php';
?>

<div class="pt-24 md:pt-28">
  <section class="mx-auto max-w-7xl px-6 py-20 md:py-28">
    <div class="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div class="reveal">
        <h1 class="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">Church name, city, and what is broken</h1>
        <p class="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">We reply in one or two business days with whether we can help, a rough timeline, and what it would cost. First conversation is free.</p>
      </div>

      <div class="reveal" style="transition-delay:120ms">
        <?php require __DIR__ . '/../includes/contact-form.php'; ?>
      </div>
    </div>
  </section>
</div>

<?php require __DIR__ . '/../includes/footer.php'; ?>
