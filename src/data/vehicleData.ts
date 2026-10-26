export interface VehicleOption {
  id: string;
  name: string;
  tagline: string;
  passengers: string;
  luggage: string;
  acType: string;
  description: string;
  image: string;
  idealFor: string;
}

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: "Sedan",
    name: "Comfort Mountain Sedan",
    tagline: "Maruti Dzire / Toyota Etios (Chauffeur Driven)",
    passengers: "Up to 4 Passengers",
    luggage: "2 Medium Bags + Hand Luggage",
    acType: "Air Conditioned & Mountain Heated",
    description:
      "Our verified, nimble sedan fleet navigating McLeodganj, Dharamshala, and scenic Himalayan routes with experienced hill drivers.",
    image: "/images/fleet/parvishaa-taxi-mcleodganj.png",
    idealFor: "Couples, small families, Kangra airport transfers & sightseeing",
  },
  {
    id: "SUV",
    name: "Spacious Mountain SUV / Ertiga",
    tagline: "Maruti Ertiga / Mahindra Scorpio (6+1 Seater)",
    passengers: "Up to 6 Passengers",
    luggage: "3-4 Medium Bags",
    acType: "Front & Rear Climate Control",
    description:
      "High ground clearance and sturdy mountain handling make this a reliable vehicle for hill roads, scenic viewpoints, and small group road trips.",
    image: "/images/fleet/parvishaa-taxi-valley-view.png",
    idealFor: "Family day tours, Naddi & Triund base, Kangra Valley",
  },
  {
    id: "Premium MPV",
    name: "Luxury Travel MPV (Innova Crysta)",
    tagline: "Toyota Innova Crysta Luxury Chauffeur Service",
    passengers: "6 to 7 Passengers",
    luggage: "4-5 Large Bags",
    acType: "Multi-Zone Climate Control",
    description:
      "The gold standard for Himalayan road journeys. Generous captain seat legroom, ultra-smooth ride on winding roads, and ample luggage space for extended holidays.",
    image: "/images/banners/parvishaa-service-poster.png",
    idealFor: "Luxury family travel, multi-day Himachal road trips, corporate guests",
  },
  {
    id: "Tempo Traveller",
    name: "Himalayan Group Traveller",
    tagline: "Force Traveller 9-16 Seater",
    passengers: "9 to 16 Passengers",
    luggage: "Dedicated luggage carrier",
    acType: "Roof Duct AC & High Comfort Reclining Seats",
    description:
      "Spacious pushback seating and high roof clearance make long family group trips and corporate delegations unified, comfortable, and memorable.",
    image: "/images/places/himachal-mountain-highway.png",
    idealFor: "Large family reunions, wedding parties, corporate offsites",
  },
];
