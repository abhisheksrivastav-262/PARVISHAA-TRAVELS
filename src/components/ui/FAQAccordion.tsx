import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "../../data/faqData";

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all overflow-hidden ${
              isOpen
                ? "bg-white border-[#087F5B]/30 shadow-md"
                : "bg-white/80 border-gray-200/80 hover:border-gray-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#087F5B] rounded-2xl"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-[#087F5B] shrink-0" />
                <span className="font-heading text-sm sm:text-base font-bold text-[#064E3B]">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#087F5B]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-150"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
