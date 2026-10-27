export interface FAQItem {
  id: string;
  category:
    | "Taxi Booking"
    | "Airport Transfers"
    | "Vehicle Preferences"
    | "Sightseeing"
    | "Outstation Travel"
    | "Payment and Confirmation";
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "how-to-book",
    category: "Taxi Booking",
    question: "How can I book a taxi with Parvishaa Travel?",
    answer:
      "You can send your booking inquiry directly through our online request form or connect with our team on WhatsApp / phone at +91 9817656360. Our team will verify your route, travel dates, passenger count, and vehicle preference, and share a prompt, clear confirmation with travel details.",
  },
  {
    id: "is-booking-confirmed-instantly",
    category: "Taxi Booking",
    question: "Is my ride immediately confirmed upon submitting the form?",
    answer:
      "Submitting an inquiry notifies our travel coordination team of your preferred itinerary. A booking is formally confirmed once our team verifies vehicle availability for your dates and agrees upon pickup time and quote with you directly.",
  },
  {
    id: "airport-transfers-gaggal",
    category: "Airport Transfers",
    question: "Do you provide airport pickup and drop for Kangra Gaggal Airport?",
    answer:
      "Yes. We coordinate airport pickups and drop-offs for Kangra Airport (Gaggal Airport - DHM), located approximately 15-20 km from Dharamshala/McLeodganj. You can share your arrival flight number so we can track any schedule updates.",
  },
  {
    id: "airport-transfers-other-cities",
    category: "Airport Transfers",
    question: "Can I arrange airport transfers to Amritsar, Chandigarh, or Delhi?",
    answer:
      "Yes, outstation transfers to and from Sri Guru Ram Dass Jee International Airport (Amritsar), Shaheed Bhagat Singh Airport (Chandigarh), and Indira Gandhi International Airport (Delhi) are available upon advance inquiry.",
  },
  {
    id: "vehicle-options-available",
    category: "Vehicle Preferences",
    question: "What vehicle categories can I request for my trip?",
    answer:
      "We offer clean, well-maintained Sedan (e.g. Dzire/Etios), SUV (e.g. Ertiga/Scorpio), Luxury MPV (e.g. Toyota Innova Crysta), and Group Tempo Travellers. Vehicle selections in inquiries indicate your preference, and specific models are allocated based on confirmed availability.",
  },
  {
    id: "ac-usage-in-hills",
    category: "Vehicle Preferences",
    question: "Is air conditioning operated while driving on steep hill roads?",
    answer:
      "All vehicles are equipped with functional climate control. On steep Himalayan inclines, drivers may temporarily adjust cooling to ensure optimum engine performance and passenger safety, resuming full climate control on level sections and highways.",
  },
  {
    id: "custom-sightseeing",
    category: "Sightseeing",
    question: "Can I customize our family sightseeing itinerary in Dharamshala?",
    answer:
      "Absolutely. We specialize in relaxed, personalized itineraries. You can choose to spend more time at the Dalai Lama Temple, explore tea gardens in Palampur, or catch the sunset at Naddi without being hurried by rigid tour schedules.",
  },
  {
    id: "local-points-covered",
    category: "Sightseeing",
    question: "Which destinations are typically covered during local sightseeing?",
    answer:
      "Popular local stops include the Tsuglagkhang Complex, Bhagsu Nag Temple & Waterfall, St. John in the Wilderness Church, Dal Lake, Naddi Sunset Viewpoint, HPCA Cricket Stadium, and the War Memorial. We adapt each day trip to your interests.",
  },
  {
    id: "outstation-one-way",
    category: "Outstation Travel",
    question: "Can I book a one-way taxi from McLeodganj to Manali or Chandigarh?",
    answer:
      "Yes, both one-way transfers and round-trip outstation itineraries are supported. Inquire with your departure point and destination, and our team will provide a tailored quote.",
  },
  {
    id: "outstation-overnight-trips",
    category: "Outstation Travel",
    question: "Do you arrange multi-day road trips across Himachal Pradesh?",
    answer:
      "Yes, we provide dedicated vehicles and experienced mountain chauffeurs for multi-day circuits including Dharamshala, Dalhousie, Khajjiar, Kullu, Manali, and Shimla.",
  },
  {
    id: "payment-methods",
    category: "Payment and Confirmation",
    question: "How do payments and quotes work?",
    answer:
      "Fares are quoted transparently based on route, vehicle choice, and duration before your trip begins. Payment terms, advance token amounts (if required during peak season), and accepted payment options (UPI, bank transfer, cash) will be communicated clearly by our team.",
  },
  {
    id: "cancellation-policy",
    category: "Payment and Confirmation",
    question: "What is your cancellation and schedule change policy?",
    answer:
      "Because mountain travel plans can be influenced by weather or flight schedules, please notify us as early as possible if your travel dates change. Exact cancellation conditions will be shared when your booking details are finalized with our team.",
  },
];
