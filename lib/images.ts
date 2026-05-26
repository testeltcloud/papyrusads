/*
  IMAGE MANIFEST
  ----------------------------------------------------------------------------
  Every image on the site is declared here once: its public path, intrinsic
  size (width/height — real pixel dimensions, used to reserve space and avoid
  layout shift) and alt text. Components read paths from this map; they never
  hard-code them.

  All assets were exported from the Papyrus Ads Figma. To swap one, drop the new
  file in `public/images/` and update its `src` (and `width`/`height` if the
  aspect ratio changes).
*/
export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const dir = "/images";

export const images = {
  logo: {
    src: `${dir}/logo.png`,
    width: 600,
    height: 192,
    alt: "Papyrus Ads",
  },
  heroApp: {
    src: `${dir}/hero-app.png`,
    width: 1056,
    height: 1432,
    alt: "Aplicativo Papyrus Ads exibindo o dashboard de anúncios",
  },
  featureDashboard: {
    src: `${dir}/feature-dashboard.png`,
    width: 2452,
    height: 887,
    alt: "Filtros do dashboard por plataforma e período",
  },
  featureIndicators: {
    src: `${dir}/feature-indicators.png`,
    width: 508,
    height: 637,
    alt: "Lista de indicadores: investimento, vendas, ROAS e CPA",
  },
  featureGlossary: {
    src: `${dir}/feature-glossary.png`,
    width: 572,
    height: 717,
    alt: "Glossário integrado explicando os termos de tráfego pago",
  },
  featureGift: {
    src: `${dir}/feature-gift.png`,
    width: 447,
    height: 476,
    alt: "15 dias grátis para testar, sem cartão de crédito",
  },
  diffTransparency: {
    src: `${dir}/diff-transparency.png`,
    width: 626,
    height: 644,
    alt: "Empresário acompanhando os anúncios pelo celular",
  },
  diffClarity: {
    src: `${dir}/diff-clarity.png`,
    width: 626,
    height: 644,
    alt: "Tela do app explicando indicadores de forma simples",
  },
  diffSecurity: {
    src: `${dir}/diff-security.png`,
    width: 626,
    height: 644,
    alt: "Cliente tranquila com a segurança dos próprios dados",
  },
  specialistPhones: {
    src: `${dir}/specialist-phones.png`,
    width: 734,
    height: 975,
    alt: "Dois celulares exibindo telas do Papyrus Ads",
  },
  ctaPhone: {
    src: `${dir}/cta-phone.png`,
    width: 625,
    height: 793,
    alt: "Celular com o app Papyrus Ads aberto",
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;

/* Platform logos used in the "Conexão" illustration (referenced directly). */
export const platformLogos = {
  googleAds: { src: `${dir}/icon-googleads.png`, alt: "Google Ads" },
  analytics: { src: `${dir}/icon-analytics.png`, alt: "Google Analytics" },
  meta: { src: `${dir}/icon-meta.png`, alt: "Meta Ads" },
  tiktok: { src: `${dir}/icon-tiktok.png`, alt: "TikTok Ads" },
} as const;

export const logoMark = { src: `${dir}/logo-mark.png`, alt: "Papyrus" } as const;
