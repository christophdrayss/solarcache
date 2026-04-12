# ☀️ SOLARCACHE — Landing Page TODO
> **Tagline:** *Your solar panels are a supercomputer. You just haven't plugged them in yet.*

---

## 🧠 PRODUCT CONCEPT (Keep this visible while building)

> A physical box. Sits next to your Wärmepumpe. When the sun shines, it runs GPU compute.
> It doesn't store electrons — it stores **thought**. Pre-computed AI context caches,
> ready to deploy the moment you need inference. You paid with sunlight.
> The grid never sees a cent.

**Core pitch:**
- Einspeisung pays you ~8 ct/kWh
- SolarCache extracts ~4× that value from the same electrons
- Not by selling energy. By converting it into pre-computed intelligence.
- Energy → Tokens → Stored Value → Instant Inference
- **And if you don't use the cache yourself — sell it. Someone else will.**

**The marketplace layer:**
> Every prefill you compute gets fingerprinted and uploaded to the SolarCache Network —
> a shared, distributed index of pre-computed context caches.
> When anyone in the network runs inference on the same prefix, they pay a micro-fee.
> You earned money while the sun was shining. You were asleep.

- Same prefix computed by 1,000 nodes → cost drops to near zero for all 1,000
- Popular caches (Linux kernel, React docs, legal boilerplate, GPT system prompts) become **network goods**
- The more nodes, the cheaper inference gets for everyone → classic network effect
- **BitTorrent for AI context. You seed prefills, you earn tokens.**

---

## 🎨 VISUAL DIRECTION

### Hero Section
- [ ] Full-viewport black background with a slow animated **solar flare SVG** behind the headline
- [ ] Headline animates in word-by-word: `"Your roof is a data center."`
- [ ] Sub-headline fades in: `"You just haven't been paid for it."`
- [ ] Glowing amber/gold particle system — particles flow from a sun icon → into a box icon
- [ ] CTA button: `"Join the Waitlist"` — glowing pulse animation, amber border
- [ ] Scroll indicator: animated downward chevron, fades in after 2s

### The Number — Make It Scream
- [ ] Giant animated counter: `4×` — counts up from 1.0× on scroll enter
- [ ] Below it: `"more value extracted from your solar energy than Einspeisung"` in small caps
- [ ] Background: dark with a faint circuit-board SVG pattern
- [ ] Sub-note: `"Based on GPU prefill compute value vs. grid feed-in tariff (8 ct/kWh, DE 2024)"`

### How It Works — Three Act Flow
- [ ] Horizontal scroll section (or animated step reveal on desktop)
- [ ] Step 1 — **☀️ Sun Shines** — animated rays, GPU spins up, progress bar fills
- [ ] Step 2 — **🧠 Prefill Runs** — token stream animation, cache file icon appears
- [ ] Step 3 — **⚡ Inference Fires** — instant query response, "0ms prefill cost" label
- [ ] Connecting animated line/path between all three steps
- [ ] Code snippet (typewriter animation): `llama-cli --prompt-cache solar.cache --prompt-cache-ro`

### The Asset Metaphor Section
- [ ] Animated table that builds row by row on scroll:
  | Property | SolarCache |
  |---|---|
  | Creation cost | Sunlight |
  | Storage cost | ~0 |
  | Value | Skipped prefill = free inference |
  | Depreciation | Only when model updates |
- [ ] Framing text: `"Not a battery. A prepaid voucher for AI compute."`
- [ ] Floating 3D box mockup (CSS 3D transform, slow rotation) — industrial design aesthetic

### Market Size Slide (VC Bait)
- [ ] Animated bar chart: EU residential solar installs, yoy growth
- [ ] Overlay: `"8.4M households with surplus solar in Germany alone"`
- [ ] Second stat: `"€0.00 of that surplus is currently converted to compute value"`
- [ ] Third stat: `"$100B+ spent globally on AI inference annually"`
- [ ] Arrow connecting them: `"SolarCache sits at this intersection"`
- [ ] All numbers animate up from 0 on scroll entry

