import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";

interface Product {
  name: string;
  type: string;
  price: string;
  image: string;
  hoverImage?: string;
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
  return (
    <section className="trending-section">
      <div className="section-header">
        <h2>{title}</h2>
        <Link href="#" className="shop-link">
          SHOP NOW <ArrowIcon />
        </Link>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {products.map((product, i) => (
            <article className="product-card" key={i}>
              <div className="product-card-image">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 25vw"
                  className={product.hoverImage ? "product-image-primary" : ""}
                  style={{ objectFit: "cover" }}
                />
                {product.hoverImage && (
                  <Image
                    src={product.hoverImage}
                    alt={`${product.name} hover view`}
                    fill
                    sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 25vw"
                    className="product-image-secondary"
                    style={{ objectFit: "cover" }}
                  />
                )}
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
