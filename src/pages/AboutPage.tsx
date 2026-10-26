import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Heart,
  Compass,
  MessageSquare,
  MapPin,
  Car,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BUSINESS_INFO } from "../data/businessInfo";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

interface AboutPageProps {
  onOpenBookingModal: (tripType?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBookingModal }) => {
  return (
    <>
      <SEOHead
        title="About Us | Parvishaa Travels - Premium Himalayan Chauffeur Service"
        description="Learn about Parvishaa Travels, our grounded local roots in McLeodganj & Dharamshala, our commitment to transparent communication, and our travel philosophy."
      />

      {/* Hero Header */}
      <section className="relative bg-[#064E3B] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80"
            alt="Dharamshala Mountain Vistas"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-4 py-1.5 rounded-full inline-block mb-4 border border-[#D6B46A]/30">
            About Parvishaa Travels
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Every Journey Begins With Trust.
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed font-light">
            Parvishaa Travels helps travelers arrange comfortable journeys from McLeodganj and Dharamshala to destinations across Himachal Pradesh and beyond.
          </p>
        </div>
      </section>

      {/* Section 1: Our Story & Local Roots */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#087F5B] mb-2 block">
                Local Roots
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#064E3B] mb-6">
                Rooted in the Mountains of McLeodganj &amp; Dharamshala
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Based out of the Mona Plaza Complex near ICICI Bank in McLeodganj, Parvishaa Travels was founded to provide visitors with a dependable, courteous, and comfortable alternative to unpredictable travel arrangements.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                Whether arriving for a peaceful spiritual retreat, an adventurous trek through Triund, or a relaxed family vacation through the tea gardens, we believe that how you travel shapes your memory of the Himalayas.
              </p>

              <div className="bg-[#FAF9F4] p-5 rounded-2xl border border-[#087F5B]/20 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#087F5B] shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-gray-700">
                  <p className="font-bold text-[#064E3B]">Physical Office Presence</p>
                  <p className="mt-0.5">{BUSINESS_INFO.address.full}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Scenic Himalayan Road Travel with Parvishaa Travels"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Service Philosophy & Approach */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Principles"
            title="Our Approach to Mountain Travel"
            description="We prioritize three foundational commitments on every trip we coordinate."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#087F5B]/10 text-[#087F5B] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
                  Safety &amp; Mountain Discipline
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Mountain driving requires patience and defensive road awareness. Our chauffeurs maintain smooth, disciplined speeds, keeping you comfortable along winding valley hairpin bends.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D6B46A]/20 text-[#A98534] flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
                  Family-First Hospitality
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We understand the needs of elderly parents and young children traveling on hill roads. Frequent stops at clean viewpoints, scenic tea stalls, and gentle pacing are always supported.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#102B46]/10 text-[#102B46] flex items-center justify-center mb-5">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
                  Clear &amp; Honest Communication
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We don't make exaggerated promises. Every travel inquiry is verified, fares are communicated transparently before your journey, and driver contact info is shared in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Travel Designed Around Your Needs */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Flexibility"
            title="Travel Designed Around Your Needs"
            description="No cookie-cutter schedules. Explore McLeodganj and Himachal Pradesh at a rhythm that suits your group."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <Car className="w-5 h-5 text-[#087F5B] mb-3" />
              <h4 className="font-bold text-sm text-[#064E3B] mb-1">Tailored Vehicle Options</h4>
              <p className="text-xs text-gray-600">
                From economical sedans to luxury Innova Crystas and group Tempo Travellers based on your party size.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <Compass className="w-5 h-5 text-[#087F5B] mb-3" />
              <h4 className="font-bold text-sm text-[#064E3B] mb-1">Customizable Stopovers</h4>
              <p className="text-xs text-gray-600">
                Linger longer at your favorite cafe, temple, or scenic overlook without rigid tour deadlines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <Phone className="w-5 h-5 text-[#087F5B] mb-3" />
              <h4 className="font-bold text-sm text-[#064E3B] mb-1">Direct Chauffeur Contact</h4>
              <p className="text-xs text-gray-600">
                Coordinate exact hotel pickup spots and times with real-time phone and WhatsApp accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#064E3B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold mb-4">
            Ready to Plan Your Himalayan Journey?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 mb-8 max-w-xl mx-auto font-light">
            Reach out to our team in McLeodganj. We are happy to discuss routes, vehicle options, and recommend the best plan for your dates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 bg-[#D6B46A] hover:bg-[#C59B27] text-[#0A1B2C] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#D6B46A]" />
              <span>Call +91 98176 56360</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
