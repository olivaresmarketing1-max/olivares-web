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
    image: "/productos/taladro.webp",
    category: "Herramientas de Poder",
    title: "Taladro Percutor Bosch 18V",
    subtitle: "Potencia industrial inalámbrica para tu obra.",
    description:
      "Ideal para perforaciones exigentes en concreto y mampostería. Su tecnología inalámbrica te da libertad total de movimiento sin sacrificar rendimiento. Incluye maletín y doble batería. Respaldo y garantía Bosch.",
    cta: "Consultar Precio Ahora",
    reverse: false,
  },
  {
    image: "/productos/cemento.webp",
    category: "Materiales de Construcción",
    title: "Cemento Sol Tipo I",
    subtitle: "La base sólida que tu proyecto necesita.",
    description:
      "Cemento Portland de alta calidad, la elección preferida por los maestros de obra para estructuras, tarrajeos y concreto armado. Garantiza máxima resistencia y durabilidad a largo plazo en tus edificaciones.",
    cta: "Consultar por Cantidad",
    reverse: true,
  },
  {
    image: "/productos/pintura.webp",
    category: "Acabados y Pinturas",
    title: "Látex Vencedor Supermate",
    subtitle: "Acabado perfecto, lavable y duradero.",
    description:
      "Renueva tus espacios con esta pintura de alto poder cubriente y bajo olor. Su fórmula lavable superior la hace ideal para interiores de alto tráfico como salas y pasillos.",
    cta: "Ver Carta de Colores",
    reverse: false,
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
                  <Icon className="text-3xl text-brand-primary group-hover:text-white transition" />
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
                className={`bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group border border-gray-100 overflow-hidden flex flex-col md:flex-row ${product.reverse ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`w-full md:w-2/5 h-72 md:h-auto bg-white relative overflow-hidden p-8 flex items-center justify-center border-b md:border-b-0 border-gray-100 ${product.reverse ? "md:border-l" : "md:border-r"}`}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={280}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500 relative z-10"
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
                      href="https://wa.me/51999888777"
                      target="_blank"
                      rel="noopener noreferrer"
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
