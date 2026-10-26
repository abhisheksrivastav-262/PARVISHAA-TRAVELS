import React from "react";
import { Plane, Clock, ShieldCheck, MapPin, Luggage, ArrowRight, CheckCircle2 } from "lucide-react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BookingWidget } from "../components/booking/BookingWidget";
import { BUSINESS_INFO } from "../data/businessInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

export const AirportTransfersPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Airport Transfers Dharamshala & Kangra Gaggal Airport (DHM)"
        description="Punctual, stress-free airport pickup and drop taxi service between Kangra Gaggal Airport (DHM) and McLeodganj, Dharamshala, or outstation hubs."
      />

      {/* Hero */}
      <section className="relative bg-[#064E3B] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
            alt="Airport Transfers Dharamshala"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            Kangra Gaggal Airport (DHM) &bull; Rail Hubs
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Airport Transfers, Without the Stress.
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-light">
            Skip the arrival queues. Arrange punctual pickups from Kangra Gaggal Airport directly to your resort or homestay in McLeodganj and Dharamshala.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <BookingWidget
          initialTripType="Airport Transfer"
          initialPickup="Kangra Airport (Gaggal - DHM)"
          initialDropoff="McLeodganj / Dharamshala Hotel"
          title="Request Airport Transfer"
          subtitle="Provide flight timing and luggage count. We will track arrival schedules and confirm promptly."
        />
      </section>

      {/* Features & Transfer Details */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Key Benefits"
            title="Why Arrange Airport Transfers with Parvishaa Travels?"
            description="Kangra Gaggal Airport is located approximately 15 to 20 km from McLeodganj along mountain roads. A pre-arranged ride guarantees peace of mind."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <Clock className="w-8 h-8 text-[#087F5B] mb-4" />
              <h3 className="font-heading text-lg font-bold text-[#064E3B] mb-2">
                Flight Schedule Tracking
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Mountain flights can occasionally shift with weather. You can share your flight number so our coordination team stays aware of any flight schedule updates.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <Luggage className="w-8 h-8 text-[#087F5B] mb-4" />
              <h3 className="font-heading text-lg font-bold text-[#064E3B] mb-2">
                Appropriate Boot Space
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Traveling with winter jackets and heavy luggage? Choose our spacious SUVs or Innova Crystas to ensure all suitcases fit comfortably without overcrowding the cabin.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
              <ShieldCheck className="w-8 h-8 text-[#087F5B] mb-4" />
              <h3 className="font-heading text-lg font-bold text-[#064E3B] mb-2">
                Transparent Door-to-Door Service
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                No bargaining or sudden tariff hikes upon landing. Your journey fare and destination are confirmed in advance with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Transit Hubs Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#064E3B] mb-8 text-center">
            Common Airport &amp; Transit Hubs Served
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-bold text-base text-[#064E3B] block">
                  Kangra Airport (Gaggal - DHM)
                </span>
                <span className="text-xs text-gray-600">
                  Primary regional airport serving Dharamshala, McLeodganj, and Kangra Valley.
                </span>
              </div>
              <span className="text-xs font-bold text-[#087F5B] bg-[#087F5B]/10 px-3 py-1.5 rounded-full shrink-0">
                ~18 km to McLeodganj
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-bold text-base text-[#064E3B] block">
                  Pathankot Railway Station (PTK / PTKC)
                </span>
                <span className="text-xs text-gray-600">
                  Main broad-gauge railway junction connecting northern express trains.
                </span>
              </div>
              <span className="text-xs font-bold text-[#087F5B] bg-[#087F5B]/10 px-3 py-1.5 rounded-full shrink-0">
                ~85 km to Dharamshala
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-bold text-base text-[#064E3B] block">
                  Amritsar Airport (ATQ) / Chandigarh Airport (IXC)
                </span>
                <span className="text-xs text-gray-600">
                  Major international &amp; domestic airport hubs with direct highway highway connectivity.
                </span>
              </div>
              <span className="text-xs font-bold text-[#087F5B] bg-[#087F5B]/10 px-3 py-1.5 rounded-full shrink-0">
                Intercity Transfer Available
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
