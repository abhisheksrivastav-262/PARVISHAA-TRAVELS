import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { BUSINESS_INFO } from "../../data/businessInfo";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Our Services",
      path: "/services",
      hasDropdown: true,
      subItems: [
        { name: "All Services Overview", path: "/services" },
        { name: "Airport Pickup & Drop", path: "/services/airport-transfers" },
        { name: "Local Sightseeing Tours", path: "/services/local-sightseeing" },
        { name: "Outstation Taxi Services", path: "/services/outstation-taxi" },
        { name: "Corporate & Executive Travel", path: "/services/corporate-travel" },
      ],
    },
    { name: "Destinations", path: "/destinations" },
    { name: "Tour Packages", path: "/tours" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#087F5B]/10"
          : "bg-white py-3.5 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Emblem & Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#087F5B] rounded-lg p-1"
            aria-label="Parvishaa Travels - Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 overflow-hidden bg-[#FAF9F4] group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logo.png"
                alt="Parvishaa Travels Official Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg md:text-xl text-[#064E3B] tracking-tight leading-tight group-hover:text-[#087F5B] transition-colors">
                PARVISHAA TRAVELS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 text-sm font-semibold rounded-md inline-flex items-center gap-1 transition-colors ${
                        isActive(link.path)
                          ? "text-[#087F5B] bg-[#087F5B]/5"
                          : "text-[#17231F] hover:text-[#087F5B] hover:bg-gray-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                          {link.subItems?.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-4 py-2.5 text-xs sm:text-sm text-[#17231F] hover:text-[#087F5B] hover:bg-[#FAF9F4] transition-colors font-medium"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive(link.path)
                      ? "text-[#087F5B] bg-[#087F5B]/5 font-bold"
                      : "text-[#17231F] hover:text-[#087F5B] hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#064E3B] hover:text-[#087F5B] px-3 py-2 rounded-lg border border-gray-200 hover:border-[#087F5B]/40 transition-colors"
              title="Call primary contact"
            >
              <Phone className="w-3.5 h-3.5 text-[#087F5B]" />
              <span>{BUSINESS_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={() => {
                if (onOpenBookingModal) {
                  onOpenBookingModal();
                } else {
                  const el = document.getElementById("booking-widget-section");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#booking-widget-section";
                  }
                }
              }}
              className="inline-flex items-center gap-2 bg-[#087F5B] hover:bg-[#064E3B] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Book a Ride</span>
            </button>
          </div>

          {/* Mobile Right Controls: Phone + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
              className="p-2 rounded-full text-[#087F5B] bg-[#087F5B]/10 hover:bg-[#087F5B]/20"
              aria-label="Call Parvishaa Travels"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#087F5B] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#087F5B]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[108px] bg-black/40 backdrop-blur-xs z-50">
          <div className="bg-white border-b border-gray-200 shadow-2xl max-h-[calc(100vh-110px)] overflow-y-auto px-5 py-6">
            {/* Mobile Branding Bar */}
            <div className="flex items-center gap-3 pb-5 mb-5 border-b border-gray-100">
              <div className="w-12 h-12 shrink-0 bg-[#FAF9F4]">
                <img src="/logo.png" alt="Parvishaa Travels" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-heading font-bold text-base text-[#064E3B]">Parvishaa Travels</p>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                  location.pathname === "/"
                    ? "bg-[#087F5B]/10 text-[#087F5B]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                  location.pathname === "/about"
                    ? "bg-[#087F5B]/10 text-[#087F5B]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                About Us
              </Link>

              {/* Services Sub-accordion */}
              <div className="py-1">
                <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Our Services
                </div>
                <div className="pl-3 space-y-1">
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#087F5B]"
                  >
                    All Services
                  </Link>
                  <Link
                    to="/services/airport-transfers"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#087F5B]"
                  >
                    Airport Transfers
                  </Link>
                  <Link
                    to="/services/local-sightseeing"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#087F5B]"
                  >
                    Local Sightseeing
                  </Link>
                  <Link
                    to="/services/outstation-taxi"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#087F5B]"
                  >
                    Outstation Taxi
                  </Link>
                  <Link
                    to="/services/corporate-travel"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#087F5B]"
                  >
                    Corporate Travel
                  </Link>
                </div>
              </div>

              <Link
                to="/destinations"
                className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                  location.pathname === "/destinations"
                    ? "bg-[#087F5B]/10 text-[#087F5B]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                Destinations
              </Link>

              <Link
                to="/tours"
                className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                  location.pathname === "/tours"
                    ? "bg-[#087F5B]/10 text-[#087F5B]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                Tour Packages
              </Link>

              <Link
                to="/faq"
                className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                  location.pathname === "/faq"
                    ? "bg-[#087F5B]/10 text-[#087F5B]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                Frequently Asked Questions
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2.5 rounded-lg text-base font-semibold ${
                  location.pathname === "/contact"
                    ? "bg-[#087F5B]/10 text-[#087F5B]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Call-to-action buttons */}
            <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenBookingModal) {
                    onOpenBookingModal();
                  } else {
                    const el = document.getElementById("booking-widget-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full bg-[#087F5B] text-white py-3 rounded-xl font-bold text-center shadow-md active:bg-[#064E3B]"
              >
                Book Your Ride
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phonePrimaryRaw}`}
                  className="flex items-center justify-center gap-2 border border-[#087F5B] text-[#087F5B] py-2.5 rounded-xl font-semibold text-xs text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Primary</span>
                </a>

                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#10A878] text-white py-2.5 rounded-xl font-semibold text-xs text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
