import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendingCarousel from "@/components/TrendingCarousel";
import FeaturedCampaign from "@/components/FeaturedCampaign";
import CurtainsFeatured from "@/components/CurtainsFeatured";
import PressSection from "@/components/PressSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const trendingCurtains = [
  {
    name: "Velvet Royal – Wine",
    type: "Premium Velvet Curtain",
    price: "$285.00",
    image: "/images/High Quality-1.avif",
    tag: "NEW IN",
  },
  {
    name: "Desert – Earth",
    type: "Flatweave Jute & Wool Rug",
    price: "$395.00",
    image: "/images/product-electric-curtain.jpg",
    tag: "NEW IN",
  },
  {
    name: "Normandie – Ochre",
    type: "Designed by Studio Mellone",
    price: "$1,495.00",
    image: "/images/Electric Rolling Curtain-1.avif",
    tag: "NEW IN",
  },
  {
    name: "Indore – Terracotta",
    type: "Designed by Studio Mellone",
    price: "$1,495.00",
    image: "/images/product-shutters.jpg",
    tag: "NEW IN",
  },
  {
    name: "Classic Beige Shades",
    type: "Premium Roman Blinds",
    price: "$295.00",
    image: "/images/shades-blinds-demo.png",
    tag: "NEW IN",
  },
];

const trendingShadesData = [
  {
    name: "Classic Beige Shades",
    type: "Premium Roman Blinds",
    price: "$295.00",
    image: "/images/shades-blinds-demo.png",
  },
  {
    name: "Indore – Terracotta",
    type: "Handwoven Wool Rug",
    price: "$1,495.00",
    image: "/images/product-shutters.jpg",
  },
  {
    name: "Desert – Earth",
    type: "Flatweave Jute & Wool Rug",
    price: "$395.00",
    image: "/images/hero-2.png",
  },
  {
    name: "Velvet Royal – Wine",
    type: "Premium Velvet Curtain",
    price: "$285.00",
    image: "/images/High Quality-1.avif",
  },
  {
    name: "Normandie – Ochre",
    type: "Geometric Handwoven Rug",
    price: "$1,495.00",
    image: "/images/Electric Rolling Curtain-1.avif",
  },
];

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TrendingCarousel title="TRENDING CURTAINS" products={trendingCurtains} />
        <FeaturedCampaign />
        <TrendingCarousel
          title="TRENDING SHADES & BLINDS"
          products={trendingShadesData}
        />
        <CurtainsFeatured />
        <PressSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
