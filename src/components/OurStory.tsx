import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="our-story">
      <h2 className="our-story-title">A Custom Made Story</h2>
      <div className="our-story-image">
        <Image
          src="/Velourlux/images/store-front.jpg"
          alt="Velourlux craftsmanship — handmade window treatments"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 86vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="our-story-content">
        <blockquote className="our-story-quote">
          &ldquo;Our personal approach is born of passion, passed down through three generations.&rdquo;
        </blockquote>
        <div className="our-story-body">
          <p>
            There&rsquo;s an artisanal spirit and human touch behind everything we do. All of our custom window treatments are handmade to order by skilled craftsmen in our very own workrooms. Every detail is considered, and every design engineered to endure.
          </p>
          <Link href="#" className="our-story-cta">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
