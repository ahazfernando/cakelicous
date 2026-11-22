"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

import { StorefrontHeader } from "@/components/storefront-header";
import {
  CART_STORAGE_KEY,
  SHIPPING_FLAT,
  cartItemKey,
  cartItemCount,
  cartSubtotal,
  loadCart,
  removeCartItem,
  resolveCartLines,
  saveCart,
  updateCartQuantity,
  type CartItem,
} from "@/lib/cart";
import { formatPrice } from "@/lib/products";

export function CartView() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(loadCart());
    setReady(true);

    const onStorage = (event: StorageEvent) => {
      if (event.key === CART_STORAGE_KEY) {
        setItems(loadCart());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const lines = useMemo(() => resolveCartLines(items), [items]);
  const subtotal = cartSubtotal(lines);
  const count = cartItemCount(items);
  const shipping = lines.length > 0 ? SHIPPING_FLAT : 0;
  const total = subtotal + shipping;

  function persist(next: CartItem[]) {
    setItems(next);
    saveCart(next);
  }

  function setQty(key: string, quantity: number) {
    persist(updateCartQuantity(items, key, quantity));
  }

  function remove(key: string) {
    persist(removeCartItem(items, key));
  }

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <StorefrontHeader active="cart" />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="sticker w-fit">Your bag</p>
          <h1 className="display mt-3 text-4xl sm:text-5xl">Shopping cart</h1>
          <p className="mt-2 text-muted-foreground">
            {ready
              ? count > 0
                ? `${count} item${count === 1 ? "" : "s"} ready for checkout.`
                : "Your cart is empty — pick something beautiful."
              : "Loading your cart…"}
          </p>
        </div>

        {!ready ? (
          <div className="mt-10 h-40 animate-pulse rounded-2xl bg-muted" />
        ) : lines.length === 0 ? (
          <div className="mt-12 rounded-[1.5rem] border border-border bg-card px-6 py-16 text-center">
            <p className="font-display text-2xl">Nothing in your cart yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Browse bouquets, roses, and gift boxes in the shop.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex h-12 items-center rounded-full bg-ink px-6 font-display text-sm font-semibold uppercase tracking-wide text-ink-foreground"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            <ul className="space-y-4">
              {lines.map((line) => {
                const key = cartItemKey(line);
                return (
                  <li
                    key={key}
                    className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center"
                  >
                    <Link
                      href={`/product/${line.slug}`}
                      className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl bg-petal/50 sm:h-24 sm:w-24"
                    >
                      <Image
                        src={line.product.images[0]}
                        alt={line.product.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            href={`/product/${line.slug}`}
                            className="font-display text-lg font-semibold hover:text-primary"
                          >
                            {line.product.name}
                          </Link>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {line.color} / {line.size}
                          </p>
                        </div>
                        <p className="shrink-0 font-semibold">{formatPrice(line.lineTotal)}</p>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="flex h-10 items-center justify-between rounded-full bg-muted px-1.5 sm:w-32">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(key, line.quantity - 1)}
                            className="grid h-8 w-8 place-items-center rounded-full hover:bg-card"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="text-sm font-semibold">{line.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(key, line.quantity + 1)}
                            className="grid h-8 w-8 place-items-center rounded-full hover:bg-card"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(key)}
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Remove
                        </button>
                        <span className="text-sm text-muted-foreground sm:ml-auto">
                          {formatPrice(line.product.price)} each
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <aside className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-6">
              <h2 className="font-display text-xl font-semibold">Order summary</h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">
                    Subtotal · {count} item{count === 1 ? "" : "s"}
                  </dt>
                  <dd className="font-medium">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Shipping</dt>
                  <dd className="font-medium">{formatPrice(shipping)}</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3 text-base">
                  <dt className="font-semibold">Total</dt>
                  <dd className="font-display text-xl font-semibold">{formatPrice(total)}</dd>
                </div>
              </dl>
              <Link
                href="/checkout"
                className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-ink font-display text-sm font-semibold uppercase tracking-wide text-ink-foreground transition hover:brightness-110"
              >
                Proceed to checkout
              </Link>
              <Link
                href="/shop"
                className="mt-3 flex h-11 w-full items-center justify-center rounded-full border border-border text-sm font-medium hover:bg-petal"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
