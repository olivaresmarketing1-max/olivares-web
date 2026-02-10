import Link from "next/link";
import Image from "next/image";
import { FaLocationDot, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <Image
              src="/isotipo.png"
              alt="Olivares"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-extrabold tracking-tight">
              GRUPO OLIVARES
            </span>
          </Link>
          <p className="text-gray-300 mb-6 max-w-md">
            Más que una ferretería, somos tu socio estratégico en cada proyecto.
            Calidad, garantía y atención experta para profesionales y el hogar.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-brand-primary hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-brand-primary hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-brand-primary hover:text-white transition"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-base">
            Empresa
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/nosotros"
                className="text-gray-300 hover:text-brand-primary transition flex items-center gap-2"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/marcas"
                className="text-gray-300 hover:text-brand-primary transition flex items-center gap-2"
              >
                Nuestras Marcas
              </Link>
            </li>
            <li>
              <Link
                href="/catalogo"
                className="text-gray-300 hover:text-brand-primary transition flex items-center gap-2"
              >
                Catálogo 2026
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-base">
            Contacto
          </h4>
          <p className="text-xs text-brand-primary font-semibold uppercase mb-4">
            Sede principal - Santa Rosa de Lima
          </p>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <FaLocationDot className="text-brand-primary mt-1 flex-shrink-0" />
              <span>
                Av. Santa Rosa de Lima 652
                <br />
                San Juan de Lurigancho, Lima
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaWhatsapp className="text-brand-primary text-lg flex-shrink-0" />
              <span className="font-bold text-white">+51 933 542 681</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-brand-primary flex-shrink-0" />
              <span>info@grupoolivares.com</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="ml-7 text-gray-400">
                Horario: 8:00 AM a 6:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 border-t border-gray-800 pt-8 text-center text-base text-gray-400">
        <p>&copy; 2026 Grupo Olivares. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
