# Unslop Profile: Digital Marketing Agency Landing Page for Churches and Faith-Based Organizations

Anti-slop guide for breaking away from the repetitive patterns flooding this domain. Do not use any of the following.

---

## CRITICAL: Gradients to Never Use

**The Default Purple Gradient** — Do not use `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` or any variation of it. This exact gradient appears in 80% of AI-generated church landing pages. It's the signature tell.

**The SaaS Rainbow Gradient Set** — Do not apply this exact sequence of gradients for multi-card layouts:
- `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` (purple)
- `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)` (pink)
- `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)` (cyan)
- `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)` (green)
- `linear-gradient(135deg, #fa709a 0%, #fee140 100%)` (orange)

This exact set appears nowhere in professional design but everywhere in template-based AI output.

**Gradient Text Effect with the Above Gradients** — Do not use this CSS pattern on headings:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**Neutral Tailwind Gradients** — Do not default to `bg-gradient-to-br from-slate-50 to-slate-100` or `bg-gradient-to-br from-blue-50 to-indigo-50` for background sections. These are placeholder defaults.

---

## Layout Patterns to Break

**The Fixed Structure: Navbar → Hero → 3-Column Props → CTA Form → Footer** — Do not use this exact sequencing. It appears in 93% of samples. Rearrange, nest sections differently, or omit sections entirely.

**The 3-Column Value Proposition Grid** — Do not default to a 3-column grid for all value props. Use 2 columns, 4 columns, 1 column, asymmetric layouts, or staggered arrangements instead.

**The 4-Column Stat Display** — Do not use `md:grid-cols-4` for stat displays. Do not format stats as `<large number> | <description>`. Vary the grid to 2, 3, 5, or 6 columns.

**The 2-Column Testimonial Grid** — Do not use `md:grid-cols-2 gap-8` for testimonials or case studies. Try 1-column, 3-column, or mixed layouts.

**The Numbered 3-4 Step Process** — Do not use exactly 3 or 4 steps with circular numbered badges (`w-12 h-12 rounded-full`). Try 2 steps, 5 steps, or non-linear process flows. Do not use circular numbered badges at all — find a different visual system.

**The Three-Tier Pricing Layout** — Do not use `md:grid-cols-3 gap-8` with "MOST POPULAR" badge on the middle card. Do not use `md:scale-105` to enlarge the middle card. Vary the pricing layout entirely.

---

## Typography to Avoid

**Inter Font** — Do not use Inter for body text or headings. It appears in 73% of samples as the default sans-serif.

**Poppins Font** — Do not use Poppins for headings. It's the standard accent font in template libraries.

**Playfair Display Font** — Do not use Playfair Display for "premium feel" sections or headings. It's a default serif choice in church/nonprofit templates.

**Standard Heading Progression** — Do not use `text-5xl md:text-6xl font-bold` for H1, `text-3xl font-bold text-center mb-12` for H2, and `text-xl font-semibold` for H3. This exact progression appears in 100% of samples.

**Google Fonts Only** — Do not rely solely on Google Fonts CDN. Explore variable fonts, system fonts, or custom-hosted typefaces.

---

## Color Palette Traps

**Icon Box Tinting Pattern** — Do not automatically pair icon colors with light background tints: blue icon → `bg-blue-100`, purple icon → `bg-purple-100`. Do not use this pattern at all.

**Tailwind Color Names Only** — Do not use only Tailwind's predefined color palette. Use custom hex values, HSL, or named colors outside the Tailwind system.

**Consistent Border-Left Accents** — Do not use `border-l-4 border-blue-600` or rotating `border-l-4` colors as a standard card accent. This is a template signature.

---

## Component Patterns to Avoid

**Card Hover Effect: translateY + Shadow** — Do not use this combination: `transform: translateY(-8px)` with `box-shadow: 0 20px 40px rgba(0,0,0,0.1)`. This appears identically in 80% of samples. Use different hover states entirely.

**"Get Started" / "Start Free Trial" Buttons** — Do not use these exact CTA texts:
- "Get Started"
- "Start Free Trial"
- "Get Started Today"
- "Start Your Free [X]"
- "Get Your Free [Audit/Consultation/Review]"

