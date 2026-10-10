import type { Metadata } from "next";
import GalleryContent from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A glimpse inside BrewCraft Coffee Roasters in Senbagh, Noakhali — our space, our craft, and the community that makes it feel like home.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
