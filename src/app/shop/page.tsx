import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";

import { formatPrice, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop — Bloomly",
  description: "Browse hand-tied bouquets, roses, gift boxes, and seasonal blooms.",
};

const filters = ["All", "Bouquets", "Roses", "Bestsellers", "Gift Boxes"];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <div className="bg-ink px-4 py-2.5 text-center text-xs text-ink-foreground sm:text-sm">
        Free same-day delivery on orders over $75.{" "}
        <Link href="/shop" className="font-semibold underline underline-offset-2">
          Shop blooms
        </Link>
      </div>

      <header className="border-b border-border/70 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="display text-2xl text-primary">
            Bloomly
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/shop" className="underline decoration-2 underline-offset-8">
              products
            </Link>
            <Link href="/#category" className="text-muted-foreground hover:text-foreground">
              story
            </Link>
            <Link href="/#contact" className="text-muted-foreground hover:text-foreground">
              florists
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              home
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Search" className="rounded-full p-2 hover:bg-petal">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/shop" aria-label="Cart" className="rounded-full p-2 hover:bg-petal">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <button type="button" aria-label="Account" className="rounded-full p-2 hover:bg-petal">
              <UserRound className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="sticker w-fit">Catalog</p>
          <h1 className="display mt-3 text-4xl sm:text-5xl">Shop all blooms</h1>
          <p className="mt-3 text-muted-foreground">
            Hand-tied bouquets, gift-ready boxes, and seasonal favorites — ready to send today.
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter, i) => (
            <button
              key={filter}
              type="button"
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
                i === 0 ? "bg-ink text-ink-foreground" : "bg-card text-foreground hover:bg-petal"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {products.map((product) => {
            const off =
              product.compareAt && product.compareAt > product.price
                ? Math.round(
                    ((product.compareAt - product.price) / product.compareAt) * 100,
                  )
                : null;
            return (
              <Link
                key={product.slug}
                href={`/product/${product.slug}`}
                className="group rounded-[1.5rem] bg-card p-3 shadow-sm transition hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-petal/70">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 45vw"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-card text-primary shadow">
                    <Heart className="h-4 w-4" />
                  </span>
                  {off ? (
                    <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-[11px] font-semibold text-white">
                      {off}% OFF
                    </span>
                  ) : null}
                </div>
                <div className="px-1 pb-1 pt-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {product.category}
                  </p>
                  <h2 className="mt-1 font-display text-lg font-semibold leading-tight">
                    {product.name}
                  </h2>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{formatPrice(product.price)}</span>
                    {product.compareAt ? (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.compareAt)}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className="border-t border-border/70 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bloomly ·{" "}
        <Link href="/" className="underline underline-offset-2">
          Back home
        </Link>
      </footer>
    </div>
  );
}
