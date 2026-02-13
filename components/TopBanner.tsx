"use client"; // <--- ESTA LÍNEA ES LA CLAVE

import { useState, useEffect } from "react";
import { FaTruckFast, FaTag, FaClock } from "react-icons/fa6";

const items = [
  { icon: <FaTruckFast />, text: "Envíos a obra en Lima" },
  { icon: <FaTag />, text: "Descuentos por volumen" },
  { icon: <FaClock />, text: "Lun - Sáb: 8:00 AM - 6:00 PM" },
];

export default function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-brand-primary text-white py-2 shadow-sm relative z-[60] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* VISTA MOBILE: Carousel */}
        <div className="md:hidden flex justify-center items-center h-6 overflow-hidden relative">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out flex items-center gap-2 whitespace-nowrap text-sm font-semibold
                ${index === currentIndex 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4 pointer-events-none"}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* VISTA DESKTOP: Estática */}
        <div className="hidden md:flex items-center justify-center gap-8 text-base font-semibold">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
              {index < items.length - 1 && (
                <div className="w-px h-4 bg-white/30" />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}