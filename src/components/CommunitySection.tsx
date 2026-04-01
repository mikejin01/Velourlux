"use client";

import Image from "next/image";
import { useRef } from "react";

const communityImages = [
  { src: "/Velourlux/images/product-shutters.jpg", alt: "Elegant traditional room with green velvet curtains" },
  { src: "/Velourlux/images/product-electric-curtain.jpg", alt: "Scandinavian bedroom with neutral bedding" },
  { src: "/Velourlux/images/Liam Linen-1.avif", alt: "Luxurious interior featuring Liam Linen curtains" },
  { src: "/Velourlux/images/community-curtains-demo.png", alt: "Sunlit scandinavian living room featuring breezy custom linen curtains" },
];

export default function CommunitySection() {
  const gridRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!gridRef.current) return;
    const amount = 320;
    gridRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="community-section">
      <div className="community-header">
        <h2>
          JOIN OUR
          <br />
          COMMUNITY
        </h2>
        <div className="community-arrows">
          <button onClick={() => scroll("left")} aria-label="Scroll left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button onClick={() => scroll("right")} aria-label="Scroll right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="community-grid" ref={gridRef}>
        {communityImages.map((img, i) => (
          <div className="community-card" key={i}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
