import Link from "next/link";
import Image from "next/image";
import {
  FaBoxOpen,
  FaCubes,
  FaBarsStaggered,
  FaScrewdriverWrench,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa6";
import HeroCarousel from "@/components/HeroCarousel";

const categories = [
  { icon: FaBoxOpen, label: "Cemento", href: "#" },
  { icon: FaCubes, label: "Ladrillo", href: "#" },
  { icon: FaBarsStaggered, label: "Fierro", href: "#" },
  { icon: FaScrewdriverWrench, label: "Alambre y Clavos", href: "#" },
];

const featuredProducts = [
  {
    image: "/imagenes-olivares/producto-2.jpeg",
    category: "Estructuras",
    title: "Fierro de Acero – SIDER",
    subtitle: "Máxima resistencia para concreto armado.",
    description:
      "Barra de acero corrugado diseñada para estructuras exigentes. Garantiza seguridad, durabilidad y cumplimiento de estándares internacionales de calidad en todo tipo de edificaciones.",
    cta: "Cotizar Fierro SIDER",
    reverse: false,
  },
  {
    image: "/imagenes-olivares/producto-3.jpeg",
    category: "Materiales Base",
    title: "Cemento Sol",
    subtitle: "El aliado histórico de la construcción.",
    description:
      "Cemento Portland de excelente calidad, ideal para tarrajeo, asentado de ladrillo y estructuras de concreto. Ofrece la mejor resistencia y trabajabilidad del mercado peruano.",
    cta: "Consultar Stock",
    reverse: true,
  },
  {
    image: "/imagenes-olivares/producto-1.jpeg",
    category: "Albañilería",
    title: "Ladrillo de Obra",
    subtitle: "Resistencia y aislamiento térmico superior.",
    description:
      "Material esencial para la construcción de muros. Ofrece alta durabilidad y un excelente comportamiento térmico, adaptándose a las necesidades estructurales de tu obra.",
    cta: "Cotizar por Millar",
    reverse: false,
  },
  {
    image: "/imagenes-olivares/producto-4.jpeg",
    category: "Fijación y Ferretería",
    title: "Clavos de Acero",
    subtitle: "Fijación precisa y de alta resistencia.",
    description:
      "Fabricados en acero de alta resistencia, ideales para carpintería y armado en general. Disponibles en diversas medidas para asegurar cada detalle de tu proyecto.",
    cta: "Ver Medidas Disponibles",
    reverse: true,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="py-20 container mx-auto px-4 relative z-20 -mt-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-brand-dark">
              Categorías Principales
            </h3>
            <div className="w-24 h-1.5 bg-brand-primary mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(({ icon: Icon, label, href }) => (
              <Link key={label} href={href} className="group text-center">
                <div className="bg-brand-light w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary transition duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-2 border-2 border-transparent group-hover:border-brand-primary-dark/20">
                  <Icon className="text-5xl text-brand-primary group-hover:text-white transition" />
                </div>
                <h4 className="font-bold text-brand-dark group-hover:text-brand-primary transition">
                  {label}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-2 block">
                Catálogo
              </span>
              <h3 className="text-3xl font-extrabold text-brand-dark">
                Productos Destacados
              </h3>
            </div>
            <Link
              href="/catalogo"
              className="group text-brand-primary font-bold flex items-center gap-2 hover:underline mt-4 md:mt-0"
            >
              Ver todo el catálogo{" "}
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.title}
                className={`bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group border border-gray-100 overflow-hidden flex flex-col md:flex-row ${
                  product.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* CAMBIO AQUÍ: 
                   1. 'relative': Necesario para usar fill en Next/Image.
                   2. 'h-64 md:h-auto md:min-h-[350px]': Asegura altura en móvil y escritorio.
                   3. 'w-full md:w-2/5': Mantiene la proporción del ancho.
                */}
                <div
                  className={`relative w-full md:w-2/5 h-64 md:h-auto md:min-h-[350px] bg-white p-6 md:p-8 flex items-center justify-center border-b md:border-b-0 border-gray-100 ${
                    product.reverse ? "md:border-l" : "md:border-r"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill // Ocupa todo el contenedor padre
                    sizes="(max-width: 768px) 100vw, 40vw" // Optimización de carga
                    className="object-contain p-2 group-hover:scale-105 transition duration-500" // object-contain asegura que entre sin cortarse
                  />
                </div>
                
                <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                  <span className="text-sm font-bold text-brand-grey uppercase mb-3 block tracking-wider">
                    {product.category}
                  </span>
                  <h4 className="text-3xl font-extrabold text-brand-dark mb-4 leading-tight group-hover:text-brand-primary transition">
                    {product.title}
                  </h4>
                  <div className="mb-8">
                    <p className="text-brand-primary font-bold text-xl mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-brand-grey text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="/contacto"
                      className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-accent-orange transition shadow-md"
                    >
                      <FaWhatsapp className="text-2xl text-brand-primary" />{" "}
                      {product.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}