import { ArrowRight, Github, Instagram, Linkedin, Send, Youtube } from "lucide-react";
import { siteLinks } from "../englishHomeContent";

const socialLinks = [
  { label: "YouTube", href: siteLinks.youtube, icon: Youtube },
  { label: "Telegram", href: siteLinks.telegram, icon: Send },
  { label: "LinkedIn", href: siteLinks.linkedin, icon: Linkedin },
  { label: "Instagram", href: siteLinks.instagram, icon: Instagram },
  { label: "GitHub", href: siteLinks.github, icon: Github },
] as const;

export function InvitationSection() {
  return (
    <section className="eh-invitation" aria-labelledby="invitation-title">
      <div className="eh-invitation__path" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="eh-invitation__copy" data-reveal>
        <span className="eh-eyebrow">Keep the experience moving</span>
        <h2 id="invitation-title">The knowledge already exists. The community makes it travel.</h2>
      </div>
      <div className="eh-invitation__actions" data-reveal>
        <a className="eh-button eh-button--paper" href={siteLinks.telegram} target="_blank" rel="noopener noreferrer">
          Join on Telegram <ArrowRight aria-hidden="true" />
        </a>
        <a className="eh-button eh-button--outline-light" href={siteLinks.youtube} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
        <a className="eh-invitation__persian" href={siteLinks.persian}>
          <span lang="fa" dir="rtl">ورود به وب‌سایت فارسی</span>
          <small>Visit the Persian site</small>
        </a>
      </div>
    </section>
  );
}

export function EnglishFooter() {
  return (
    <footer className="eh-footer">
      <div className="eh-footer__brand">
        <a className="eh-brand" href="#top">
          <span className="eh-brand__mark" aria-hidden="true">TI</span>
          <span className="eh-brand__copy">
            <strong>Tech Immigrants</strong>
            <small>Lived experience, shared forward.</small>
          </span>
        </a>
        <p>A trusted community for Persian-speaking tech professionals navigating migration, international careers, and belonging.</p>
      </div>

      <nav className="eh-footer__social" aria-label="Tech Immigrants social channels">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a href={href} key={label} target="_blank" rel="noopener noreferrer">
            <Icon aria-hidden="true" /> <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="eh-footer__base">
        <span>Founded by Sahar Pakseresht · Powered by community.</span>
        <span>Community figures current to June 2026.</span>
        <span>© {new Date().getFullYear()} Tech Immigrants</span>
      </div>
    </footer>
  );
}
