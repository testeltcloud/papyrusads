import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { ConnectionIllustration } from "@/components/ConnectionIllustration";
import { images } from "@/lib/images";

const card = "rounded-card bg-surface flex flex-col";
const heading = "text-[1.6rem] font-medium leading-snug text-ink";
const body = "mt-3 text-[1.0625rem] leading-relaxed text-body";

export function Features() {
  return (
    <section id="funcionalidades" className="py-16 md:py-24">
      <div className="container-page">
        {/* Section heading + intro */}
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
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-12">
          {/* Conexão */}
          <article className={`${card} p-6 md:p-8 lg:col-span-5`}>
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

          {/* Dashboard — text left, filter UI right, fully visible */}
          <article
            className={`${card} p-6 md:p-8 lg:col-span-7 lg:flex-row lg:items-center lg:gap-8`}
          >
            <div className="lg:w-[42%] lg:shrink-0">
              <h3 className={heading}>Dashboard simples e visual</h3>
              <p className={body}>
                Entenda em poucos segundos como suas campanhas estão
                performando. Ideal para consultar à noite, no sofá, ou no
                intervalo entre reuniões.
              </p>
            </div>
            <div className="mt-8 flex flex-1 items-center justify-center lg:mt-0 lg:justify-end">
              <AppImage
                asset={images.featureDashboard}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="h-auto w-full max-w-[460px]"
              />
            </div>
          </article>

          {/* Indicadores — list aligned to the bottom */}
          <article className={`${card} overflow-hidden lg:col-span-4`}>
            <div className="p-6 pb-0 md:p-8 md:pb-0">
              <h3 className={heading}>Indicadores claros e direto ao ponto</h3>
              <p className={body}>
                Veja o que realmente importa: investimento, vendas, ROAS, CPA e
                muito mais — sem precisar de tradução da agência.
              </p>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-center px-6">
              <AppImage
                asset={images.featureIndicators}
                sizes="(min-width: 1024px) 300px, 80vw"
                className="h-auto w-full max-w-[300px]"
              />
            </div>
          </article>

          {/* Glossário — phone bleeds slightly off the bottom */}
          <article className={`${card} overflow-hidden lg:col-span-4`}>
            <div className="p-6 pb-0 md:p-8 md:pb-0">
              <h3 className={heading}>Glossário integrado</h3>
              <p className={body}>
                Não sabe o que é CAC ou ROAS? O app te explica. Com definições
                simples e exemplos, você aprende enquanto usa.
              </p>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-center">
              <AppImage
                asset={images.featureGlossary}
                sizes="(min-width: 1024px) 280px, 70vw"
                className="h-auto w-[78%] max-w-[280px] translate-y-[6%]"
              />
            </div>
          </article>

          {/* 15 dias grátis — gift on top, buttons at the bottom */}
          <article className={`${card} p-6 md:p-8 lg:col-span-4`}>
            <div className="flex items-center justify-center pb-2">
              <AppImage
                asset={images.featureGift}
                sizes="220px"
                className="h-auto w-[200px]"
              />
            </div>
            <h3 className={`${heading} mt-2`}>15 dias grátis para testar</h3>
            <p className={body}>
              Experimente agora, sem cartão de crédito. Veja na prática como é
              simples ter autonomia.
            </p>
            <DownloadButtons className="mt-auto pt-6" size="md" />
          </article>
        </div>
      </div>
    </section>
  );
}
