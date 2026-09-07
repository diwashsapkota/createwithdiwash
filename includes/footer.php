<?php
/** Closes <main>, renders the site footer, and loads shared scripts. Requires data/services.php to already be loaded. */
if (!isset($services)) {
    require_once __DIR__ . '/../data/services.php';
}
$year = date('Y');
?>
</main>

<footer class="bg-navy-950 text-stone-300">
  <div class="mx-auto max-w-7xl px-6 py-16 md:py-20">
    <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <a href="/" class="font-display text-2xl font-semibold text-white">Create with Diwash<span class="text-amber-400">.</span></a>
        <p class="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">Websites, Church CRM, marketing, and Sunday media for churches and ministries.</p>
        <a href="/contact/" class="btn-primary mt-7 px-6 py-3 text-sm">Start a Project</a>
      </div>

      <nav aria-label="Services">
        <h3 class="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Services</h3>
        <ul class="text-sm">
          <?php foreach (array_slice($services, 0, 6) as $service): ?>
          <li><a href="/services/<?= $service['slug'] ?>/" class="inline-flex min-h-11 items-center transition-colors hover:text-amber-400"><?= htmlspecialchars($service['title'], ENT_QUOTES) ?></a></li>
          <?php endforeach; ?>
        </ul>
      </nav>

      <nav aria-label="More services">
        <h3 class="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Creative</h3>
        <ul class="text-sm">
          <?php foreach (array_slice($services, 6) as $service): ?>
          <li><a href="/services/<?= $service['slug'] ?>/" class="inline-flex min-h-11 items-center transition-colors hover:text-amber-400"><?= htmlspecialchars($service['title'], ENT_QUOTES) ?></a></li>
          <?php endforeach; ?>
        </ul>
      </nav>

      <nav aria-label="Company">
        <h3 class="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Explore</h3>
        <ul class="text-sm">
          <li><a href="/about/" class="inline-flex min-h-11 items-center transition-colors hover:text-amber-400">About</a></li>
          <li><a href="/services/" class="inline-flex min-h-11 items-center transition-colors hover:text-amber-400">Services</a></li>
          <li><a href="/portfolio/" class="inline-flex min-h-11 items-center transition-colors hover:text-amber-400">Portfolio</a></li>
          <li><a href="/contact/" class="inline-flex min-h-11 items-center transition-colors hover:text-amber-400">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-stone-500 sm:flex-row">
      <p>&copy; <?= $year ?> Create with Diwash. All rights reserved.</p>
    </div>
  </div>
</footer>

<script src="/assets/js/htmx.min.js" defer></script>
<script>
(function () {
  var header = document.getElementById('site-header');
  var isHome = document.body.classList.contains('is-home');
  var details = document.getElementById('mobile-menu-details');
  var panel = document.getElementById('mobile-menu-panel');

  function sync() {
    var solid = !isHome || window.scrollY > 24 || (details && details.open);
    header.classList.toggle('is-solid', solid);
  }

  if (isHome) {
    window.addEventListener('scroll', sync, { passive: true });
  }
  if (details && panel) {
    details.addEventListener('toggle', function () {
      panel.classList.toggle('hidden', !details.open);
      document.body.style.overflow = details.open ? 'hidden' : '';
      sync();
    });
    // Clicking a link inside the panel should close the details, since the
    // panel itself now lives outside it and won't auto-close on navigation.
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) details.open = false;
    });
  }
  sync();

  // Fade content in on scroll, mirroring components/Reveal.tsx. Elements are
  // visible by default (see .reveal CSS) if this never runs or JS is off.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 80px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
</script>
</body>
</html>
