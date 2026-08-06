import { FaBus, FaCarSide, FaPlaneArrival, FaRoute, FaTaxi, FaUsers } from "react-icons/fa6";
import { faqs, fleetVehicles, testimonials } from "@traveller/shared/content";
import { supportEmail, supportPhone, officeAddress, siteName } from "@traveller/shared";

export const siteDetails = {
  name: siteName,
  supportEmail,
  supportPhone,
  officeAddress,
  mapUrl: "https://www.google.com/maps?q=Marine+Drive+Mumbai&output=embed"
};

export const statistics = [
  { label: "Trips completed", value: "12K+" },
  { label: "Cities served", value: "45+" },
  { label: "Average rating", value: "4.9/5" },
  { label: "24/7 support", value: "Always" }
];

export const whyChooseUs = [
  "Luxury-first vehicle selection with spotless interiors and punctual chauffeurs.",
  "Transparent pricing, instant confirmations, and support throughout the journey.",
  "Flexible packages for airport transfers, leisure trips, business mobility, and events.",
  "A streamlined booking experience backed by a responsive operations team."
];

export const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764b9c?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium car interior"
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    alt: "Touring vehicle on a scenic road"
  },
  {
    src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80",
    alt: "Group travel experience"
  },
  {
    src: "https://images.unsplash.com/photo-1472036176056-dbbf1f53de5d?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury city transfer"
  }
];

export const aboutMilestones = [
  { value: "15+", label: "Years of travel operations" },
  { value: "100%", label: "Fleet inspection discipline" },
  { value: "24/7", label: "Dispatch and guest support" },
  { value: "5-star", label: "Hospitality standard" }
];

export const aboutStory = [
  "Traveller was built for clients who expect more than point-to-point transport. We combine fleet reliability, route planning, and travel consulting into a single premium service.",
  "Our team manages airport transfers, outstation trips, local mobility, and custom tour packages with the same operational discipline used in enterprise travel programs."
];

export const policySections = {
  privacy: [
    {
      heading: "Information we collect",
      body: "We collect booking, enquiry, and support information to manage reservations, confirm availability, and improve service quality."
    },
    {
      heading: "How we use it",
      body: "Your data is used to process bookings, communicate updates, handle service issues, and comply with legal requirements."
    },
    {
      heading: "Security",
      body: "We protect sensitive information using access controls, secure transport, and operational safeguards designed for commercial systems."
    }
  ],
  terms: [
    {
      heading: "Bookings",
      body: "All bookings are subject to vehicle availability, route conditions, and the final confirmation shared by our operations team."
    },
    {
      heading: "Payments",
      body: "Pricing and payment terms are shared before confirmation. Additional tolls, parking, and state permits may apply where relevant."
    },
    {
      heading: "Cancellations",
      body: "Cancellation terms vary by service type and will be shared with the booking confirmation email or message."
    }
  ]
};

export const services = [
  {
    title: "Airport Taxi",
    description: "Reliable airport transfers with live flight tracking, meet and greet support, and premium vehicles.",
    href: "/airport-taxi",
    icon: "FaPlaneArrival"
  },
  {
    title: "Local Taxi",
    description: "Hourly and point-to-point rides with professional chauffeurs for city movement and meetings.",
    href: "/local-taxi",
    icon: "FaTaxi"
  },
  {
    title: "Outstation Taxi",
    description: "Comfortable intercity travel with transparent fares, route planning, and flexible departures.",
    href: "/outstation-taxi",
    icon: "FaRoute"
  },
  {
    title: "Tempo Traveller",
    description: "Ideal for families and groups who need extra seating, luggage capacity, and premium comfort.",
    href: "/tempo-traveller",
    icon: "FaUsers"
  },
  {
    title: "Corporate Taxi",
    description: "Executive transport for meetings, events, VIP arrivals, and recurring business movement.",
    href: "/services",
    icon: "FaCarSide"
  },
  {
    title: "Luxury Bus",
    description: "Fleet-grade coaches for retreats, school trips, conferences, and wedding guest logistics.",
    href: "/services",
    icon: "FaBus"
  }
];

export const destinations = [
  {
    title: "Rajasthan Heritage",
    description: "Royal forts, palace stays, and private chauffeur circuits across Jaipur, Udaipur, and Jodhpur.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    href: "/tour-packages"
  },
  {
    title: "Goa Leisure Escape",
    description: "Sunset beaches, boutique stays, and premium transfers for couples and small groups.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    href: "/tour-packages"
  },
  {
    title: "Himalayan Retreat",
    description: "Scenic mountain drives, wellness stays, and curated long-route travel experiences.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    href: "/tour-packages"
  }
];

export const packages = [
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
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
        alt: "Jaipur palace architecture"
      },
      {
        url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
        alt: "Desert landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        alt: "Heritage hotel interior"
      }
    ],
    overview: "A curated royal circuit covering palace stays, heritage walks, and private chauffeur experiences.",
    itinerary: [
      { day: "Day 1", title: "Arrive Jaipur", description: "Airport pickup, check-in, and evening city orientation." },
      { day: "Day 2", title: "Jaipur Heritage", description: "Amber Fort, palace walkthroughs, and curated shopping stops." },
      { day: "Day 3", title: "Drive to Jodhpur", description: "Scenic transfer with curated lunch and heritage sightseeing." }
    ],
    included: ["Luxury stays", "Breakfast", "Airport transfers"],
    excluded: ["Airfare", "Personal expenses"],
    featured: true
  },
  {
    slug: "coastal-goa-discovery",
    title: "Coastal Goa Discovery",
    destination: "North and South Goa",
    price: 17999,
    duration: "4 Days / 3 Nights",
    difficulty: "Moderate",
    heroImage: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      alt: "Goa coast"
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        alt: "Goa shoreline"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        alt: "Beach sunset"
      }
    ],
    overview: "A flexible beach itinerary with boutique stays, private airport transfers, and curated local experiences.",
    itinerary: [
      { day: "Day 1", title: "Arrival and relaxation", description: "Airport pickup and boutique hotel check-in with evening leisure." },
      { day: "Day 2", title: "North Goa exploration", description: "Beach hop, café stops, and curated sightseeing." },
      { day: "Day 3", title: "South Goa experience", description: "Leisure drive, heritage chapel stops, and sunset dining." }
    ],
    included: ["Hotel stay", "Breakfast", "Transfers"],
    excluded: ["Airfare", "Water sports"],
    featured: true
  },
  {
    slug: "himalayan-retreat",
    title: "Himalayan Retreat",
    destination: "Shimla, Manali",
    price: 29999,
    duration: "7 Days / 6 Nights",
    difficulty: "Premium",
    heroImage: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
      alt: "Himalayan landscape"
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
        alt: "Mountain valley"
      },
      {
        url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
        alt: "Snowy ridgeline"
      }
    ],
    overview: "A scenic mountain journey with premium transfers, curated hotel selection, and local sightseeing.",
    itinerary: [
      { day: "Day 1", title: "Departure from city", description: "Meet your chauffeur and begin the scenic mountain transfer." },
      { day: "Day 2", title: "Local sightseeing", description: "Temple visits, valley viewpoints, and curated stops." },
      { day: "Day 3", title: "Leisure and return", description: "Breakfast, free time, and return transfer with comfort breaks." }
    ],
    included: ["Premium stays", "Breakfast", "Driver allowance"],
    excluded: ["Airfare", "Adventure activities"],
    featured: false
  }
];

export { fleetVehicles, testimonials, faqs };
