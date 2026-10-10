// BrewHaven Coffee — Static menu data
// Mirrors the backend seed data; served client-side for instant rendering.

import type { MenuItem } from "@/lib/types";

export const DRINKS: MenuItem[] = [
  {
    id: "drink-1",
    name: "Espresso",
    price: 3.5,
    description: "Rich, bold single-origin shot with a golden crema",
    category: "drinks",
    isAvailable: true,
  },
  {
    id: "drink-2",
    name: "Latte",
    price: 4.5,
    description: "Smooth espresso paired with velvety steamed milk",
    category: "drinks",
    isAvailable: true,
  },
  {
    id: "drink-3",
    name: "Cappuccino",
    price: 4.0,
    description: "Perfect foam balance — a classic Italian staple",
    category: "drinks",
    isAvailable: true,
  },
  {
    id: "drink-4",
    name: "Hot Chocolate",
    price: 4.0,
    description: "Rich Belgian cocoa blended with steamed whole milk",
    category: "drinks",
    isAvailable: true,
  },
  {
    id: "drink-5",
    name: "Iced Coffee",
    price: 3.5,
    description: "24-hour cold-brew served over hand-chipped ice",
    category: "drinks",
    isAvailable: true,
  },
  {
    id: "drink-6",
    name: "Chai Latte",
    price: 4.5,
    description: "Aromatic spiced tea with warm, frothy oat milk",
    category: "drinks",
    isAvailable: true,
  },
];

export const PASTRIES: MenuItem[] = [
  {
    id: "pastry-1",
    name: "Croissant",
    price: 3.0,
    description: "Flaky, buttery layers baked golden every morning",
    category: "pastries",
    isAvailable: true,
  },
  {
    id: "pastry-2",
    name: "Blueberry Muffin",
    price: 3.5,
    description: "Loaded with plump wild blueberries and a crumble top",
    category: "pastries",
    isAvailable: true,
  },
  {
    id: "pastry-3",
    name: "Cinnamon Roll",
    price: 4.0,
    description: "Soft, gooey swirl dusted with vanilla cream icing",
    category: "pastries",
    isAvailable: true,
  },
  {
    id: "pastry-4",
    name: "Chocolate Chip Cookie",
    price: 2.5,
    description: "Crisp edges, soft centre — a timeless crowd favourite",
    category: "pastries",
    isAvailable: true,
  },
  {
    id: "pastry-5",
    name: "Scone",
    price: 3.0,
    description: "Crumbly, tender perfection — pairs with any brew",
    category: "pastries",
    isAvailable: true,
  },
  {
    id: "pastry-6",
    name: "Danish Pastry",
    price: 3.5,
    description: "Delicate layers cradling seasonal fruit jam",
    category: "pastries",
    isAvailable: true,
  },
];

export const ALL_MENU_ITEMS: MenuItem[] = [...DRINKS, ...PASTRIES];
