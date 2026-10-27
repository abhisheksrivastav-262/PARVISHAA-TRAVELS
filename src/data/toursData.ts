export interface TourExperience {
  id: string;
  title: string;
  category: "Family Getaway" | "Himalayan Sightseeing" | "Scenic Nature Drive" | "Custom Circuit";
  shortDesc: string;
  fullDesc: string;
  image: string;
  suggestedDestinations: string[];
  suggestedDuration: string;
  highlights: string[];
}

export const TOURS_DATA: TourExperience[] = [
  {
    id: "mcleodganj-heritage-circuit",
    title: "Dharamshala & McLeodganj Heritage Trail",
    category: "Himalayan Sightseeing",
    shortDesc:
      "A scenic exploration of Tibetan spirituality, colonial churches, international cricket grounds, and mountain vistas.",
    fullDesc:
      "A thoughtfully paced itinerary combining the world-famous Tsuglagkhang Complex (Dalai Lama Temple), HPCA Cricket Stadium, Bhagsunag Temple, St. John in the Wilderness Church, and the Naddi Sunset Viewpoint. Perfectly adapted to your family's pace.",
    image: "/images/places/hpca-stadium.png",
    suggestedDestinations: [
      "McLeodganj Dalai Lama Temple",
      "HPCA Stadium Dharamshala",
      "St. John in the Wilderness",
      "Bhagsu Waterfall & Temple",
      "Naddi Sunset Point",
    ],
    suggestedDuration: "1 to 2 Days (Suggested)",
    highlights: [
      "Spiritual & cultural landmarks",
      "Panoramic views of Dhauladhar range",
      "Safe and relaxed mountain driving",
    ],
  },
  {
    id: "kangra-temple-fort-excursion",
    title: "Kangra Valley Cultural & Fortress Trail",
    category: "Family Getaway",
    shortDesc:
      "Step into thousands of years of Himalayan history, sacred Shaktipeeth temples, and dramatic valley views.",
    fullDesc:
      "Journey downhill from McLeodganj through scenic pine forests to visit the ancient Kangra Fort, the historic Brajeshwari Devi Temple, and optionally the rock-cut Masrur Temples. Includes scenic lunch stops overlooking the river gorge.",
    image: "/images/places/masroor-rock-temple.png",
    suggestedDestinations: [
      "Kangra Fort & Museum",
      "Shri Brajeshwari Devi Temple",
      "Banganga River viewpoint",
      "Kangra valley rural drive",
    ],
    suggestedDuration: "Full Day (Suggested)",
    highlights: [
      "Rich historical architecture",
      "Spiritual blessings at ancient shrine",
      "Scenic countryside mountain roads",
    ],
  },
  {
    id: "palampur-tea-estates-andretta",
    title: "Palampur Tea Gardens & Andretta Artists' Colony",
    category: "Scenic Nature Drive",
    shortDesc:
      "Emerald rolling tea gardens, snow-capped mountain backgrounds, and artisanal pottery workshops.",
    fullDesc:
      "Drive along the tea-scented hills of Palampur. Walk through colonial tea estates, enjoy fresh Kangra tea, explore the Neugal Khad canyon, and discover the legendary pottery studio and art gallery at Andretta.",
    image: "/images/places/palampur-tea-gardens.png",
    suggestedDestinations: [
      "Palampur Tea Estates & Factory",
      "Neugal Khad Canyon",
      "Andretta Pottery Village & Gallery",
      "Saurabh Van Vihar Eco Park",
    ],
    suggestedDuration: "Full Day (Suggested)",
    highlights: [
      "Lush aromatic tea gardens",
      "Hands-on pottery inspiration",
      "Gentle, relaxed pacing for all ages",
    ],
  },
  {
    id: "bir-billing-paragliding-day-trip",
    title: "Bir Billing Adventure & Monastic Serenity",
    category: "Scenic Nature Drive",
    shortDesc:
      "Watch gliders soar against the Dhauladhars and visit tranquil Tibetan monasteries in the valley.",
    fullDesc:
      "A scenic day trip to the world-famous paragliding capital. Enjoy the scenic mountain drive through Baijnath Shiva Temple, visit serene monasteries including Chokling and Sherabling, and relax in Bir's peaceful alpine cafes.",
    image: "/images/places/himachal-mountain-highway.png",
    suggestedDestinations: [
      "Bir Tibetan Colony & Monasteries",
      "Billing Takeoff Viewpoint",
      "Baijnath 13th-century Shiva Temple",
      "Bir Tibetan Handicrafts & Cafes",
    ],
    suggestedDuration: "Full Day (Suggested)",
    highlights: [
      "World-class paragliding atmosphere",
      "Majestic Tibetan Buddhist architecture",
      "Picturesque mountain cafes",
    ],
  },
  {
    id: "himachal-panoramic-circuit",
    title: "Grand Himachal Road Trip Circuit",
    category: "Custom Circuit",
    shortDesc:
      "Personalized intercity road expedition connecting Dharamshala, Manali, Shimla, or Dalhousie.",
    fullDesc:
      "Craft your multi-day dream road trip across Himachal Pradesh. Parvishaa Travel provides a dedicated vehicle and seasoned mountain chauffeur for the entire journey, ensuring unmatched flexibility, safety, and comfort.",
    image: "/images/places/dhauladhar-scenic-drive.png",
    suggestedDestinations: [
      "Dharamshala & McLeodganj",
      "Dalhousie & Khajjiar",
      "Kullu & Manali",
      "Shimla & Kufri",
    ],
    suggestedDuration: "4 to 7 Days (Customizable)",
    highlights: [
      "Private dedicated chauffeur throughout",
      "Completely flexible daily stops",
      "Spacious MPV for family luggage",
    ],
  },
];
