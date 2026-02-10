import Link from "next/link";
import Image from "next/image";
import { FaBox, FaCubes, FaBarsStaggered, FaWhatsapp } from "react-icons/fa6";

const cementoMarcas = [
  "cemento-sol.png",
  "apu.png",
  "andino.png",
  "fortaleza.png",
  "forte.png",
];
const ladrilloMarcas = ["lark.svg"];
const fierroMarcas = ["aceros-arequipa.png", "siderperu.webp"];

export const metadata = {
  title: "Marcas - Grupo Olivares",
  description: "Distribuidores autorizados de las mejores marcas. Cemento, ladrillos, fierro y acero.",
};

export default function MarcasPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Aliados Estratégicos
          </h1>
          <p className="text-brand-primary font-bold uppercase tracking-wider">
            Distribuidores Autorizados
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-brand-grey text-lg leading-relaxed">
            Nuestra solidez de 46 años nos permite trabajar directamente con los
            fabricantes líderes del mercado. Esto garantiza que recibas productos{" "}
            <strong>
              originales, con garantía de fábrica y al mejor precio
            </strong>{" "}
            para tus proyectos de construcción.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand-primary text-white p-3 rounded-lg">
              <FaBox className="text-xl" />
            </div>
            <h2 className="text-2xl font-extrabold text-brand-dark">Cemento</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {cementoMarcas.map((src) => (
              <div
                key={src}
                className="bg-white p-8 rounded-xl border border-gray-200 flex items-center justify-center h-40 grayscale hover:grayscale-0 hover:shadow-xl hover:border-brand-primary transition duration-300 group"
              >
                <Image
                  src={`/marcas-olivares/${src}`}
                  alt={src.replace(/\.[^.]+$/, "")}
                  width={120}
                  height={80}
                  className="max-h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand-accent-orange text-white p-3 rounded-lg">
              <FaCubes className="text-xl" />
            </div>
            <h2 className="text-2xl font-extrabold text-brand-dark">
              Ladrillos
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ladrilloMarcas.map((src) => (
              <div
                key={src}
                className="bg-white p-8 rounded-xl border border-gray-200 flex items-center justify-center h-40 grayscale hover:grayscale-0 hover:shadow-xl hover:border-brand-primary transition duration-300 group"
              >
                <Image
                  src={`/marcas-olivares/${src}`}
                  alt={src.replace(/\.[^.]+$/, "")}
                  width={120}
                  height={80}
                  className="max-h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand-accent-yellow text-brand-dark p-3 rounded-lg">
              <FaBarsStaggered className="text-xl" />
            </div>
            <h2 className="text-2xl font-extrabold text-brand-dark">
              Fierro y Acero
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fierroMarcas.map((src) => (
              <div
                key={src}
                className="bg-white p-8 rounded-xl border border-gray-200 flex items-center justify-center h-40 grayscale hover:grayscale-0 hover:shadow-xl hover:border-brand-primary transition duration-300 group"
              >
                <Image
                  src={`/marcas-olivares/${src}`}
                  alt={src.replace(/\.[^.]+$/, "")}
                  width={120}
                  height={80}
                  className="max-h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white container mx-auto px-4">
        <div className="bg-brand-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden max-w-5xl mx-auto">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-extrabold text-white mb-4">
              ¿Buscas un producto específico de estas marcas?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Manejamos un amplio stock y precios especiales para compras por
              volumen. Consulta la disponibilidad inmediata a través de nuestro
              canal directo.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-brand-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition transform hover:scale-105 shadow-xl"
            >
              <FaWhatsapp className="text-2xl" />
              Consultar Stock Ahora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
