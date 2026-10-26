import React, { useEffect } from "react";
import { X } from "lucide-react";
import { BookingWidget } from "./BookingWidget";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTripType?: string;
  initialPickup?: string;
  initialDropoff?: string;
  initialVehicle?: string;
  title?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTripType = "Local Sightseeing",
  initialPickup = "McLeodganj / Dharamshala",
  initialDropoff = "",
  initialVehicle = "Not Sure Yet",
  title = "Plan Your Himalayan Ride",
}) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <BookingWidget
            title={title}
            initialTripType={initialTripType}
            initialPickup={initialPickup}
            initialDropoff={initialDropoff}
            initialVehicle={initialVehicle}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
};
