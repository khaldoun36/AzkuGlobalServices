# Azku Global Services website

Marketing site for Azku Global Services, built with [Nuxt 4](https://nuxt.com),
[Nuxt Content](https://content.nuxt.com) and [Tailwind CSS 4](https://tailwindcss.com).

## Requirements

- Node.js 26 (see `.nvmrc`; Node 22.22+ and 24.15+ also work)
- [pnpm](https://pnpm.io) 12

## Commands

```bash
pnpm install     # install dependencies
pnpm dev         # start the dev server on http://localhost:3000
pnpm build       # build for production
pnpm preview     # preview the production build locally
pnpm lint        # check formatting with Prettier
pnpm format      # format every file with Prettier
pnpm typecheck   # check types with vue-tsc
```

CI runs `lint`, `typecheck` and `build` on every push to `main` and on pull
requests (`.github/workflows/ci.yml`).

## Where things live

| Path                  | What it holds                                                  |
| --------------------- | -------------------------------------------------------------- |
| `pages/`              | One file per page                                              |
| `components/`         | Shared components (`global/`) and page sections                |
| `content/projects/`   | One Markdown file per project                                  |
| `data/`               | Navigation links, office locations, services and client names  |
| `assets/css/main.css` | Tailwind setup: theme, breakpoints and colors                  |
| `typography.js`       | Styles for rendered Markdown (the `prose` class)               |
| `server/routes/`      | Server routes (`sitemap.xml`)                                  |
| `public/`             | Files served as-is (logos, favicon, `robots.txt`, share image) |

## Adding a project

Add a Markdown file to `content/projects/`. The number at the start of the
file name sets the order on the site, and the rest becomes the URL:
`10.my-new-project.md` is served at `/projects/my-new-project`.

Front matter fields: `title`, `description`, `summary`, `thumbnail` and
`visiuals` (a list of image URLs). `startDate`, `endDate` and `projectFor` are
optional and shown on the home page for the first project.

## Configuration

- **Site address.** Canonical links, the sitemap and social-share images use
  `runtimeConfig.public.siteUrl` in `nuxt.config.ts`. Override it with the
  `NUXT_PUBLIC_SITE_URL` environment variable. `public/robots.txt` also
  contains the address.
- **Contact form.** Submissions go to [Web3Forms](https://web3forms.com). The
  access key in `pages/contact-us.vue` is public by design and only identifies
  the receiving inbox.
- **Client logos.** `public/assets/company_logos/logo-N.png` is paired with
  entry N in `data/clients.json`, which supplies the logo's alt text.
