import React from "react";
import { Phone, MapPin, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "../../data/businessInfo";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#064E3B] text-[#FAF9F4] text-xs sm:text-sm py-2 px-4 border-b border-[#087F5B]/30 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 text-[#D6B46A] font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Your Himalayan Journey Starts Here</span>
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline text-white/80">
            Dharamshala, McLeodganj & Himachal Pradesh Chauffeur Service
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
            className="inline-flex items-center gap-1.5 text-[#FAF9F4] hover:text-[#D6B46A] transition-colors py-0.5"
            aria-label={`Call primary contact number ${BUSINESS_INFO.phonePrimary}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#D6B46A]" />
            <span className="font-semibold tracking-wider">{BUSINESS_INFO.phonePrimary}</span>
          </a>

          <span className="text-white/30">|</span>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D6B46A]" />
            <span>McLeodganj, Dharamshala</span>
          </a>
        </div>
      </div>
    </div>
  );
};
