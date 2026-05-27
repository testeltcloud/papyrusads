"use client";

import { useEffect, useRef } from "react";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/lib/images";
import gsap from "gsap";

export function Hero() {
  const textContainerRef  = useRef<HTMLDivElement>(null);
  const mockupLeftRef     = useRef<HTMLDivElement>(null);
  const mockupRightRef    = useRef<HTMLDivElement>(null);
  const phonesRowRef      = useRef<HTMLDivElement>(null);
  const cursorRef         = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Entrance animations ────────────────────────────────────────────────
    gsap.fromTo(
      textContainerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    gsap.fromTo(
      mockupLeftRef.current,
      { rotation: 0, opacity: 0 },
      { rotation: -10, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.25, transformOrigin: "bottom center" }
    );
    gsap.fromTo(
      mockupRightRef.current,
      { rotation: 0, opacity: 0 },
      { rotation: 10, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.25, transformOrigin: "bottom center" }
    );

    // ── Cursor showcase — runs once after phones settle, all screen sizes ─────
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cursorTl: gsap.core.Timeline | undefined;
    const dc = gsap.delayedCall(2.05, () => {
      const cursor     = cursorRef.current;
      const leftPhone  = mockupLeftRef.current;
      const rightPhone = mockupRightRef.current;
      const row        = phonesRowRef.current;
      if (!cursor || !leftPhone || !rightPhone || !row) return;

      // Responsive click values — smaller movements on mobile to avoid overflow
      const desktop = window.innerWidth >= 1024;
      const xOff    = desktop ? 55  : 22;
      const scaleV  = desktop ? 1.16 : 1.08;
      const yOff    = desktop ? -18 : -8;

      const rowRect = row.getBoundingClientRect();
      const toLocal = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width  * 0.50 - rowRect.left - 11,
          y: r.top  + r.height * 0.38 - rowRect.top  -  5,
        };
      };

      const right = toLocal(rightPhone);
      const left  = toLocal(leftPhone);

      gsap.set(cursor, { x: right.x + 180, y: right.y + 15, opacity: 0, scale: 1 });

      cursorTl = gsap.timeline();

      cursorTl
        // ── Slide in → right phone ────────────────────────────────────────
        .to(cursor, { opacity: 1, duration: 0.22, ease: "power2.out" })
        .to(cursor, { x: right.x, y: right.y, duration: 0.72, ease: "power3.inOut" }, "<0.04")

        // Click: phone straightens, drifts out, scales up
        .to(cursor, { scale: 0.76, duration: 0.11, ease: "power2.in" })
        .to(rightPhone, {
          rotation: 0, x: xOff, y: yOff, scale: scaleV,
          filter: "drop-shadow(0 28px 44px rgba(17,93,140,0.35))",
          duration: 0.38, ease: "back.out(1.6)",
        }, "<")
        .to(cursor, { scale: 1, duration: 0.14, ease: "back.out(2.5)" })
        .to({}, { duration: 0.55 })

        // ── Right resets, cursor sweeps to left phone ──────────────────────
        .to(rightPhone, { rotation: 10, x: 0, y: 0, scale: 1, filter: "none", duration: 0.50, ease: "power3.inOut" })
        .to(cursor, { x: left.x, y: left.y, duration: 0.82, ease: "power3.inOut" }, "<0.14")

        // Click left phone
        .to(cursor, { scale: 0.76, duration: 0.11, ease: "power2.in" })
        .to(leftPhone, {
          rotation: 0, x: -xOff, y: yOff, scale: scaleV,
          filter: "drop-shadow(0 28px 44px rgba(17,93,140,0.35))",
          duration: 0.38, ease: "back.out(1.6)",
        }, "<")
        .to(cursor, { scale: 1, duration: 0.14, ease: "back.out(2.5)" })
        .to({}, { duration: 0.55 })

        // ── Left resets, cursor exits ──────────────────────────────────────
        .to(leftPhone, { rotation: -10, x: 0, y: 0, scale: 1, filter: "none", duration: 0.50, ease: "power3.inOut" })
        .to(cursor, { x: left.x - 180, y: left.y + 30, opacity: 0, duration: 0.44, ease: "power2.in" }, "<0.1");
    });

    return () => {
      dc.kill();
      cursorTl?.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 flex h-[calc(100svh-64px)] flex-col overflow-hidden bg-canvas pt-6 md:h-[calc(100svh-72px)] md:pt-8"
    >
      {/* ── Gradient blobs ──────────────────────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/[0.07] dark:bg-brand/[0.14] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-mint/[0.10] dark:bg-mint/[0.07] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-[65%] w-[660px] -translate-x-1/2 rounded-[50%] bg-mint/[0.22] dark:bg-mint/[0.13] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-[45%] w-[420px] -translate-x-1/2 rounded-[50%] bg-brand/[0.10] dark:bg-brand/[0.20] blur-2xl" />

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <div className="container-page relative z-10 flex flex-1 flex-col items-center">
        <div
          ref={textContainerRef}
          className="flex flex-col items-center text-center opacity-0 max-w-4xl px-4"
        >
          <h1 className="text-[2.5rem] font-medium leading-[1.04] tracking-tight text-ink sm:text-[3.25rem] lg:text-[clamp(2.75rem,7svh,4.25rem)] xl:text-[clamp(3rem,7.8svh,4.75rem)]">
            Você no{" "}
            <span className="inline-block rounded-full bg-[#ccec60] px-5 pb-1.5 pt-0.5 text-[#1d3531]">
              controle
            </span>{" "}
            dos seus anúncios.
          </h1>

          <p className="mt-4 text-xl font-medium text-brand/60 dark:text-mint/70 md:text-2xl">
            Sem complicações. Sem enrolação.
          </p>

          <p className="mt-3 max-w-2xl text-[1.1rem] leading-relaxed text-body md:text-[1.25rem]">
            Veja os dados que realmente importam, entenda seus resultados e tome
            decisões com mais segurança.
          </p>
        </div>

        {/* ── Phone row ───────────────────────────────────────────────────── */}
        <div
          ref={phonesRowRef}
          className="relative z-10 mt-auto flex w-full max-w-[760px] items-end justify-center pt-4"
        >
          {/* Hand cursor — desktop only, hidden until GSAP shows it */}
          <div
            ref={cursorRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-20 opacity-0 will-change-transform drop-shadow-md"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff" stroke="#0B3B5A" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
              <path d="M9 11.5V5.4a1.55 1.55 0 0 1 3.1 0v4.9m0-1.4a1.55 1.55 0 0 1 3.1 0v2m0-1.3a1.55 1.55 0 0 1 3.1 0V16c0 3.2-2.1 5.4-5.4 5.4h-1.3c-1.7 0-2.8-.6-4-1.9l-3.1-3.4a1.55 1.55 0 0 1 2.2-2.2l1.6 1.5V11.5Z" />
            </svg>
          </div>

          <div
            ref={mockupLeftRef}
            className="h-[38svh] sm:h-[40svh] lg:h-[44svh] w-auto origin-bottom -mr-[8%] sm:-mr-[5%] mb-[7svh] sm:mb-[8svh] will-change-transform opacity-0"
          >
            <AppImage
              asset={images.foto1}
              priority
              sizes="(min-width: 1024px) 250px, 40vw"
              className="h-full w-auto drop-shadow-2xl"
            />
          </div>

          {/* Centre slot — the TransitionSection phone overlays here */}
          <div className="w-[130px] sm:w-[175px] lg:w-[220px] shrink-0" aria-hidden />

          <div
            ref={mockupRightRef}
            className="h-[38svh] sm:h-[40svh] lg:h-[44svh] w-auto origin-bottom -ml-[8%] sm:-ml-[5%] mb-[7svh] sm:mb-[8svh] will-change-transform opacity-0"
          >
            <AppImage
              asset={images.foto2}
              priority
              sizes="(min-width: 1024px) 250px, 40vw"
              className="h-full w-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
