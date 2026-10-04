import { Link } from "react-router-dom";
import "./Footer.css";

const TELEGRAM = "private_account4131";
const EMAIL = "muskmr047@gmail.com";

const NAV_LINKS = [
  { label: "Home", href: "/", type: "route" },
  { label: "About", href: "/#about", type: "route" },
  { label: "Plans", href: "/plans", type: "route" },
  { label: "How It Works", href: "/how-it-works", type: "route" },
  { label: "Testimonials", href: "/#testimonials", type: "route" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Disclaimer", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* ---------- Column 1: Brand ---------- */}
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-mark" aria-hidden="true">◆</span>
            <span className="footer__logo-text">
              The Visionary <span className="text-gradient">Chronicle</span>
            </span>
          </Link>

          <p className="footer__tagline">
            An independent fan community exploring Elon Musk's work across
            space exploration, electric vehicles, sustainable energy,
            artificial intelligence, and emerging technology. Inspired by
            the drive to build what comes next.
          </p>

          <div className="footer__socials">
            <a
              href={`https://t.me/${TELEGRAM}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
              className="footer__social"
            >
              <TelegramIcon />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="footer__social"
            >
              <MailIcon />
            </a>

            <a
              href="#"
              aria-label="Website"
              className="footer__social"
              onClick={(e) => e.preventDefault()}
            >
              <GlobeIcon />
            </a>
          </div>
        </div>

        {/* ---------- Column 2: Navigate ---------- */}
        <div className="footer__col">
          <h3 className="footer__title">Explore</h3>
          <ul className="footer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Column 3: Contact ---------- */}
        <div className="footer__col">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__list">
            <li>
              <a
                href={`https://t.me/${TELEGRAM}`}
                target="_blank"
                rel="noreferrer noopener"
                className="footer__link"
              >
                Telegram · @{TELEGRAM}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="footer__link">
                {EMAIL}
              </a>
            </li>
            <li>
              <span className="footer__muted">
                Official Elon Musk Fan Portal
              </span>
            </li>
          </ul>
        </div>

        {/* ---------- Column 4: Legal ---------- */}
        <div className="footer__col">
          <h3 className="footer__title">Legal</h3>
          <ul className="footer__list">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer__link"
                  onClick={(e) => e.preventDefault()}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Prominent site-wide disclaimer ---------- */}
      <div className="container">
        <p className="footer__disclaimer">
          <strong>Independent Fan Community</strong> — The Visionary
          Chronicle is independently operated and is affiliated with,
          endorsed by,and officially connected to Elon Musk, Tesla, SpaceX,
          X, xAI, Neuralink, or The Boring Company. Memberships and community
          services displayed on this website are provided by elon musk management.
        </p>
      </div>

      {/* ---------- Bottom strip ---------- */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} The Visionary Chronicle</span>
          <span>Exploring innovation, technology & the future.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Inline SVG icons ---------- */

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.94 4.6l-2.6 12.3c-.2.9-.73 1.12-1.48.7l-4.1-3-1.98 1.9c-.22.22-.4.4-.82.4l.3-4.2 7.65-6.9c.33-.3-.07-.46-.5-.17L9.96 11.5 5.9 10.2c-.88-.28-.9-.88.18-1.3l15.05-5.8c.74-.27 1.38.17 1.14 1.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}