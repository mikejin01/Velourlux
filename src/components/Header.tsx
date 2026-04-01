"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <div className="header-left">
          <Link href="/" className="header-logo">
            VELOURLUX
          </Link>
          <nav className="header-nav">
            <Link href="#">Curtains</Link>
            <Link href="#">Shades &amp; Blinds</Link>
            <Link href="#">Hardware</Link>
          </nav>
        </div>
        <div className="header-right">
          <Link href="#">Inspiration</Link>
          <Link href="#">About</Link>
          <Link href="#">Help</Link>
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
            <span style={{ fontSize: "0.8125rem", fontWeight: 500 }}>
              US | $
            </span>
            <Link
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.8125rem",
                fontWeight: 500,
              }}
            >
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
          </div>
        </div>
      </div>
    </header>
  );
}
