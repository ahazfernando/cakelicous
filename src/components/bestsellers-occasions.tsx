"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";

import { formatPrice, products } from "@/lib/products";

const bestsellers = products.filter((p) =>
  ["peony-cloud", "blush-bundle", "velvet-roses", "garden-gift", "sunrise-bouquet", "rose-romance"].includes(
    p.slug,
  ),
);

const occasions = [
  {
    name: "Bouquets",
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=500&q=80",
    rotate: "-rotate-3",
  },
  {
    name: "Gift Boxes",
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=500&q=80",
    rotate: "rotate-2",
  },
  {
    name: "Birthday",
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=500&q=80",
    rotate: "-rotate-2",
  },
  {
    name: "Wedding",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=500&q=80",
    rotate: "rotate-3",
  },
  {
    name: "Just Because",
    src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=500&q=80",
    rotate: "-rotate-1",
  },
];

const ribbon = ["BLOOM", "GIFTS", "FLOWERS", "BLOOM"];

export function BestsellersOccasions() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-md text-3xl text-primary sm:text-4xl md:text-5xl">
            Our bestsellers. Proven by celebrations.
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground md:text-right">
            The arrangements guests ask for again — soft palettes, fresh stems, gift-ready wraps.
          </p>
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="absolute -left-2 top-1/3 z-10 hidden h-10 w-10 place-items-center rounded-full bg-petal text-primary shadow md:grid"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="absolute -right-2 top-1/3 z-10 hidden h-10 w-10 place-items-center rounded-full bg-petal text-primary shadow md:grid"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scroller}
            className="flex gap-4 overflow-x-auto pb-2 scrollbar-none sm:gap-5"
          >
            {bestsellers.map((item) => (
              <Link
                key={item.slug}
                href={`/product/${item.slug}`}
                className="group w-[12.5rem] shrink-0 sm:w-[14rem]"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-petal">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="224px"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-card text-primary shadow">
                    <Heart className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-md transition hover:brightness-105"
          >
            Go to catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-petal py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-8 h-16 bg-cream"
          style={{
            clipPath: "ellipse(70% 100% at 50% 0%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="display text-center text-3xl text-ink-foreground sm:text-4xl md:text-5xl">
            <span className="text-ink">Choose a gift for the occasion</span>
          </h2>

          <div className="mt-12 flex gap-4 overflow-x-auto pb-6 pt-4 scrollbar-none md:grid md:grid-cols-5 md:overflow-visible md:pb-2">
            {occasions.map((item) => (
              <Link
                key={item.name}
                href="/shop"
                className={`group min-w-[10rem] overflow-hidden rounded-[1.35rem] border-[3px] border-card bg-card shadow-md transition hover:-translate-y-1 md:min-w-0 ${item.rotate}`}
              >
                <div className="bg-primary px-3 py-2 text-center font-display text-sm font-semibold text-primary-foreground">
                  {item.name}
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="180px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-primary py-3 text-primary-foreground">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.22em]">
          {[...ribbon, ...ribbon, ...ribbon, ...ribbon].map((word, i) => (
            <span key={`${word}-${i}`} className="inline-flex items-center gap-8">
              {word}
              <span aria-hidden>+</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
