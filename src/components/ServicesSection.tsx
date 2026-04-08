import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/Velourlux/icons/showroom.svg",
    title: "Explore Our Showrooms",
    desc: "Join us at one of our 150+ locations across the country.",
    href: "#",
  },
  {
    icon: "/Velourlux/icons/measurement.svg",
    title: "Schedule a Window Measurement",
    desc: "We'll come to you and provide complimentary on-site measuring.",
    href: "#",
  },
  {
    icon: "/Velourlux/icons/design.svg",
    title: "Enjoy an In-Home Design Consult",
    desc: "Get one-on-one design guidance from the comfort of your home.",
    href: "#",
  },
  {
    icon: "/Velourlux/icons/swatches.svg",
    title: "Order Most Popular Swatches",
    desc: "Receive an assortment of our 20 most sought-after materials.",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="services-title">Let us help bring your vision to life.</h2>
      <div className="services-grid">
        {services.map((item, i) => (
          <Link href={item.href} className="service-card" key={i}>
            <div className="service-card-icon">
              <Image
                src={item.icon}
                alt={item.title}
                width={72}
                height={72}
              />
            </div>
            <h3 className="service-card-title">{item.title}</h3>
            <p className="service-card-desc">{item.desc}</p>
            <span className="service-card-arrow" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
