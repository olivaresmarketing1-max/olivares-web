import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "51999888777";
const DEFAULT_MESSAGE = "Hola,%20necesito%20información%20sobre%20sus%20productos";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white w-20 h-20 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Cotizar por WhatsApp"
      >
      <FaWhatsapp className="text-6xl group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
        Cotizar
      </span>
    </a>
  );
}
