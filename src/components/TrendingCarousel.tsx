"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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

interface Product {
  name: string;
  type: string;
  price: string;
  image: string;
  tag?: string;
}

interface TrendingCarouselProps {
  title: string;
  products: Product[];
}

export default function TrendingCarousel({
  title,
  products,
}: TrendingCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="trending-section">
      <div className="section-header">
        <h2>{title}</h2>
        <Link href="#" className="shop-link">
          SHOP NOW <ArrowIcon />
        </Link>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {products.map((product, i) => (
            <article className="product-card" key={i}>
              <div className="product-card-image">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                {product.tag && <span className="product-tag">{product.tag}</span>}
              </div>
              <div className="product-card-info">
                <p className="product-card-name">{product.name}</p>
                <p className="product-card-type">{product.type}</p>
                <p className="product-card-price">From {product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
