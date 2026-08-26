export type AppLocale = "en" | "fa";

export function resolveAppLocale(pathname: string): AppLocale {
  return pathname === "/fa" || pathname.startsWith("/fa/") ? "fa" : "en";
}
