export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  recommendedFor: string;
  routeUrl: string;
  badge?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport Pickup & Drop",
    shortDesc:
      "Comfortable and coordinated transfers to and from Kangra Gaggal Airport (DHM) and nearby transit hubs.",
    fullDesc:
      "Arrive in Dharamshala with peace of mind. We coordinate punctual pickup and drop-off journeys between your hotel or homestay in McLeodganj/Dharamshala and Kangra Airport (Gaggal Airport), as well as Amritsar, Chandigarh, or Pathankot railway stations.",
    image: "/images/places/gaggal-airport-flight.png",
    features: [
      "Flight arrival time tracking assistance",
      "Spacious vehicle options for luggage",
      "Direct drop to your hotel or resort",
      "No waiting in taxi union queues",
    ],
    recommendedFor: "Solo travelers, couples, and arriving families",
    routeUrl: "/services/airport-transfers",
    badge: "Popular Service",
  },
  {
    id: "local-sightseeing",
    slug: "local-sightseeing",
    title: "Local Sightseeing & Day Tours",
    shortDesc:
      "Explore McLeodganj, Dharamshala, Dalai Lama Temple, Bhagsu Falls, and Naddi at your own relaxed pace.",
    fullDesc:
      "Discover the spiritual heart, colonial heritage, and panoramic viewpoints of the Kangra Valley. Customize your day itinerary without rushing—our chauffeurs know the scenic routes, quiet viewpoints, and best local stops.",
    image: "/images/places/mcleodganj-temple-road.png",
    features: [
      "Flexible full-day or half-day options",
      "Visits to Tsuglagkhang, Bhagsu Nag, Naddi, St. John Church",
      "Local guidance on timing and mountain weather",
      "Comfortable hill-driving experience",
    ],
    recommendedFor: "Sightseeing enthusiasts and cultural explorers",
    routeUrl: "/services/local-sightseeing",
    badge: "Most Requested",
  },
  {
    id: "outstation-taxi",
    slug: "outstation-taxi",
    title: "Outstation Taxi Services",
    shortDesc:
      "Intercity travel from Dharamshala to Manali, Shimla, Dalhousie, Chandigarh, Delhi, and Amritsar.",
    fullDesc:
      "Embark on picturesque Himalayan road trips with experienced mountain drivers. Whether you need a one-way transfer to Delhi/Chandigarh or a complete Himachal circuit, we offer dependable, private outstation travel.",
    image: "/images/places/dhauladhar-scenic-drive.png",
    features: [
      "One-way and round-trip booking options",
      "Experienced mountain highway drivers",
      "Comfortable breaks at clean highway stops",
      "Clean, AC vehicles with spacious boots",
    ],
    recommendedFor: "Long-distance travelers & interstate connections",
    routeUrl: "/services/outstation-taxi",
  },
  {
    id: "hotel-transfers",
    slug: "hotel-transfers",
    title: "Hotel & Resort Transfers",
    shortDesc:
      "Effortless point-to-point transfers between McLeodganj, Dharamkot, Bhagsu, and lower Dharamshala hotels.",
    fullDesc:
      "The terrain between lower Dharamshala, McLeodganj, and upper villages like Dharamkot or Bhagsu can be steep and busy. Our dependable point-to-point taxi service ensures comfortable transit between resorts, cafes, and conference venues.",
    image: "/images/fleet/parvishaa-taxi-mcleodganj.png",
    features: [
      "Door-to-door pickup from any hotel or homestay",
      "Chauffeurs familiar with steep village roads",
      "Safe handling of heavy luggage",
      "Scheduled pickup times honored",
    ],
    recommendedFor: "Resort guests and inter-neighborhood travel",
    routeUrl: "/services",
  },
  {
    id: "family-tours",
    slug: "tours",
    title: "Family Tours & Custom Packages",
    shortDesc:
      "Thoughtfully paced mountain holidays crafted for children, parents, and seniors with maximum comfort.",
    fullDesc:
      "Traveling with family requires relaxed schedules, clean vehicle interiors, gentle driving, and curated stops. Let Parvishaa Travels coordinate your multi-day itinerary with vehicles that keep everyone comfortable.",
    image: "/images/places/triund-dharamshala.png",
    features: [
      "Spacious MPVs and multi-seat vehicles",
      "Child and elder-friendly driving pace",
      "Customizable stopovers and photo points",
      "Dedicated trip coordination assistance",
    ],
    recommendedFor: "Families, multi-generational groups, and vacations",
    routeUrl: "/tours",
    badge: "Family Favorite",
  },
  {
    id: "corporate-travel",
    slug: "corporate-travel",
    title: "Corporate & Executive Travel",
    shortDesc:
      "Discreet, punctual, and professional chauffeur services for executive offsites, delegates, and VIP guests.",
    fullDesc:
      "Organizing an executive retreat, workshop, or visiting conference in Dharamshala? Parvishaa Travels provides executive sedan and MPV transportation with transparent billing and coordinated group logistics.",
    image: "/images/fleet/parvishaa-taxi-valley-view.png",
    features: [
      "Professional, courteous chauffeurs",
      "Multi-vehicle coordination for corporate groups",
      "Airport delegate reception services",
      "Detailed invoice support for corporate accounts",
    ],
    recommendedFor: "Corporate delegates, event organizers, and business retreats",
    routeUrl: "/services/corporate-travel",
  },
  {
    id: "ac-taxi-private",
    slug: "ac-private-cabs",
    title: "AC Taxi & Private Cab Booking",
    shortDesc:
      "Dedicated private vehicles for personalized journeys with complete privacy and comfort.",
    fullDesc:
      "No ride sharing, no unexpected detours. Reserve a dedicated private cab tailored to your schedule, whether for a morning monastery visit or an afternoon shopping trip at Kotwali Bazaar.",
    image: "/images/fleet/parvishaa-taxi-mountain.png",
    features: [
      "Exclusively private bookings",
      "Well-maintained climate control (AC/Heater)",
      "Transparent quotes agreed upfront",
      "Flexible hourly or day-rate arrangements",
    ],
    recommendedFor: "Private couples, families, and solo commuters",
    routeUrl: "/services",
  },
  {
    id: "customized-himachal-tours",
    slug: "customized-himachal-tours",
    title: "Customized Himachal Tours",
    shortDesc:
      "Tailor-made itineraries across Kangra, Chamba, Kullu, and Mandi districts crafted to your interests.",
    fullDesc:
      "From the tea gardens of Palampur and paragliding takeoffs of Bir Billing to the medieval Kangra Fort and Masrur rock-cut temples, we help you stitch together the ultimate Himalayan road adventure.",
    image: "/images/places/khajjiar-snow-cedar-road.png",
    features: [
      "Flexible multi-day route planning",
      "Insights into seasonal mountain passes & road conditions",
      "Custom vehicle allocation based on group luggage",
      "Direct chauffeur contact for hassle-free coordination",
    ],
    recommendedFor: "Road trip lovers and Himalayan explorers",
    routeUrl: "/tours",
  },
];
