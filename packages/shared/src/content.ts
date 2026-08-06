import type { FaqItem, FleetVehicle, Testimonial, TravelPackage } from "./types";

export const fleetVehicles: FleetVehicle[] = [
  {
    slug: "sedan",
    name: "Sedan",
    capacity: "3 passengers",
    features: ["AC", "Leather seats", "Professional driver"],
    price: "From INR 14/km",
    image: {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      alt: "Premium sedan"
    }
  },
  {
    slug: "suv",
    name: "SUV",
    capacity: "6 passengers",
    features: ["Extra luggage space", "Comfort suspension", "USB charging"],
    price: "From INR 18/km",
    image: {
      url: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
      alt: "Premium SUV"
    }
  }
];

export const featuredPackages: TravelPackage[] = [
  {
    slug: "royal-rajasthan-escape",
    title: "Royal Rajasthan Escape",
    destination: "Jaipur, Jodhpur, Udaipur",
    price: 24999,
    duration: "6 Days / 5 Nights",
    difficulty: "Premium",
    heroImage: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=80",
      alt: "Rajasthan palace"
    },
    gallery: [],
    overview: "A curated royal circuit covering palace stays, heritage walks, and private chauffeur experiences.",
    itinerary: [],
    included: ["Luxury stays", "Breakfast", "Airport transfers"],
    excluded: ["Airfare", "Personal expenses"],
    featured: true
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    location: "Mumbai",
    rating: 5,
    message: "The service was impeccably managed from booking to drop-off. The vehicle quality and punctuality were excellent."
  },
  {
    name: "Sana Khan",
    location: "Dubai",
    rating: 5,
    message: "Traveller handled our multi-city itinerary with real professionalism. The experience felt premium and seamless."
  }
];

export const faqs: FaqItem[] = [
  {
    question: "How do I book a cab or tour package?",
    answer: "Use the booking form on the home page or contact page. Our team confirms availability and shares the final quote.",
    category: "Booking"
  },
  {
    question: "Do you provide airport pickup at odd hours?",
    answer: "Yes. We operate 24/7 for airport transfers, subject to advance booking and driver availability.",
    category: "Operations"
  }
];
