// Cloudflare Pages Function: SPA fallback for the /fa/* subpath.
//
// Cloudflare Pages' _redirects file does not reliably apply 200-status
// (rewrite) rules for nested paths when the static bundle is served from
// a subdirectory of the deployment root (e.g. `/fa/index.html`). This
// middleware serves the SPA entry point for any `/fa/*` request that is
// not a concrete static asset, ensuring direct navigation and browser
// refresh on React Router subroutes (e.g. `/fa/workshops`) succeed.
//
// Behaviour:
//   - Paths with a file extension  → pass through to the static asset.
//   - `/fa/*` (no file extension)  → serve `/fa/index.html` (SPA entry).
//   - Everything else              → pass through so the English root
//                                    entry and its static assets are served.

interface Env {
  ASSETS: Fetcher;
}

const STATIC_ASSET = /\.[a-zA-Z0-9]+$/;

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);

  if (STATIC_ASSET.test(url.pathname)) {
    return context.next();
  }

  if (url.pathname === "/fa" || url.pathname.startsWith("/fa/")) {
    return context.env.ASSETS.fetch(
      new URL("/fa/index.html", context.request.url),
    );
  }

  return context.next();
};
