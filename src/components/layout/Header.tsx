
import React from "react";

export function Header() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 w-full">
      <div className="lg:hidden w-8"></div> {/* Spacer for mobile layout */}
      <div className="text-xs sm:text-sm text-gray-500 text-center flex-1 lg:text-right">{formattedDate}</div>
    </div>
  );
}
