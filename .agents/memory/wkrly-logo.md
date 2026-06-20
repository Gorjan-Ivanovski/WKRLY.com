---
name: WKRLY logo sizing
description: How the logo image is loaded and sized in the header/footer, and why the original file must be used.
---

## Rule
Use the **original** logo PNG (with dark navy background) imported via the `@assets` Vite alias, NOT the background-removed `public/logo.png`.

**Why:** The background-removed version retains the full 1024×1024 canvas with heavy transparent padding, so the circuit-leaf graphic only occupies ~50% of the declared CSS height. At h-20 the effective icon is only ~40px — too small. The original dark-navy-background version fills the declared size fully, and since the header/footer share the same dark navy color, the background blends seamlessly.

## Import
```ts
import logoSrc from "@assets/ChatGPT_Image_Jun_10,_2026,_06_34_04_PM_1781934314956.png";
```
(`@assets` alias → `/attached_assets/` in vite config)

## Sizes
- Header (`md`): `h-32 w-auto` (128px) — total header height ~160px
- Footer (`lg`): `h-40 w-auto` (160px)
- Mobile menu (`sm`): `h-20 w-auto` (80px)

## main pt offset
`pt-40` (160px) on `<main>` matches the header height (h-32 logo + py-4 padding × 2).
