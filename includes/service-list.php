<?php
/** Grouped service list, ported from components/ServiceList.tsx. Requires $services and $serviceGroups (data/services.php). */
?>
<div class="mt-16 space-y-16">
  <?php foreach ($serviceGroups as $group): ?>
  <div>
    <h2 class="font-display text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"><?= htmlspecialchars($group['title'], ENT_QUOTES) ?></h2>
    <ul class="mt-6 border-y border-stone-200 dark:border-slate-800">
      <?php foreach ($group['slugs'] as $slug): $service = find_service($services, $slug); if (!$service) continue; ?>
      <li class="border-b border-stone-200 last:border-b-0 dark:border-slate-800">
        <a href="/services/<?= $service['slug'] ?>/" class="group flex min-h-11 flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
          <span class="font-display text-lg text-stone-900 transition-colors group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400"><?= htmlspecialchars($service['title'], ENT_QUOTES) ?></span>
          <span class="max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-right"><?= htmlspecialchars($service['description'], ENT_QUOTES) ?></span>
        </a>
      </li>
      <?php endforeach; ?>
    </ul>
  </div>
  <?php endforeach; ?>
</div>
