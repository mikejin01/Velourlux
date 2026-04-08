import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";

export default function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story-inner">
        <div className="our-story-text">
          <p className="our-story-label">Our Story</p>
          <blockquote className="our-story-quote">
            We believe a space is defined by how it feels.
          </blockquote>
          <div className="our-story-body">
            <p>
              At Velourlux, each piece begins with material — its texture, its weight, the way it holds light. Made to order, shaped with quiet precision.
            </p>
            <p>
              Our selection is deliberate. Nothing excessive. Only what endures.
            </p>
            <p className="our-story-closing">
              Because true luxury is never loud.
            </p>
          </div>
          <Link href="#" className="shop-link">
            READ OUR STORY <ArrowIcon />
          </Link>
        </div>
        <div className="our-story-image">
          <Image
            src="/Velourlux/images/story-1.webp"
            alt="Velourlux craftsmanship and interior design"
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
