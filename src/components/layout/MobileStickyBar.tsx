import React from "react";
import { Phone, MessageSquare, CalendarCheck } from "lucide-react";
import { BUSINESS_INFO } from "../../data/businessInfo";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

interface MobileStickyBarProps {
  onOpenBookingModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gray-50 border border-gray-200 text-[#064E3B] active:bg-gray-100 transition-colors"
          aria-label="Call Parvishaa Travel"
        >
          <Phone className="w-4 h-4 text-[#087F5B]" />
          <span className="text-[11px] font-bold mt-0.5">Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#10A878]/10 border border-[#10A878]/30 text-[#064E3B] active:bg-[#10A878]/20 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#10A878]" />
          <span className="text-[11px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Book Ride Button */}
        <button
          onClick={onOpenBookingModal}
          type="button"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#087F5B] text-white active:bg-[#064E3B] shadow-sm transition-colors"
          aria-label="Request Ride Inquiry"
        >
          <CalendarCheck className="w-4 h-4 text-[#D6B46A]" />
          <span className="text-[11px] font-bold mt-0.5">Book Ride</span>
        </button>
      </div>
    </div>
  );
};
