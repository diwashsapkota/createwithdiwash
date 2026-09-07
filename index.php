<?php
require_once __DIR__ . '/data/services.php';

$servicesJsonLd = [
    '@context' => 'https://schema.org',
    '@type' => 'ItemList',
    'itemListElement' => array_map(function ($service, $i) {
        return [
            '@type' => 'Service',
            'position' => $i + 1,
            'name' => $service['title'],
            'description' => $service['description'],
            'provider' => ['@type' => 'Organization', 'name' => 'Create with Diwash'],
        ];
    }, $services, array_keys($services)),
];

$portfolioJsonLd = [
    '@context' => 'https://schema.org',
    '@type' => 'ItemList',
    'itemListElement' => array_map(function ($project, $i) {
        return [
            '@type' => 'CreativeWork',
            'position' => $i + 1,
            'name' => $project['title'],
            'description' => $project['description'],
            'url' => $project['url'],
        ];
    }, $projects, array_keys($projects)),
];

$pageTitle = '';
$pageDescription = 'Comprehensive digital marketing, website development, mobile apps, Church CRM, data analytics, system automations, and creative services for churches and faith-based organizations.';
$canonicalPath = '/';
$isHome = true;
$extraJsonLd = [$servicesJsonLd, $portfolioJsonLd];
require __DIR__ . '/includes/header.php';
?>

<section id="home" class="relative flex min-h-dvh items-center overflow-hidden bg-navy-950">
  <img src="<?= htmlspecialchars($images['hero']['src'], ENT_QUOTES) ?>" alt="<?= htmlspecialchars($images['hero']['alt'], ENT_QUOTES) ?>" class="absolute inset-0 h-full w-full object-cover object-center opacity-70">
  <div class="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/55 to-navy-950/95"></div>

  <div class="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16">
    <div class="max-w-3xl animate-fade-in">
      <p class="kicker !text-amber-400">Websites, CRM, and media for churches</p>
      <h1 class="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">Where faith meets <em class="italic text-amber-400">technology</em></h1>
      <p class="mt-7 max-w-2xl text-lg leading-relaxed text-stone-200 md:text-xl">We build the site, the member system, and the weekly media so a church can run Sunday without juggling five vendors.</p>
      <div class="mt-10 flex flex-col gap-4 sm:flex-row">
        <a href="#contact" class="btn-primary px-8 py-4 text-base">
          Start a Project
          <?php icon('arrow-right', 'h-5 w-5'); ?>
        </a>
        <a href="#services" class="btn-outline-light px-8 py-4 text-base">See the work we take on</a>
      </div>
    </div>

    <dl class="mt-20 grid max-w-md grid-cols-2 gap-6 border-t border-white/15 pt-8 animate-slide-up">
      <div>
        <dt class="order-2 text-sm text-stone-300">Sites in production</dt>
        <dd class="font-display text-3xl font-semibold text-white md:text-4xl">8</dd>
      </div>
      <div>
        <dt class="order-2 text-sm text-stone-300">Countries</dt>
        <dd class="font-display text-3xl font-semibold text-white md:text-4xl">4</dd>
      </div>
    </dl>
  </div>
</section>

<section class="mx-auto max-w-7xl px-6 py-20 md:py-28">
  <div class="reveal">
    <ol class="grid gap-12 md:grid-cols-3 md:gap-16">
      <li>
        <p class="font-display text-sm text-amber-700 dark:text-amber-400">01</p>
        <h2 class="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white">Marketing that names the service time</h2>
        <p class="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">Ads, email, and clips that point to a real Sunday, not a vague brand campaign.</p>
      </li>
      <li>
        <p class="font-display text-sm text-amber-700 dark:text-amber-400">02</p>
        <h2 class="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white">Sites and apps a visitor can actually use</h2>
        <p class="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">Parking, kids check-in, giving, and last week&rsquo;s sermon without a scavenger hunt.</p>
      </li>
      <li>
        <p class="font-display text-sm text-amber-700 dark:text-amber-400">03</p>
        <h2 class="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white">CRM so follow-up is not a spreadsheet</h2>
        <p class="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">Members, donations, and a new guest typed in once, then handed to the right pastor.</p>
      </li>
    </ol>
  </div>
</section>

