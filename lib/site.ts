/*
  Central place for outbound links. Swap these for the real store / WhatsApp
  URLs when they are available — every button on the site reads from here.
*/
export const links = {
  appStore: "#download-ios",
  playStore: "#download-android",
  whatsapp: "https://wa.me/5500000000000",
} as const;

/* Anchor targets used by the header navigation. */
export const nav = [
  { label: "Home", href: "#home" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Diferenças", href: "#diferencas" },
  { label: "FAQ", href: "#faq" },
] as const;
