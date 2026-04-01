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
    name: "The Grand – Burnt Red",
    type: "Premium Velvet Curtain",
    price: "$285.00",
    image: "/Velourlux/images/demo-products/The-Grand-Burnt-Red-1.webp",
    hoverImage: "/Velourlux/images/demo-products/The-Grand-Burnt-Red-2.webp",
    tag: "NEW IN",
  },
  {
    name: "The Grand – Pale Sand",
    type: "Premium Velvet Curtain",
    price: "$285.00",
    image: "/Velourlux/images/demo-products/The-Grand-Pale-Sand-1.webp",
    hoverImage: "/Velourlux/images/demo-products/The-Grand-Pale-Sand-2.webp",
    tag: "NEW IN",
  },
  {
    name: "The Velvet – Olive Green",
    type: "Premium Velvet Curtain",
    price: "$325.00",
    image: "/Velourlux/images/demo-products/The-Velvet-Olive-Green-1.webp",
    hoverImage: "/Velourlux/images/demo-products/The-Velvet-Olive-Green-2.webp",
    tag: "NEW IN",
  },
  {
    name: "The Velvet – Warm White",
    type: "Premium Velvet Curtain",
    price: "$325.00",
    image: "/Velourlux/images/demo-products/The-Velvet-Warm-White-1.webp",
    hoverImage: "/Velourlux/images/demo-products/The-Velvet-Warm-White-2.webp",
    tag: "NEW IN",
  },
];

const trendingShadesData = [
  {
    name: "Classic Beige Shades",
    type: "Premium Roman Blinds",
    price: "$295.00",
    image: "/Velourlux/images/shades-blinds-demo.png",
  },
  {
    name: "Indore – Terracotta",
    type: "Handwoven Wool Rug",
    price: "$1,495.00",
    image: "/Velourlux/images/product-shutters.jpg",
  },
  {
    name: "Desert – Earth",
    type: "Flatweave Jute & Wool Rug",
    price: "$395.00",
    image: "/Velourlux/images/Electric Rolling Curtain-1.avif",
  },
  {
    name: "Velvet Royal – Wine",
    type: "Premium Velvet Curtain",
    price: "$285.00",
    image: "/Velourlux/images/High Quality-1.avif",
  },
  {
    name: "Normandie – Ochre",
    type: "Geometric Handwoven Rug",
    price: "$1,495.00",
    image: "/Velourlux/images/Electric Rolling Curtain-1.avif",
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
