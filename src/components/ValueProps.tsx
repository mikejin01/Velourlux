import Image from "next/image";

const values = [
  {
    icon: "/Velourlux/icons/authenticity.png",
    title: "Authenticity",
    desc: "Experience the assurance of genuinely crafted fabrics, rigorously tested for lasting beauty and durability that you can feel.",
  },
  {
    icon: "/Velourlux/icons/sustainability.png",
    title: "Sustainability",
    desc: "Guided by a commitment to sustainability, we prioritize ethical sourcing and transparent processes to ensure environmentally responsible products.",
  },
  {
    icon: "/Velourlux/icons/refined simplicity.png",
    title: "Refined Simplicity",
    desc: "Designed with neutral tones, our fabrics, textures, and colors seamlessly integrate into your space, creating a cohesive, welcoming atmosphere.",
  },
  {
    icon: "/Velourlux/icons/timeless comfort.png",
    title: "Timeless Comfort",
    desc: "Our curated material collection brings essential elements to any environment, allowing your unique style to shine without overwhelming the space.",
  },
];

export default function ValueProps() {
  return (
    <section className="value-props">
      <div className="value-props-header">
        <h2 className="value-props-title">All Ready Made Curtains</h2>
        <p className="value-props-subtitle">
          With many colours and linings to choose from, our extensive range of ready-made curtains makes it easy to complete your window.
        </p>
      </div>
      <div className="value-props-grid">
        {values.map((item, i) => (
          <div className="value-card" key={i}>
            <div className="value-card-icon">
              <Image
                src={item.icon}
                alt={item.title}
                width={56}
                height={56}
              />
            </div>
            <h3 className="value-card-title">{item.title}</h3>
            <p className="value-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
