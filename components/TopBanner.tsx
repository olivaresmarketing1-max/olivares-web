import { FaTruckFast, FaTag, FaClock } from "react-icons/fa6";

export default function TopBanner() {
  return (
    <div className="bg-brand-primary text-white py-2 text-center text-base font-semibold">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <FaTruckFast />
          <span>Envíos a obra en Lima</span>
        </div>
        <div className="hidden md:block w-px h-4 bg-white/30" />
        <div className="flex items-center gap-2">
          <FaTag />
          <span>Descuentos por volumen</span>
        </div>
        <div className="hidden md:block w-px h-4 bg-white/30" />
        <div className="flex items-center gap-2">
          <FaClock />
          <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
        </div>
      </div>
    </div>
  );
}
