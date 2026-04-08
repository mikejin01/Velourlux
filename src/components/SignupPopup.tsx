"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SignupPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="popup-overlay" onClick={() => setOpen(false)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup-close"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="popup-body">
          <h2 className="popup-title">BE FIRST IN LINE</h2>
          <p className="popup-desc">
            Sign up to get first access to limited collections, special collaborations, and private offers — before they sell out.
          </p>
          <form className="popup-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="E-mail" aria-label="Email address" />
            <button type="submit">SEND</button>
          </form>
          <p className="popup-privacy">
            I have read and understood the <Link href="#">privacy policy.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
