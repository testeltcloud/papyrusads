"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AppImage } from "@/components/ui/AppImage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { images } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SpecialistCTA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.from(".specialist-text > *", {
      opacity: 0,
      y: 28,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".specialist-card",
        start: "top 82%",
        once: true,
      },
    });

    gsap.from(".specialist-image", {
      opacity: 0,
      y: 36,
      scale: 0.97,
      duration: 0.9,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".specialist-card",
        start: "top 82%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section className="py-8 md:py-14" ref={containerRef}>
      <div className="container-page">
        <div className="specialist-card overflow-hidden rounded-[28px] bg-navy text-white">
          <div className="grid items-end lg:grid-cols-2 overflow-hidden">

            {/* Text — first on mobile, second (right) on desktop */}
            <div className="specialist-text order-1 lg:order-2 min-w-0 p-7 sm:p-10 md:p-12 lg:p-14 lg:self-center">
              <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2rem] md:text-[2.25rem]">
                Fale com um especialista.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
                Nossa equipe está pronta para te ajudar a entender como o Papyrus
                Ads pode transformar a forma como você acompanha seus resultados.
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/75 sm:mt-4 sm:text-lg">
                Se quiser tirar dúvidas ou ver o app em ação, é só chamar a gente
                no WhatsApp.
              </p>

              <WhatsAppButton size="lg" className="mt-6 w-full sm:w-auto sm:mt-7">
                Falar com um especialista no WhatsApp
              </WhatsAppButton>

              <p className="mt-6 font-bold text-white sm:mt-7">Sem robôs, sem enrolação.</p>
              <p className="mt-1 text-sm text-white/70 sm:text-base">
                Uma conversa de verdade com quem entende do assunto.
              </p>
            </div>

            {/* Image — second on mobile (below text), first (left) on desktop */}
            <div className="specialist-image order-2 lg:order-1 flex items-end justify-center px-8 pt-0 pb-0 sm:px-12 lg:px-6 lg:pt-8">
              <AppImage
                asset={images.specialistPhones}
                sizes="(min-width: 1024px) 480px, 80vw"
                className="mx-auto h-auto w-full max-w-[240px] sm:max-w-[340px] lg:mx-0 lg:max-w-[480px]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
