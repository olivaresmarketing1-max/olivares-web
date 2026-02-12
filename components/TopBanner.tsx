import { FaTruckFast, FaTag, FaClock } from "react-icons/fa6";

export default function TopBanner() {
  return (
    <div className="bg-brand-primary text-white py-2 shadow-sm relative z-[60]">
      <div className="container mx-auto px-4">
        {/* Contenedor Flex: En móvil usamos 'overflow-x-auto' para que si el texto es largo se pueda deslizar, 
            o simplemente 'flex-wrap' para que se acomoden. Aquí optamos por una columna compacta en móvil 
            y fila en desktop. */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-sm md:text-base font-semibold">
          
          {/* Item 1 */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <FaTruckFast className="text-lg" />
            <span>Envíos a obra en Lima</span>
          </div>

          {/* Separador Desktop */}
          <div className="hidden md:block w-px h-4 bg-white/30" />

          {/* Item 2 */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <FaTag className="text-lg" />
            <span>Descuentos por volumen</span>
          </div>

          {/* Separador Desktop */}
          <div className="hidden md:block w-px h-4 bg-white/30" />

          {/* Item 3 */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <FaClock className="text-lg" />
            <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}