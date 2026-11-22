import { getProduct, type Product } from "@/lib/products";

export type CartItem = {
  slug: string;
  quantity: number;
  size: string;
  color: string;
};

export type CartLine = CartItem & {
  product: Product;
  lineTotal: number;
};

export const CART_STORAGE_KEY = "bloomly-cart";
export const SHIPPING_FLAT = 4.99;

/** Seed so /cart and /checkout aren't empty on first visit. */
export const DEMO_CART_SEED: CartItem[] = [
  {
    slug: "sunrise-bouquet",
    quantity: 1,
    size: "Classic",
    color: "Sunrise",
  },
  {
    slug: "rose-romance",
    quantity: 1,
    size: "Grand",
    color: "Classic Red",
  },
];

export function cartItemKey(item: Pick<CartItem, "slug" | "size" | "color">) {
  return `${item.slug}::${item.size}::${item.color}`;
}

export function resolveCartLines(items: CartItem[]): CartLine[] {
  return items
    .map((item) => {
      const product = getProduct(item.slug);
      if (!product) return null;
      return {
        ...item,
        product,
        lineTotal: product.price * item.quantity,
      };
    })
    .filter((line): line is CartLine => line !== null);
}

export function cartSubtotal(lines: CartLine[]) {
  return lines.reduce((sum, line) => sum + line.lineTotal, 0);
}

export function cartItemCount(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function loadCart(): CartItem[] {
  if (typeof window === "undefined") return DEMO_CART_SEED;
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (raw === null) {
      saveCart(DEMO_CART_SEED);
      return DEMO_CART_SEED.map((item) => ({ ...item }));
    }
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return DEMO_CART_SEED.map((item) => ({ ...item }));
    return parsed.filter(
      (item) =>
        item &&
        typeof item.slug === "string" &&
        typeof item.quantity === "number" &&
        item.quantity > 0,
    );
  } catch {
    return DEMO_CART_SEED.map((item) => ({ ...item }));
  }
}

export function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function addToCart(incoming: CartItem): CartItem[] {
  const current = loadCart();
  const key = cartItemKey(incoming);
  const existing = current.find((item) => cartItemKey(item) === key);
  let next: CartItem[];
  if (existing) {
    next = current.map((item) =>
      cartItemKey(item) === key
        ? { ...item, quantity: item.quantity + incoming.quantity }
        : item,
    );
  } else {
    next = [...current, { ...incoming }];
  }
  saveCart(next);
  return next;
}

export function updateCartQuantity(
  items: CartItem[],
  key: string,
  quantity: number,
): CartItem[] {
  if (quantity <= 0) {
    return items.filter((item) => cartItemKey(item) !== key);
  }
  return items.map((item) =>
    cartItemKey(item) === key ? { ...item, quantity } : item,
  );
}

export function removeCartItem(items: CartItem[], key: string): CartItem[] {
  return items.filter((item) => cartItemKey(item) !== key);
}
