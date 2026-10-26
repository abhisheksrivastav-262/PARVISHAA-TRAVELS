import React, { useState } from "react";
import { Compass, MapPin, Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { TOURS_DATA, TourExperience } from "../data/toursData";
import { BookingWidget } from "../components/booking/BookingWidget";

interface ToursPageProps {
  onOpenBookingModal: (tripType?: string, destination?: string) => void;
}

export const ToursPage: React.FC<ToursPageProps> = ({ onOpenBookingModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Family Getaway",
    "Himalayan Sightseeing",
    "Scenic Nature Drive",
    "Custom Circuit",
  ];

  const filteredTours =
    selectedCategory === "All"
      ? TOURS_DATA
      : TOURS_DATA.filter((t) => t.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Family & Customized Himalayan Tour Packages | Parvishaa Travels"
        description="Discover suggested mountain travel experiences from Dharamshala: family getaways, tea garden drives, paragliding excursions, and custom multi-day Himachal road circuits."
      />

      {/* Hero */}
      <section className="relative bg-[#064E3B] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=2000&q=80"
            alt="Family Himalayan Journey"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            Suggested Himalayan Experiences
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            More Than a Trip. A Memory in the Making.
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-light">
            Craft an unhurried, comfortable mountain holiday designed around children, parents, and seniors. Explore suggested itineraries or customize every stop.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[70px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#087F5B] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Tour Cards Grid */}
      <section className="py-16 bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#064E3B] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                    {tour.category}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs text-[#D6B46A] font-bold">{tour.suggestedDuration}</p>
                    <h3 className="font-heading text-lg font-bold">{tour.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                      {tour.shortDesc}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Suggested Destinations:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {tour.suggestedDestinations.map((d, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-gray-50 text-gray-700 px-2.5 py-1 rounded-md border border-gray-100"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => onOpenBookingModal("Customized Tour", tour.title)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#087F5B] hover:bg-[#064E3B] text-white font-bold text-xs py-3 rounded-xl transition-colors shadow-sm"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#D6B46A]" />
                      <span>Customize This Trip</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-gray-500 max-w-xl mx-auto">
            * Experiences above represent suggested travel concepts. Pricing, exact durations, and availability are confirmed transparently upon inquiry.
          </div>
        </div>
      </section>

      {/* Custom Journey Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingWidget
            title="Design Your Custom Himalayan Itinerary"
            subtitle="Let our team know your ideal travel dates, places you'd like to visit, and party size."
            initialTripType="Customized Tour"
          />
        </div>
      </section>
    </>
  );
};
