<?php
require_once __DIR__ . '/../data/services.php';
$pageTitle = 'About';
$pageDescription = 'Create with Diwash builds websites, Church CRM, marketing, and media for churches and ministries.';
$canonicalPath = '/about/';
require __DIR__ . '/../includes/header.php';
?>

<div class="pt-24 md:pt-28">
  <section class="mx-auto max-w-7xl px-6 py-20 md:py-28">
    <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div class="reveal">
        <h1 class="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">Create with Diwash</h1>
        <p class="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">We build digital tools for churches and ministries: marketing, websites, apps, Church CRM, automation, analytics, and video.</p>
        <p class="mt-5 leading-relaxed text-stone-600 dark:text-stone-400">Ministries are not typical businesses. Events, giving, members, and the people you are trying to reach all have to live in the same week.</p>
        <p class="mt-5 leading-relaxed text-stone-600 dark:text-stone-400">The studio is Diwash plus designers, developers, and editors who have shipped work for churches in the US, Nepal, Australia, and Canada.</p>
      </div>

      <div class="reveal" style="transition-delay:120ms">
        <div class="relative aspect-[4/3] overflow-hidden">
          <img src="<?= htmlspecialchars($images['hero']['src'], ENT_QUOTES) ?>" alt="<?= htmlspecialchars($images['hero']['alt'], ENT_QUOTES) ?>" class="h-full w-full object-cover" width="1200" height="900" loading="eager">
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-slate-900/40">
    <div class="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div class="grid gap-16 md:grid-cols-2">
        <div class="reveal">
          <h2 class="font-display text-2xl font-semibold text-stone-900 dark:text-white">What we take on</h2>
          <p class="mt-4 leading-relaxed text-stone-600 dark:text-stone-400">Digital and email marketing. Church websites and apps. CRM for members and donations. Analytics. Sunday graphics and sermon video. Automations between the tools you already pay for (n8n, Zapier, Power Automate).</p>
        </div>
        <div class="reveal" style="transition-delay:80ms">
          <h2 class="font-display text-2xl font-semibold text-stone-900 dark:text-white">Who does the work</h2>
          <p class="mt-4 leading-relaxed text-stone-600 dark:text-stone-400">Graphic designers who have done faith-based print and social. Web designers who know a first-time visitor needs the service time in the first screen. Editors who cut sermons for YouTube and the lobby.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 py-20 md:py-28">
    <div class="reveal">
      <h2 class="max-w-2xl font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">If you have a Sunday to run, write us</h2>
      <p class="mt-5 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">First conversation is free. Bring the church name, city, and what is currently a mess.</p>
      <a href="/contact/" class="btn-dark mt-9 px-7 py-3.5 text-sm">
        Get in Touch
        <?php icon('arrow-right', 'h-4 w-4'); ?>
      </a>
    </div>
  </section>
</div>

<?php require __DIR__ . '/../includes/footer.php'; ?>
