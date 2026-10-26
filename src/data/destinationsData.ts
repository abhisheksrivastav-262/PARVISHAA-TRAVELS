export interface DestinationItem {
  id: string;
  name: string;
  category: "Local Sightseeing" | "Regional Excursion" | "Day Trip";
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  popularFor: string;
}

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: "mcleodganj",
    name: "McLeodganj",
    category: "Local Sightseeing",
    subtitle: "Little Lhasa of the Himalayas & Spiritual Heart",
    description:
      "Perched in the upper reaches of Kangra Valley, McLeodganj is the vibrant residence of His Holiness the 14th Dalai Lama. Famous for Tibetan handicrafts, aromatic bakeries, serene monasteries, and prayer flags fluttering against pine ridges.",
    highlights: [
      "Tsuglagkhang Complex (Dalai Lama Temple)",
      "Tibet Museum & Library of Tibetan Works",
      "St. John in the Wilderness Church (1852)",
      "Temple Road & Jogiwara Craft Bazaars",
    ],
    image: "/images/places/mcleodganj-temple-road.png",
    popularFor: "Spiritual retreats, Tibetan cuisine, mountain walks",
  },
  {
    id: "dharamshala",
    name: "Dharamshala & HPCA Stadium",
    category: "Local Sightseeing",
    subtitle: "Panoramic Valleys & International Cricket Grounds",
    description:
      "Set against the dramatic backdrop of the snow-clad Dhauladhar mountains, lower Dharamshala combines vibrant local bazaars, the world-famous HPCA International Cricket Stadium, and lush pine woodlands.",
    highlights: [
      "HPCA International Cricket Stadium with snow peak backdrop",
      "Dharamshala War Memorial & Pine Forest",
      "Kangra Art Museum",
      "Kotwali Bazaar local shopping",
    ],
    image: "/images/places/hpca-stadium.png",
    popularFor: "Iconic stadium views, local art, valley shopping",
  },
  {
    id: "bhagsu-nag",
    name: "Bhagsu Nag & Waterfall",
    category: "Local Sightseeing",
    subtitle: "Sacred Springs, Cascading Falls & Alpine Cafes",
    description:
      "A scenic enclave just 2 kilometers from central McLeodganj, featuring the revered ancient Bhagsunag Shiva temple, freshwater swimming pools, and a scenic walk to the roaring Bhagsu Waterfall.",
    highlights: [
      "Bhagsunath Temple & holy mountain springs",
      "Trek path to Bhagsu Waterfall",
      "Bohemian mountain cafes & bakeries",
      "Start point for Triund day treks",
    ],
    image: "/images/places/bhagsu-waterfall-high.png",
    popularFor: "Temple visits, waterfall hiking, relaxing cafes",
  },
  {
    id: "naddi",
    name: "Naddi Sunset Viewpoint",
    category: "Local Sightseeing",
    subtitle: "Unmatched Panoramic Vistas of the Dhauladhar Range",
    description:
      "Naddi village offers one of the most magnificent sunset panoramas in Himachal Pradesh, providing an unobstructed close-up view of the towering Dhauladhar mountains and the sprawling Kangra valley below.",
    highlights: [
      "Naddi Viewpoint golden hour sunsets over cloud sea",
      "Serene walking trails among deodar forests",
      "Views of Kareri Lake trailhead & snow peaks",
      "Winter snowfall panorama and peaceful village atmosphere",
    ],
    image: "/images/places/naddi-sunset-clouds.png",
    popularFor: "Photography, sunset views, peaceful mountain walks",
  },
  {
    id: "masroor-temple",
    name: "Masrur Rock Cut Temple",
    category: "Day Trip",
    subtitle: "8th-Century Monolithic Wonder & 'Ellora of the North'",
    description:
      "An extraordinary complex of 15 monolithic rock-cut temples carved out of a single sandstone rock, reflecting exquisitely across a sacred water pond with panoramic mountain horizons.",
    highlights: [
      "8th-century monolithic rock-cut shrines",
      "Sacred reflection water tank with fish",
      "Panoramic views of Dhauladhar snow ridges",
      "Archaeological wonder of Kangra Valley",
    ],
    image: "/images/places/masroor-temple-wide.png",
    popularFor: "Heritage exploration, architecture, photography",
  },
  {
    id: "palampur",
    name: "Palampur Tea Gardens",
    category: "Day Trip",
    subtitle: "Tea Capital of Northwest India & Colonial Estates",
    description:
      "Palampur combines rolling emerald tea gardens, gushing alpine streams, and cool pine scent. Visit working tea estates, Neugal Khad gorge, and nearby Andretta pottery village.",
    highlights: [
      "Scenic tea gardens and Kangra tea factories",
      "Neugal Khad chasm & Bundla chasm viewpoints",
      "Andretta Pottery & Norah Richards Artists' Colony",
      "Saurabh Van Vihar natural eco-park",
    ],
    image: "/images/places/palampur-tea-gardens.png",
    popularFor: "Tea estate walks, pottery workshops, peaceful drives",
  },
  {
    id: "norbulingka",
    name: "Norbulingka Institute & Monastery",
    category: "Local Sightseeing",
    subtitle: "Preserving Tibetan Art, Japanese Water Bridges & Tranquil Gardens",
    description:
      "A serene cultural haven dedicated to the preservation of Tibetan literature and artistic forms. Features traditional Tibetan architecture, koi ponds, Japanese bridges, and craft workshops.",
    highlights: [
      "Deden Tsuglagkhang Temple with giant gilded Buddha",
      "Traditional Thangka painting and wood carving studios",
      "Japanese koi garden and stream bridges",
      "Norling Garden Cafe and arts boutique",
    ],
    image: "/images/places/norbulingka-garden-bridge.png",
    popularFor: "Tibetan culture, handicrafts, peaceful gardens",
  },
  {
    id: "gyuto-monastery",
    name: "Gyuto Tantric Monastery, Sidhbari",
    category: "Local Sightseeing",
    subtitle: "Majestic Golden Monastery & Sacred Chants",
    description:
      "One of the most revered monasteries of Tibetan Buddhism, famed for its distinctive harmonic throat chanting and spiritual discipline set against sweeping Dhauladhar backdrop.",
    highlights: [
      "Grand Tibetan architecture and golden statues",
      "Temporary residence of the 17th Karmapa",
      "Deep overtone throat chanting prayers",
      "Serene Himalayan foothills setting",
    ],
    image: "/images/places/gyuto-monastery.png",
    popularFor: "Spiritual peace, monastic architecture, meditation",
  },
  {
    id: "triund",
    name: "Triund Hill & Ridge",
    category: "Local Sightseeing",
    subtitle: "Crown Jewel of Dharamshala & High Alpine Meadow",
    description:
      "Triund is an enchanting alpine meadow situated at 2,828 meters. Offering majestic close-ups of the moon peak and Dhauladhar walls on one side and the vast Kangra valley on the other.",
    highlights: [
      "Panoramic views of Dhauladhar snow wall",
      "Sweeping views of Kangra Valley lights at dusk",
      "Scenic deodar and rhododendron trails",
      "Stargazing and alpine camping atmosphere",
    ],
    image: "/images/places/triund-dharamshala.png",
    popularFor: "Trekking, alpine photography, mountain panorama",
  },
  {
    id: "khajjiar",
    name: "Khajjiar & Chamba Valley",
    category: "Regional Excursion",
    subtitle: "Mini Switzerland of India & Alpine Cedar Meadows",
    description:
      "A saucer-shaped alpine meadow surrounded by dense deodar pine forests and snow mountains. Famous for its floating island lake and scenic pine road drives from Dharamshala.",
    highlights: [
      "Khajjiar Lake & floating grass island",
      "Snow-covered deodar pine avenues in winter",
      "Horse riding and rolling meadow walks",
      "Scenic mountain drive through Dalhousie & Chamba",
    ],
    image: "/images/places/khajjiar-snow-cedar-road.png",
    popularFor: "Meadow strolls, winter snow drives, family picnics",
  },
  {
    id: "amritsar",
    name: "Golden Temple, Amritsar",
    category: "Regional Excursion",
    subtitle: "Sacred Outstation Pilgrimage from Dharamshala",
    description:
      "A popular one-day or two-day outstation trip from Dharamshala. Experience the celestial serenity of Sri Harmandir Sahib (Golden Temple), Wagah Border ceremony, and delicious Punjabi cuisine.",
    highlights: [
      "Sri Harmandir Sahib (Golden Temple) darshan",
      "Wagah Border beating retreat ceremony",
      "Historic Jallianwala Bagh memorial",
      "Comfortable highway chauffeur drive with scenic stops",
    ],
    image: "/images/places/golden-temple-amritsar.png",
    popularFor: "Pilgrimage, heritage, patriotic Wagah ceremony",
  },
  {
    id: "bir-billing",
    name: "Bir Billing",
    category: "Day Trip",
    subtitle: "World-Renowned Paragliding Capital & Tibetan Monasteries",
    description:
      "Globally acclaimed as the second highest paragliding takeoff site in the world. Bir Billing features exhilarating tandem paragliding flights, peaceful monasteries, and eco-cafes.",
    highlights: [
      "Billing takeoff site (2,400m altitude)",
      "Chokling & Sherabling Tibetan Monasteries",
      "Landing site cafes & sunset watching",
      "Scenic mountain highway through Baijnath temple",
    ],
    image: "/images/places/himachal-mountain-highway.png",
    popularFor: "Tandem paragliding, monastery tours, modern cafes",
  },
];
