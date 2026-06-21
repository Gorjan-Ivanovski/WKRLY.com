# WKRLY contact-form Worker

A Cloudflare Worker that handles `POST wkrly.com/api/contact` and sends two emails
via [Resend](https://resend.com): a notification to WKRLY and a confirmation to the
visitor. It's routed at the edge, so the static Railway frontend is untouched and the
form's same-origin request needs no CORS or code change.

## Prerequisites

1. A **Resend API key** — https://resend.com → API Keys.
2. For real delivery, **verify `wkrly.com` in Resend** (Domains → Add) and set
   `RESEND_FROM_ADDRESS` to a sender on it, e.g. `WKRLY Group <hello@wkrly.com>`.
   The default `onboarding@resend.dev` only delivers to your own Resend account email.

## Deploy with Wrangler (CLI)

```bash
cd worker
npx wrangler login                 # or set CLOUDFLARE_API_TOKEN
npx wrangler secret put RESEND_API_KEY   # paste the key when prompted
npx wrangler deploy
```

`wrangler deploy` publishes the Worker and binds the routes in `wrangler.toml`
(`wkrly.com/api/*` and `www.wkrly.com/api/*`).

If using an API token instead of `wrangler login`, it needs:
**Account → Workers Scripts: Edit**, **Zone → Workers Routes: Edit**, and
**Zone → Zone: Read** for the `wkrly.com` zone.

## Deploy via the Cloudflare dashboard (no CLI)

1. **Workers & Pages → Create → Create Worker**, name it `wkrly-contact`, deploy the
   default, then **Edit code** and paste the contents of `src/worker.js`. Save & deploy.
2. **Settings → Variables**:
   - Add **Secret** `RESEND_API_KEY` = your Resend key.
   - Add **Variables** `CONTACT_NOTIFICATION_EMAIL` = `info@wkrly.com` and
     `RESEND_FROM_ADDRESS` = your verified sender.
3. **Settings → Domains & Routes → Add route**:
   - `wkrly.com/api/*` (zone `wkrly.com`)
   - `www.wkrly.com/api/*` (zone `wkrly.com`)

## Test

```bash
curl -i https://wkrly.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"you@example.com","message":"Testing the contact form."}'
# → 200 {"success":true}; check info@wkrly.com for the notification.
```