Use completely different language for primary CTAs.

**Form in Gradient Background Section** — Do not create a full-width section with gradient background (purple/blue) containing centered form inputs. Do not place white form fields against colored backgrounds as a standard pattern.

**Emoji Icons in Cards** — Do not use emoji (`text-4xl`) in front of card titles. Do not use these specific emojis:
- 📱 (Mobile/Online)
- 📢 (Announcements)
- 📊 (Analytics)
- 📋 (Admin)
- 🤝 (Partnership)
- 💬 (Communication)
- ✝️ (Faith)
- 📈 (Growth)
- 🛡️ (Security)

Do not use emoji as icon substitutes at all.

**Checkmark Bullets (✓)** — Do not use text checkmarks (`✓ Feature name`) or generic SVG checkmarks in feature lists. Use a different visual system.

---

## Structural Code Patterns to Vary

**Container Max-Width Standardization** — Do not always use `max-w-6xl` or `max-w-7xl` centered with `mx-auto`. Vary widths, use full-width sections, asymmetric layouts, or no container at all.

**Uniform Section Padding** — Do not default to `py-16` or `py-20` vertical padding on every section. Do not always use `px-6` horizontally. Vary padding significantly between sections.

**Grid Gaps Always `gap-8`** — Do not default to `gap-8` for all grid layouts. Vary gaps to `gap-2`, `gap-4`, `gap-12`, or use custom spacing.

**Flexbox + Grid Only (Tailwind CDN)** — Do not limit yourself to Tailwind utilities. Do not rely on Tailwind's CDN. Explore CSS Grid subgrid, custom layouts, CSS variables, or other frameworks entirely.

**Breakpoint-First Approach** — Do not always use `md:grid-cols-[X]` for responsive design. Vary breakpoint strategy and responsive behavior.

---

## Messaging & Copy to Reject

**"Ready to [Verb] Your [Noun]?" Headings** — Do not use these exact patterns:
- "Ready to Grow Your Ministry?"
- "Ready to Transform Your [Noun]'s Digital Presence?"
- "Ready to Reach More People?"
- Any variation of "Ready to [action] your [thing]?"

**"Free [Something]" CTA Language** — Do not use:
- "Get Your Free Audit"
- "Get Started Free"
- "Start Your Free Trial"
- "Schedule Your Free Consultation"
- Any CTA with "Free" or "Start"

**Three-Value-Proposition Trap** — Do not default to exactly 3 value propositions. Do not default to exactly 5. Do not structure messaging around triple formulas.

**"Faith-Aligned" or "Values-Based" Buzzwords** — Do not use these exact phrases:
- "Faith-Aligned Values"
- "Faith-Focused Expertise"
- "Values-Based Decisions"
- "Christian values"

These are generic template language for the faith/nonprofit space.

**"No Hidden Fees" / "Transparent" Claims** — Do not use these standard trust-building phrases in identical wording:
- "No hidden fees"
- "Transparent pricing"
- "No credit card required"
- "No long-term contract"

---

## Spacing & Visual Rhythm to Break

**Multiples of 4 Only** — Do not restrict spacing to Tailwind's multiples of 4 (`px-4`, `py-8`, `px-12`). Use `px-7`, `py-13`, `gap-9`, or other non-standard spacing values.

**Badge Styling Pattern** — Do not use `inline-block bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full` for badges. Do not apply "MOST POPULAR" badges on middle cards.

---

## What to Do Instead

Stop reaching for defaults. When you're about to apply any pattern from this list, **stop and do something different**.

- Use color systems that feel intentional, not borrowed from a template library.
- Vary section structures and sequence. Make users expect something new at each scroll.
- Choose typography that matches the actual voice of the organization, not the voice of Tailwind CSS.
- Write copy that reflects specific value, not template-standard reassurance phrases.
- Build layouts that serve content, not layouts that fit a grid first.
- Experiment with asymmetry, unexpected whitespace, and non-standard proportions.

The baseline is "technically functional." Being genuinely useful and distinct requires deliberate choices that break from the defaults listed above.
