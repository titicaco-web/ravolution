# Rebuild Ravolution as an invention company

Based on the Ravo 3.0 document and the five HTML concept pages, the site is repositioned from
"venture studio / dev agency / portfolio list" to **an invention company organised around six global
missions**, with the studio and investor tracks as separate, deliberate gateways.

## Core repositioning

- New headline: **BUILDING THE MISSING INFRASTRUCTURE FOR HUMAN PROGRESS.**
- New brand statement: **NOT MORE APPS. BETTER SYSTEMS.**
- Existing navy / bone / gold palette kept, pushed toward the concept's instrument aesthetic:
  huge type, mono technical labels, hairline rules, visible grid, network animation, status notation.
- No claim without evidence: every number resolves to a status note.

## Six missions (homepage backbone)

| Mission | Question | Systems |
|---|---|---|
| 01 LEARN | Must a postcode define education quality? | CommunicaringSchool, NewsToast |
| 02 LANGUAGE | Must language be a multi-year barrier? | Rosetta Livingstone, SINGUISTIC |
| 03 TRUST | How do we prove what is real? | VoiceProtector, AIMagnifica, AlarmSole |
| 04 OPPORTUNITY | Must geography decide who you reach? | XportMatch, iApply, BizMeet |
| 05 HEALTHIER CHOICES | Can prevention start at the point of purchase? | TOXINSIDE, CarbonX |
| 06 HUMAN CAPABILITY | Can technology extend agency? | Gyrocraft, stealth systems |

## Pages

1. **Homepage** — hero with animated network canvas + mission ticker; thesis block; six mission
   panels; connected system map; six selected inventions; evidence strip (27 patents / 369 claims /
   6 missions / 12+ systems with status footnote); five-step method; stealth panel; three CTA
   entry points (institutions / investors / founders).
2. **About** — "ONE THESIS. MANY SYSTEMS." Thesis, invention method, founder Ivan Daza reframed as
   the inventor behind the systems rather than a biography page.
3. **Studio (/services)** — "BUILD SOMETHING DEFENSIBLE." Positioned as Ravolution Studio,
   engagement models, "modern tools, no forced lock-in". Prices moved out of the parent narrative.
4. **For founders (/angel-investor, /build-for-equity)** — "WE INVEST EXECUTION, NOT JUST CAPITAL."
   Fit criteria (yes / no), process, apply.
5. **Invest** — tiered access: public thesis → qualified investor material → data room → stealth;
   portfolio explained in layers instead of 16 flat projects.
6. **Portfolio** — four layers: Mission Systems / Active Ventures / Studio & Acquisition Assets /
   Frontier & Stealth. Hundelser, Partysta, Beredskapad move out of flagship level.
7. **New /evidence page** — IP & evidence register: IP-ID, owner, status, jurisdiction, claims,
   associated invention, plus methodology notes for performance claims.

## Navigation

Simplified to: **Missions · Inventions · IP & Evidence · About · Partner**, plus gateways
For founders / Studio / Invest / Private briefing. Metadata Machine leaves the main corporate menu
(page and its SEO stay live, linked from Experiments in About/footer). All existing venture pages,
languages (EN/SV/ES) and lead forms keep working.

## Technical notes

- Work stays in existing React/Vite/Tailwind stack; new shared primitives (`MissionPanel`,
  `SystemMap`, `StealthPanel`, `NetworkCanvas`, `SectionHead`) under `src/components/lab/`.
- Design tokens extended in `index.css` (ink #081426, existing gold/bone) — no hardcoded hex in
  components; mono label style added as a utility.
- Copy added to EN/SV/ES translation files; new keys checked with the existing i18n script.
- Head metadata, sitemap and JSON-LD updated for the new positioning and the new /evidence route.

## Order of work

Homepage → navigation/footer → About → Studio → For founders → Invest → Portfolio layers →
Evidence page → i18n + SEO + build verification.
