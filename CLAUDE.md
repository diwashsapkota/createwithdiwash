# Create with Diwash — design guardrails

Generated from an `/unslop` run against 15 AI-generated "digital marketing agency for churches" landing pages (see `unslop-analysis.md` in this repo for the full counted analysis). These are the specific defaults that convergent AI generation reaches for in this exact domain — treat them as a blocklist, not inspiration.

**Before adding a new page, section, or component, check it against this list.** Most of these were never present in this site; the two that were (Inter as the body font, a bare "Get Started" pricing CTA) have been fixed — don't reintroduce them.

## Never use

- **The purple gradient** `#667eea → #764ba2` (or the matching 5-gradient rainbow set: pink `#f093fb→#f5576c`, cyan `#4facfe→#00f2fe`, green `#43e97b→#38f9d7`, orange `#fa709a→#fee140`) for text, buttons, or section backgrounds. This is the single most recognizable "AI slop" tell in this domain (80% of samples).
- **Inter, Poppins, or Playfair Display.** Body copy uses Work Sans; display/headings use Fraunces. Do not add Inter back for "familiarity."
- **Generic CTA text**: "Get Started", "Start Free Trial", "Get Started Today", "Get Your Free [Audit/Consultation/Review]". Pricing/plan CTAs should name the specific plan (e.g. "Ask About Standard Website"), and other CTAs should stay as specific as the rest of the site's copy ("Talk about this work", "Write the studio").
- **"Ready to [verb] your [noun]?" section headings** and **"Faith-Aligned Values" / "Values-Based Decisions" / generic Christian-values buzzwords.** Write concrete copy the way the rest of the site already does ("Built for churches, not generic small business").
- **Emoji as icons.** This site uses inline SVG icons (`includes/icons.php`) exclusively — never emoji in headings, cards, or bullet lists.
- **"MOST POPULAR" badges** verbatim, or `md:scale-105` to enlarge a middle pricing card. If a plan needs to stand out, do it the way `service-page-template.php` already does (a distinct dark/inverted card), not a badge + scale combo.
- **Card hover = `translateY(-8px)` + big drop shadow.** This site's `.card-hover` uses a border-color change instead — keep it that way. (Small button lift on hover, `-translate-y-0.5`, is a different and fine pattern — don't conflate the two.)
- **Icon-tint boxes** (`bg-blue-100` behind a blue icon, etc.) and **rotating `border-l-4` card accents** — neither pattern is used here; don't introduce them.
- **Checkmark bullets as decorative filler** in generic marketing copy (e.g. "✓ Revenue growth guaranteed"). The one legitimate use of a checkmark on this site is the pricing-plan feature-inclusion list (`service-page-template.php`) — that's functional, not decorative, and should stay.

## Use judgment, don't over-apply

The unslop analysis also flags things like "always `max-w-7xl`", "always `py-20`/`py-28`", "always `gap-8`", and "Tailwind border-radius values only" as slop. Those were measured across 15 *independent, unrelated* generations converging on the same values — they are not inherently bad *within one site's own coherent design system*. Don't introduce arbitrary inconsistency (random one-off padding or container widths) just to "avoid an AI pattern"; that makes the site worse, not more distinctive. Consistency within this site is a feature.

## If you re-run `/unslop` on this domain

Keep the analysis and skill file it produces (`unslop-analysis.md`, and any updated skill.md) somewhere in this repo rather than only in a scratch directory, so the next session inherits the findings instead of re-deriving them.
