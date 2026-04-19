"use client";
import { useState } from "react";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav className="topbar">
      <div className="shell topbar-inner">
        <a className="brand" href="#top" onClick={close}>
          College Park Garage Pros
        </a>
        <div className={`nav-links${menuOpen ? " nav-open" : ""}`} role="navigation" aria-label="Main navigation">
          <a className="nav-link active" href="#top" onClick={close}>Home</a>
          <a className="nav-link" href="#services" onClick={close}>Services</a>
          <a className="nav-link" href="#gallery" onClick={close}>Gallery</a>
          <a className="nav-link" href="#reviews" onClick={close}>Reviews</a>
        </div>
        <div className="topbar-actions">
          <a className="phone-link desktop-only" href="tel:4045550199">(404) 555-0199</a>
          <button
            className="nav-toggle mobile-only"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? (
              <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <a className="button button-primary button-small" href="#contact" onClick={close}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
