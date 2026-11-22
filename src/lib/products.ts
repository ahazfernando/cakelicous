export type ProductColor = {
  name: string;
  hex: string;
};

export type ProductReview = {
  name: string;
  rating: number;
  text: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  reviews: ProductReview[];
  faqs: { q: string; a: string }[];
  tone?: string;
  btn?: string;
};

export const products: Product[] = [
  {
    slug: "sunrise-bouquet",
    name: "Sunrise Bouquet",
    category: "Bouquets",
    price: 48.9,
    compareAt: 58.0,
    rating: 4.8,
    reviewCount: 24,
    description:
      "A hand-tied mix of seasonal blooms in warm sunrise tones — soft peaches, creamy whites, and golden accents. Gift-ready wrapping and a handwritten note included.",
    details: [
      "Approximately 12–15 stems depending on season",
      "Arrives in signature Bloomly kraft wrap",
      "Care card with vase instructions included",
      "Same-day metro delivery before 2pm",
    ],
    images: [
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&w=900&q=80",
    ],
    colors: [
      { name: "Sunrise", hex: "#E8A07A" },
      { name: "Blush", hex: "#E891A8" },
      { name: "Ivory", hex: "#F3E8D8" },
    ],
    sizes: ["Petite", "Classic", "Grand", "Deluxe"],
    reviews: [
      {
        name: "Jessica F.",
        rating: 5,
        text: "Absolutely stunning. The colors were even prettier in person and arrived perfectly fresh.",
      },
      {
        name: "Omar K.",
        rating: 5,
        text: "Ordered for an anniversary — she loved the handwritten note and the arrangement lasted over a week.",
      },
      {
        name: "Priya S.",
        rating: 4,
        text: "Beautiful bouquet and quick delivery. Would love a vase option next time.",
      },
    ],
    faqs: [
      {
        q: "How long will the flowers last?",
        a: "With fresh water and trimmed stems, most arrangements stay vibrant 5–7 days.",
      },
      {
        q: "Can I add a gift message?",
        a: "Yes — include your note at checkout and we’ll write it by hand.",
      },
      {
        q: "Do you deliver same day?",
        a: "Orders placed before 2pm are eligible for same-day metro delivery.",
      },
    ],
    tone: "bg-ink text-ink-foreground",
    btn: "bg-primary text-primary-foreground",
  },
  {
    slug: "rose-romance",
    name: "Rose Romance",
    category: "Roses",
    price: 62.9,
    compareAt: 79.0,
    rating: 4.9,
    reviewCount: 41,
    description:
      "A classic statement of deep and soft roses, layered for drama and softness. Perfect for anniversaries, proposals, and grand gestures.",
    details: [
      "Premium Ecuadorian and garden roses",
      "Lush greenery and soft filler blooms",
      "Signature satin wrap available",
      "Hand-tied by Bloomly florists daily",
    ],
    images: [
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=80",
    ],
    colors: [
      { name: "Classic Red", hex: "#8B1E2D" },
      { name: "Blush Pink", hex: "#E8A0B0" },
      { name: "Soft Ivory", hex: "#F5EDE3" },
    ],
    sizes: ["Petite", "Classic", "Grand", "Deluxe"],
    reviews: [
      {
        name: "Maya R.",
        rating: 5,
        text: "The bouquet arrived looking like a painting. My partner cried — in the best way.",
      },
      {
        name: "Daniel T.",
        rating: 5,
        text: "Premium quality roses. Packaging felt luxurious without being over the top.",
      },
      {
        name: "Elena V.",
        rating: 5,
        text: "Grand size was perfect for our dinner table. Worth every penny.",
      },
    ],
    faqs: [
      {
        q: "Are the roses dyed?",
        a: "No — we use naturally colored premium roses selected for tone and longevity.",
      },
      {
        q: "Can I schedule a delivery date?",
        a: "Yes, choose your preferred date at checkout up to 14 days ahead.",
      },
    ],
    tone: "bg-primary text-primary-foreground",
    btn: "bg-ink text-ink-foreground",
  },
  {
    slug: "wild-meadow",
    name: "Wild Meadow",
    category: "Bouquets",
    price: 39.9,
    compareAt: 49.0,
    rating: 4.6,
    reviewCount: 18,
    description:
      "An airy, foraged-feeling mix of wildflowers and soft greens — relaxed, romantic, and made for everyday joy.",
    details: [
      "Seasonal wildflower mix",
      "Soft, natural wrap finish",
      "Ideal for desks and kitchen tables",
      "Grown with care by partner farms",
    ],
    images: [
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=900&q=80",
    ],
    colors: [
      { name: "Meadow", hex: "#C9D6A8" },
      { name: "Lavender", hex: "#B8A4C9" },
      { name: "Honey", hex: "#E6C07B" },
    ],
    sizes: ["Petite", "Classic", "Grand", "Deluxe"],
    reviews: [
      {
        name: "Sophie L.",
        rating: 5,
        text: "Feels like a countryside walk in a vase. So charming and fragrant.",
      },
      {
        name: "Noah P.",
        rating: 4,
        text: "Lovely arrangement. A couple stems arrived bent but overall beautiful.",
      },
      {
        name: "Aisha M.",
        rating: 5,
        text: "My go-to ‘just because’ gift. Always gets compliments.",
      },
    ],
    faqs: [
      {
        q: "Will it look exactly like the photo?",
        a: "Each Wild Meadow is unique by season, but always follows the same color story and feeling.",
      },
    ],
    tone: "bg-ink text-ink-foreground",
    btn: "bg-primary text-primary-foreground",
  },
  {
    slug: "peony-cloud",
    name: "Peony Cloud",
    category: "Bestsellers",
    price: 54.0,
    compareAt: 64.0,
    rating: 4.7,
    reviewCount: 32,
    description:
      "Cloud-soft peonies and complementary blooms in a fluffy, romantic silhouette — our most gifted arrangement.",
    details: [
      "Seasonal peonies when available",
      "Cloud-like rounded shape",
      "Gift wrap + care card included",
      "Florist favorite for birthdays",
    ],
    images: [
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=900&q=80",
    ],
    colors: [
      { name: "Cloud Pink", hex: "#F0B8C8" },
      { name: "Cream", hex: "#F2E6D8" },
      { name: "Berry", hex: "#A84B63" },
    ],
    sizes: ["Petite", "Classic", "Grand", "Deluxe"],
    reviews: [
      {
        name: "Hannah C.",
        rating: 5,
        text: "Peonies were gorgeous and so full. Packaging was impeccable.",
      },
      {
        name: "Leo A.",
        rating: 5,
        text: "Best birthday surprise I’ve ever sent. Bloomly nailed it.",
      },
      {
        name: "Rita J.",
        rating: 4,
        text: "Beautiful — wish they stayed peony season all year.",
      },
    ],
    faqs: [
      {
        q: "Are peonies always available?",
        a: "Peony season is limited. Off-season we substitute with similarly soft, lush blooms.",
      },
    ],
  },
  {
    slug: "blush-bundle",
    name: "Blush Bundle",
    category: "Bestsellers",
    price: 42.0,
    rating: 4.5,
    reviewCount: 15,
    description:
      "A soft blush palette for gentle moments — birthdays, thank-yous, and quiet celebrations.",
    details: [
      "Soft pink seasonal stems",
      "Compact classic size by default",
      "Ideal for apartments and desks",
    ],
    images: [
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80",
    ],
    colors: [
      { name: "Blush", hex: "#E8A0B0" },
      { name: "Rose", hex: "#D44C6A" },
      { name: "Pearl", hex: "#F7F0EA" },
    ],
    sizes: ["Petite", "Classic", "Grand", "Deluxe"],
    reviews: [
      {
        name: "Clara W.",
        rating: 5,
        text: "Soft, romantic, and exactly what I pictured.",
      },
      {
        name: "Ben H.",
        rating: 4,
        text: "Great value and very pretty presentation.",
      },
      {
        name: "Nina G.",
        rating: 5,
        text: "Sent to my sister — she texted photos all evening.",
      },
    ],
    faqs: [
      {
        q: "Is this good for small spaces?",
        a: "Yes — Petite and Classic sizes are designed for tables and desks.",
      },
    ],
  },
  {
    slug: "velvet-roses",
    name: "Velvet Roses",
    category: "Roses",
    price: 68.0,
    compareAt: 85.0,
    rating: 4.9,
    reviewCount: 27,
    description:
      "Deep velvet roses with a rich, romantic finish — bold, elegant, and unforgettable.",
    details: [
      "Long-stem premium roses",
      "Dramatic dark-to-soft gradient options",
      "Luxury wrap finish",
    ],
    images: [
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=80",
    ],
    colors: [
      { name: "Velvet", hex: "#5C1220" },
      { name: "Wine", hex: "#7A1F33" },
      { name: "Noir", hex: "#2A1218" },
    ],
    sizes: ["Petite", "Classic", "Grand", "Deluxe"],
    reviews: [
      {
        name: "Amelia D.",
        rating: 5,
        text: "Luxurious and dramatic. The Deluxe size filled the whole entryway.",
      },
      {
        name: "Chris B.",
        rating: 5,
        text: "Incredible quality. These roses looked expensive in the best way.",
      },
      {
        name: "Farah Z.",
        rating: 4,
        text: "Gorgeous color. Delivery was right on time.",
      },
    ],
    faqs: [
      {
        q: "Do you offer vase upgrades?",
        a: "Yes — add a ceramic vase at checkout when available.",
      },
    ],
  },
  {
    slug: "garden-gift",
    name: "Garden Gift",
    category: "Gift Boxes",
    price: 56.0,
    compareAt: 70.0,
    rating: 4.6,
    reviewCount: 21,
    description:
      "A gift-box ready garden moment — blooms, greens, and a little something extra for gifting made easy.",
    details: [
      "Arranged gift box presentation",
      "Includes keepsake care card",
      "Optional add-ons at checkout",
    ],
    images: [
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
    ],
    colors: [
      { name: "Garden", hex: "#7A9E6E" },
      { name: "Citrus", hex: "#E8B86D" },
      { name: "Bloom", hex: "#D98B9A" },
    ],
    sizes: ["Petite", "Classic", "Grand", "Deluxe"],
    reviews: [
      {
        name: "Jules M.",
        rating: 5,
        text: "Perfect corporate gift — looked thoughtful and arrived fresh.",
      },
      {
        name: "Kenji O.",
        rating: 4,
        text: "Loved the box presentation. Flowers lasted almost a week.",
      },
      {
        name: "Talia R.",
        rating: 5,
        text: "Beautiful from unboxing to the last bloom.",
      },
    ],
    faqs: [
      {
        q: "Is this ready to gift?",
        a: "Yes — Garden Gift arrives presentation-ready with a blank note card.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}

export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function slugifyName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
