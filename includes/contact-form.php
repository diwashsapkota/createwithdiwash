<?php /** Contact form partial, ported from the React contact form. Submits via htmx to contact-handler.php. */ ?>
<form id="contact-form" class="card relative p-8 md:p-10" hx-post="/contact-handler.php" hx-target="#contact-result" hx-swap="innerHTML" hx-disabled-elt="find button">
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div>
      <label for="firstName" class="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100">First Name</label>
      <input type="text" id="firstName" name="firstName" required autocomplete="given-name" class="field" placeholder="First name">
    </div>
    <div>
      <label for="lastName" class="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100">Last Name</label>
      <input type="text" id="lastName" name="lastName" required autocomplete="family-name" class="field" placeholder="Last name">
    </div>
  </div>

  <div class="mt-6">
    <label for="email" class="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100">Email</label>
    <input type="email" id="email" name="email" required autocomplete="email" class="field" placeholder="your.email@example.com">
  </div>

  <div class="mt-6">
    <label for="message" class="mb-2 block text-sm font-semibold text-stone-900 dark:text-stone-100">Message</label>
    <textarea id="message" name="message" required rows="6" class="field resize-none" placeholder="Church name, city, and what you need built."></textarea>
  </div>

  <input type="hidden" name="form_started_at" value="<?= time() ?>">
  <div class="absolute left-[-9999px] opacity-0 pointer-events-none" aria-hidden="true">
    <label for="website">Website</label>
    <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
  </div>

  <button type="submit" class="btn-dark mt-8 w-full px-8 py-4 text-base disabled:cursor-not-allowed disabled:opacity-60">
    <span class="send-label">Send Message</span>
    <span class="sending-label hidden">Sending…</span>
  </button>

  <div id="contact-result"></div>
</form>
