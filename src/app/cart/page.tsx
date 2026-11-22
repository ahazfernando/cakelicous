import type { Metadata } from "next";

import { CartView } from "@/components/cart-view";

export const metadata: Metadata = {
  title: "Cart — Bloomly",
  description: "Review your Bloomly bouquets and gifts before checkout.",
};

export default function CartPage() {
  return <CartView />;
}
