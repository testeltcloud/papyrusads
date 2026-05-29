"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { images } from "@/lib/images";
import type { ImageAsset } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Item = {
  image: ImageAsset;
  eyebrow: string;
  title: string;
  body: string;
  gradient?: boolean;
};

const items: Item[] = [
  {
    image: images.diffTransparency,
    eyebrow: "Transparência real",
    title: "Você vê o que a agência vê.",
    body: "Acesso direto aos dados das plataformas, sem filtros ou interpretações. Nada de relatórios manipulados — aqui a informação é fiel à realidade.",
  },
  {
    image: images.diffClarity,
    gradient: true,
    eyebrow: "Clareza e simplicidade",
    title: "Tudo explicado de forma simples.",
    body: "Indicadores como ROAS, CAC e CPA aparecem com explicações e exemplos claros. Entenda os resultados do seu negócio com confiança, mesmo sem formação técnica.",
  },
  {
    image: images.diffSecurity,
    eyebrow: "Segurança em primeiro lugar",
    title: "Seus dados, sob sua proteção.",
    body: "Integrações seguras com a autorização oficial do Google e Meta. Seus dados são criptografados e usados apenas por você.",
  },
];

export function Differentials() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.from(".diff-card", {
      opacity: 0,
      scale: 0.82,
      duration: 0.65,
      stagger: 0.14,
      ease: "back.out(1.5)",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".diff-grid",
        start: "top 82%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="diferencas" className="py-16 md:py-24" ref={containerRef}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2.25rem] font-medium leading-tight tracking-tight sm:text-5xl">
            Por que o Papyrus Ads é diferente
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-body">
            Feito para quem quer entender os números — sem depender da agência,
            sem linguagem difícil, sem surpresas.
          </p>
          <DownloadButtons className="mt-7 justify-center" />
        </div>

        <div className="diff-grid mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.eyebrow}
              className="diff-card group cursor-default"
            >
              <div className="relative overflow-hidden rounded-2xl transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.04]">
                <AppImage
                  asset={item.image}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 88vw"
                  className="h-auto w-full object-cover"
                />
                {item.gradient && (
                  <>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-brand/[0.22] via-brand/[0.08] to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-white/70 dark:from-canvas/60 to-transparent" />
                  </>
                )}
              </div>
              <p className="mt-5 text-base font-medium text-muted">
                {item.eyebrow}
              </p>
              <h3 className="mt-1 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-body">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