### The Box — Product Shot
- [ ] Dark industrial product render (can be CSS/SVG mockup for now)
- [ ] Labels floating around it with connecting lines:
  - `24GB VRAM`
  - `350W peak`
  - `llama.cpp native`
  - `Home network only`
  - `No cloud. No API keys. No bill.`
- [ ] Tagline below: `"Plug it in. Point it at the sun. Think for free."`

### The Marketplace — Network Section (NEW — THE MONEY SLIDE)
- [ ] Animated world map with glowing nodes — each node = a SolarCache box
- [ ] Live-looking feed: `"Node in München just seeded react-docs-v19 [142k tokens]"`
- [ ] Live-looking feed: `"Node in Vienna earned €0.003 — cache hit from Amsterdam"`
- [ ] Big stat: `"Every cache you compute can earn you money while you sleep"`
- [ ] Flow diagram: `Your Box → Fingerprint → Network Index → Cache Hit → €`
- [ ] Headline: `"The first AI compute marketplace powered entirely by sunlight"`
- [ ] Sub-copy: `"You don't sell energy to the grid. You sell intelligence to the network."`
- [ ] Animated token/earnings counter per node — show a fake but plausible €/month figure
- [ ] Network effect callout: `"The more nodes, the cheaper inference gets for everyone"`

### The Protocol Explainer (for technical visitors)
- [ ] Collapsible section — `"How does cache sharing work?"`
- [ ] Step-by-step: hash prefix → match against index → request cache → verify → pay → use
- [ ] Note on model standardization: network operates on agreed model versions
- [ ] Privacy callout: `"Caches contain no personal data — only public or explicitly shared context"`
- [ ] Open protocol teaser: `"SolarCache protocol spec — coming Q2 2026"`


- [ ] Animated waitlist counter (fake seed: start at 847, increment slowly via JS)
- [ ] Email capture — minimal, one field, glowing submit button
- [ ] Below: `"Shipping to early backers Q3 2026 — Germany & Austria first"`

### Footer
- [ ] Equation displayed in large type: `☀️ + GPU = 🧠`
- [ ] Fine print: unit economics methodology, assumptions
- [ ] Links: Whitepaper (TODO), GitHub (TODO), Contact

---

## ⚙️ TECHNICAL TODOS

### CSS Animations to Build
- [ ] `@keyframes solarPulse` — radial glow expand/contract, 3s loop
- [ ] `@keyframes tokenStream` — left-to-right text particle flow
- [ ] `@keyframes cacheWrite` — progress bar + file icon fill
- [ ] `@keyframes counterUp` — JS-driven number increment on IntersectionObserver
- [ ] `@keyframes boxRotate` — CSS 3D slow Y-axis spin, 20s loop
- [ ] `@keyframes gridFade` — circuit board SVG background, 0.1 opacity pulse

### JavaScript
- [ ] IntersectionObserver for all scroll-triggered animations
- [ ] Animated number counters (4×, 8.4M, $100B)
- [ ] Waitlist counter increment (localStorage seed + slow JS timer)
- [ ] Email capture → Airtable or Supabase POST
- [ ] Typewriter effect for code snippet

### Marketplace / Network Backend (TODO)
- [ ] Cache fingerprinting: hash(model_id + quantization + prefix_tokens) → unique cache ID
- [ ] Upload flow: cache file → S3/R2 → index entry with metadata (size, model, token count, price)
- [ ] Cache hit flow: query index by prefix hash → return cache location → stream to requester → trigger micropayment
- [ ] Micropayment layer: Stripe Connect (fiat, simpler) or on-chain (crypto, more on-brand) — decide
- [ ] Node dashboard: real-time earnings, cache hit rate, most popular caches, storage used
- [ ] Privacy controls: opt-in per context, never share private prefills by default
- [ ] Model version registry: network agrees on canonical model IDs to ensure cache compatibility


- [ ] All animations use `transform` + `opacity` only (no layout thrash)
- [ ] Particles via Canvas API, not DOM elements
- [ ] Dark mode only (no toggle needed — it IS the brand)
- [ ] Mobile: disable particle system, keep number animations

