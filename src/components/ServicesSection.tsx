import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Explore Our Showrooms",
    desc: "Visit one of our 150+ locations across the country to see and feel our collections in person.",
    image: "/Velourlux/images/showroom.png",
    href: "#",
  },
  {
    title: "Free Measurement",
    desc: "Our experts offer precise window measurements free of charge, ensuring a perfect fit for your custom curtains.",
    image: "/Velourlux/images/measure.png",
    href: "#",
  },
  {
    title: "Design Assistance",
    desc: "Get one-on-one design guidance from the comfort of your home with our interior specialists.",
    image: "/Velourlux/images/design.png",
    href: "#",
  },
  {
    title: "Order Swatches",
    desc: "Receive an assortment of our 20 most sought-after materials delivered to your door.",
    image: "/Velourlux/images/swatches.png",
    href: "#",
  },
  {
    title: "Professional Installation",
    desc: "Our certified installers ensure a flawless, worry-free fit for every window.",
    image: "/Velourlux/images/install.png",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="services-title">Let us help bring your vision to life.</h2>
      <div className="services-bento">
        {services.map((item, i) => (
          <Link
            href={item.href}
            className="bento-card"
            key={i}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
            <div className="bento-overlay" />
            <div className="bento-content">
              <h3 className="bento-title">{item.title}</h3>
              <p className="bento-desc">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
