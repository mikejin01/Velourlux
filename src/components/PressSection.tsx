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

const pressNames = [
  { name: "VOGUE", serif: true },
  { name: "ELLE DECOR", serif: false },
  { name: "T MAGAZINE", serif: true },
  { name: "AD", serif: false },
  { name: "HOUSE & GARDEN", serif: true },
];

export default function PressSection() {
  return (
    <section className="press-section">
      <div className="press-logos">
        {pressNames.map((pub, i) => (
          <span
            key={i}
            className={`press-logo${pub.serif ? " serif" : ""}`}
          >
            {pub.name}
          </span>
        ))}
      </div>
      <div className="press-content">
        <div className="press-text">
          <p className="press-desc">
            Proudly showcased in some of the most beautiful homes and featured in
            top design publications worldwide.
          </p>
          <Link href="#" className="shop-link">
            READ MORE <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
