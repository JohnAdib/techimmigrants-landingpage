import { ActionButton } from "./components/ActionButton";
import { BrandMark } from "./components/BrandMark";
import { TextLink } from "./components/TextLink";
import { siteLinks } from "./content/site";

export default function EnglishNotFound() {
  return (
    <main className="ti ti-not-found">
      <BrandMark href="/" label="Tech Immigrants, back to the homepage" />
      <div className="ti-not-found__copy">
        <span className="ti-eyebrow">404 · Beyond this route</span>
        <h1>This path has not been mapped yet.</h1>
        <p className="ti-lead">
          The community is still here. Return to the English homepage or continue to the
          Persian site.
        </p>
        <div className="ti-not-found__actions">
          <ActionButton href="/">Back to the homepage</ActionButton>
          <TextLink href={siteLinks.persian}>Persian website</TextLink>
        </div>
      </div>
    </main>
  );
}
