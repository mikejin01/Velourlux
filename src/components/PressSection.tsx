import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";

const pressNames = [
  { name: "VOGUE", serif: true },
  { name: "ELLE DECOR", serif: false },
  { name: "T MAGAZINE", serif: true },
  { name: "AD", serif: false },
  { name: "HOUSE & GARDEN", serif: true },
  { name: "DWELL", serif: false },
  { name: "ARCHITECTURAL DIGEST", serif: true },
  { name: "WALLPAPER*", serif: false },
  { name: "DEPARTURES", serif: true },
  { name: "VERANDA", serif: false },
];

export default function PressSection() {
  return (
    <section className="press-section">
      <div className="press-content">
        <p className="press-label">AS SEEN IN</p>
        <p className="press-desc">
          Proudly showcased in some of the most beautiful homes and featured in
          top design publications worldwide.
        </p>
        <Link href="#" className="shop-link">
          READ MORE <ArrowIcon />
        </Link>
      </div>
      <div className="press-marquee">
        <div className="press-marquee-track">
          {pressNames.map((pub, i) => (
            <span
              key={i}
              className={`press-logo${pub.serif ? " serif" : ""}`}
            >
              {pub.name}
            </span>
          ))}
          {pressNames.map((pub, i) => (
            <span
              key={`dup-${i}`}
              className={`press-logo${pub.serif ? " serif" : ""}`}
              aria-hidden="true"
            >
              {pub.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
