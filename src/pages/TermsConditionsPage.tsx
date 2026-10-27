import React from "react";
import { SEOHead } from "../components/shared/SEOHead";
import { BUSINESS_INFO } from "../data/businessInfo";

export const TermsConditionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions | Parvishaa Travel"
        description="Review the terms and conditions governing travel inquiries, booking confirmations, quotations, and schedules with Parvishaa Travel."
      />

      <section className="py-16 bg-[#064E3B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-3 py-1 rounded-full mb-3 inline-block">
            Customer Information
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold">Terms &amp; Conditions</h1>
          <p className="text-xs sm:text-sm text-emerald-100 mt-2">
            Last Updated: October 2026 &bull; Parvishaa Travel
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8 text-sm leading-relaxed">
          <div className="bg-[#FAF9F4] p-5 rounded-2xl border border-[#087F5B]/20 text-xs text-gray-600">
            <strong>Important Traveler Notice:</strong> Please review these conditions before reserving transportation. By requesting a ride or booking travel services with Parvishaa Travel, you agree to these operational terms.
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              1. Inquiry Request vs. Confirmed Booking
            </h2>
            <p>
              Submitting an online booking inquiry form, phone inquiry, or WhatsApp message constitutes a <em>request for service</em> and does not automatically guarantee a vehicle or confirm a ride. A booking is legally confirmed only after our team reviews your itinerary, verifies vehicle availability, agrees on pricing, and communicates written/verbal confirmation to you.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              2. Vehicle Preferences &amp; Allocations
            </h2>
            <p>
              Vehicle choices (Sedan, SUV, Luxury MPV, Tempo Traveller) selected during the inquiry phase represent customer preferences. While every effort is made to allocate your requested model, Parvishaa Travel reserves the right to substitute an equivalent or superior vehicle category if required due to operational, mechanical, or mountain road accessibility reasons.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              3. Pricing &amp; Fare Quotations
            </h2>
            <p>
              All fares are quoted based on the agreed pickup point, destination, route, and schedule. Quotes generally cover vehicle hire, fuel, and chauffeur charges. Unless specified otherwise in your quote, any additional state entry permits, toll fees, parking charges, or unforeseen overnight driver allowances will be communicated clearly beforehand.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              4. Accuracy of Customer-Provided Details
            </h2>
            <p>
              Travelers are responsible for providing accurate pickup addresses, contact phone numbers, flight/train numbers, and luggage counts. Parvishaa Travel cannot be held liable for missed connections resulting from inaccurate customer-supplied timings or unreachable contact numbers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              5. Mountain Road Conditions, Weather &amp; Delays
            </h2>
            <p>
              Travel in Himachal Pradesh is subject to dynamic mountain terrain, seasonal weather (heavy rainfall, landslides, snowfall), and hill traffic bottlenecks. Parvishaa Travel and its chauffeurs prioritize safety above all else. Drivers may take alternate routes or adjust driving pace in adverse conditions. We cannot be held liable for unavoidable delays caused by natural road blockages, administrative road closures, or force majeure events.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              6. Schedule Modifications &amp; Cancellations
            </h2>
            <p>
              If your flight schedule or travel dates change, please notify Parvishaa Travel as early as possible so we can attempt to reschedule your ride without disruption. Any specific cancellation conditions or token refunds will be confirmed directly during booking coordination.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              7. Passenger Conduct &amp; Luggage Care
            </h2>
            <p>
              Passengers are requested to treat vehicles with care and respect local cultural norms throughout Himachal Pradesh. While drivers take utmost care assisting with luggage handling, travelers remain responsible for safeguarding their personal valuables, jewelry, and documents.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              8. Contact &amp; Clarifications
            </h2>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1 text-xs">
              <p className="font-bold text-[#064E3B]">Parvishaa Travel</p>
              <p>{BUSINESS_INFO.address.full}</p>
              <p>Primary Phone: {BUSINESS_INFO.phonePrimary}</p>
              <p>Secondary Phone: {BUSINESS_INFO.phoneSecondary}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
