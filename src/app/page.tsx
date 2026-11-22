import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Heart,
  Home as HomeIcon,
  MapPin,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  UserRound,
} from "lucide-react";

import { BestsellersOccasions } from "@/components/bestsellers-occasions";
import { formatPrice, products as catalog } from "@/lib/products";

export const metadata: Metadata = {
  title: "Bloomly — Gifts & Flowers",
  description:
    "Hand-tied bouquets, curated gift boxes, and same-day floral delivery for every occasion.",
  openGraph: {
    title: "Bloomly — Gifts & Flowers",
    description: "Where petals become gifts. Fresh blooms and thoughtful presents, delivered.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const nav = ["Home", "Category", "Shop", "Contact", "Florists"];

const categories = [
  {
    name: "Bouquets",
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Roses",
    src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Gift Boxes",
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Plants",
    src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Occasions",
    src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=400&q=80",
  },
];

const featured = catalog.slice(0, 3);

const gallery = [
  "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80",
];

const posts = [
  {
    title: "How to keep blooms fresher, longer",
    src: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Gift boxes that feel personal",
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Color stories for spring tables",
    src: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=400&q=80",
  },
];

const reasons = [
  "Same-day city delivery on orders before 2pm",
  "Farm-fresh stems sourced every morning",
  "Hand-tied arrangements by in-house florists",
  "Gift-ready wrapping with handwritten notes",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-foreground pb-24 md:pb-0">
      {/* Hero — Loafly structure */}
      <section className="relative overflow-hidden rounded-b-[2rem] bg-ink md:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2000&q=80"
            alt="Fresh floral arrangements on a warm wooden table"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/35 to-ink/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-5 sm:px-6 lg:px-8">
          <header className="animate-rise flex items-center justify-between gap-3 rounded-2xl bg-ink/80 px-3 py-2.5 shadow-lg backdrop-blur-md sm:px-5">
            <a href="/" className="display text-xl text-primary sm:text-2xl">
              Bloomly
            </a>
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item}
                  href={item === "Shop" ? "/shop" : item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                  className="rounded-xl px-3 py-1.5 text-sm font-medium text-ink-foreground/90 transition hover:bg-primary hover:text-primary-foreground"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Link
                href="/shop"
                aria-label="Cart"
                className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <ShoppingBag className="h-4 w-4" />
              </Link>
            </div>
          </header>

          <div className="mx-auto flex min-h-[52vh] max-w-3xl flex-col items-center justify-center px-2 pb-6 pt-12 text-center sm:min-h-[60vh] sm:pt-16">
            <h1 className="display animate-rise-delay-1 text-[2.6rem] text-ink-foreground sm:text-6xl md:text-7xl lg:text-[5.1rem]">
              Where petals
              <br />
              become gifts.
            </h1>
            <p className="animate-rise-delay-2 mt-4 max-w-md text-sm text-ink-foreground/85 sm:mt-5 sm:text-base">
              Hand-tied blooms and curated presents for the moments that matter.
            </p>
            <Link
              href="/shop"
              className="animate-rise-delay-2 mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lg transition hover:brightness-105 sm:mt-8"
            >
              Explore Our Blooms
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="category" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="sticker">Category</span>
          <h2 className="display mt-4 text-3xl sm:text-5xl">Fresh picks of the season</h2>
        </div>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-5 sm:overflow-visible">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/shop"
              className="group min-w-[7.5rem] flex-1 text-center sm:min-w-0"
            >
              <div className="mx-auto aspect-square w-full max-w-[9rem] overflow-hidden rounded-[1.5rem] bg-petal shadow-sm transition group-hover:-translate-y-1">
                <Image
                  src={cat.src}
                  alt={cat.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 rounded-2xl bg-ink px-3 py-2.5 font-display text-sm font-semibold text-ink-foreground">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products — 3 colored cards */}
      <section id="shop" className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className={`rounded-[1.75rem] p-5 pt-6 text-center shadow-sm transition hover:-translate-y-1 ${product.tone ?? "bg-ink text-ink-foreground"}`}
            >
              <div className="animate-float mx-auto aspect-[4/5] w-full max-w-[16rem] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={420}
                  height={520}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="display mt-5 text-2xl">{product.name}</h3>
              <p className="mt-1 font-display text-lg opacity-90">{formatPrice(product.price)}</p>
              <span
                className={`mt-4 inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide ${product.btn ?? "bg-primary text-primary-foreground"}`}
              >
                View product
                <ShoppingBag className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <BestsellersOccasions />

      {/* Gallery + delivery + hours */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {gallery.map((src, i) => (
              <div
                key={src}
                className={`overflow-hidden rounded-[1.5rem] ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}
              >
                <Image
                  src={src}
                  alt="Bloomly studio arrangement"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-[1.75rem] bg-ink p-6 text-ink-foreground sm:p-7">
              <h3 className="display text-2xl">Schedule delivery</h3>
              <p className="mt-2 text-sm text-ink-foreground/70">
                Pick a date and we will bring blooms to their door.
              </p>
              <form className="mt-5 space-y-3">
                <input
                  type="text"
                  placeholder="Recipient name"
                  className="w-full rounded-2xl border-0 bg-ink-foreground/10 px-4 py-3 text-sm outline-none placeholder:text-ink-foreground/45 focus:ring-2 focus:ring-primary"
                />
                <input
                  type="date"
                  className="w-full rounded-2xl border-0 bg-ink-foreground/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  className="w-full rounded-2xl bg-primary py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground"
                >
                  Reserve delivery
                </button>
              </form>
            </div>

            <div className="grid flex-1 gap-4 rounded-[1.75rem] bg-petal p-5 sm:grid-cols-[1fr_0.9fr] sm:p-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
                  <Clock3 className="h-3.5 w-3.5 text-primary" /> Opening hours
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex justify-between gap-4">
                    <span>Mon – Fri</span>
                    <span className="font-semibold">8am – 7pm</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Saturday</span>
                    <span className="font-semibold">9am – 6pm</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span className="font-semibold">10am – 4pm</span>
                  </li>
                </ul>
              </div>
              <div className="relative min-h-[10rem] overflow-hidden rounded-[1.25rem]">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80"
                  alt="Bloomly storefront"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="sticker">Journal</span>
          <h2 className="display mt-3 text-3xl sm:text-4xl">Latest from our atelier</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex gap-4 rounded-[1.5rem] bg-card p-3 shadow-sm sm:p-4"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
                <Image src={post.src} alt="" fill className="object-cover" sizes="96px" />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <h3 className="font-display text-base font-semibold leading-snug">{post.title}</h3>
                <button
                  type="button"
                  className="mt-2 inline-flex w-fit items-center gap-1 rounded-xl bg-primary px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-primary-foreground"
                >
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-petal md:grid-cols-2">
          <div className="relative min-h-[16rem] md:min-h-[22rem]">
            <Image
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80"
              alt="Soft petal textures"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="sticker w-fit">Why Bloomly</span>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Gifts that feel handmade</h2>
            <ul className="mt-6 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-sm sm:text-base">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="sticker">Stories</span>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Loved by our community</h2>
        </div>
        <blockquote className="mx-auto mt-8 max-w-3xl rounded-[1.75rem] bg-ink px-8 py-10 text-center text-ink-foreground sm:px-12">
          <Star className="mx-auto h-8 w-8 text-primary" />
          <p className="mt-5 font-display text-xl leading-snug sm:text-2xl">
            “The bouquet arrived looking like a painting. My partner cried — in the best way. Bloomly
            made the whole day feel intentional.”
          </p>
          <footer className="mt-5 text-sm text-ink-foreground/70">— Maya R., anniversary gift</footer>
        </blockquote>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-petal px-6 py-10 text-center sm:px-10">
          <h2 className="display text-3xl sm:text-4xl">Be the first to know what&apos;s blooming</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Seasonal drops, gift guides, and early access to limited arrangements.
          </p>
          <form className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="button"
              className="rounded-2xl bg-primary px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="rounded-t-[2rem] bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-1">
            <a href="/" className="display text-3xl text-primary">
              Bloomly
            </a>
            <p className="mt-3 text-sm text-ink-foreground/70">
              Gifts & flowers crafted to turn ordinary days into keepsakes.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-ink-foreground/70">
              <MapPin className="h-4 w-4 text-primary" />
              214 Petal Lane, Studio City
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-ink-foreground/70">
              <Truck className="h-4 w-4 text-primary" />
              Same-day metro delivery
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Main pages
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              {["Home", "Shop", "Categories", "Florists", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Other pages
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              {["Gift cards", "Corporate", "Weddings", "Care guide", "Journal"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Utility
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              {["Shipping", "Returns", "FAQ", "Privacy", "Terms"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-ink-foreground/10 px-4 py-5 text-center text-xs text-ink-foreground/55 sm:px-6">
          © {new Date().getFullYear()} Bloomly. All rights reserved.
        </div>
      </footer>

      {/* Mobile sticky nav — soft cake-shop pattern */}
      <nav className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-between rounded-full bg-card px-6 py-3 shadow-lg md:hidden">
        <a href="#" aria-label="Home" className="text-primary">
          <HomeIcon className="h-5 w-5" />
        </a>
        <a href="#contact" aria-label="Location" className="text-muted-foreground">
          <MapPin className="h-5 w-5" />
        </a>
        <Link href="/shop" aria-label="Favorites" className="text-muted-foreground">
          <Heart className="h-5 w-5" />
        </Link>
        <Link href="/shop" aria-label="Cart" className="text-muted-foreground">
          <ShoppingBag className="h-5 w-5" />
        </Link>
        <a href="#" aria-label="Profile" className="text-muted-foreground">
          <UserRound className="h-5 w-5" />
        </a>
      </nav>
    </div>
  );
}
