import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { DownloadButtons } from "@/components/ui/DownloadButtons";

const faqs: FaqItem[] = [
  {
    q: "Preciso ter conhecimento técnico para usar o Papyrus Ads?",
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
    <section id="faq" className="py-16 md:py-24">
      <div className="container-page">
      <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-[2.25rem] font-medium leading-tight tracking-tight sm:text-5xl">
            Perguntas
            <br className="hidden sm:block" /> frequentes
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-body">
            Ainda tem dúvidas?
            <br />
            A gente responde com transparência.
          </p>
          <DownloadButtons stacked className="mt-7 max-w-[260px]" />
        </div>

        <div className="lg:col-span-7">
          <FaqAccordion items={faqs} />
        </div>
      </div>
      </div>
    </section>
  );
}
