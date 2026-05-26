import { AppImage } from "@/components/ui/AppImage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { images } from "@/lib/images";

export function SpecialistCTA() {
  return (
    <section className="py-8 md:py-14">
      <div className="container-page">
        <div className="overflow-hidden rounded-[28px] bg-navy text-white">
          <div className="grid items-center gap-8 p-8 sm:p-10 md:p-12 lg:grid-cols-2 lg:gap-6 lg:p-14">
            <div className="lg:pr-6">
              <AppImage
                asset={images.specialistPhones}
                sizes="(min-width: 1024px) 480px, 80vw"
                className="mx-auto h-auto w-full max-w-[420px] lg:mx-0 lg:max-w-[480px]"
              />
            </div>

            <div>
              <h2 className="text-[2rem] font-bold tracking-tight text-white sm:text-[2.25rem]">
                Fale com um especialista.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
                Nossa equipe está pronta para te ajudar a entender como o Papyrus
                Ads pode transformar a forma como você acompanha seus resultados.
              </p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/75">
                Se quiser tirar dúvidas ou ver o app em ação, é só chamar a gente
                no WhatsApp.
              </p>

              <WhatsAppButton size="lg" className="mt-7">
                Falar com um especialista no WhatsApp
              </WhatsAppButton>

              <p className="mt-7 font-bold text-white">Sem robôs, sem enrolação.</p>
              <p className="mt-1 text-white/70">
                Uma conversa de verdade com quem entende do assunto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
