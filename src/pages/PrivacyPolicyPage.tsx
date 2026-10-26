import React from "react";
import { SEOHead } from "../components/shared/SEOHead";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Parvishaa Travels"
        description="Learn how Parvishaa Travels collects, uses, and safeguards information submitted via travel inquiry and booking forms."
      />

      <section className="py-16 bg-[#064E3B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6B46A] bg-[#D6B46A]/20 px-3 py-1 rounded-full mb-3 inline-block">
            Legal &amp; Transparency
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold">Privacy Policy</h1>
          <p className="text-xs sm:text-sm text-emerald-100 mt-2">
            Last Updated: October 2026 &bull; Parvishaa Travels
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8 text-sm leading-relaxed">
          <div className="bg-[#FAF9F4] p-5 rounded-2xl border border-[#087F5B]/20 text-xs text-gray-600">
            <strong>Note for Travelers:</strong> This Privacy Policy outlines how Parvishaa Travels collects, manages, and uses details provided when you request travel quotes, contact our team, or communicate with us on WhatsApp or phone.
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-2">
              When submitting a travel inquiry or booking request with Parvishaa Travels, you may provide:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Contact Information:</strong> Your name, phone/WhatsApp number, and optional email address.</li>
              <li><strong>Travel Details:</strong> Preferred pickup date and time, pickup and drop-off locations, passenger count, vehicle preference, and flight/train schedule notes.</li>
              <li><strong>Direct Communications:</strong> Notes and special requests shared during phone calls, WhatsApp conversations, or form submissions.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              2. How We Use Your Information
            </h2>
            <p className="mb-2">We use the collected information solely for genuine travel coordination:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>To evaluate vehicle availability and prepare an accurate quotation.</li>
              <li>To communicate with you via telephone, SMS, or WhatsApp regarding your itinerary.</li>
              <li>To provide your allocated chauffeur with essential pickup location and contact details.</li>
              <li>To address customer service inquiries or support requests during your journey.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              3. Communication via Phone and WhatsApp
            </h2>
            <p>
              By submitting your phone number via our booking widgets or clicking WhatsApp contact buttons, you consent to receiving operational messages and quotation details from Parvishaa Travels regarding your requested journey. We do not engage in unsolicited mass spam marketing.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              4. Data Sharing and Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. Information is only shared with authorized drivers or partner fleet operators strictly necessary to execute your transportation. External links (such as Google Maps or WhatsApp) are governed by their respective privacy terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              5. Data Retention &amp; Security Practices
            </h2>
            <p>
              We maintain reasonable technical and operational measures to prevent unauthorized access or disclosure of traveler information. Details are retained only as long as needed for operational records, tax accounting, and customer assistance.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h2 className="font-heading text-xl font-bold text-[#064E3B] mb-3">
              6. Privacy Inquiries &amp; Contact
            </h2>
            <p className="mb-3">
              For any questions regarding your data or this policy, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1 text-xs">
              <p className="font-bold text-[#064E3B]">Parvishaa Travels</p>
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
