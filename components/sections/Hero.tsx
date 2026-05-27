"use client";

import { useEffect, useRef } from "react";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/lib/images";
import gsap from "gsap";

export function Hero() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const mockupLeftRef = useRef<HTMLDivElement>(null);
  const mockupRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Slide up + fade in the headline block on load
    gsap.fromTo(
      textContainerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    // Side "ghost" phones fan outwards from behind the centre phone
    gsap.fromTo(
      mockupLeftRef.current,
      { rotation: 0, opacity: 0 },
      { rotation: -10, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.25, transformOrigin: "bottom center" }
    );
    gsap.fromTo(
      mockupRightRef.current,
      { rotation: 0, opacity: 0 },
      { rotation: 10, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.25, transformOrigin: "bottom center" }
    );
  }, []);

  return (
    // Fixed to the viewport height (minus the sticky header) so the green band
    // fills the screen exactly and ends right at the bottom — never leaking past
    // it. overflow-hidden clips the phones at that bottom edge. The phones are
    // sized in svh so they scale with the viewport and stay aligned with the
    // shared centre phone (pulled up by the matching -mt in svh).
    <section
      id="home"
      className="relative z-10 flex h-[calc(100svh-64px)] flex-col overflow-hidden bg-[#1d3531] bg-[url('/images/bg-hero.svg')] bg-no-repeat bg-top pt-6 md:h-[calc(100svh-72px)] md:pt-8"
    >
      <div className="container-page flex flex-1 flex-col items-center">
        {/* Centered Hero Text Content */}
        <div
          ref={textContainerRef}
          className="flex flex-col items-center text-center opacity-0 max-w-4xl px-4"
        >
          {/* On large screens the font scales with viewport HEIGHT (clamp+svh) so a
              short window shrinks the headline instead of letting the phones below
              collide with it. Mobile/tablet keep fixed width-based sizes. */}
          <h1 className="text-[2.5rem] font-medium leading-[1.04] tracking-tight text-white sm:text-[3.25rem] lg:text-[clamp(2.75rem,7svh,4.25rem)] xl:text-[clamp(3rem,7.8svh,4.75rem)]">
            Você no{" "}
            <span className="inline-block rounded-full bg-[#ccec60] px-5 pb-1.5 pt-0.5 text-[#1d3531]">
              controle
            </span>{" "}
            dos seus anúncios.
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-medium text-[#5d8a83]">
            Sem complicações. Sem enrolação.
          </p>

          <p className="mt-3 max-w-2xl text-[1.1rem] md:text-[1.25rem] leading-relaxed text-white/80">
            Veja os dados que realmente importam, entenda seus resultados e tome
            decisões com mais segurança.
          </p>
        </div>

        {/* Ghost phones anchored to the bottom of the green (mt-auto). Sized in
            svh so they scale with the screen; the shared centre phone (from
            TransitionSection) overlays the empty centre slot. */}
        <div className="relative z-10 mt-auto flex w-full max-w-[760px] items-end justify-center pt-4">
          <div
            ref={mockupLeftRef}
            className="h-[38svh] sm:h-[40svh] lg:h-[44svh] w-auto origin-bottom -mr-[8%] sm:-mr-[5%] opacity-0"
          >
            <AppImage
              asset={images.foto1}
              priority
              sizes="(min-width: 1024px) 250px, 40vw"
              className="h-full w-auto"
            />
          </div>

          {/* Centre slot — reserves width for the shared phone overlaid on top */}
          <div className="w-[130px] sm:w-[175px] lg:w-[220px] shrink-0" aria-hidden />

          <div
            ref={mockupRightRef}
            className="h-[38svh] sm:h-[40svh] lg:h-[44svh] w-auto origin-bottom -ml-[8%] sm:-ml-[5%] opacity-0"
          >
            <AppImage
              asset={images.foto2}
              priority
              sizes="(min-width: 1024px) 250px, 40vw"
              className="h-full w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
