import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TransitionSection } from "@/components/sections/TransitionSection";
import { Features } from "@/components/sections/Features";
import { Differentials } from "@/components/sections/Differentials";
import { SpecialistCTA } from "@/components/sections/SpecialistCTA";
import { FAQ } from "@/components/sections/FAQ";
import { AboutCTA } from "@/components/sections/AboutCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* overflow-x-clip stops the rotated hero phones from widening the page
          (horizontal only — vertical overflow stays visible for the phone z-index
          effect, and the sticky Header lives outside <main> so it's unaffected). */}
      <main className="overflow-x-clip">
        <Hero />
        <TransitionSection />
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

