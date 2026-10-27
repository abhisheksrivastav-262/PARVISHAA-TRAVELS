import React from "react";
import { MessageSquare } from "lucide-react";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="hidden md:block fixed bottom-6 right-6 z-40 group">
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#087F5B] hover:bg-[#064E3B] text-white p-3.5 rounded-full shadow-2xl hover:shadow-[#087F5B]/30 border-2 border-white transition-all transform hover:scale-105"
        aria-label="Direct WhatsApp Inquiry with Parvishaa Travel"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
        <MessageSquare className="w-6 h-6 text-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm pr-1">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};
