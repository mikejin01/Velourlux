"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-bg">
        <p className="footer-logo-text">VELOURLUX</p>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <Link href="#">Pro Account</Link>
          <Link href="#">Contact us</Link>
          <Link href="#">Showroom</Link>
          <Link href="#">Careers</Link>
        </div>
        <div className="footer-column">
          <Link href="#">About</Link>
          <Link href="#">Size Guide</Link>
          <Link href="#">Care Advice</Link>
          <Link href="#">Press</Link>
        </div>
        <div className="footer-column">
          <Link href="#">FAQ</Link>
          <Link href="#">Payments</Link>
          <Link href="#">Shipping</Link>
          <Link href="#">Register a Return</Link>
        </div>
        <div className="footer-column">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Cookie Settings</Link>
          <Link href="#">Terms &amp; Conditions</Link>
          <Link href="#">Accessibility</Link>
        </div>
        <div className="footer-column">
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">TikTok</Link>
          <Link href="#">Pinterest</Link>
        </div>
      </div>

      <div className="footer-newsletter-section">
        <p>
          Sign up to our newsletter to be the first to know
          <br />about our products, collections and other news.
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your Email" aria-label="Email address" />
          <button type="submit" aria-label="Subscribe">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
        <label className="privacy-checkbox">
          <input type="checkbox" />
          <span>I have read and understood the <Link href="#">privacy policy</Link>.</span>
        </label>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">© VELOURLUX 2025</span>
        <div className="footer-payments">
          {/* Visa */}
          <span className="payment-icon-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" width="48" height="32">
              <rect width="48" height="32" rx="4" fill="#fff" stroke="#e6e6e6"/>
              <path d="M19.5 21h-2.7l1.7-10.5h2.7L19.5 21zm-4.8 0h-2.8l-2-7.2-.8 1.2-.5 2.5L8.2 21H5.3l4-10.5h2.8l2.6 10.5zm15.7-10.5L28 21h-2.5l2.4-10.5h2.5zm8.7 0L36.5 21h-2.5l-1-3.5h-3.2l-.5 3.5h-2.5l3-10.5h4.3l1 0zm-4.5 5.3h2l-.8-3.2-1.2 3.2z" fill="#1a1f71"/>
            </svg>
          </span>
          {/* Mastercard */}
          <span className="payment-icon-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" width="48" height="32">
              <rect width="48" height="32" rx="4" fill="#fff" stroke="#e6e6e6"/>
              <circle cx="19" cy="16" r="8" fill="#eb001b"/>
              <circle cx="29" cy="16" r="8" fill="#f79e1b"/>
              <path d="M24 9.8a8 8 0 0 1 0 12.4 8 8 0 0 1 0-12.4z" fill="#ff5f00"/>
            </svg>
          </span>
          {/* Amex */}
          <span className="payment-icon-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" width="48" height="32">
              <rect width="48" height="32" rx="4" fill="#006fcf"/>
              <path d="M6 20l2-4.7h1.5l2 4.7h-1.4l-.4-.9H8l-.4.9H6zm2.4-1.7h1l-.5-1.2-.5 1.2zM12 20v-4.7h2l1.2 2.5 1.2-2.5h2V20h-1.3v-3.2l-1.3 3.2h-1.2l-1.3-3.2V20H12zm7 0v-4.7h4.4v1h-3.1v.8h3v1h-3v.9h3.1v1H19zm6 0l2-4.7h1.6l-1.4 2.2 1.6 2.5h-1.7l-.8-1.4-.8 1.4H25zm4.8-4.7h1.7l1 1.8 1-1.8h1.7l-2 3v1.7h-1.4v-1.7l-2-3z" fill="#fff"/>
            </svg>
          </span>
          {/* Affirm */}
          <span className="payment-icon-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" width="48" height="32">
              <rect width="48" height="32" rx="4" fill="#fff" stroke="#e6e6e6"/>
              <text x="24" y="18.5" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="Arial, sans-serif" fill="#4a4af4">affirm</text>
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
}
