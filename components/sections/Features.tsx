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

        {/* Bento grid */}
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

          {/* Dashboard — text on top, image below spanning full width */}
          <article className={`${card} overflow-hidden lg:col-span-7`}>
            <div className="p-6 pb-0 md:p-8 md:pb-0">
              <h3 className={heading}>Dashboard simples e visual</h3>
              <p className={body}>
                Entenda em poucos segundos como suas campanhas estão
                performando. Ideal para consultar à noite, no sofá, ou no
                intervalo entre reuniões.
              </p>
            </div>
            <div className="mt-6 flex flex-1 items-end">
              <AppImage
                asset={images.featureDashboard}
                sizes="(min-width: 1024px) 58vw, 90vw"
                className="h-auto w-full"
              />
            </div>
          </article>

          {/* Indicadores */}
          <article className={`${card} overflow-hidden lg:col-span-4`}>
            <div className="p-6 pb-0 md:p-8 md:pb-0 relative z-50 bg-surface">
              <h3 className={heading}>Indicadores claros e direto ao ponto</h3>
              <p className={body}>
                Veja o que realmente importa: investimento, vendas, ROAS, CPA e
                muito mais — sem precisar de tradução da agência.
              </p>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-center px-0 pb-0 relative min-h-[450px]">
              <div className="relative w-[80%] h-[90%] flex items-end">
                <AppImage
                  asset={images.metricCard9}
                  sizes="(min-width: 1024px) 300px, 80vw"
                  className="absolute bottom-[300px] left-0 right-0 mx-auto w-full drop-shadow-md transition-transform"
                  style={{ zIndex: 10 }}
                />
                <AppImage
                  asset={images.metricCard1}
                  sizes="(min-width: 1024px) 300px, 80vw"
                  className="absolute bottom-[270px] left-0 right-0 mx-auto w-full drop-shadow-md transition-transform"
                  style={{ zIndex: 20 }}
                />
                <AppImage
                  asset={images.metricCard2}
                  sizes="(min-width: 1024px) 300px, 80vw"
                  className="absolute bottom-[240px] left-0 right-0 mx-auto w-full drop-shadow-md transition-transform"
                  style={{ zIndex: 30 }}
                />
                <AppImage
                  asset={images.metricCard3}
                  sizes="(min-width: 1024px) 300px, 80vw"
                  className="absolute bottom-[200px] left-0 right-0 mx-auto w-full drop-shadow-md transition-transform"
                  style={{ zIndex: 40 }}
                />
                <AppImage
                  asset={images.metricCard4}
                  sizes="(min-width: 1024px) 300px, 80vw"
                  className="absolute bottom-[150px] left-0 right-0 mx-auto w-full drop-shadow-md transition-transform"
                  style={{ zIndex: 50 }}
                />
                <AppImage
                  asset={images.metricCard5}
                  sizes="(min-width: 1024px) 300px, 80vw"
                  className="absolute bottom-[95px] left-0 right-0 mx-auto w-full drop-shadow-md transition-transform"
                  style={{ zIndex: 60 }}
                />
                <AppImage
                  asset={images.metricCard6}
                  sizes="(min-width: 1024px) 300px, 80vw"
                  className="absolute bottom-[45px] left-0 right-0 mx-auto w-full drop-shadow-md transition-transform"
                  style={{ zIndex: 70 }}
                />
                <AppImage
                  asset={images.metricCard7}
                  sizes="(min-width: 1024px) 300px, 80vw"
                  className="absolute bottom-[15px] left-0 right-0 mx-auto w-full drop-shadow-md transition-transform"
                  style={{ zIndex: 80 }}
                />
                <AppImage
                  asset={images.metricCard8}
                  sizes="(min-width: 1024px) 300px, 80vw"
                  className="absolute bottom-0 left-0 right-0 mx-auto w-full drop-shadow-md transition-transform"
                  style={{ zIndex: 90 }}
                />
              </div>
            </div>
          </article>

          {/* Glossário */}
          <article className={`${card} overflow-hidden lg:col-span-4 flex flex-col`}>
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
                sizes="(min-width: 1024px) 383px, 90vw"
                className="h-auto w-full max-w-[383px]"
              />
              {/* Efeito esfumaçado integrando o celular com o fundo do card */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none z-10" />
            </div>
          </article>

          {/* 15 dias grátis */}
          <div className="lg:col-span-4 flex flex-col justify-between">
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
