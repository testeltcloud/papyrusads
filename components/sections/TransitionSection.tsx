"use client";

import { useEffect, useRef } from "react";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/lib/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin on client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TransitionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mockupMainRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  // Individual refs for metric cards to control them on desktop
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const card6Ref = useRef<HTMLDivElement>(null);
  const card7Ref = useRef<HTMLDivElement>(null);
  const card8Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mockupMain = mockupMainRef.current;
    const heading = headingRef.current;
    const section = sectionRef.current;

    if (!mockupMain || !heading || !section) return;

    // Entrance: the central phone emerges on page load (fade + scale + rise)
    // instead of being there already.
    gsap.fromTo(
      mockupMain,
      { opacity: 0, scale: 0.82, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.3, ease: "power3.out", delay: 0.2 }
    );

    const mm = gsap.matchMedia();

    // DESKTOP (1024px+): the phone is sticky (CSS) and bridges from the hero down
    // into the cards. We only fade the cards/heading in on scroll here.
    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );

      const leftCards = [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current].filter(Boolean) as HTMLDivElement[];
      gsap.fromTo(
        leftCards,
        { opacity: 0, x: 360, scale: 0.3, rotation: -20 },
        {
          opacity: 1, x: 0, scale: 1, rotation: 0, stagger: 0.12, duration: 1.2, ease: "back.out(1.2)",
          scrollTrigger: { trigger: section, start: "top 35%", toggleActions: "play none none reverse" },
        }
      );

      const rightCards = [card5Ref.current, card6Ref.current, card7Ref.current, card8Ref.current].filter(Boolean) as HTMLDivElement[];
      gsap.fromTo(
        rightCards,
        { opacity: 0, x: -360, scale: 0.3, rotation: 20 },
        {
          opacity: 1, x: 0, scale: 1, rotation: 0, stagger: 0.12, duration: 1.2, ease: "back.out(1.2)",
          scrollTrigger: { trigger: section, start: "top 35%", toggleActions: "play none none reverse" },
        }
      );
    });

    // MOBILE & TABLET (<1024px): phone is static (straddles the line, then scrolls
    // away to the card grid). Simple entrance.
    mm.add("(max-width: 1023px)", () => {
      gsap.fromTo(heading, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

      // Mobile cards alternating side entrance
      const mobileCards = gsap.utils.toArray(".mobile-side-card") as HTMLElement[];
      mobileCards.forEach((card, index) => {
        // For the first card, just fade and slide up
        if (index === 0) {
          gsap.fromTo(card, { opacity: 0, y: 40 }, { 
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
          });
        } else {
          // Odd indexes from left (-80), Even from right (80)
          const startX = index % 2 !== 0 ? -80 : 80;
          gsap.fromTo(card, { opacity: 0, x: startX }, {
            opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 flow-root bg-white pb-20 md:pb-24 lg:pb-28"
    >
      <div
        ref={mockupMainRef}
        className="relative z-40 mx-auto w-[140px] sm:w-[190px] lg:w-[235px] -mt-[40svh] sm:-mt-[38svh] lg:-mt-[56svh] mb-[18svh] sm:mb-[10svh] lg:mb-[14svh] lg:sticky lg:top-[calc(100vh_-_600px)] opacity-0 pointer-events-none"
      >
        <AppImage
          asset={images.mockupMain}
          priority
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 235px, 195px"
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      <div
        ref={headingRef}
        className="relative z-50 -mt-10 lg:-mt-14 mb-12  mx-auto max-w-[1240px] px-6 lg:px-10 opacity-0"
      >
        <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:text-left">
          {/* Left Column: Badge + Heading */}
          <div className="flex flex-col items-center lg:items-start max-w-md lg:w-[42%]">
            <div className="mb-4 inline-flex rounded-full border border-[#1d3531]/10 bg-[#1d3531]/5 px-3 py-1 text-xs font-bold tracking-wider text-[#1d3531] uppercase">
              Transparência
            </div>
            <h2 className="text-[2.25rem] sm:text-[2.5rem] lg:text-[2.75rem] font-bold text-[#1d3531] leading-[1.1] tracking-tight">
              Indicadores claros e <br className="hidden lg:block" />
              <span className="relative inline-block whitespace-nowrap mt-1">
                <span className="relative z-10">direto ao ponto</span>
                <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ccec60] rounded-sm"></span>
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:w-[38%] lg:mt-8 lg:text-right">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-600">
              Veja o que realmente importa:{" "}
              <strong className="font-semibold text-[#1d3531]">investimento, vendas, ROAS, CPA</strong>{" "}
              e muito mais — sem precisar de tradução da agência.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative z-30 w-full max-w-[1320px] mx-auto h-[540px] px-4 pointer-events-none">

        <div ref={card1Ref} className="absolute top-0 left-[8%] w-[270px] opacity-0">
          <AppImage asset={images.metricCard1} sizes="270px" className="w-full h-auto drop-shadow-lg" />
        </div>
        <div ref={card2Ref} className="absolute top-[130px] left-[2%] w-[270px] opacity-0">
          <AppImage asset={images.metricCard2} sizes="270px" className="w-full h-auto drop-shadow-lg" />
        </div>
        <div ref={card3Ref} className="absolute top-[260px] left-[8%] w-[270px] opacity-0">
          <AppImage asset={images.metricCard3} sizes="270px" className="w-full h-auto drop-shadow-lg" />
        </div>
        <div ref={card4Ref} className="absolute top-[390px] left-[2%] w-[270px] opacity-0">
          <AppImage asset={images.metricCard6} sizes="270px" className="w-full h-auto drop-shadow-lg" />
        </div>

        {/* Right column — same row tops as the left so the columns align */}
        <div ref={card5Ref} className="absolute top-0 right-[8%] w-[270px] opacity-0">
          <AppImage asset={images.metricCard4} sizes="270px" className="w-full h-auto drop-shadow-lg" />
        </div>
        <div ref={card6Ref} className="absolute top-[130px] right-[2%] w-[270px] opacity-0">
          <AppImage asset={images.metricCard5} sizes="270px" className="w-full h-auto drop-shadow-lg" />
        </div>
        <div ref={card7Ref} className="absolute top-[260px] right-[8%] w-[270px] opacity-0">
          <AppImage asset={images.metricCard7} sizes="270px" className="w-full h-auto drop-shadow-lg" />
        </div>
        <div ref={card8Ref} className="absolute top-[390px] right-[2%] w-[270px] opacity-0">
          <AppImage asset={images.metricCard9} sizes="270px" className="w-full h-auto drop-shadow-lg" />
        </div>
      </div>

      {/* Mobile Card List — Animated from sides and grouped (overlapping) */}
      <div className="lg:hidden w-full px-4 mt-2 pb-8 overflow-hidden">
        <div className="flex flex-col">
          {[
            { img: images.metricCard1, bg: 'bg-[#3b82f6]/20' }, // blue
            { img: images.metricCard2, bg: 'bg-[#10b981]/20' }, // emerald
            { img: images.metricCard3, bg: 'bg-[#8b5cf6]/20' }, // violet
            { img: images.metricCard4, bg: 'bg-[#f43f5e]/20' }, // rose
            { img: images.metricCard5, bg: 'bg-[#f59e0b]/20' }, // amber
            { img: images.metricCard6, bg: 'bg-[#0ea5e9]/20' }, // sky
            { img: images.metricCard7, bg: 'bg-[#ec4899]/20' }, // pink
            { img: images.metricCard9, bg: 'bg-[#6366f1]/20' }  // indigo
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`mobile-side-card relative w-full max-w-[340px] mx-auto opacity-0 ${idx > 0 ? '-mt-16 sm:-mt-20' : ''}`}
            >
              <div className={`${item.bg} rounded-[2rem] p-3 sm:p-4 backdrop-blur-md border border-white/40 shadow-xl`}>
                <AppImage asset={item.img} sizes="(min-width: 640px) 270px, 90vw" className="w-full h-auto rounded-[1.25rem] shadow-sm bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
