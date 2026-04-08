"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const megaMenuData: Record<string, { featured: string[]; categories: string[]; image: string; imageLabel: string }> = {
  Curtains: {
    featured: ["New In", "Most Popular", "The Signature Look", "Find the Perfect Curtain"],
    categories: ["Shop All", "Curtains by Type", "Curtains by Fabric", "Curtains by Color", "Curtains by Size", "Hardware", "Services"],
    image: "/Velourlux/images/High Quality-1.avif",
    imageLabel: "The Grand Curtains",
  },
  "Shades & Blinds": {
    featured: ["New In", "Most Popular", "Roman Shades", "Roller Blinds"],
    categories: ["Shop All", "Shades by Type", "Shades by Room", "Shades by Color", "Motorized Options", "Samples", "Guides"],
    image: "/Velourlux/images/Roman Shades-1.avif",
    imageLabel: "Roman Shades Collection",
  },
  Rugs: {
    featured: ["New In", "Most Popular", "Handwoven Collection", "Best Sellers"],
    categories: ["Shop All", "Rugs by Style", "Rugs by Material", "Rugs by Size", "Rugs by Color", "Rug Pads", "Care Guide"],
    image: "/Velourlux/images/rugs/rug1-01.jpg",
    imageLabel: "Handwoven Wool Rugs",
  },
  Hardware: {
    featured: ["New In", "Most Popular", "Curtain Rods", "Complete Sets"],
    categories: ["Shop All", "Rods & Poles", "Finials", "Brackets & Rings", "Tiebacks", "Tracks & Rails", "Installation Kits"],
    image: "/Velourlux/images/curtain-closeup.png",
    imageLabel: "Premium Hardware",
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleNavEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleNavLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <header className={`header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}${activeMenu ? " mega-active" : ""}`}>
      <div className="header-inner">
        <div className="header-left">
          <Link href="/" className="header-logo">
            VELOURLUX
          </Link>
          <nav className="header-nav">
            {Object.keys(megaMenuData).map((label) => (
              <button
                key={label}
                className={`header-nav-item${activeMenu === label ? " active" : ""}`}
                onMouseEnter={() => handleNavEnter(label)}
                onMouseLeave={handleNavLeave}
              >
                {label}
              </button>
            ))}
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

      {/* Mega Dropdown */}
      {activeMenu && megaMenuData[activeMenu] && (
        <div
          className="mega-menu"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="mega-menu-inner">
            <div className="mega-menu-featured">
              {megaMenuData[activeMenu].featured.map((item) => (
                <Link key={item} href="#" className="mega-menu-featured-link">
                  {item}
                </Link>
              ))}
            </div>
            <div className="mega-menu-categories">
              {megaMenuData[activeMenu].categories.map((item) => (
                <Link key={item} href="#" className="mega-menu-cat-link">
                  {item}
                </Link>
              ))}
            </div>
            <div className="mega-menu-image">
              <Image
                src={megaMenuData[activeMenu].image}
                alt={megaMenuData[activeMenu].imageLabel}
                fill
                sizes="40vw"
                style={{ objectFit: "cover" }}
              />
              <p className="mega-menu-image-label">{megaMenuData[activeMenu].imageLabel}</p>
            </div>
          </div>
          <p className="mega-menu-help">
            Need help? <Link href="#">Contact</Link> our team.
          </p>
        </div>
      )}

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