<section id="about" class="bg-white dark:bg-slate-900/40">
  <div class="mx-auto max-w-7xl px-6 py-20 md:py-28">
    <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div class="reveal">
        <div class="relative aspect-[4/3] overflow-hidden">
          <img src="<?= htmlspecialchars($images['cathedral']['src'], ENT_QUOTES) ?>" alt="<?= htmlspecialchars($images['cathedral']['alt'], ENT_QUOTES) ?>" class="h-full w-full object-cover" width="1200" height="900" loading="lazy">
        </div>
      </div>

      <div class="reveal" style="transition-delay:120ms">
        <h2 class="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">Built for churches, not generic small business</h2>
        <p class="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">A ministry is not a storefront. You have a calendar of services, people who give, members who need a call, and a sermon that should still be findable on Tuesday.</p>
        <p class="mt-5 leading-relaxed text-stone-600 dark:text-stone-400">Diwash and a small team of designers, developers, and editors have shipped sites and systems for churches in the US, Nepal, Australia, and Canada.</p>
        <a href="#contact" class="btn-dark mt-10 px-7 py-3.5 text-sm">
          Tell us about Sunday
          <?php icon('arrow-right', 'h-4 w-4'); ?>
        </a>
      </div>
    </div>
  </div>
</section>

<section id="services" class="mx-auto max-w-7xl px-6 py-20 md:py-28">
  <div class="reveal">
    <h2 class="max-w-3xl font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">Ten services, grouped the way a church actually buys them</h2>
    <p class="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">Pick a line, or ask us to stitch two of them together. Most churches need a site plus a way to keep members and giving in one place.</p>
  </div>
  <?php require __DIR__ . '/includes/service-list.php'; ?>
</section>

<section id="portfolio" class="bg-white dark:bg-slate-900/40">
  <div class="mx-auto max-w-7xl px-6 py-20 md:py-28">
    <div class="reveal">
      <h2 class="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">Recent work</h2>
      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">Churches, a missions data project, and a few local businesses. Each link opens the live site.</p>
    </div>

    <ul class="mt-14 divide-y divide-stone-200 border-y border-stone-200 dark:divide-slate-800 dark:border-slate-800">
      <?php foreach ($projects as $project): ?>
      <li>
        <a href="<?= htmlspecialchars($project['url'], ENT_QUOTES) ?>" target="_blank" rel="noopener noreferrer" class="group grid gap-6 py-8 sm:grid-cols-[180px_1fr_auto] sm:items-center">
          <div class="relative aspect-[3/2] overflow-hidden sm:aspect-[4/3]">
            <img src="<?= htmlspecialchars($project['image']['src'], ENT_QUOTES) ?>" alt="<?= htmlspecialchars($project['image']['alt'], ENT_QUOTES) ?>" class="h-full w-full object-cover" width="180" height="135" loading="lazy">
          </div>
          <div>
            <h3 class="font-display text-xl font-semibold text-stone-900 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400"><?= htmlspecialchars($project['title'], ENT_QUOTES) ?></h3>
            <p class="mt-2 max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-400"><?= htmlspecialchars($project['description'], ENT_QUOTES) ?></p>
          </div>
          <span class="hidden text-stone-400 sm:block"><?php icon('arrow-up-right', 'h-5 w-5'); ?></span>
        </a>
      </li>
      <?php endforeach; ?>
    </ul>
  </div>
</section>

<section class="bg-navy-950">
  <div class="mx-auto max-w-3xl px-6 py-20 md:py-24">
    <div class="reveal">
      <h2 class="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">If giving, sermons, and new guests live in three tools, we should talk.</h2>
      <a href="#contact" class="btn-primary mt-8 px-8 py-4 text-base">
        Email the studio
        <?php icon('arrow-right', 'h-5 w-5'); ?>
      </a>
    </div>
  </div>
</section>

<section id="contact" class="mx-auto max-w-7xl px-6 py-20 md:py-28">
  <div class="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
    <div class="reveal">
      <h2 class="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">Write with a service time and what is broken</h2>
      <p class="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">We reply in one or two business days with whether we can help, a rough timeline, and what it would cost.</p>
    </div>

    <div class="reveal" style="transition-delay:120ms">
      <?php require __DIR__ . '/includes/contact-form.php'; ?>
    </div>
  </div>
</section>

<?php require __DIR__ . '/includes/footer.php'; ?>
