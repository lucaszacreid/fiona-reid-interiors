"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageReveal from "@/components/ui/ImageReveal";
import { fadeIn } from "@/lib/animations";
import type { Work } from "@/lib/works";

type Row =
  | { type: "full"; items: [Work] }
  | { type: "split"; items: [Work] | [Work, Work] }
  | { type: "centered"; items: [Work] };

function buildRows(items: Work[]): Row[] {
  const rows: Row[] = [];
  let i = 0;
  let cycle = 0;
  while (i < items.length) {
    const step = cycle % 3;
    if (step === 0) {
      rows.push({ type: "full", items: [items[i]] });
      i += 1;
    } else if (step === 1) {
      const pair = items.slice(i, i + 2);
      rows.push({ type: "split", items: pair as [Work] | [Work, Work] });
      i += pair.length;
    } else {
      rows.push({ type: "centered", items: [items[i]] });
      i += 1;
    }
    cycle += 1;
  }
  return rows;
}

function GridItem({
  work,
  aspect,
  sizes = "100vw",
  onOpen,
}: {
  work: Work;
  aspect: string;
  sizes?: string;
  onOpen: (work: Work) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(work)}
      className="group relative block w-full overflow-hidden text-left"
      style={{ aspectRatio: aspect }}
    >
      <ImageReveal
        src={work.coverImage}
        alt={work.title}
        sizes={sizes}
        className="h-full w-full"
      />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[var(--color-bg-dark)]/0 opacity-0 transition-all duration-500 group-hover:bg-[var(--color-bg-dark)]/40 group-hover:opacity-100">
        <span className="text-section-heading text-[var(--color-text-inverse)]">{work.title}</span>
        <span className="text-caption-label text-[var(--color-text-inverse)]">{work.location}</span>
      </div>
    </button>
  );
}

export default function PortfolioGrid({ works }: { works: Work[] }) {
  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const rows = buildRows(works);

  useEffect(() => {
    if (!activeWork) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveWork(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeWork]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-6">
        {rows.map((row, idx) => {
          if (row.type === "full") {
            return (
              <GridItem key={row.items[0].id} work={row.items[0]} aspect="16/9" onOpen={setActiveWork} />
            );
          }
          if (row.type === "split") {
            const [first, second] = row.items;
            return (
              <div key={idx} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <GridItem
                  work={first}
                  aspect="3/4"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  onOpen={setActiveWork}
                />
                {second && (
                  <GridItem
                    work={second}
                    aspect="4/3"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    onOpen={setActiveWork}
                  />
                )}
              </div>
            );
          }
          return (
            <div key={row.items[0].id} className="content-max px-0 md:px-24">
              <GridItem
                work={row.items[0]}
                aspect="3/4"
                sizes="(min-width: 768px) 60vw, 100vw"
                onOpen={setActiveWork}
              />
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeWork && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[80] flex items-end justify-center bg-[var(--color-bg-dark)]/70 sm:items-center"
            onClick={() => setActiveWork(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-[var(--color-bg-primary)] p-6 sm:p-10"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActiveWork(null)}
                className="absolute top-6 right-6 text-2xl leading-none text-[var(--color-text-primary)]"
              >
                ×
              </button>

              <div className="mb-8 flex flex-col gap-1">
                <h3 className="text-page-title">{activeWork.title}</h3>
                <p className="text-caption-label text-[var(--color-text-secondary)]">
                  {activeWork.location} — {activeWork.year}
                </p>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {activeWork.images.map((src) => (
                  <div key={src} className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={src}
                      alt={activeWork.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <p className="text-body-copy max-w-2xl text-[var(--color-text-secondary)]">
                {activeWork.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
