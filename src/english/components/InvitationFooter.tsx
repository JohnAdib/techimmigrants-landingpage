import { ArrowUpRight, Github, Instagram, Linkedin, Play, Send, Twitter, Youtube } from "lucide-react";
import { siteLinks } from "../englishHomeContent";
import { currentMonth } from "../reportingPeriod";

const socialLinks = [
  { label: "YouTube", href: siteLinks.youtube, icon: Youtube },
  { label: "Telegram", href: siteLinks.telegram, icon: Send },
  { label: "LinkedIn", href: siteLinks.linkedin, icon: Linkedin },
  { label: "X", href: siteLinks.x, icon: Twitter },
  { label: "Instagram", href: siteLinks.instagram, icon: Instagram },
  { label: "GitHub", href: siteLinks.github, icon: Github },
] as const;

export function InvitationSection() {
  return (
    <section className="eh-invitation" aria-labelledby="invitation-title">
      <div className="eh-invitation__copy" data-reveal>
        <span className="eh-eyebrow">Start with the right channel</span>
        <h2 id="invitation-title">The community is already talking. Join where it helps you most.</h2>
        <p>Ask a question, hear the full story, or explore the Persian community and its practical resources.</p>
      </div>

      <div className="eh-invitation__actions" data-reveal>
        <a className="eh-invitation-card eh-invitation-card--primary" href={siteLinks.telegram} target="_blank" rel="noopener noreferrer">
          <span className="eh-invitation-card__icon"><Send aria-hidden="true" /></span>
          <span><small>REAL-TIME COMMUNITY</small><strong>Join on Telegram</strong></span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a className="eh-invitation-card" href={siteLinks.youtube} target="_blank" rel="noopener noreferrer">
          <span className="eh-invitation-card__icon"><Play aria-hidden="true" /></span>
          <span><small>INTERVIEWS & LIVE SESSIONS</small><strong>Watch on YouTube</strong></span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a className="eh-invitation-card" href={siteLinks.persian}>
          <span className="eh-invitation-card__icon" lang="fa" dir="rtl">فا</span>
          <span><small>PERSIAN WEBSITE</small><strong>Explore the full community</strong></span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function EnglishFooter() {
  return (
    <footer className="eh-footer">
      <div className="eh-footer__top">
        <a className="eh-brand" href="#top">
          <span className="eh-brand__mark" aria-hidden="true">TI</span>
          <span className="eh-brand__copy">
            <strong>Tech Immigrants</strong>
            <small>Powered by community.</small>
          </span>
        </a>
        <p>Practical experience for Persian-speaking tech professionals building careers and lives across borders.</p>
      </div>

      <nav className="eh-footer__social" aria-label="Tech Immigrants social channels">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon aria-hidden="true" /><span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="eh-footer__base">
        <span>Powered by community.</span>
        <span>Page context · {currentMonth}</span>
        <span>© {new Date().getFullYear()} Tech Immigrants</span>
      </div>
    </footer>
  );
}
