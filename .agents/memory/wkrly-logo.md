---
name: WKRLY logo setup
description: How the logo icon is built, sized, and rendered across header/footer.
---

## Current setup
- **Icon**: `attached_assets/image_1781936690930.png` — the actual circuit-leaf PNG
  - Imported via `@assets/image_1781936690930.png` Vite alias
  - Dark navy background matches the header/footer, so it blends seamlessly
  - Do NOT use background-removed `public/logo.png` — has heavy transparent padding
  - Do NOT use the hand-coded SVG (`public/circuit-leaf.svg`) — the trace was inaccurate
- **Text**: HTML "WKRLY" (white, bold, tracking-[0.2em]) + "— GROUP —" (teal, tracking-[0.28em])
  rendered next to the icon in `LogoMark` component inside `layout.tsx`

## Sizes
- Header (`md`): icon `h-12`, name `text-[1.1rem]`, group `text-[0.58rem]`
- Footer (`lg`): icon `h-16`, name `text-2xl`, group `text-[0.72rem]`
- Mobile (`sm`): icon `h-9`, name `text-sm`, group `text-[0.5rem]`

## main pt offset
`pt-20` (80px) on `<main>` matches header height (h-12 icon + py-4 × 2 ≈ 80px).
