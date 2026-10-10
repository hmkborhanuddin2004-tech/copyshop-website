import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with BrewCraft Coffee Roasters in Senbagh, Noakhali. Find our address, phone, email, and opening hours — or send us a message directly.",
};

export default function ContactPage() {
  return <ContactContent />;
}
