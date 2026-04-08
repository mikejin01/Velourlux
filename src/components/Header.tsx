"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="header-inner">
        <div className="header-left">
          <Link href="/" className="header-logo">
            VELOURLUX
          </Link>
          <nav className="header-nav">
            <Link href="#">Curtains</Link>
            <Link href="#">Shades &amp; Blinds</Link>
            <Link href="#">Rugs</Link>
            <Link href="#">Hardware</Link>
          </nav>
        </div>
        <div className="header-right">
          <Link href="#">Contact</Link>
          <Link href="#">About</Link>
          <div className="header-icons">
            <button aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <Link href="#" className="header-cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              ( 0 )
            </Link>
            <button
              className="header-menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
            </button>
          </div>
        </div>
      </div>

      <nav className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <Link href="#" onClick={() => setMenuOpen(false)}>Curtains</Link>
        <Link href="#" onClick={() => setMenuOpen(false)}>Shades &amp; Blinds</Link>
        <Link href="#" onClick={() => setMenuOpen(false)}>Rugs</Link>
        <Link href="#" onClick={() => setMenuOpen(false)}>Hardware</Link>
        <div className="mobile-menu-divider" />
        <Link href="#" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link href="#" onClick={() => setMenuOpen(false)}>About</Link>
      </nav>
    </header>
  );
}
