import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind BrewCraft Coffee Roasters — our origins in Senbagh, Noakhali, mission, and the artisans that make every cup memorable.",
};

export default function AboutPage() {
  return <AboutContent />;
}
