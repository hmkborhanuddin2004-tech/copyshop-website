// config/brand.ts
// 🔑 CLIENT-SWAPPABLE — এই একটা ফাইল পাল্টালেই পুরো সাইট নতুন client-এর হয়ে যায়

export const brand = {
  // ── Brand Identity ──────────────────────────────────────────
  name: "BrewCraft Coffee Roasters",
  shortName: "BrewCraft",
  tagline: "Handcrafted Coffee & Artisanal Pastries",
  location: "সেনবাগ, নোয়াখালী, বাংলাদেশ",
  locationEnglish: "Senbagh, Noakhali, Bangladesh",
  locationFull: "Senbagh Bazar Road, Senbagh 3820, Noakhali, Bangladesh",
  founded: "2020",
  phone: "+880 1812-345678",
  email: "hello@brewcraftcoffee.com",
  website: "https://brewcraftcoffee.com",

  // ── Social Media ─────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/brewcraft_coffee",
    facebook: "https://facebook.com/brewcraftcoffeebd",
    twitter: "https://twitter.com/brewcraft_bd",
    youtube: "https://youtube.com/@brewcraft",
  },

  // ── Color Palette ─────────────────────────────────────────────
  colors: {
    primary: "#482820",     // Coffee Brown — Hero, Products, Gallery, Footer bg
    accent: "#FEBD02",      // Golden Yellow — Logo, Benefits, CTA bg
    light: "#FFFFFF",       // Pure White — About, Testimonials bg
    cream: "#F5F0EB",       // Off-White — Category cards bg
    textDark: "#3A1F15",    // Dark text on light bg
    textLight: "#FFFFFF",   // White text on dark bg
  },

  // ── Typography ────────────────────────────────────────────────
  fonts: {
    display: "Tanker",          // Used for all headings
    body: "Interdisplay",       // Used for body text
    script: "Smooch",           // Used for watermark
  },

  // ── Hero Section ──────────────────────────────────────────────
  hero: {
    badge: "Senbagh-based Coffee Roastery",
    heading: "COFFEE LIFE'S BEGINNING",
    headingAccentWord: "COFFEE",   // This word gets the yellow color
    description:
      "Did you know that your next favorite coffee may be hiding in plain sight? Handcrafted single-origin roasts and espresso right here in Senbagh, Noakhali.",
    ctaPrimary: "Our Products",
    ctaVideo: "Watch Video",
    videoUrl: "/videos/hero-video.mp4",
    videoWebm: "/videos/hero-video.webm",
    heroImage: "/images/hero-coffee-cup.avif",
    heroBean: "/images/hero-bean.avif",
  },

  // ── About Section ─────────────────────────────────────────────
  about: {
    watermark: "BREWCRAFT",
    statement: [
      "WE BELIEVE COFFEE IS MORE",
      "THAN A DRINK IT'S A RITUAL.",
      "WE SOURCE PREMIUM BEANS,",
      "ROAST IN SMALL BATCHES,",
      "& DELIVER FRESH.",
    ],
    badge1Image: "/images/coffee-powder-badge.avif",
    badge2Image: "/images/coffee-bean-badge.avif",
  },

  // ── Product Categories (About section cards) ─────────────────
  categories: [
    { label: "SHOP BUNDLES", image: "/images/cat-bundles.avif" },
    { label: "SHOP CAPSULES", image: "/images/cat-capsules.avif" },
    { label: "DARK ROAST", image: "/images/cat-dark.avif" },
    { label: "MEDIUM ROAST", image: "/images/cat-medium.avif" },
    { label: "SHOP ORGANIC", image: "/images/cat-organic.avif" },
  ],

  // ── Benefits Section ──────────────────────────────────────────
  benefits: {
    items: [
      {
        position: "top-left",
        title: "— Premium Quality",
        description:
          "Beans that have been hand-picked from the finest coffee regions around the world have been used to make this coffee",
      },
      {
        position: "top-right",
        title: "Sustainable —",
        description:
          "From farms that are committed to caring for the environment, our products are ethically sourced",
      },
      {
        position: "bottom-left",
        title: "— Expert Roasting",
        description:
          "The best way to make sure that every cup of coffee has the perfect flavor is to roast it in small batches",
      },
      {
        position: "bottom-right",
        title: "Fresh Always —",
        description:
          "Our products are roasted to order, and they are delivered within days of the roasting process",
      },
    ],
    centerImage: "/images/benefits-coffee-splash.avif",
    videoUrl: "/videos/benefits-video.mp4",
    videoWebm: "/videos/benefits-video.webm",
  },

  // ── CTA Section ───────────────────────────────────────────────
  cta: {
    heading: "Join our community of coffee lovers",
    description:
      "Our subscription service will keep you up-to-date on new roasts, special offers, and brewing tips that we have to offer",
    ctaLabel: "Join Now",
    imageLeft: "/images/cta-beans-left.avif",
    imageRight: "/images/cta-beans-right.avif",
  },

  // ── Footer ────────────────────────────────────────────────────
  footer: {
    videoUrl: "/videos/footer-video.mp4",
    videoWebm: "/videos/footer-video.webm",
    subscriptionDesc:
      "Our subscription service will keep you up-to-date on new roasts, special offers, and brewing tips that we have to offer",
    copyright: `© ${new Date().getFullYear()} BrewCraft Coffee. All Rights Reserved.`,
    utilityLinks: [
      { label: "Changelog", href: "/changelog" },
      { label: "License", href: "/license" },
      { label: "Style Guide", href: "/styleguide" },
    ],
    navLinks: [
      { label: "About Us", href: "#about" },
      { label: "Products", href: "#products" },
      { label: "Benefits", href: "#benefits" },
      { label: "Testimonial", href: "#testimonial" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
} as const;

export type Brand = typeof brand;
