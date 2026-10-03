# HaidurQureshi Ltd website

The company website for [HaidurQureshi Ltd](https://haidurqureshi.com): custom websites, mobile apps and software systems.

Built with Next.js (App Router), Tailwind CSS and TypeScript, and deployed to Cloudflare Workers using the OpenNext adapter.

## Getting started

Requires Node.js 20 or newer (the Cloudflare build currently uses Node 24).

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Before pushing changes, run a production build locally. It catches broken imports and type errors much faster than waiting for the Cloudflare build:

```bash
npm run build
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Build and run locally on the Cloudflare runtime |
| `npm run deploy` | Build and deploy to Cloudflare Workers |

## Project structure

```
app/
  components/
    page-shell.tsx       Shared page layout, text styles and contact constants
    service-page.tsx     Template used by every service page
    services.ts          All service content (single source of truth)
  services/
    website-development/page.tsx
    mobile-app-development/page.tsx
    software-development/page.tsx
  about-us/page.tsx
  our-ethical-principles/page.tsx
  privacy-policy/page.tsx
  terms-of-service/page.tsx
  layout.tsx             Root layout, site-wide metadata and footer
  page.tsx               Home page
  sitemap.ts             Generates /sitemap.xml
  opengraph-image.tsx    Generates the social sharing image
```

Folders inside `app/` that contain a `page.tsx` become URLs. `app/components/` has none, so it is not a route.

## Editing content

**Services.** Edit `app/components/services.ts`. The service pages, the home page's service list and the sitemap all read from it. To add a service, add an entry to the array and create a matching folder under `app/services/` containing a three-line `page.tsx` (copy an existing one and change the slug).

**Contact details.** Edit the constants at the top of `app/components/page-shell.tsx`:

- `CONTACT_EMAIL` for general enquiries
- `PRIVACY_EMAIL` for data protection requests
- `COMPANY_NUMBER`
- `SITE_URL`

The home page also contains the same email address in its two buttons and its structured data, so search for the old address after changing it.

**Legal pages.** `privacy-policy` and `terms-of-service` contain `CONFIRM` comments marking statements that depend on how the site is actually run (chat logging, analytics, retention period). Check them whenever the site's setup changes, and update the "Last updated" date.

## SEO

- Site-wide defaults (title template, description, social tags) are in `app/layout.tsx`.
- Every page sets its own `title`, `description` and canonical URL through its `metadata` export. A new page needs its own canonical, or it will not be treated as a separate page.
- `app/sitemap.ts` lists every public URL. Add new pages there (service pages are added automatically).
- The home page includes Organization structured data (JSON-LD), and each service page includes Service structured data.
- `robots.txt` is managed in Cloudflare, not in this project.

After deploying new pages, submit the sitemap in Google Search Console and request indexing for the new URLs.

## Deployment

The site deploys to Cloudflare Workers from the connected Git repository. A push triggers a build that runs the OpenNext Cloudflare adapter. The adapter's configuration (`wrangler.jsonc`, `open-next.config.ts`) should be committed to the repository.

## Email

Mail for `haidurqureshi.com` is hosted on Zoho Mail. Each address shown on the site (such as `enquiries@` and `privacy@`) must exist in Zoho as a mailbox, an alias or through the catch-all setting. Send a test message to any new address before publishing it.

## Chat assistant

The chat assistant is a separate page at `chat.haidurqureshi.com`. It posts the conversation to `/api/chat` and reads a streamed response. Its source is `chat.html`, kept separately from this Next.js app.

## Licence

© HaidurQureshi Ltd. All rights reserved. Registered in England and Wales, company number 16936643.
