import Image from "next/image";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { links } from "@/lib/site";

const faqs: FaqItem[] = [
  {
    q: <>Preciso ter conhecimento técnico<br />para usar o Papyrus Ads?</>,
    a: "De jeito nenhum. O app foi criado justamente para quem quer entender os seus resultados sem complicações técnicas. Tudo é explicado com exemplos simples e linguagem acessível.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Usamos as integrações oficiais do Google e da Meta, com autorização concedida apenas por você. Seus dados são criptografados e nunca compartilhados com terceiros.",
  },
  {
    q: "O que acontece depois do período gratuito?",
    a: "Você testa por 15 dias sem cartão de crédito. Ao final, escolhe um plano para continuar — e se decidir não seguir, é só não assinar. Sem cobranças automáticas ou surpresas.",
  },
  {
    q: "O app mostra dados de quais plataformas?",
    a: "Hoje conectamos Google Ads, Meta Ads (Facebook e Instagram) e TikTok Ads, reunindo tudo em um único painel simples de acompanhar.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center">
            {/* Coluna esquerda */}
            <div data-reveal="left" className="lg:col-span-5">
              <h2 className="text-[1.6rem] sm:text-5xl font-medium leading-tight tracking-tight">
                Perguntas<br />frequentes
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-body">
                Ainda tem dúvidas?
                <br />
                A gente responde com transparência.
              </p>
              <div className="mt-7 flex flex-row md:flex-col items-stretch gap-3">
                <a href={links.appStore} aria-label="Baixar na App Store" className="flex-1 md:flex-none">
                  <Image src="/images/adc/ButtonAzul.png" alt="Download para iOS" width={620} height={176} className="w-full md:w-[210px] h-auto" />
                </a>
                <a href={links.playStore} aria-label="Baixar no Google Play" className="flex-1 md:flex-none">
                  <Image src="/images/adc/ButtonVerde.png" alt="Download para Android" width={720} height={176} className="w-full md:w-[210px] h-auto" />
                </a>
              </div>
            </div>

            {/* Coluna direita — FAQ accordion */}
            <div data-reveal data-delay="2" className="lg:col-span-7">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
