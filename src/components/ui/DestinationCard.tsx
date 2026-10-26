import React from "react";
import { MapPin, Compass } from "lucide-react";
import { DestinationItem } from "../../data/destinationsData";

interface DestinationCardProps {
  destination: DestinationItem;
  onPlanTrip?: (destinationName: string) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onPlanTrip,
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#D6B46A]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Image with Category Badge */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#064E3B] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {destination.category}
        </span>

        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="flex items-center gap-1.5 text-xs text-[#D6B46A] font-semibold mb-0.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Himachal Pradesh</span>
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold text-[#087F5B] mb-2">{destination.subtitle}</p>
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
            {destination.description}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] text-gray-500 truncate max-w-[140px]">
            {destination.popularFor}
          </span>

          <button
            onClick={() => {
              if (onPlanTrip) {
                onPlanTrip(destination.name);
              } else {
                const el = document.getElementById("booking-widget-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-1.5 bg-[#064E3B] hover:bg-[#087F5B] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors shadow-sm"
          >
            <Compass className="w-3.5 h-3.5 text-[#D6B46A]" />
            <span>Plan This Trip</span>
          </button>
        </div>
      </div>
    </div>
  );
};
