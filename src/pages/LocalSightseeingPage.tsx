import React from "react";
import { Compass, MapPin, CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BookingWidget } from "../components/booking/BookingWidget";
import { DESTINATIONS_DATA } from "../data/destinationsData";
import { DestinationCard } from "../components/ui/DestinationCard";

interface LocalSightseeingProps {
  onOpenBookingModal: (tripType?: string, destination?: string) => void;
}

export const LocalSightseeingPage: React.FC<LocalSightseeingProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <>
      <SEOHead
        title="Local Sightseeing Taxi McLeodganj & Dharamshala | Parvishaa Travels"
        description="Customized day tours of Dalai Lama Temple, Bhagsu Falls, Naddi Sunset Point, HPCA Cricket Stadium, and tea gardens with experienced mountain chauffeurs."
      />

      {/* Hero */}
      <section className="relative bg-[#064E3B] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=80"
            alt="McLeodganj Dharamshala Sightseeing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            Dharamshala &bull; McLeodganj Day Tours
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Discover Dharamshala at Your Own Pace.
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-light">
            Skip the rush of rigid bus schedules. Spend as much time as you like soaking in peaceful monasteries, colonial forest churches, and panoramic sunset viewpoints.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <BookingWidget
          initialTripType="Local Sightseeing"
          initialPickup="McLeodganj / Dharamshala Hotel"
          initialDropoff="Local Sightseeing Circuit"
          title="Plan My Sightseeing Trip"
          subtitle="Select your preferred date, party size, and destinations you would love to visit."
        />
      </section>

      {/* Suggested Itinerary Circuits */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Itinerary Inspiration"
            title="Suggested Local Sightseeing Circuits"
            description="All circuits below are suggested examples. You are free to customize any combination of stops with our team."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Circuit 1 */}
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#087F5B] bg-[#087F5B]/10 px-2.5 py-1 rounded-md mb-3 inline-block">
                  Half Day / 4-5 Hours (Example)
                </span>
                <h3 className="font-heading text-xl font-bold text-[#064E3B] mb-2">
                  Upper McLeodganj Highlights
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  Ideal for an unhurried morning or afternoon exploring McLeodganj's core cultural icons.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>Tsuglagkhang Complex (Dalai Lama Temple)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>Bhagsu Nag Temple &amp; Waterfall walk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>St. John in the Wilderness Church</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenBookingModal("Local Sightseeing", "Upper McLeodganj")}
                className="w-full text-center bg-gray-50 hover:bg-[#087F5B] hover:text-white text-[#064E3B] font-bold text-xs py-2.5 rounded-xl border border-gray-200 transition-colors"
              >
                Inquire for This Circuit
              </button>
            </div>

            {/* Circuit 2 */}
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6B46A] bg-[#D6B46A]/20 text-[#A98534] px-2.5 py-1 rounded-md mb-3 inline-block">
                  Full Day / 7-8 Hours (Example)
                </span>
                <h3 className="font-heading text-xl font-bold text-[#064E3B] mb-2">
                  Dharamshala &amp; Vistas Circuit
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  A comprehensive day trip connecting lower Dharamshala landmarks with high mountain sunset points.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>HPCA International Cricket Stadium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>Dharamshala War Memorial &amp; Pine Walk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>Dal Lake &amp; Naddi Sunset Viewpoint</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenBookingModal("Local Sightseeing", "Dharamshala Vistas")}
                className="w-full text-center bg-gray-50 hover:bg-[#087F5B] hover:text-white text-[#064E3B] font-bold text-xs py-2.5 rounded-xl border border-gray-200 transition-colors"
              >
                Inquire for This Circuit
              </button>
            </div>

            {/* Circuit 3 */}
            <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#102B46] bg-[#102B46]/10 px-2.5 py-1 rounded-md mb-3 inline-block">
                  Extended Excursion (Example)
                </span>
                <h3 className="font-heading text-xl font-bold text-[#064E3B] mb-2">
                  Kangra Fort &amp; Cultural Heritage
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  Explore medieval fortress walls and sacred shrines in the Kangra Valley basin.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>Historic Kangra Fort &amp; Audio Tour</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>Shri Brajeshwari Devi Temple</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                    <span>Scenic river gorge viewpoints</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenBookingModal("Local Sightseeing", "Kangra Heritage")}
                className="w-full text-center bg-gray-50 hover:bg-[#087F5B] hover:text-white text-[#064E3B] font-bold text-xs py-2.5 rounded-xl border border-gray-200 transition-colors"
              >
                Inquire for This Circuit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Key Attractions"
            title="Destinations You Can Include"
            description="Mix and match your favorite places. Our drivers assist with timing to avoid busy bottlenecks."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS_DATA.slice(0, 4).map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onPlanTrip={(name) => onOpenBookingModal("Local Sightseeing", name)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
