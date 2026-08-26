import { brand } from "../content/site";

interface BrandMarkProps {
  href?: string;
  hint?: string;
  label?: string;
}

export function BrandMark({ href = "#top", hint = brand.tagline, label }: BrandMarkProps) {
  return (
    <a className="ti-brand" href={href} aria-label={label ?? `${brand.name}, back to the top`}>
      <img className="ti-brand__mark" src={brand.logo} alt="" width={40} height={40} />
      <span className="ti-brand__copy">
        <strong>{brand.name}</strong>
        <small>{hint}</small>
      </span>
    </a>
  );
}
