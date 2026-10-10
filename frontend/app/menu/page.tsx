import type { Metadata } from "next";
import MenuContent from "@/components/menu/MenuContent";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full BrewCraft Coffee Roasters menu — handcrafted specialty drinks and freshly baked pastries in Senbagh, Noakhali.",
};

export default function MenuPage() {
  return <MenuContent />;
}
