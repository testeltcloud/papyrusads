/*
  Central place for outbound links. Swap these for the real store / WhatsApp
  URLs when they are available — every button on the site reads from here.
*/
export const links = {
  appStore: "https://apps.apple.com/br/app/papyrus-ads/id6754659021",
  playStore: "https://play.google.com/store/apps/details?id=com.papyrusads.app&hl=pt_BR",
  whatsapp: "https://wa.me/5500000000000",
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Diferenciais", href: "#diferencas" },
  { label: "FAQ", href: "#faq" },
] as const;
