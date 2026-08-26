export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function externalLinkProps(href: string) {
  if (!isExternal(href)) return {};
  return { target: "_blank", rel: "noopener noreferrer" } as const;
}
