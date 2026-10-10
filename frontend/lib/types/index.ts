// BrewHaven Coffee — Central TypeScript type definitions
// All shared interfaces live here to ensure end-to-end type safety.

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "drinks" | "pastries";
  isAvailable: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  id?: number;
}

export interface OperatingHours {
  days: string;
  hours: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export type MenuCategory = "drinks" | "pastries";

export interface PopularFlavor {
  id: string;
  name: string;
  tagline: string;
  price: number;
  imageUrl: string;
  volume: string;
  badge?: string;
}

export interface CategoryGear {
  id: string;
  title: string;
  imageUrl: string;
  count: string;
}

export interface BlogUpdate {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  readTime: string;
}
