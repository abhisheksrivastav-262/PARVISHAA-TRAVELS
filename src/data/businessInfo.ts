export interface BusinessDetails {
  name: string;
  tagline: string;
  supportingHeadline: string;
  supportingDescription: string;
  finalMessage: string;
  phonePrimary: string;
  phonePrimaryRaw: string;
  phoneSecondary: string;
  phoneSecondaryRaw: string;
  whatsappPrimary: string;
  whatsappSecondary: string;
  email: string;
  address: {
    line1: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  googleMapsUrl: string;
}

export const BUSINESS_INFO: BusinessDetails = {
  name: "Parvishaa Travel",
  tagline: "Every Journey, A Beautiful Experience.",
  supportingHeadline: "Discover the Himalayas in Comfort.",
  supportingDescription:
    "From airport pickups and comfortable hotel transfers to memorable Himalayan road trips, Parvishaa Travel helps you explore Dharamshala, McLeodganj, and beyond with personalized travel services.",
  finalMessage: "Parvishaa Travel — Discover More. Travel Comfortably. Make Every Journey Count.",
  phonePrimary: "+91 98176 56360",
  phonePrimaryRaw: "+919817656360",
  phoneSecondary: "+91 93174 56360",
  phoneSecondaryRaw: "+919317456360",
  whatsappPrimary: "919817656360",
  whatsappSecondary: "919317456360",
  email: "inquiry@parvishaatravels.com", // Contact inquiry placeholder
  address: {
    line1: "Mona Plaza Complex",
    landmark: "Near ICICI Bank",
    city: "McLeodganj",
    district: "Dharamshala",
    state: "Himachal Pradesh",
    pincode: "176219",
    country: "India",
    full: "Mona Plaza Complex, Near ICICI Bank, McLeodganj, Dharamshala, Himachal Pradesh – 176219, India.",
  },
  // Uses exact confirmed address for map direction query without fabricating coordinates
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mona+Plaza+Complex+Near+ICICI+Bank+McLeodganj+Dharamshala+Himachal+Pradesh+176219",
};
