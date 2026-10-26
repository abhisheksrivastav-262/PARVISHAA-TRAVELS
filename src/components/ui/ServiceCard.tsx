import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, CalendarPlus } from "lucide-react";
import { ServiceItem } from "../../data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
  onBookService?: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBookService }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#087F5B]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Image with Badge */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {service.badge && (
          <span className="absolute top-3 right-3 bg-[#087F5B] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
            {service.badge}
          </span>
        )}

        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white drop-shadow-sm">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Key Feature Bullets */}
          <ul className="space-y-1.5 mb-6">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B] shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <Link
            to={service.routeUrl}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] hover:text-[#087F5B] group/btn"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => {
              if (onBookService) {
                onBookService(service.title);
              } else {
                const el = document.getElementById("booking-widget-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-1.5 bg-[#087F5B]/10 hover:bg-[#087F5B] text-[#087F5B] hover:text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors"
          >
            <CalendarPlus className="w-3.5 h-3.5" />
            <span>Book This</span>
          </button>
        </div>
      </div>
    </div>
  );
};
