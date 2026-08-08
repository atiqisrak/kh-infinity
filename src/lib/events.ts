export type EventLocation = "Local" | "International";
export type EventCategory =
  | "Food & Beverage"
  | "Leather"
  | "Plastics & Packaging"
  | "Textile & Garment"
  | "All";

export interface TradeEvent {
  id: string;
  name: string;
  dates: string;
  location: string;
  locationType: EventLocation;
  description: string;
  category: EventCategory;
  website?: string;
  registrationLink?: string;
}

export const events: TradeEvent[] = [
  {
    id: "food-tech-dhaka-2025",
    name: "Food Tech Dhaka",
    dates: "November 20-22, 2025",
    location: "Dhaka, Bangladesh",
    locationType: "Local",
    category: "Food & Beverage",
    description:
      "Premier food technology and hospitality trade show showcasing the latest innovations in food processing, packaging, and distribution.",
  },
  {
    id: "leathertech-bangladesh-2025",
    name: "LEATHERTECH BANGLADESH",
    dates: "December 4-6, 2025",
    location: "Dhaka, Bangladesh",
    locationType: "Local",
    category: "Leather",
    description:
      "International leather machinery and technology exhibition featuring cutting-edge equipment for the leather industry.",
  },
  {
    id: "ipf-bangladesh-2026",
    name: "IPF Bangladesh (Plastics, Printing & Packaging)",
    dates: "January 28-31, 2026",
    location: "Dhaka, Bangladesh",
    locationType: "Local",
    category: "Plastics & Packaging",
    description:
      "Comprehensive exhibition of plastics, printing, and packaging technologies serving diverse industries.",
  },
  {
    id: "dhaka-yarn-fabric-2026",
    name: "Dhaka International Yarn & Fabric Show",
    dates: "January 28-31, 2026",
    location: "Dhaka, Bangladesh",
    locationType: "Local",
    category: "Textile & Garment",
    description:
      "Major exhibition for yarn, fabric, and textile machinery attracting international suppliers and manufacturers.",
  },
  {
    id: "dtg-2026",
    name: "DTG (Dhaka International Textile & Garment Machinery Exhibition)",
    dates: "February 5-8, 2026",
    location: "Dhaka, Bangladesh",
    locationType: "Local",
    category: "Textile & Garment",
    description:
      "Leading textile and garment machinery exhibition showcasing the latest technologies for the RMG sector.",
  },
  {
    id: "food-agro-bangladesh-2026",
    name: "Food & Agro Bangladesh International Expo",
    dates: "May 7-9, 2026",
    location: "Dhaka, Bangladesh",
    locationType: "Local",
    category: "Food & Beverage",
    description:
      "International food and agricultural products exhibition promoting Bangladesh's food processing industry.",
  },
  {
    id: "hotelex-shanghai-2026",
    name: "HOTELEX Shanghai (Food & Hospitality)",
    dates: "March 30 - April 2, 2026",
    location: "Shanghai, China",
    locationType: "International",
    category: "Food & Beverage",
    description:
      "Asia's largest food, beverage, and hospitality equipment exhibition attracting global industry leaders.",
  },
  {
    id: "asian-apparel-sourcing-2026",
    name: "2nd Asian International Apparel Sourcing Show",
    dates: "June 3-5, 2026",
    location: "Bangkok, Thailand",
    locationType: "International",
    category: "Textile & Garment",
    description:
      "International apparel sourcing event connecting buyers with suppliers across Asia.",
  },
  {
    id: "mifb-2026",
    name: "Malaysia International Food & Beverage (MIFB)",
    dates: "July 15-17, 2026",
    location: "Kuala Lumpur, Malaysia",
    locationType: "International",
    category: "Food & Beverage",
    description:
      "Premier food and beverage trade show in Southeast Asia featuring international exhibitors and buyers.",
  },
];

export function getEvents(
  location?: EventLocation,
  category?: EventCategory
): TradeEvent[] {
  let filteredEvents = events;

  if (location) {
    filteredEvents = filteredEvents.filter(
      (event) => event.locationType === location
    );
  }

  if (category && category !== "All") {
    filteredEvents = filteredEvents.filter(
      (event) => event.category === category
    );
  }

  return filteredEvents;
}

export function getEvent(id: string): TradeEvent | undefined {
  return events.find((event) => event.id === id);
}

export function getLocalEvents(): TradeEvent[] {
  return events.filter((event) => event.locationType === "Local");
}

export function getInternationalEvents(): TradeEvent[] {
  return events.filter((event) => event.locationType === "International");
}

export function getEventCategories(): EventCategory[] {
  return ["All", "Food & Beverage", "Leather", "Plastics & Packaging", "Textile & Garment"];
}
