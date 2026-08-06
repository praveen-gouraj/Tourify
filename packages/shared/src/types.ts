export type VehicleCategory =
  | "Sedan"
  | "SUV"
  | "Innova"
  | "Tempo Traveller"
  | "Mini Bus"
  | "Luxury Coach";

export type ServiceType =
  | "Airport Taxi"
  | "Local Taxi"
  | "Corporate Taxi"
  | "Outstation Taxi"
  | "Tempo Traveller"
  | "Luxury Bus"
  | "Tour Packages";

export type PackageDifficulty = "Easy" | "Moderate" | "Premium";

export interface ImageAsset {
  url: string;
  alt: string;
}

export interface PackageItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface TravelPackage {
  _id?: string;
  slug: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  difficulty: PackageDifficulty;
  heroImage: ImageAsset;
  gallery: ImageAsset[];
  overview: string;
  itinerary: PackageItineraryDay[];
  included: string[];
  excluded: string[];
  featured: boolean;
}

export interface FleetVehicle {
  _id?: string;
  slug: string;
  name: VehicleCategory;
  capacity: string;
  features: string[];
  price: string;
  image: ImageAsset;
}

export interface Testimonial {
  _id?: string;
  name: string;
  location: string;
  rating: number;
  message: string;
  avatar?: ImageAsset;
}

export interface FaqItem {
  _id?: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingRequest {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  travelDate: string;
  travelTime: string;
  vehicleType: string;
  passengers: number;
  message?: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EnquiryRequest {
  name: string;
  email?: string;
  phone: string;
  service: string;
  message: string;
}
