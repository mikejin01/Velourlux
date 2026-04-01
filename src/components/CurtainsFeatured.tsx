import Image from "next/image";
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

export default function CurtainsFeatured() {
  return (
    <section className="curtains-featured">
      <div className="curtains-grid">
        <div className="curtains-lifestyle">
          <Image
            src="/images/Roman Shades-1.avif"
            alt="Elegant Roman shades in a sunlit modern room"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="curtains-product-col">
          <div className="curtains-product-isolated">
            <Image
              src="/images/Roman Shades-2.avif"
              alt="Close-up detail of Roman Shades fabric"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              style={{ objectFit: "contain", padding: "64px" }}
            />
          </div>
          <div className="curtains-product-info">
            <p className="curtains-product-name">Roman Shades – Natural</p>
            <p className="curtains-product-price">From $325.00</p>
          </div>
        </div>

        <div className="curtains-text">
          <h2 className="curtains-title">
            Roman
            <br />
            Shades
          </h2>
          <p className="curtains-desc">
            Introducing our bespoke Roman Shades in Natural, Oatmeal, and Frost. For those who know that simplicity is the highest form of sophistication.
          </p>
          <Link href="#" className="shop-link">
            SHOP SHADES <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
