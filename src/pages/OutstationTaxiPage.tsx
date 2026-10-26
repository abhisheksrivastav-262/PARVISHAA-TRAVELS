import React from "react";
import { Compass, ShieldCheck, MapPin, ArrowRight, Car, CheckCircle2 } from "lucide-react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BookingWidget } from "../components/booking/BookingWidget";
import { BUSINESS_INFO } from "../data/businessInfo";

export const OutstationTaxiPage: React.FC = () => {
  const commonRoutes = [
    { destination: "Manali & Kullu", distance: "Scenic Mountain Route", type: "One Way or Round Trip" },
    { destination: "Shimla & Kufri", distance: "Colonial Hills Route", type: "One Way or Round Trip" },
    { destination: "Dalhousie & Khajjiar", distance: "Chamba Valley Highway", type: "One Way or Round Trip" },
    { destination: "Chandigarh Hub", distance: "National Highway Link", type: "One Way or Round Trip" },
    { destination: "Amritsar Golden Temple", distance: "Punjab Plains Route", type: "One Way or Round Trip" },
    { destination: "Delhi NCR", distance: "Interstate Transit Link", type: "One Way or Round Trip" },
  ];

  return (
    <>
      <SEOHead
        title="Outstation Taxi from Dharamshala & McLeodganj | Intercity Cabs"
        description="Book private outstation taxi and chauffeur services from Dharamshala to Manali, Shimla, Dalhousie, Chandigarh, Delhi, and Amritsar. Request a personalized travel quote."
      />

      {/* Hero */}
      <section className="relative bg-[#064E3B] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
            alt="Outstation Himalayan Highway"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            Intercity &bull; Road Expeditions
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Go Beyond the Ordinary.
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-light">
            Private, comfortable outstation travel connecting Dharamshala and McLeodganj with the rest of Himachal Pradesh, Punjab, and New Delhi.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <BookingWidget
          initialTripType="One Way"
          initialPickup="McLeodganj / Dharamshala"
          initialDropoff="Manali / Chandigarh / Delhi"
          title="Get a Travel Quote"
          subtitle="Tell us your destination, travel date, and preferred vehicle. We will provide a transparent, personalized quote."
        />
      </section>

      {/* Common Outstation Routes */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Popular Routes"
            title="Popular Outstation Corridors"
            description="We coordinate both one-way transfers and multi-day round-trip journeys across northern India."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonRoutes.map((route, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#087F5B]" />
                    <h3 className="font-heading font-bold text-base text-[#064E3B]">
                      Dharamshala &rarr; {route.destination}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{route.distance} &bull; {route.type}</p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-[#087F5B] bg-[#087F5B]/10 px-3 py-1.5 rounded-full inline-block">
                    Request a Personalized Quote
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-gray-500 max-w-xl mx-auto">
            * All routes are quoted based on verified travel dates, vehicle preference, and toll/tax requirements. No hidden extras.
          </div>
        </div>
      </section>
    </>
  );
};
