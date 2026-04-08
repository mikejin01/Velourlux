import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendingCarousel from "@/components/TrendingCarousel";
import FeaturedCampaign from "@/components/FeaturedCampaign";
import ValueProps from "@/components/ValueProps";
import CurtainsFeatured from "@/components/CurtainsFeatured";
import PressSection from "@/components/PressSection";
import ServicesSection from "@/components/ServicesSection";
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

const trendingRugs = [
  {
    name: "Indore – Terracotta",
    type: "Handwoven Wool Rug",
    price: "$1,495.00",
    image: "/Velourlux/images/rugs/rug1-01.jpg",
    hoverImage: "/Velourlux/images/rugs/rug1-02.jpg",
    tag: "NEW IN",
  },
  {
    name: "Normandie – Ochre",
    type: "Geometric Flatweave Rug",
    price: "$895.00",
    image: "/Velourlux/images/rugs/rug2-01.jpg",
    hoverImage: "/Velourlux/images/rugs/rug2-02.jpg",
    tag: "NEW IN",
  },
  {
    name: "Sahara – Natural",
    type: "Jute & Cotton Blend Rug",
    price: "$650.00",
    image: "/Velourlux/images/rugs/rug3-01.jpg",
    hoverImage: "/Velourlux/images/rugs/rug3-02.webp",
  },
  {
    name: "Maison – Ivory",
    type: "Hand-Tufted Wool Rug",
    price: "$1,250.00",
    image: "/Velourlux/images/rugs/rug4-01.jpg",
    hoverImage: "/Velourlux/images/rugs/rug4-02.webp",
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
        <ValueProps />
        <TrendingCarousel
          title="TRENDING RUGS"
          products={trendingRugs}
        />
        <CurtainsFeatured />
        <PressSection />
        <ServicesSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
