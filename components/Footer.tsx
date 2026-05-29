import Image from "next/image";
import { Logo } from "@/components/Logo";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { WhatsAppIcon } from "@/components/icons";
import { links } from "@/lib/site";

const usefulLinks = [
  { label: "Sobre o Papyrus Ads", href: "#home" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Planos", href: "#download-ios" },
  { label: "Fale com especialista", href: links.whatsapp },
];

const legalLinks = [
  { label: "Termos de uso", href: "#" },
  { label: "Política de privacidade", href: "#" },
];

const socials = [
  { label: "Instagram", src: "/images/adc/instagran.png" },
  { label: "Facebook",  src: "/images/adc/Facebook.png"  },
  { label: "LinkedIn",  src: "/images/adc/in.png"        },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-body">
              Simples, confiável e feito para CEOs que querem entender seus
              anúncios sem complicação.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, src }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white dark:bg-surface shadow-sm ring-1 ring-line transition-opacity hover:opacity-75"
                  >
                    <Image src={src} alt={label} width={22} height={22} className="object-contain" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <nav className="lg:col-span-3" aria-label="Links úteis">
            <h2 className="text-sm font-bold uppercase tracking-wide text-ink">
              Links úteis
            </h2>
            <ul className="mt-4 space-y-3 text-[0.95rem]">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-body transition-colors hover:text-brand">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 text-[0.95rem]">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-body transition-colors hover:text-brand">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Download + contact */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-wide text-ink">
              Baixe agora mesmo
            </h2>
            <DownloadButtons className="mt-4" />

            <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-ink">
              Dúvidas?
            </h2>
            <p className="mt-3 text-[0.95rem] text-body">
              Fale com a gente pelo WhatsApp
            </p>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-3 h-11 bg-green px-5 text-[0.95rem] text-white hover:bg-green-dark"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} Papyrus Ads — Todos os direitos
          reservados. | Designed by Lab Culture
        </div>
      </div>
    </footer>
  );
}
