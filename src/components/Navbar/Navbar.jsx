import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "/", type: "route" },
  { label: "About", href: "#about", type: "anchor" },
  { label: "Plans", href: "/plans", type: "route" },
  { label: "How It Works", href: "/how-it-works", type: "route" },
  { label: "Testimonials", href: "#testimonials", type: "anchor" },
  { label: "Contact", href: "#contact", type: "anchor" },
];

export default function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add a "scrolled" class once the user scrolls past 20px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever a link is clicked.
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        {/* --- Logo / Wordmark --- */}
        <Link to="/" className="navbar__logo" onClick={handleLinkClick}>
          <span className="navbar__logo-mark" aria-hidden="true">◆</span>
          <span className="navbar__logo-text">
            THE<span className="text-gradient">VISIONARY</span>
          </span>
          <span className="navbar__demo-badge">CHRONICLE</span>
        </Link>

        {/* --- Desktop links --- */}
        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const className = "navbar__link";
            if (link.type === "route") {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={className}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={link.href}
                href={link.href}
                className={className}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* --- Right actions: theme toggle + mobile hamburger --- */}
        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className={`navbar__hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* --- Mobile dropdown menu --- */}
      <div className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}>
        {NAV_LINKS.map((link) => {
          const className = "navbar__mobile-link";
          if (link.type === "route") {
            return (
              <Link
                key={link.href}
                to={link.href}
                className={className}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            );
          }
          return (
            <a
              key={link.href}
              href={link.href}
              className={className}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}

/* ---------- Inline SVG icons (no extra dependency) ---------- */

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}