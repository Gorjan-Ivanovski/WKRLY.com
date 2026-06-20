---
name: WKRLY logo setup
description: How the logo icon is built, sized, and rendered across header/footer.
---

## Current setup
- **Icon**: hand-coded SVG at `artifacts/wkrly-website/public/circuit-leaf.svg`
  - 200×205 viewBox, teal color `#27C9A9`, transparent background
  - Elements: diamond apex (5 nodes), dual antler branches, left/right main lobes with inner traces, lower lobes, bottom stem extensions
  - Reference original image at `attached_assets/image_1781936323962.png`
- **Text**: HTML "WKRLY" (white, bold, tracking-[0.2em]) + "— GROUP —" (teal, tracking-[0.28em]) rendered next to the icon in `LogoMark` component inside `layout.tsx`
- **URL**: loaded via `${import.meta.env.BASE_URL}circuit-leaf.svg` (not imported — public folder)

## Sizes
- Header (`md`): icon `h-12`, name `text-[1.1rem]`, group `text-[0.58rem]`
- Footer (`lg`): icon `h-16`, name `text-2xl`, group `text-[0.72rem]`
- Mobile (`sm`): icon `h-9`, name `text-sm`, group `text-[0.5rem]`

## main pt offset
`pt-20` (80px) on `<main>` matches header height (h-12 icon + py-4 × 2 ≈ 80px).

**Why:** Do NOT go back to the PNG-based logo. The original PNG (`logo.png`, background-removed) has heavy transparent canvas padding that makes the visible graphic much smaller than the declared CSS height. The SVG avoids this completely.
