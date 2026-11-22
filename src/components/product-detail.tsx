"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Check,
  ChevronRight,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  UserRound,
} from "lucide-react";

import {
  formatPrice,
  getRelatedProducts,
  type Product,
} from "@/lib/products";

type Tab = "details" | "reviews" | "faqs";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(rating) ? "fill-current" : "fill-transparent opacity-30"}`}
        />
      ))}
    </div>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState(product.sizes[2] ?? product.sizes[0] ?? "");
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<Tab>("reviews");

  const related = useMemo(() => getRelatedProducts(product.slug, 4), [product.slug]);
  const discount =
    product.compareAt && product.compareAt > product.price
      ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
      : null;

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <div className="bg-ink px-4 py-2.5 text-center text-xs text-ink-foreground sm:text-sm">
        Sign up and get 20% off your first order.{" "}
        <Link href="/shop" className="font-semibold underline underline-offset-2">
          Sign Up Now
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
            <Link href="/shop" className="text-muted-foreground hover:text-foreground">
              packaging
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

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/shop" className="hover:text-foreground">
            {product.category}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-[0.18fr_0.82fr_1fr] lg:gap-6 xl:grid-cols-[88px_1fr_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
            {product.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 ${
                  activeImage === i ? "border-ink" : "border-transparent"
                }`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>

          <div className="order-1 overflow-hidden rounded-[1.5rem] bg-petal/50 lg:order-2">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={product.images[activeImage] ?? product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>

          <div className="order-3 lg:pl-4">
            <h1 className="display text-3xl sm:text-4xl md:text-5xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <Stars rating={product.rating} />
              <span className="text-sm font-medium">
                {product.rating.toFixed(1)}/5
              </span>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <p className="font-display text-3xl font-semibold">{formatPrice(product.price)}</p>
              {product.compareAt ? (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.compareAt)}
                  </span>
                  {discount ? (
                    <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-600">
                      -{discount}%
                    </span>
                  ) : null}
                </>
              ) : null}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {product.description}
            </p>

            <div className="mt-7 border-t border-border pt-6">
              <p className="text-sm font-medium text-muted-foreground">Select Palette</p>
              <div className="mt-3 flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    aria-label={c.name}
                    title={c.name}
                    onClick={() => setColor(c.name)}
                    className="relative grid h-9 w-9 place-items-center rounded-full border border-black/10"
                    style={{ backgroundColor: c.hex }}
                  >
                    {color === c.name ? <Check className="h-4 w-4 text-white drop-shadow" /> : null}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-muted-foreground">Choose Size</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                      size === s
                        ? "bg-ink text-ink-foreground"
                        : "bg-muted text-foreground hover:bg-petal"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-12 items-center justify-between rounded-full bg-muted px-2 sm:w-36">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-card"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-semibold">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-card"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                className="h-12 flex-1 rounded-full bg-ink px-6 font-display text-sm font-semibold uppercase tracking-wide text-ink-foreground transition hover:brightness-110"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 border-b border-border">
          <div className="flex justify-center gap-8 text-sm font-medium sm:gap-12">
            {(
              [
                ["details", "Product Details"],
                ["reviews", "Rating & Reviews"],
                ["faqs", "FAQs"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`pb-3 ${
                  tab === id
                    ? "border-b-2 border-ink text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {tab === "details" ? (
            <ul className="mx-auto max-w-2xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {product.details.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {tab === "reviews" ? (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-xl font-semibold">
                  All Reviews{" "}
                  <span className="text-muted-foreground">({product.reviewCount})</span>
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm"
                  >
                    <SlidersHorizontal className="h-4 w-4" /> Latest
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-ink-foreground"
                  >
                    Write a Review
                  </button>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {product.reviews.map((review) => (
                  <article
                    key={review.name + review.text.slice(0, 12)}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <Stars rating={review.rating} />
                    <h3 className="mt-3 font-display font-semibold">{review.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {review.text}
                    </p>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  className="rounded-full border border-border px-6 py-2.5 text-sm font-medium hover:bg-petal"
                >
                  Load more Reviews
                </button>
              </div>
            </div>
          ) : null}

          {tab === "faqs" ? (
            <div className="mx-auto max-w-2xl space-y-4">
              {product.faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-display font-semibold">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <section className="mt-16 pb-8">
          <h2 className="display text-center text-3xl sm:text-4xl">You might also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((item) => {
              const off =
                item.compareAt && item.compareAt > item.price
                  ? Math.round(((item.compareAt - item.price) / item.compareAt) * 100)
                  : null;
              return (
                <Link key={item.slug} href={`/product/${item.slug}`} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-petal/60">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 22vw, 45vw"
                    />
                  </div>
                  <h3 className="mt-3 font-display text-sm font-semibold sm:text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground sm:text-sm">{item.category}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{formatPrice(item.price)}</span>
                    {item.compareAt ? (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(item.compareAt)}
                      </span>
                    ) : null}
                    {off ? (
                      <span className="text-xs font-semibold text-red-600">{off}% OFF</span>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 rounded-[1.75rem] bg-ink px-6 py-10 text-ink-foreground sm:px-10 md:grid-cols-[1.2fr_1fr]">
          <h2 className="display text-3xl sm:text-4xl">
            Stay up to date about our latest offers and stock updates
          </h2>
          <form className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                @
              </span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-12 w-full rounded-full border-0 bg-card pl-9 pr-4 text-sm text-foreground outline-none"
              />
            </div>
            <button
              type="button"
              className="h-12 rounded-full bg-primary px-6 font-display text-sm font-semibold text-primary-foreground"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
