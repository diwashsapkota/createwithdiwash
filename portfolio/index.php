<?php
require_once __DIR__ . '/../data/services.php';
$pageTitle = 'Portfolio';
$pageDescription = 'Websites and digital work for churches, ministries, and businesses.';
$canonicalPath = '/portfolio/';
require __DIR__ . '/../includes/header.php';
?>

<div class="pt-24 md:pt-28">
  <section class="mx-auto max-w-7xl px-6 py-20 md:py-28">
    <div class="reveal">
      <h1 class="font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-5xl">Portfolio</h1>
      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">Churches, a missions data project, and a few local businesses. Each name opens the live site.</p>
    </div>

    <ul class="mt-14 divide-y divide-stone-200 border-y border-stone-200 dark:divide-slate-800 dark:border-slate-800">
      <?php foreach ($projects as $project): ?>
      <li>
        <a href="<?= htmlspecialchars($project['url'], ENT_QUOTES) ?>" target="_blank" rel="noopener noreferrer" class="group grid gap-6 py-8 sm:grid-cols-[200px_1fr_auto] sm:items-center">
          <div class="relative aspect-[3/2] overflow-hidden sm:aspect-[4/3]">
            <img src="<?= htmlspecialchars($project['image']['src'], ENT_QUOTES) ?>" alt="<?= htmlspecialchars($project['image']['alt'], ENT_QUOTES) ?>" class="h-full w-full object-cover" width="200" height="150" loading="lazy">
          </div>
          <div>
            <h2 class="font-display text-xl font-semibold text-stone-900 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400"><?= htmlspecialchars($project['title'], ENT_QUOTES) ?></h2>
            <p class="mt-2 max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-400"><?= htmlspecialchars($project['description'], ENT_QUOTES) ?></p>
          </div>
          <span class="hidden text-stone-400 sm:block"><?php icon('arrow-up-right', 'h-5 w-5'); ?></span>
        </a>
      </li>
      <?php endforeach; ?>
    </ul>
  </section>

  <section class="bg-navy-950">
    <div class="mx-auto max-w-3xl px-6 py-20 md:py-24">
      <div class="reveal">
        <h2 class="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">If your church is not on this list yet, that is the point of writing us.</h2>
        <a href="/contact/" class="btn-primary mt-8 px-8 py-4 text-base">
          Start a project
          <?php icon('arrow-right', 'h-5 w-5'); ?>
        </a>
      </div>
    </div>
  </section>
</div>

<?php require __DIR__ . '/../includes/footer.php'; ?>
