# Tech Immigrants Website

Website for the [Tech Immigrants](https://techimmigrants.com) community — a volunteer-driven community sharing real immigration and tech career experiences from Iranians working in the tech industry worldwide.

The English institutional homepage is served at `/`. The Persian community site, including its articles, interviews, resources, and workshops, is served at `/fa/`.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Supabase (video data)

## Development

```sh
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Fill in your Supabase credentials in .env

# Start dev server
npm run dev
```

## Deployment

Deployed on Cloudflare Pages at `techimmigrants.com`. The Vite build emits separate English and Persian HTML entries, while the Pages middleware and `_redirects` keep extensionless `/fa/*` routes on the Persian application.

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables in Cloudflare Pages dashboard.
