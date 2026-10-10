"use client";

import PageTransition from "@/components/ui/PageTransition";
import HeroSection from "@/components/home/HeroSection";
import CategoryStrip from "@/components/home/CategoryStrip";
import PopularFlavors from "@/components/home/PopularFlavors";
import RoastingBanner from "@/components/home/RoastingBanner";
import FeatureCards from "@/components/home/FeatureCards";
import CoffeeUpdates from "@/components/home/CoffeeUpdates";
import HoursSection from "@/components/home/HoursSection";

export default function HomeContent() {
  return (
    <PageTransition>
      <HeroSection />
      <CategoryStrip />
      <PopularFlavors />
      <RoastingBanner />
      <FeatureCards />
      <CoffeeUpdates />
      <HoursSection />
    </PageTransition>
  );
}
