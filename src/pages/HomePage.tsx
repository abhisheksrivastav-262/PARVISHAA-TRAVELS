import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Compass,
  MapPin,
  Calendar,
  Phone,
  MessageSquare,
  ArrowRight,
  Car,
  CheckCircle2,
  Clock,
  Sparkles,
  Mountain,
} from "lucide-react";
import { SEOHead } from "../components/shared/SEOHead";
import { SectionHeader } from "../components/ui/SectionHeader";
import { BenefitCard } from "../components/ui/BenefitCard";
import { ServiceCard } from "../components/ui/ServiceCard";
import { DestinationCard } from "../components/ui/DestinationCard";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { BookingWidget } from "../components/booking/BookingWidget";
import { BUSINESS_INFO } from "../data/businessInfo";
import { SERVICES_DATA } from "../data/servicesData";
import { DESTINATIONS_DATA } from "../data/destinationsData";
import { FAQ_DATA } from "../data/faqData";
import { getGeneralWhatsAppUrl } from "../utils/whatsapp";

interface HomePageProps {
  onOpenBookingModal: (tripType?: string, destination?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBookingModal }) => {
  return (
    <>
      <SEOHead
        title="Luxury Taxi & Himalayan Chauffeur Services in Dharamshala & McLeodganj"
        description="Parvishaa Travels offers premium taxi services, airport transfers, local sightseeing, and outstation chauffeur travel across Himachal Pradesh. Call +91 9817656360."
      />

      {/* Hero Section */}
      <section className="relative bg-[#064E3B] text-white overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-36">
        {/* Cinematic Himalayan Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
            alt="Scenic Himalayan Mountain Highway near Dharamshala"
            className="w-full h-full object-cover opacity-25 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#064E3B]/90 via-[#064E3B]/75 to-[#0A1B2C]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#D6B46A]/20 border border-[#D6B46A]/40 text-[#D6B46A] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6">
              <Mountain className="w-3.5 h-3.5" />
              <span>YOUR LOCAL TRAVEL PARTNER IN DHARAMSHALA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Explore the Himalayas. <br />
              <span className="text-[#D6B46A]">Travel in Comfort.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              Thoughtfully arranged taxi services, airport transfers, family travel, and unforgettable mountain journeys from McLeodganj and Dharamshala.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBookingModal("Local Sightseeing")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#087F5B] hover:bg-[#10A878] text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-[#087F5B]/40 transition-all active:scale-95"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="w-4 h-4 text-[#D6B46A]" />
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-4 rounded-xl backdrop-blur-sm border border-white/20 transition-all"
              >
                <span>Discover Our Services</span>
              </Link>
            </div>

            {/* Three Value Propositions */}
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#D6B46A] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Comfortable Travel</h4>
                  <p className="text-xs text-gray-300">Clean, well-maintained vehicles</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#D6B46A] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Personalized Journeys</h4>
                  <p className="text-xs text-gray-300">Flexible pacing &amp; stops</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#D6B46A] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Local Travel Assistance</h4>
                  <p className="text-xs text-gray-300">Grounded Himalayan advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Widget Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20">
        <BookingWidget
          title="Plan Your Himalayan Ride"
          subtitle="Choose your travel date, pickup location, and vehicle preference. Our team will verify availability."
        />
      </section>

      {/* Section E: Trust and Benefits */}
      <section className="py-20 sm:py-28 bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Travel With Us"
            title="Travel Better. Explore More."
            description="Experience the tranquility of Himachal Pradesh with a chauffeur team dedicated to courteous service, unhurried mountain road trips, and clear communication."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <BenefitCard
              index={1}
              icon={Car}
              title="Comfortable Journeys"
              description="Travel in comfort with vehicle options suited to your journey, group size, and mountain terrain."
            />
            <BenefitCard
              index={2}
              icon={Compass}
              title="Personalized Travel"
              description="Plan your trip around your preferred destinations and schedule, without fixed or rushed constraints."
            />
            <BenefitCard
              index={3}
              icon={MapPin}
              title="Convenient Transfers"
              description="Arrange coordinated transportation between your hotel, airport, railway station, or scenic stopovers."
            />
            <BenefitCard
              index={4}
              icon={Sparkles}
              title="Local Travel Assistance"
              description="Get help planning your travel around Dharamshala, McLeodganj, Kangra Valley, and nearby mountain passes."
            />
          </div>
        </div>
      </section>

      {/* Section F: Services Showcase */}
      <section className="py-20 sm:py-28 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Offerings"
            title="Travel Services Designed Around You"
            description="Whether you need a quick airport pickup from Kangra Gaggal or an extended multi-day family holiday through Himachal Pradesh, explore our dedicated services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookService={(name) => onOpenBookingModal("Customized Tour", name)}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#087F5B] hover:text-[#064E3B] border-b-2 border-[#087F5B] pb-1 hover:border-[#064E3B] transition-colors"
            >
              <span>View All Services &amp; Transportation Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section G: Explore the Destinations */}
      <section className="py-20 sm:py-28 bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Discover The Region"
            title="Explore Scenic Destinations"
            description="From the tranquil prayer wheels of McLeodganj to the emerald tea gardens of Palampur and the sunset viewpoints of Naddi, let the mountains guide your steps."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS_DATA.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onPlanTrip={(name) => onOpenBookingModal("Local Sightseeing", name)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 bg-[#064E3B] hover:bg-[#087F5B] text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Explore Complete Destination Guide</span>
              <ArrowRight className="w-4 h-4 text-[#D6B46A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section H: Why Choose Parvishaa Travels? */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image Composition */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
                  alt="Dharamshala Mountain Vistas and Parvishaa Travels Chauffeur Journeys"
                  className="w-full h-[450px] object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-[#064E3B] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-[#D6B46A]/40">
                <p className="text-xs text-[#D6B46A] font-bold uppercase tracking-wider">
                  Local Assurance
                </p>
                <p className="text-sm font-semibold mt-1">
                  Mona Plaza Complex, McLeodganj
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Centrally located for prompt coordination and pickups.
                </p>
              </div>
            </div>

            {/* Right Column: Values & Highlights */}
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#087F5B] bg-[#087F5B]/10 px-3.5 py-1 rounded-full mb-3 inline-block">
                The Parvishaa Difference
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
                A More Thoughtful Way to Travel
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Traveling in the Himalayas requires drivers who respect the winding mountain roads, vehicles kept in top mechanical shape, and clear communication from inquiry to arrival.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Personalized Travel Inquiries</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Every trip is custom-tailored to your party size, luggage, and timing requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Convenient Pickup Planning</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Direct pickups from Gaggal Airport, Pathankot, hotels, homestays, or specific landmarks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Vehicle Preferences for Every Group</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Choose between comfortable Sedans, versatile SUVs, luxury MPVs, or large group Tempo Travellers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Local Destination Guidance</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Honest guidance on mountain weather, road traffic, and optimum visiting hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#087F5B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Clear Communication Before Confirmation</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Transparent quotation agreed before your journey starts. No surprises or confusion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section I: Signature Travel Experience */}
      <section className="relative py-24 sm:py-32 bg-[#0A1B2C] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80"
            alt="Majestic Dhauladhar Peaks"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B2C] via-[#0A1B2C]/90 to-[#064E3B]/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D6B46A] bg-[#D6B46A]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            A Himalayan Journey Like No Other
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Let the Mountains Set the Pace.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            From peaceful mountain mornings to memorable family road trips, plan a journey that lets you experience Himachal Pradesh your way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal("Customized Tour")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D6B46A] hover:bg-[#C59B27] text-[#0A1B2C] font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all"
            >
              <span>Start Planning Your Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#D6B46A]" />
              <span>Call +91 9817656360</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section J: How Booking Works */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Simple & Transparent"
            title="How Booking Works"
            description="Our straightforward 3-step process ensures clear details, transparent fares, and prompt confirmation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-[#FAF9F4] p-8 rounded-2xl border border-gray-100 relative">
              <span className="w-10 h-10 rounded-full bg-[#087F5B] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-md">
                1
              </span>
              <h3 className="font-heading text-xl font-bold text-[#064E3B] mb-2">
                Tell Us Your Plan
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Submit your preferred travel date, pickup location, destination, and vehicle preference through our online form or WhatsApp.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FAF9F4] p-8 rounded-2xl border border-gray-100 relative">
              <span className="w-10 h-10 rounded-full bg-[#D6B46A] text-[#0A1B2C] flex items-center justify-center font-bold text-sm mb-6 shadow-md">
                2
              </span>
              <h3 className="font-heading text-xl font-bold text-[#064E3B] mb-2">
                Receive Travel Details
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our local team reviews availability for your dates and shares a transparent, all-inclusive quotation along with vehicle options.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FAF9F4] p-8 rounded-2xl border border-gray-100 relative">
              <span className="w-10 h-10 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-md">
                3
              </span>
              <h3 className="font-heading text-xl font-bold text-[#064E3B] mb-2">
                Confirm Your Journey
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Agree on pickup timing, driver contact details, and finalize your trip with peace of mind. Your ride is ready for you!
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-gray-500 max-w-lg mx-auto">
            * Please note: Online inquiries are subject to vehicle availability and are confirmed after coordination with our team.
          </div>
        </div>
      </section>

      {/* Section K: Customer Assistance & Direct Support */}
      <section className="py-16 bg-[#FAF9F4] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#087F5B]/10 text-[#087F5B] flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-[#064E3B] mb-2">
            Have Questions About Your Upcoming Trip?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mb-6">
            Whether you want to know about current road conditions, mountain weather, or recommendations for family travel, our local team in McLeodganj is ready to assist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="inline-flex items-center gap-2 bg-[#087F5B] hover:bg-[#064E3B] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 98176 56360</span>
            </a>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#064E3B] hover:bg-gray-100 text-xs font-bold px-5 py-3 rounded-xl border border-gray-300 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#10A878]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section L: FAQ Preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Find clear answers to common questions about booking, airport transfers, vehicle options, and our transparent travel process."
          />

          <FAQAccordion items={FAQ_DATA.slice(0, 6)} defaultOpenId="how-to-book" />

          <div className="mt-10 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#087F5B] hover:underline"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section M: Final CTA */}
      <section className="py-20 sm:py-24 bg-[#064E3B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your Next Himalayan Adventure Starts Here.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-emerald-100 max-w-2xl mx-auto mb-8 font-light">
            Book your taxi with Parvishaa Travels today and explore Dharamshala, McLeodganj, and Himachal Pradesh with trusted comfort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D6B46A] hover:bg-[#C59B27] text-[#0A1B2C] font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all active:scale-95 text-base"
            >
              <span>Request a Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all text-base"
            >
              <Phone className="w-4 h-4 text-[#D6B46A]" />
              <span>Call Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
