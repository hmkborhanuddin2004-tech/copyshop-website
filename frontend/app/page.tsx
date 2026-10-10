import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "BrewCraft - Premium Coffee Shop",
  description: "Crafted with passion in Senbagh, Noakhali, Bangladesh.",
};

export default function HomePage() {
  return (
    <div className="page-wrap">
      <Navbar />
      <div className="main-wrap">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <GallerySection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}
