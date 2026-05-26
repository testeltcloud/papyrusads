import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Differentials } from "@/components/sections/Differentials";
import { SpecialistCTA } from "@/components/sections/SpecialistCTA";
import { FAQ } from "@/components/sections/FAQ";
import { AboutCTA } from "@/components/sections/AboutCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Differentials />
        <SpecialistCTA />
        <FAQ />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
