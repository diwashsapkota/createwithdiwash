# Create with Diwash

The live site at [createwithdiwash.com](https://createwithdiwash.com) — a plain PHP + htmx site with no build-time or runtime Node.js dependency, hosted on shared PHP hosting.

This replaced an earlier Next.js version after the account's Hostinger plan hit its Node.js app limit (it already ran five other Node apps for client sites). A static PHP site doesn't count against that limit.

## Structure

- `index.php`, `about/`, `services/`, `portfolio/`, `contact/` — pages, one per route (`/about/` → `about/index.php`, etc.)
- `services/<slug>/` — the 10 service detail pages, each a thin wrapper around `includes/service-page-template.php`
- `includes/` — shared header/footer/nav, the service page template, the contact form partial, and inline SVG icon helpers
- `data/services.php` — services, service groups, portfolio projects, and image URLs (all Unsplash, free to use)
- `data/services-detail.php` — per-service copy, offerings, and pricing plans
- `contact-handler.php` — the htmx POST target for the contact form; validates (honeypot + minimum time-on-page), then forwards to Formspree
- `assets/css/styles.css` — compiled Tailwind output, checked in since the live server has no Node runtime to build it
- `assets/js/htmx.min.js` — vendored htmx build (no CDN dependency)

## Editing styles

Tailwind classes are scanned from the `.php` files themselves. After changing markup or `input.css`:

```bash
npm install       # once
npm run build:css # rebuilds assets/css/styles.css
```

## Local preview

No build step needed for the pages themselves — PHP's built-in server is enough:

```bash
php -S localhost:8899
```

## Deploying

The live site is hosted on Hostinger as a plain PHP website (not a Node.js app). Deploys are a zip of this directory (excluding `tailwind.config.js`, `input.css`, `node_modules`, and dotfiles other than the `.htaccess` files) uploaded via Hostinger's static-site deploy, which extracts it straight to the document root.
