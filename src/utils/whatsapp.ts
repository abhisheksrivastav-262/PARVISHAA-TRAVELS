import { BUSINESS_INFO } from "../data/businessInfo";

export interface BookingInquiryData {
  pickupLocation: string;
  dropoffLocation: string;
  travelDate: string;
  pickupTime?: string;
  tripType: string;
  passengers: string;
  vehiclePreference: string;
  customerName: string;
  contactNumber: string;
  additionalNotes?: string;
  serviceName?: string;
}

/**
 * Builds a properly formatted, URL-encoded WhatsApp inquiry message for Parvishaa Travels
 */
export function buildWhatsAppInquiryMessage(data: BookingInquiryData): string {
  const lines: string[] = [
    `Hello Parvishaa Travels,`,
    ``,
    `I would like to inquire about a taxi booking${data.serviceName ? ` for *${data.serviceName}*` : ""}.`,
    ``,
    `📍 *Pickup Location:* ${data.pickupLocation || "Not specified"}`,
    `🏁 *Drop-off Location:* ${data.dropoffLocation || "Not specified"}`,
    `📅 *Travel Date:* ${data.travelDate || "To be confirmed"}`,
  ];

  if (data.pickupTime) {
    lines.push(`⏰ *Pickup Time:* ${data.pickupTime}`);
  }

  lines.push(`🚗 *Trip Type:* ${data.tripType || "Standard"}`);
  lines.push(`👥 *Passengers:* ${data.passengers || "1-4"}`);
  lines.push(`🚙 *Preferred Vehicle:* ${data.vehiclePreference || "Standard Sedan/SUV"}`);
  lines.push(`👤 *Name:* ${data.customerName || "Traveler"}`);
  lines.push(`📞 *Contact Number:* ${data.contactNumber || "Provided on WhatsApp"}`);

  if (data.additionalNotes && data.additionalNotes.trim()) {
    lines.push(`📝 *Special Requests / Notes:* ${data.additionalNotes.trim()}`);
  }

  lines.push(``);
  lines.push(`Please share vehicle availability and the applicable travel quote.`);
  lines.push(``);
  lines.push(`Thank you!`);

  return lines.join("\n");
}

/**
 * Generates direct WhatsApp click URL (wa.me)
 */
export function getWhatsAppInquiryUrl(
  data: BookingInquiryData,
  useSecondaryNumber: boolean = false
): string {
  const number = useSecondaryNumber
    ? BUSINESS_INFO.whatsappSecondary
    : BUSINESS_INFO.whatsappPrimary;
  const messageText = buildWhatsAppInquiryMessage(data);
  return `https://wa.me/${number}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Generates quick general inquiry WhatsApp link
 */
export function getGeneralWhatsAppUrl(
  customPrompt?: string,
  useSecondaryNumber: boolean = false
): string {
  const number = useSecondaryNumber
    ? BUSINESS_INFO.whatsappSecondary
    : BUSINESS_INFO.whatsappPrimary;
  const defaultMessage =
    customPrompt ||
    `Hello Parvishaa Travels! I am planning a journey in Dharamshala / McLeodganj and would like to inquire about taxi & travel services.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(defaultMessage)}`;
}
