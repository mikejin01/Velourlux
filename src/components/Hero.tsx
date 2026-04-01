import Link from "next/link";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          DETAILED
          <br />
          CRAFTSMANSHIP
        </h1>
        <p className="hero-desc">
          Glorious curtains where elegance meets feelings. Velourlux is a luxury boutique specializing in custom and ready-made window treatments, including premium curtains, shades, and blinds. Focused on minimalism, sustainability, and high-quality bespoke craftsmanship.
        </p>
        <Link href="#" className="shop-link">
          SHOP NOW <ArrowIcon />
        </Link>
      </div>
      <div className="hero-image">
        <video
          src="/Velourlux/videos/velourlux-branding.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
