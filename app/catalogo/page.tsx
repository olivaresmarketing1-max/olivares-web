import { FaFilePdf, FaLock, FaScrewdriverWrench } from "react-icons/fa6";

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
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl aspect-[3/4] flex flex-col justify-between p-8 text-white shadow-xl overflow-hidden border border-gray-700">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <FaScrewdriverWrench className="text-9xl" />
              </div>
              <div className="relative z-10">
                <span className="bg-brand-primary px-3 py-1 text-xs font-bold uppercase tracking-widest rounded mb-4 inline-block">
                  Edición 2026
                </span>
                <h3 className="text-4xl font-extrabold leading-tight">
                  CATÁLOGO
                  <br />
                  GENERAL
                </h3>
              </div>
              <div className="relative z-10 border-t border-gray-600 pt-6">
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">
                  Grupo Olivares
                </p>
                <p className="text-xs text-gray-500">
                  Materiales • Herramientas • Industria
                </p>
              </div>
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
                href="/catalogo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-accent-orange hover:bg-orange-700 text-white py-5 px-8 rounded-xl font-bold text-xl shadow-lg shadow-orange-900/20 transition transform hover:-translate-y-1 flex items-center justify-center gap-3"
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
                Descarga segura • Formato PDF • 15 MB
              </p>
            </div>

            <div className="mt-10 border-t border-gray-100 pt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="block text-2xl font-black text-brand-dark">
                  500+
                </span>
                <span className="text-xs text-brand-grey font-bold uppercase">
                  Productos
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black text-brand-dark">
                  20+
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
