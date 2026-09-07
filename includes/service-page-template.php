<?php
/**
 * Shared service detail page template, ported from components/ServicePage.tsx.
 * The including file must set $slug before requiring this.
 */

require_once __DIR__ . '/../data/services.php';
require_once __DIR__ . '/icons.php';
$detail = require __DIR__ . '/../data/services-detail.php';

if (!isset($slug) || !isset($detail[$slug])) {
    http_response_code(404);
    die('Service not found.');
}

$data = $detail[$slug];
$image = $serviceImages[$slug];
$iconName = service_icon_name($slug);
$pricingNote = $data['pricingNote'] ?? 'Prices are a starting point. Most churches mix two services.';

$pageTitle = $data['kicker'];
$pageDescription = $data['intro'];
$canonicalPath = "/services/{$slug}/";
require __DIR__ . '/header.php';
?>

<div class="pt-24 md:pt-28">
  <section class="mx-auto max-w-7xl px-6">
    <a href="/services/" class="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 transition-colors hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400">
      <?php icon('chevron-left', 'h-4 w-4'); ?>
      Back to Services
    </a>

    <div class="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p class="kicker"><?= htmlspecialchars($data['kicker'], ENT_QUOTES) ?></p>
        <h1 class="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl"><?= htmlspecialchars($data['title'], ENT_QUOTES) ?></h1>
        <p class="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400"><?= htmlspecialchars($data['intro'], ENT_QUOTES) ?></p>
        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <a href="/contact/" class="btn-primary px-7 py-3.5 text-sm">
            Talk about this work
            <?php icon('arrow-right', 'h-4 w-4'); ?>
          </a>
          <a href="#pricing" class="btn-outline px-7 py-3.5 text-sm">See prices</a>
        </div>
      </div>
      <div class="relative">
        <div class="relative aspect-[4/3] overflow-hidden">
          <img src="<?= htmlspecialchars($image['src'], ENT_QUOTES) ?>" alt="<?= htmlspecialchars($image['alt'], ENT_QUOTES) ?>" class="h-full w-full object-cover" width="1400" height="1050" loading="eager">
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 py-20 md:py-24">
    <h2 class="font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">What this engagement includes</h2>
    <ul class="mt-10 divide-y divide-stone-200 border-y border-stone-200 dark:divide-slate-800 dark:border-slate-800">
      <?php foreach ($data['offerings'] as $offering): ?>
      <li class="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-10">
        <h3 class="font-display text-lg font-semibold text-stone-900 dark:text-white"><?= htmlspecialchars($offering['title'], ENT_QUOTES) ?></h3>
        <p class="text-sm leading-relaxed text-stone-600 dark:text-stone-400"><?= htmlspecialchars($offering['description'], ENT_QUOTES) ?></p>
      </li>
      <?php endforeach; ?>
    </ul>
  </section>

  <section id="pricing" class="bg-white dark:bg-slate-900/40">
    <div class="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <div class="mx-auto max-w-2xl">
        <h2 class="font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">Pricing</h2>
        <p class="mt-4 text-stone-600 dark:text-stone-400"><?= htmlspecialchars($pricingNote, ENT_QUOTES) ?></p>
      </div>

      <div class="mt-14 grid gap-8 md:grid-cols-3">
        <?php foreach ($data['plans'] as $plan): $popular = !empty($plan['popular']); ?>
        <div class="relative flex flex-col rounded-3xl p-8 <?= $popular ? 'bg-navy-950 text-white shadow-2xl ring-1 ring-navy-800 dark:bg-navy-900 dark:ring-amber-400/30 md:-my-4 md:py-12' : 'card' ?>">
          <?php if ($popular): ?>
          <span class="absolute -top-3.5 left-8 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-semibold text-slate-950">Usual starting point</span>
          <?php endif; ?>
          <h3 class="font-display text-xl font-semibold <?= $popular ? 'text-white' : 'text-stone-900 dark:text-white' ?>"><?= htmlspecialchars($plan['name'], ENT_QUOTES) ?></h3>
          <p class="mt-2 text-sm <?= $popular ? 'text-stone-300' : 'text-stone-600 dark:text-stone-400' ?>"><?= htmlspecialchars($plan['description'], ENT_QUOTES) ?></p>
          <div class="mt-6 flex items-baseline gap-1.5">
            <span class="font-display text-4xl font-semibold <?= $popular ? 'text-amber-400' : 'text-stone-900 dark:text-white' ?>"><?= htmlspecialchars($plan['price'], ENT_QUOTES) ?></span>
            <?php if (!empty($plan['period'])): ?>
            <span class="text-sm <?= $popular ? 'text-stone-300' : 'text-stone-500 dark:text-stone-400' ?>"><?= htmlspecialchars($plan['period'], ENT_QUOTES) ?></span>
            <?php endif; ?>
          </div>
          <ul class="mt-7 space-y-3.5">
            <?php foreach ($plan['features'] as $feature): ?>
            <li class="flex items-start gap-3 text-sm">
              <span class="mt-0.5 h-4 w-4 flex-shrink-0 <?= $popular ? 'text-amber-400' : 'text-amber-600 dark:text-amber-400' ?>"><?php icon('check', 'h-4 w-4'); ?></span>
              <span class="<?= $popular ? 'text-stone-200' : 'text-stone-700 dark:text-stone-300' ?>"><?= htmlspecialchars($feature, ENT_QUOTES) ?></span>
            </li>
            <?php endforeach; ?>
          </ul>
          <div class="mt-auto pt-8">
            <a href="/contact/" class="<?= $popular ? 'btn-primary' : 'btn-outline' ?> w-full px-6 py-3.5 text-sm">Ask About <?= htmlspecialchars($plan['name'], ENT_QUOTES) ?></a>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-4xl px-6 py-20 md:py-24">
    <h2 class="font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-4xl">Not sure which line item you need?</h2>
    <p class="mt-5 max-w-xl text-lg text-stone-600 dark:text-stone-400">Send the church name, city, and what is currently a mess. First conversation is free.</p>
    <a href="/contact/" class="btn-dark mt-9 px-8 py-4 text-base">
      Write the studio
      <?php icon('arrow-right', 'h-5 w-5'); ?>
    </a>
  </section>
</div>

<?php require __DIR__ . '/footer.php'; ?>
