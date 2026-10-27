import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { MobileStickyBar } from "./components/layout/MobileStickyBar";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";
import { BookingModal } from "./components/booking/BookingModal";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AirportTransfersPage } from "./pages/AirportTransfersPage";
import { LocalSightseeingPage } from "./pages/LocalSightseeingPage";
import { OutstationTaxiPage } from "./pages/OutstationTaxiPage";
import { ToursPage } from "./pages/ToursPage";
import { CorporateTravelPage } from "./pages/CorporateTravelPage";
import { DestinationsPage } from "./pages/DestinationsPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsConditionsPage } from "./pages/TermsConditionsPage";

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalTripType, setModalTripType] = useState<string>("Local Sightseeing");
  const [modalDropoff, setModalDropoff] = useState<string>("");

  const handleOpenBookingModal = (tripType?: string, destination?: string) => {
    if (tripType) setModalTripType(tripType);
    if (destination) setModalDropoff(destination);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAF9F4] text-[#17231F] selection:bg-[#087F5B] selection:text-white">
        {/* Global Navigation Header with Official Logo */}
        <Header onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/services/airport-transfers"
              element={<AirportTransfersPage />}
            />
            <Route
              path="/services/local-sightseeing"
              element={<LocalSightseeingPage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/services/outstation-taxi"
              element={<OutstationTaxiPage />}
            />
            <Route
              path="/services/corporate-travel"
              element={<CorporateTravelPage />}
            />
            <Route
              path="/tours"
              element={<ToursPage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/destinations"
              element={<DestinationsPage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer with Logo, Address & Contact Details */}
        <Footer />

        {/* Mobile Sticky Action Bar */}
        <MobileStickyBar onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Desktop Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Global Interactive Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBookingModal}
          initialTripType={modalTripType}
          initialDropoff={modalDropoff}
        />
      </div>
    </Router>
  );
};

export default App;
