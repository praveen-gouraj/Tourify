import type { ResourceField } from "@/components/resource-manager";

export const adminResources = {
  packages: {
    title: "Packages",
    description: "Create and manage premium travel packages, itinerary details, and image assets.",
    endpoint: "/packages",
    columns: [
      { key: "title", label: "Title" },
      { key: "destination", label: "Destination" },
      { key: "price", label: "Price" },
      { key: "featured", label: "Featured" }
    ],
    fields: [
      { name: "title", label: "Title" },
      { name: "slug", label: "Slug" },
      { name: "destination", label: "Destination" },
      { name: "price", label: "Price", type: "number" },
      { name: "duration", label: "Duration" },
      { name: "difficulty", label: "Difficulty", type: "select", options: ["Easy", "Moderate", "Premium"] },
      { name: "heroImage", label: "Hero Image JSON", type: "json" },
      { name: "gallery", label: "Gallery JSON", type: "json" },
      { name: "overview", label: "Overview", type: "textarea" },
      { name: "itinerary", label: "Itinerary JSON", type: "json" },
      { name: "included", label: "Included JSON", type: "json" },
      { name: "excluded", label: "Excluded JSON", type: "json" },
      { name: "featured", label: "Featured", type: "checkbox" }
    ] as ResourceField[]
  },
  fleet: {
    title: "Fleet",
    description: "Manage vehicle inventory, capacity, pricing, and featured imagery.",
    endpoint: "/fleet",
    columns: [
      { key: "name", label: "Vehicle" },
      { key: "capacity", label: "Capacity" },
      { key: "price", label: "Price" }
    ],
    fields: [
      { name: "name", label: "Name", type: "select", options: ["Sedan", "SUV", "Innova", "Tempo Traveller", "Mini Bus", "Luxury Coach"] },
      { name: "slug", label: "Slug" },
      { name: "capacity", label: "Capacity" },
      { name: "features", label: "Features JSON", type: "json" },
      { name: "price", label: "Price" },
      { name: "image", label: "Image JSON", type: "json" }
    ] as ResourceField[]
  },
  bookings: {
    title: "Bookings",
    description: "Review, confirm, and update customer travel bookings.",
    endpoint: "/bookings",
    columns: [
      { key: "name", label: "Name" },
      { key: "phone", label: "Phone" },
      { key: "destination", label: "Destination" },
      { key: "bookingStatus", label: "Status" }
    ],
    fields: [
      { name: "name", label: "Name" },
      { name: "phone", label: "Phone" },
      { name: "pickup", label: "Pickup" },
      { name: "destination", label: "Destination" },
      { name: "travelDate", label: "Travel Date" },
      { name: "travelTime", label: "Travel Time" },
      { name: "vehicleType", label: "Vehicle Type" },
      { name: "passengers", label: "Passengers", type: "number" },
      { name: "message", label: "Message", type: "textarea" },
      { name: "bookingStatus", label: "Status", type: "select", options: ["new", "confirmed", "completed", "cancelled"] },
      { name: "notes", label: "Notes", type: "textarea" }
    ] as ResourceField[]
  },
  testimonials: {
    title: "Testimonials",
    description: "Publish client reviews and testimonials that reinforce brand trust.",
    endpoint: "/testimonials",
    columns: [
      { key: "name", label: "Name" },
      { key: "location", label: "Location" },
      { key: "rating", label: "Rating" },
      { key: "published", label: "Published" }
    ],
    fields: [
      { name: "name", label: "Name" },
      { name: "location", label: "Location" },
      { name: "rating", label: "Rating", type: "number" },
      { name: "message", label: "Message", type: "textarea" },
      { name: "avatar", label: "Avatar JSON", type: "json" },
      { name: "published", label: "Published", type: "checkbox" }
    ] as ResourceField[]
  },
  faqs: {
    title: "FAQs",
    description: "Maintain the customer-support questions that reduce booking friction.",
    endpoint: "/faqs",
    columns: [
      { key: "question", label: "Question" },
      { key: "category", label: "Category" },
      { key: "published", label: "Published" }
    ],
    fields: [
      { name: "question", label: "Question" },
      { name: "answer", label: "Answer", type: "textarea" },
      { name: "category", label: "Category" },
      { name: "published", label: "Published", type: "checkbox" }
    ] as ResourceField[]
  },
  enquiries: {
    title: "Enquiries",
    description: "Capture and track all website enquiries from prospective clients.",
    endpoint: "/enquiries",
    columns: [
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "service", label: "Service" },
      { key: "status", label: "Status" }
    ],
    fields: [
      { name: "name", label: "Name" },
      { name: "email", label: "Email" },
      { name: "phone", label: "Phone" },
      { name: "service", label: "Service" },
      { name: "message", label: "Message", type: "textarea" },
      { name: "status", label: "Status", type: "select", options: ["new", "in-progress", "closed"] }
    ] as ResourceField[]
  },
  gallery: {
    title: "Gallery",
    description: "Upload and manage brand imagery for the public gallery page.",
    endpoint: "/gallery",
    columns: [
      { key: "title", label: "Title" },
      { key: "category", label: "Category" },
      { key: "featured", label: "Featured" }
    ],
    fields: [
      { name: "title", label: "Title" },
      { name: "category", label: "Category" },
      { name: "image", label: "Image JSON", type: "json" },
      { name: "featured", label: "Featured", type: "checkbox" }
    ] as ResourceField[]
  }
};
