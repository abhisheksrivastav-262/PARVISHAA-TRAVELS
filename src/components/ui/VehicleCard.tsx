import React from "react";
import { Users, Briefcase, Snowflake, Check } from "lucide-react";
import { VehicleOption } from "../../data/vehicleData";

interface VehicleCardProps {
  vehicle: VehicleOption;
  onSelectVehicle?: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelectVehicle }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#087F5B]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <p className="text-xs text-[#D6B46A] font-bold">{vehicle.tagline}</p>
          <h3 className="font-heading text-lg font-bold">{vehicle.name}</h3>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Specs row */}
          <div className="grid grid-cols-3 gap-2 py-3 px-2 bg-gray-50 rounded-xl mb-4 text-center text-xs">
            <div className="flex flex-col items-center">
              <Users className="w-4 h-4 text-[#087F5B] mb-1" />
              <span className="text-[11px] font-semibold text-gray-700">{vehicle.passengers}</span>
            </div>
            <div className="flex flex-col items-center border-x border-gray-200">
              <Briefcase className="w-4 h-4 text-[#D6B46A] mb-1" />
              <span className="text-[11px] font-semibold text-gray-700">{vehicle.luggage}</span>
            </div>
            <div className="flex flex-col items-center">
              <Snowflake className="w-4 h-4 text-sky-600 mb-1" />
              <span className="text-[11px] font-semibold text-gray-700">AC / Heat</span>
            </div>
          </div>

          <p className="text-xs text-gray-600 mb-4 leading-relaxed">{vehicle.description}</p>

          <div className="text-xs text-[#064E3B] bg-[#FAF9F4] p-2.5 rounded-lg border border-[#087F5B]/10 mb-4">
            <span className="font-bold">Recommended for:</span> {vehicle.idealFor}
          </div>
        </div>

        <button
          onClick={() => {
            if (onSelectVehicle) {
              onSelectVehicle(vehicle.id);
            } else {
              const el = document.getElementById("booking-widget-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#087F5B] hover:bg-[#064E3B] text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <Check className="w-3.5 h-3.5 text-[#D6B46A]" />
          <span>Select Preference</span>
        </button>
      </div>
    </div>
  );
};
