import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";

export default function FeaturedCampaign() {
  return (
    <section className="featured-campaign">
      <div className="campaign-grid">
        <div className="campaign-text">
          <h2 className="campaign-title">
            INTRODUCING
            <br />
            LIAM LINEN
          </h2>
          <p className="campaign-desc">
            Liam Linen is an interplay of premium textures. The palette is drawn from nature itself — tones that feel sun-washed rather than saturated, as if shaped slowly by light and time.
          </p>
          <Link href="#" className="shop-link">
            SHOP NOW <ArrowIcon />
          </Link>
        </div>

        <div className="campaign-lifestyle">
          <Image
            src="/Velourlux/images/Liam Linen-1.avif"
            alt="Luxurious interior featuring Liam Linen curtains"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="campaign-product-col">
          <div className="campaign-product-isolated">
            <div className="product-badge">NEW IN</div>
            <Image
              src="/Velourlux/images/Liam Linen-2.avif"
              alt="Liam Linen fabric texture"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              style={{ objectFit: "contain", padding: "64px" }}
            />
          </div>
          <div className="campaign-product-info">
            <p className="campaign-product-name">Liam Linen</p>
            <p className="campaign-product-price">From $350.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
