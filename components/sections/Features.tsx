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

const card = "rounded-[2rem] bg-surface flex flex-col";
const heading = "text-2xl lg:text-[1.75rem] font-bold leading-tight tracking-tight text-[#1d3531]";
const body = "mt-3 text-[1.0625rem] leading-relaxed text-gray-600";

export function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate heading and subtitle
    gsap.from(".feature-header > *", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".feature-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate the bento grid cards
    const cards = gsap.utils.toArray(".bento-card");
    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  return (
    <section id="funcionalidades" className="py-16 md:py-24" ref={containerRef}>
      <div className="container-page">
        <div className="feature-header grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-12">
          <h2 className="text-[2.25rem] font-bold text-[#1d3531] leading-tight tracking-tight sm:text-5xl">
            O que o Papyrus Ads faz por você
          </h2>
          <p className="max-w-xl text-lg lg:text-xl leading-relaxed text-gray-600">
            Todas as funcionalidades que você precisa para acompanhar seus
            anúncios com clareza, segurança e sem complicações.
          </p>
        </div>

        <div className="bento-grid mt-10 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-12">
          <article className={`${card} bento-card p-6 md:p-8 lg:col-span-5`}>
            <h3 className={heading}>
              Conexão com Google, Meta Ads e TikTok Ads
            </h3>
            <p className={body}>
              Importe automaticamente os dados das principais plataformas de
              tráfego pago com segurança e confiabilidade.
            </p>
            <div className="mt-8 flex flex-1 items-center justify-center">
              <ConnectionIllustration />
            </div>
          </article>

          <article className={`${card} bento-card overflow-hidden lg:col-span-7`}>
            <div className="p-6 pb-0 md:p-8 md:pb-0">
              <h3 className={heading}>Dashboard simples e visual</h3>
              <p className={body}>
                Entenda em poucos segundos como suas campanhas estão
                performando. Ideal para consultar à noite, no sofá, ou no
                intervalo entre reuniões.
              </p>
            </div>
            <DashboardFilters />
          </article>

          <article className={`${card} bento-card overflow-hidden lg:col-span-6 flex flex-col`}>
            <div className="p-6 pb-0 md:p-8 md:pb-0">
              <h3 className={heading}>Glossário integrado</h3>
              <p className={body}>
                Não sabe o que é CAC ou ROAS? O app te explica. Com definições
                simples e exemplos, você aprende enquanto usa.
              </p>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-center px-0 pb-0 relative">
              <AppImage
                asset={images.featureGlossary}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="h-auto w-full max-w-[460px]"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none z-10" />
            </div>
          </article>
          <div className="bento-card lg:col-span-6 flex flex-col justify-between">
            <article className={`${card} flex flex-col flex-1 overflow-hidden`}>
              <div className="flex flex-1 items-center justify-center px-0 pt-0 relative min-h-[250px] md:min-h-[300px]">
                <AppImage
                  asset={images.featureGift}
                  sizes="(min-width: 1024px) 383px, 90vw"
                  className="h-auto w-full max-w-[383px] scale-[1.25] origin-center transition-transform"
                />
              </div>
              <div className="p-6 pt-0 md:p-8 md:pt-0">
                <h3 className={heading}>15 dias grátis para testar</h3>
                <p className={`${body} mt-2`}>
                  Experimente agora, sem cartão de crédito. Veja na prática como é
                  simples ter autonomia.
                </p>
              </div>
            </article>
            <DownloadButtons className="mt-5 w-full [&>a]:flex-1" size="md" block />
          </div>
        </div>
      </div>
    </section>
  );
}
