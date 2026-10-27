import React from "react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { DESTINATIONS_DATA } from "../data/destinationsData";
import { DestinationCard } from "../components/ui/DestinationCard";
import { BookingWidget } from "../components/booking/BookingWidget";

interface DestinationsPageProps {
  onOpenBookingModal: (tripType?: string, destination?: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <>
      <SEOHead
        title="Explore Destinations in Dharamshala & Kangra Valley | Parvishaa Travel"
        description="Discover McLeodganj, Bhagsu Nag, Naddi Sunset Point, HPCA Stadium, Kangra Fort, Palampur tea gardens, and Bir Billing paragliding with Parvishaa Travel."
      />

      {/* Hero */}
      <section className="relative bg-[#064E3B] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80"
            alt="Himalayan Mountain Viewpoints"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            Dharamshala &bull; Kangra Valley &bull; Dhauladhar Range
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Explore Himalayan Destinations
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-light">
            From the spiritual serenity of McLeodganj to the sweeping sunset viewpoints of Naddi and the ancient ramparts of Kangra Fort, explore places that inspire.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Regional Highlights"
            title="Handpicked Himalayan Locations"
            description="Click 'Plan This Trip' on any destination to build a personalized day or multi-day itinerary."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS_DATA.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onPlanTrip={(name) => onOpenBookingModal("Local Sightseeing", name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingWidget
            title="Plan Your Destination Tour"
            subtitle="Tell us which places you would like to explore and your preferred travel dates."
            initialTripType="Local Sightseeing"
          />
        </div>
      </section>
    </>
  );
};
