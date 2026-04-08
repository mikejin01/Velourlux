import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";

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
        />
      </div>
    </section>
  );
}
