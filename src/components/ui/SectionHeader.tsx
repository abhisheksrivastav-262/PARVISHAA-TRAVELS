import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "center" | "left";
  isDark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  alignment = "center",
  isDark = false,
}) => {
  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        alignment === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3 ${
            isDark
              ? "bg-[#D6B46A]/20 text-[#D6B46A] border border-[#D6B46A]/30"
              : "bg-[#087F5B]/10 text-[#087F5B] border border-[#087F5B]/20"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${
          isDark ? "text-white" : "text-[#064E3B]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
