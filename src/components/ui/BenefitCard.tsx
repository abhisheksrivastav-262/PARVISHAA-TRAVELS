import React from "react";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  return (
    <div className="group bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 hover:border-[#087F5B]/30 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
      {/* Subtle background number watermark */}
      <span className="absolute top-3 right-4 font-heading font-black text-4xl text-gray-100 select-none pointer-events-none group-hover:text-[#087F5B]/10 transition-colors">
        0{index}
      </span>

      <div>
        <div className="w-12 h-12 rounded-xl bg-[#087F5B]/10 text-[#087F5B] flex items-center justify-center mb-5 group-hover:bg-[#087F5B] group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#064E3B] mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="w-8 h-1 bg-[#D6B46A] mt-5 rounded-full group-hover:w-16 transition-all duration-300"></div>
    </div>
  );
};
