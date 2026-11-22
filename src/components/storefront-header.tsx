import Link from "next/link";
import { Search, ShoppingBag, UserRound } from "lucide-react";

type StorefrontHeaderProps = {
  active?: "products" | "cart" | "checkout";
};

export function StorefrontHeader({ active }: StorefrontHeaderProps) {
  return (
    <>
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
            <Link
              href="/shop"
              className={
                active === "products"
                  ? "underline decoration-2 underline-offset-8"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              products
            </Link>
            <Link href="/#category" className="text-muted-foreground hover:text-foreground">
              story
            </Link>
            <Link href="/#contact" className="text-muted-foreground hover:text-foreground">
              florists
            </Link>
            <Link
              href="/cart"
              className={
                active === "cart" || active === "checkout"
                  ? "underline decoration-2 underline-offset-8"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              cart
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Search" className="rounded-full p-2 hover:bg-petal">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/cart" aria-label="Cart" className="rounded-full p-2 hover:bg-petal">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <button type="button" aria-label="Account" className="rounded-full p-2 hover:bg-petal">
              <UserRound className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
