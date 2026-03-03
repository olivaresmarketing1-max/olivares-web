import Image from "next/image";
import { FaFilePdf, FaLock } from "react-icons/fa6";

export const metadata = {
  title: "Catálogo 2026 - Grupo Olivares",
  description: "Catálogo general de productos. Materiales, herramientas e industria.",
};

export default function CatalogoPage() {
  return (
    <main className="flex-grow flex items-center py-20 relative overflow-hidden min-h-[60vh]">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-white -skew-x-12 translate-x-48 z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full filter blur-3xl z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-brand-dark rounded-xl transform translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition duration-500" />
            <div className="relative rounded-xl aspect-[3/4] overflow-hidden shadow-xl border border-gray-700">
              <Image
                src="/portada.jpeg"
                alt="Portada del Catálogo 2026 - Grupo Olivares"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-brand-dark mb-4">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-brand-grey text-lg leading-relaxed mb-8">
              Explora nuestra selección completa de productos. Desde cimientos
              hasta acabados, encuentra las mejores marcas y especificaciones
              técnicas detalladas para tu obra.
            </p>

            <div className="space-y-4">
              <a
                href="/catalogo-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-primary hover:bg-green-700 text-white py-5 px-8 rounded-xl font-bold text-xl shadow-lg shadow-green-900/20 transition transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <FaFilePdf className="text-3xl" />
                <div>
                  <span className="block text-xs uppercase tracking-wider opacity-90 font-medium">
                    Click para abrir
                  </span>
                  Ver Catálogo Digital
                </div>
              </a>
              <p className="text-xs text-brand-grey flex items-center justify-center md:justify-start gap-2">
                <FaLock className="text-brand-primary" />
                Descarga segura • Formato PDF
              </p>
            </div>

            <div className="mt-10 border-t border-gray-100 pt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="block text-2xl font-black text-brand-dark">
                  30+
                </span>
                <span className="text-xs text-brand-grey font-bold uppercase">
                  Productos
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-brand-dark">
                  5+
                </span>
                <span className="text-xs text-brand-grey font-bold uppercase">
                  Marcas
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-brand-dark">
                  100%
                </span>
                <span className="text-xs text-brand-grey font-bold uppercase">
                  Garantía
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