---

## 📐 COPY TODOS

- [ ] Hero headline variants to A/B test:
  - `"Your roof is a data center."`
  - `"Stop selling sunlight for 8 cents."`
  - `"The AI inference bill ends here."`
  - `"Seed intelligence. Earn while you sleep."` ← marketplace angle
- [ ] Updated one-liner for YC: *"SolarCache converts residential solar surplus into pre-computed AI inference caches — and connects them in a peer-to-peer marketplace where cache hits earn you money."*
- [ ] VC deck hook: *"Every solar home in Europe is leaving compute value on the table. We built the box that captures it — and the network that monetizes it."*
- [ ] New tagline option: `"Mine sunlight. Sell intelligence."` 
- [ ] Unit economics footnote (transparency builds trust with technical VCs)
- [ ] FAQ section:
  - "Does it work without solar?" → Yes, off-peak electricity pricing works too
  - "Which models?" → Any llama.cpp compatible model, 8B–34B
  - "What if I update my model?" → Cache rebuild scheduled automatically at next solar peak
  - "Is this a mining rig?" → No. It creates no tokens for sale. It reduces your inference cost.
  - "How does the marketplace work?" → Your box fingerprints every prefill and uploads the cache to the SolarCache index. When another node needs the same prefix, they pay a micro-fee. You earn passively.
  - "What contexts get shared?" → Only explicitly public or opted-in contexts. Your private queries never leave your box.
  - "Who sets the price per cache hit?" → Dynamic pricing based on cache size, token count, and network demand. You always see your earnings in real time.
  - "What stops someone from stealing my cache?" → Cache hits are cryptographically verified. You get paid per use, not per download.

---

## 🏗️ PAGE STRUCTURE

```
/
├── Hero                  ← full viewport, particle sun, animated headline
├── The Number            ← 4× counter, dark section
├── How It Works          ← 3-step animated flow
├── The Asset Metaphor    ← table + 3D box
├── The Marketplace       ← network map, live feed, earnings counter ← NEW
├── The Protocol          ← technical explainer, collapsible ← NEW
├── Market Size           ← bar charts, VC slide aesthetic
├── Product Shot          ← box mockup with floating labels
├── Waitlist              ← counter + email capture
└── Footer                ← ☀️ + GPU = 🧠
```

---

## 🚀 VC PITCH NOTES (for deck companion)

- **Problem:** Feed-in tariffs commoditize solar surplus at rock bottom (~8 ct/kWh DE)
- **Insight:** GPU prefill compute is worth ~4× more per kWh than Einspeisung
- **Solution:** A local inference box that pre-computes AI context caches during solar peak hours — and sells unused caches to a shared marketplace
- **The marketplace:** Centralized index, decentralized compute. Nodes fingerprint and upload prefill caches. Cache hits trigger micro-payments back to the originating node. Popular public contexts (codebases, docs, legal templates) become near-free for the whole network.
- **Network effect:** More nodes → more caches → cheaper inference for all → more demand for nodes → more solar converted to compute. Classic flywheel.
- **Business model:** SolarCache takes a % of marketplace fees. Hardware margin on the box. Protocol licensing for cloud providers who want to tap the network.
- **Moat:** The cache index itself. First-mover builds the corpus. Switching cost = recomputing every cache from scratch.
- **Comparable:** What Cloudflare did to CDN, SolarCache does to AI prefill — make it distributed, cheap, and powered by unused capacity.
- **Go-to-market:** Germany/Austria solar homeowners with existing AI API spend
- **Expansion:** Any country with net metering / low feed-in tariffs + growing AI usage
- **Dream outcome:** 10M solar homes running SolarCache nodes. The largest distributed AI inference preprocessing network on earth. Powered entirely by sunlight. The grid never sees a cent.

---

*Built from a conversation about Wärmepumpen and RTX 3090s.*
*Sometimes the best product ideas start with: "that's dumb, but wait—"*
