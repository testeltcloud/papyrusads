import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { ConnectionIllustration } from "@/components/ConnectionIllustration";
import { images } from "@/lib/images";

const card =
  "rounded-card bg-surface p-6 md:p-8 flex flex-col";

export function Features() {
  return (
    <section id="funcionalidades" className="py-16 md:py-24">
      <div className="container-page">
        {/* Section heading + intro, side by side on desktop */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-12">
          <h2 className="text-[2.25rem] font-medium leading-tight tracking-tight sm:text-5xl">
            O que o Papyrus Ads faz por você
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-body">
            Todas as funcionalidades que você precisa para acompanhar seus
            anúncios com clareza, segurança e sem complicações.
          </p>
        </div>

        {/* Bento grid: 5/7 on top, 4/4/4 below */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {/* Conexão */}
          <article className={`${card} lg:col-span-5`}>
            <h3 className="text-[1.6rem] font-medium leading-snug text-ink">
              Conexão com Google, Meta Ads e TikTok Ads
            </h3>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
              Importe automaticamente os dados das principais plataformas de
              tráfego pago com segurança e confiabilidade.
            </p>
            <div className="mt-8 flex flex-1 items-center justify-center">
              <ConnectionIllustration />
            </div>
          </article>

          {/* Dashboard */}
          <article className="rounded-card bg-surface flex flex-col overflow-hidden lg:col-span-7 relative p-6 md:p-8 min-h-[380px]">
            <div className="lg:max-w-[17rem] relative z-10">
              <h3 className="text-[1.6rem] font-medium leading-snug text-ink">
                Dashboard simples e visual
              </h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
                Entenda em poucos segundos como suas campanhas estão
                performando. Ideal para consultar à noite, no sofá, ou no
                intervalo entre reuniões.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[55%]">
              <AppImage
                asset={images.featureDashboard}
                sizes="(min-width: 1024px) 450px, (min-width: 768px) 45vw, 88vw"
                className="ml-auto h-auto w-full object-cover object-left-top"
              />
            </div>
          </article>

          {/* Indicadores */}
          <article className="rounded-card bg-surface flex flex-col overflow-hidden lg:col-span-4 min-h-[440px]">
            <div className="p-6 md:p-8 pb-0">
              <h3 className="text-[1.6rem] font-medium leading-snug text-ink">
                Indicadores claros e direto ao ponto
              </h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
                Veja o que realmente importa: investimento, vendas, ROAS, CPA e
                muito mais — sem precisar de tradução da agência.
              </p>
            </div>
            <div className="mt-auto flex items-end pt-4 w-full">
              <AppImage
                asset={images.featureIndicators}
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 88vw"
                className="h-auto w-[110%] max-w-[110%] -ml-[5%] object-cover object-top"
              />
            </div>
          </article>

          {/* Glossário */}
          <article className="rounded-card bg-surface flex flex-col overflow-hidden lg:col-span-4 min-h-[440px]">
            <div className="p-6 md:p-8 pb-0 relative z-10">
              <h3 className="text-[1.6rem] font-medium leading-snug text-ink">
                Glossário integrado
              </h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-body">
                Não sabe o que é CAC ou ROAS? O app te explica. Com definições
                simples e exemplos, você aprende enquanto usa.
              </p>
            </div>
            <div className="mt-6 flex-1 flex items-end justify-center px-4">
              <AppImage
                asset={images.featureGlossary}
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 88vw"
                className="h-auto w-[120%] max-w-[120%] sm:w-[130%] sm:max-w-[130%] translate-y-[15%]"
              />
            </div>
          </article>

          {/* 15 dias grátis */}
          <article className="rounded-card bg-[#F8FAFC] flex flex-col overflow-hidden lg:col-span-4 p-6 md:p-8 min-h-[440px]">
            <div className="w-full flex justify-center mb-10 -mt-2">
              <AppImage
                asset={images.featureGift}
                sizes="300px"
                className="h-auto w-[240px] sm:w-[280px] object-contain"
              />
            </div>
            <div className="mt-auto flex flex-col items-start text-left w-full">
              <h3 className="text-[1.6rem] font-medium leading-snug text-ink">
                15 dias grátis para testar
              </h3>
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-body">
                Experimente agora, sem cartão de crédito. Veja na prática como é
                simples ter autonomia.
              </p>
              <DownloadButtons className="mt-6 w-full" size="md" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
