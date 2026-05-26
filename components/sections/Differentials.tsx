import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { images } from "@/lib/images";
import type { ImageAsset } from "@/lib/images";

type Item = {
  image: ImageAsset;
  eyebrow: string;
  title: string;
  body: string;
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
  return (
    <section id="diferencas" className="py-16 md:py-24">
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

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.eyebrow}>
              <AppImage
                asset={item.image}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 88vw"
                className="h-auto w-full rounded-2xl object-cover"
              />
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
