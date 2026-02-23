# Deployment Guide (Go-Live Checklist)

## Vercel (Recommended)

1. Create a new Vercel project and import the repo.
2. Framework preset: Next.js.
3. Build command: `npm run build`
4. Output: leave default (Vercel handles Next.js output).
5. Environment variables: none required.
6. Deploy.

## Domain Setup (copycommand.org)

1. Add the domain in Vercel project settings.
2. Configure DNS per Vercel instructions.
3. Ensure `www.copycommand.org` redirects to `copycommand.org`.
4. Verify HTTPS is active.

## Cache/CDN Notes

- Vercel will cache static assets automatically.
- For changes to content data, redeploy to invalidate caches.

## Rollback

1. Open Vercel project → Deployments.
2. Select the previous successful deploy.
3. Click “Promote to Production”.

## Post-Deploy Verification (5 checks)

1. Home page loads and the command panel renders.
2. `/default/start-dev` renders and copy works.
3. `/sitemap.xml` and `/robots.txt` return 200.
4. Favicon shows in the browser tab.
5. Search and OS toggle work on at least one command.
