"use client";

import { useId, useState } from "react";
import { ChevronRightIcon } from "@/components/icons";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  // Single-open accordion; the first question starts expanded (as in the design).
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const open = i === openIndex;
        const headingId = `${baseId}-h-${i}`;
        const panelId = `${baseId}-p-${i}`;

        return (
          <div
            key={item.q}
            className={`rounded-[20px] transition-colors duration-200 ${
              open ? "bg-brand text-white" : "bg-surface-2 text-ink ring-1 ring-line"
            }`}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
              >
                <span className="text-[0.98rem] font-semibold md:text-base">
                  {item.q}
                </span>
                <ChevronRightIcon
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    open ? "rotate-90 text-white" : "text-muted"
                  }`}
                />
              </button>
            </h3>

            {/* grid 0fr → 1fr gives a smooth, JS-free height transition.
                The panel stays in the DOM (no `hidden`) so the collapse can
                animate; aria-expanded on the button conveys state to AT. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-white/75 md:px-6">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
