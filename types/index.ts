export interface Plant {
  id: string;
  name: string;
  category: PlantCategory;
  price: number;
  description: string;
  details: string;
  care: string;
  petSafe: boolean;
  difficulty: string;
  image: string;
  inStock: boolean;
  featured: boolean;
}

export type PlantCategory =
  | "Houseplants"
  | "Outdoor Plants"
  | "Succulents"
  | "Vegetable Starts";

export interface NavItem {
  label: string;
  href: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  stateCode: string;
  zip: string;
  county: string;
}

export interface VendorLocation {
  venue: string;
  street: string;
  city: string;
  stateCode: string;
  zip: string;
}

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
