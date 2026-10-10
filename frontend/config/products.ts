// config/products.ts — Menu / Product list (client-swappable)

export type ProductCategory = "hot" | "cold" | "bundle" | "bean" | "organic";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: ProductCategory;
  imageUrl?: string;
  videoUrl?: string;       // 360° spin video (mp4)
  videoWebm?: string;
  badge?: string;          // Optional badge like "Best Seller"
  available: boolean;
}

export const products: Product[] = [
  {
    id: "iced-hazelnut-latte",
    name: "ICED HAZELNUT LATTE",
    price: 18.99,
    description: "Smooth espresso blended with creamy hazelnut and chilled milk.",
    category: "cold",
    videoUrl: "/videos/product-milk-pour.mp4",
    videoWebm: "/videos/product-milk-pour.webm",
    badge: "Popular",
    available: true,
  },
  {
    id: "cold-brew-delight",
    name: "COLD BREW DELIGHT",
    price: 16.99,
    description: "Slow-steeped coffee with a bold aroma and silky finish.",
    category: "cold",
    videoUrl: "/videos/product-spin-1.mp4",
    videoWebm: "/videos/product-spin-1.webm",
    available: true,
  },
  {
    id: "mocha-fusion",
    name: "MOCHA FUSION",
    price: 18.99,
    description: "Rich chocolate, fresh espresso, and whipped cream perfection.",
    category: "hot",
    videoUrl: "/videos/product-spin-2.mp4",
    videoWebm: "/videos/product-spin-2.webm",
    badge: "New",
    available: true,
  },
];

export const productCategories = [
  { id: "all", label: "All" },
  { id: "hot", label: "Hot" },
  { id: "cold", label: "Cold" },
  { id: "bundle", label: "Bundles" },
  { id: "bean", label: "Beans" },
] as const;
