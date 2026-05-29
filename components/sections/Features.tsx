"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { ConnectionIllustration } from "@/components/ConnectionIllustration";
import { DashboardFilters } from "@/components/DashboardFilters";
import { images } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const card = "group rounded-[2.5rem] bg-white dark:bg-surface border border-gray-200 dark:border-line shadow-md flex flex-col transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 relative overflow-hidden";
const heading = "text-2xl lg:text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-[#1d3531] dark:text-white transition-colors duration-500";
const body = "mt-4 text-[1.125rem] leading-relaxed text-gray-600 dark:text-body font-medium";

export function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.from(".feature-header > *", {
      opacity: 0,
      y: 40,
      rotationX: -20,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".feature-header",
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    const cards = gsap.utils.toArray(".bento-card");

    cards.forEach((card: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        }
      });

      tl.from(card, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
      });

      const contentElements = card.querySelectorAll(".bento-card-content > *");
      if (contentElements.length > 0) {
        tl.from(contentElements, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
        }, "-=0.4");
      }
    });
  }, { scope: containerRef });

  return (
    <section id="funcionalidades" className="py-20 md:py-32 relative overflow-hidden" ref={containerRef}>
      {/* Background Decorative Elements for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-[#e6f2ef]/50 dark:from-[#1d3531]/15 to-transparent blur-3xl -z-10 rounded-full" />
      
      <div className="container-page relative z-10">
        <div className="feature-header grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
          <h2 className="text-[2.5rem] font-extrabold text-[#1d3531] dark:text-white leading-[1.1] tracking-[-0.03em] sm:text-[3.5rem]">
            O que o Papyrus Ads <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d3531] to-[#4caf82]">faz por você</span>
          </h2>
          <p className="max-w-xl text-lg lg:text-[1.25rem] leading-relaxed text-gray-600 dark:text-body font-medium">
            Todas as funcionalidades que você precisa para acompanhar seus
            anúncios com clareza, segurança e sem complicações.
          </p>
        </div>

        <div className="bento-grid mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-12">
          <article className={`${card} bento-card p-8 md:p-10 lg:col-span-5`}>
            <div className="bento-card-content relative z-10">
              <h3 className={heading}>
                Integração nativa com os maiores canais
              </h3>
              <p className={body}>
                Google, Meta e TikTok Ads conectados em segundos. Seus dados de tráfego pago centralizados automaticamente, com total precisão e segurança.
              </p>
            </div>
            <div className="mt-10 flex flex-1 items-center justify-center relative">
              <ConnectionIllustration />
            </div>
          </article>

          <article className={`${card} bento-card overflow-hidden lg:col-span-7`}>
            <div className="bento-card-content p-8 pb-0 md:p-10 md:pb-0 relative z-10">
              <h3 className={heading}>Dashboard inteligente e direto ao ponto</h3>
              <p className={body}>
                Visualize a performance real das suas campanhas num piscar de olhos. Projetado para decisões rápidas, seja na mesa do escritório ou no sofá de casa.
              </p>
            </div>
            <div className="relative mt-4 flex flex-1 flex-col">
              <DashboardFilters />
            </div>
          </article>

          <article className={`${card} bento-card overflow-hidden lg:col-span-6 flex flex-col`}>
             <div className="bento-card-content p-8 pb-0 md:p-10 md:pb-0 relative z-10">
              <h3 className={heading}>Domine o vocabulário do tráfego</h3>
              <p className={body}>
                CAC, ROAS, LTV? Explicamos tudo. Um glossário integrado com definições claras e exemplos práticos para você aprender enquanto gerencia.
              </p>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-center px-0 pb-0 relative group-hover:scale-105 transition-transform duration-700 ease-out">
              <AppImage
                asset={images.featureGlossary}
                sizes="(min-width: 1024px) 340px, 80vw"
                className="h-auto w-full max-w-[300px] lg:max-w-[340px] drop-shadow-2xl"
              />
            </div>
          </article>
          
          <div className="bento-card lg:col-span-6 flex flex-col justify-between gap-6">
            <article className={`${card} flex flex-col flex-1 overflow-hidden group`}>
              <div className="flex flex-1 items-center justify-center px-0 pt-0 relative min-h-[180px] md:min-h-[240px] overflow-hidden">
                <AppImage
                  asset={images.featureGift}
                  sizes="(min-width: 1024px) 280px, 70vw"
                  className="h-auto w-full max-w-[220px] md:max-w-[280px] scale-100 md:scale-[1.1] origin-center transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-[1.18]"
                />
              </div>
              <div className="bento-card-content p-8 pt-0 md:p-10 md:pt-0 relative z-20">
                <h3 className={heading}>Teste grátis por 15 dias</h3>
                <p className={`${body} mt-3`}>
                  Comece agora, sem cadastrar cartão de crédito. Descubra na prática como é ter o controle total dos seus anúncios nas palmas das mãos.
                </p>
              </div>
            </article>
            <DownloadButtons className="w-full" size="lg" block />
          </div>
        </div>
      </div>
    </section>
  );
}
