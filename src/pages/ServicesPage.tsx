import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ServiceCard } from "../components/ui/ServiceCard";
import { SERVICES_DATA } from "../data/servicesData";
import { VEHICLE_OPTIONS } from "../data/vehicleData";
import { VehicleCard } from "../components/ui/VehicleCard";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessInfo";

interface ServicesPageProps {
  onOpenBookingModal: (tripType?: string, service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBookingModal }) => {
  return (
    <>
      <SEOHead
        title="Our Travel & Taxi Services | Parvishaa Travel McLeodganj & Dharamshala"
        description="Explore our complete range of taxi and travel services: Gaggal airport transfers, hotel pickup, local McLeodganj sightseeing, outstation cabs, and custom family tours."
      />

      {/* Hero Header */}
      <section className="relative bg-[#064E3B] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
            alt="Himalayan Mountain Road"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            Comprehensive Travel Solutions
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Travel Services Designed Around You
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-light">
            Whether for an airport pickup, an all-day local excursion, or a multi-day family tour across Himachal Pradesh, we ensure comfortable and dependable travel.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Explore Categories"
            title="Our Dedicated Chauffeur & Cab Services"
            description="Select any service to view full itinerary options, vehicle recommendations, and submit an instant travel inquiry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookService={(name) => onOpenBookingModal("Customized Tour", name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Categories Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Vehicle Preferences"
            title="Comfortable Vehicles for Himalayan Roads"
            description="Tell us your party size and luggage requirements. We allocate vehicles suited for steep hills and long highway journeys."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEHICLE_OPTIONS.map((v) => (
              <VehicleCard
                key={v.id}
                vehicle={v}
                onSelectVehicle={(vehId) => onOpenBookingModal("Customized Tour", undefined)}
              />
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-gray-500 max-w-xl mx-auto">
            * Note: Vehicle preferences are recorded during booking inquiries and confirmed based on availability for your selected travel dates.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#064E3B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold mb-4">
            Need a Custom Itinerary or Route?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 mb-8 max-w-xl mx-auto font-light">
            Have a special travel requirement or multiple stops planned? Connect with our team and let us build a convenient journey for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 bg-[#D6B46A] hover:bg-[#C59B27] text-[#0A1B2C] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Request Custom Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#D6B46A]" />
              <span>Call +91 98176 56360</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
