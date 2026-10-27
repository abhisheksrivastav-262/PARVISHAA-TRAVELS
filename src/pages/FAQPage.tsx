import React, { useState } from "react";
import { Search, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { FAQ_DATA, FAQItem } from "../data/faqData";
import { BUSINESS_INFO } from "../data/businessInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Taxi Booking",
    "Airport Transfers",
    "Vehicle Preferences",
    "Sightseeing",
    "Outstation Travel",
    "Payment and Confirmation",
  ];

  const filteredItems = FAQ_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Parvishaa Travel Taxi Services"
        description="Got questions about booking taxis, airport transfers, vehicle options, payment terms, or custom Himachal tours? Find answers here."
      />

      {/* Hero */}
      <section className="relative bg-[#064E3B] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80"
            alt="Himalayan Mountain Range"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            Help &amp; Information
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-light">
            Clear, transparent answers to help you plan your travel in Dharamshala, McLeodganj, and Himachal Pradesh with total confidence.
          </p>
        </div>
      </section>

      {/* Search and Category Filter Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. airport, luggage, cancellation, booking)..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#087F5B] focus:bg-white transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#087F5B] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items Accordion */}
      <section className="py-16 sm:py-20 bg-[#FAF9F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <FAQAccordion items={filteredItems} defaultOpenId={filteredItems[0]?.id} />
          ) : (
            <div className="bg-white p-8 rounded-2xl text-center border border-gray-200">
              <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold text-gray-800">
                No matching questions found
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-4">
                Try a different keyword or contact our team directly.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-xs font-bold text-[#087F5B] underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-[#064E3B] mb-2">
            Still Have Questions About Your Itinerary?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-6">
            Our local travel team in McLeodganj is always glad to assist with routes, schedules, and vehicle preferences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="inline-flex items-center gap-2 bg-[#087F5B] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 98176 56360</span>
            </a>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#10A878] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
