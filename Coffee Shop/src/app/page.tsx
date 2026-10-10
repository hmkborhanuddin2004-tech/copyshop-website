import { Phase1_Navbar } from "@/components/phases/Phase1_Navbar";
import { Phase2_Hero } from "@/components/phases/Phase2_Hero";
import { Phase3_About } from "@/components/phases/Phase3_About";
import { Phase4_Flavors } from "@/components/phases/Phase4_Flavors";
import { Phase5_Benefits } from "@/components/phases/Phase5_Benefits";
import { Phase6_Testimonials } from "@/components/phases/Phase6_Testimonials";
import { Phase7_Gallery } from "@/components/phases/Phase7_Gallery";
import { Phase8_Footer } from "@/components/phases/Phase8_Footer";

export default function Home() {
  return (
    <>
      <Phase1_Navbar />
      <main>
        <Phase2_Hero />
        <Phase3_About />
        <Phase4_Flavors />
        <Phase5_Benefits />
        <Phase6_Testimonials />
        <Phase7_Gallery />
      </main>
      <Phase8_Footer />
    </>
  );
}
