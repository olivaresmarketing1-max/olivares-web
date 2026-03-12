"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// Simplificamos la data para solo tener imagen y un enlace de destino
const slides = [
  {
    image:
      "/imagenes-olivares/banner-1.jpeg",
    href: "/catalogo",
    alt: "Herramientas de construcción",
  },
  {
    image:
      "/imagenes-olivares/banner-2.jpeg",
    href: "/marcas",
    alt: "Materiales de industria",
  },
  {
    image:"/imagenes-olivares/banner-3.jpeg",
    href: "/contacto",
    alt: "Rapidez y eficiencia en entregas",
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const show = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    show(current + 1);
  }, [current, show]);

  const prev = useCallback(() => {
    show(current - 1);
  }, [current, show]);

  // Autoplay
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [current, next]);

  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      {/* Contenedor con aspect-ratio 16:9 para mantener la proporción de las imágenes 1600x900 */}
      <div className="carousel-container relative w-full aspect-[16/9]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Hacemos que toda la imagen sea un enlace cliqueable */}
            <Link href={slide.href} className="block w-full h-full relative">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0} // Prioridad de carga para la primera imagen
                className="object-contain" // Muestra toda la imagen sin recortar
                sizes="100vw"
                unoptimized
              />
            </Link>
          </div>
        ))}

        {/* --- Controles de Navegación --- */}
        
        {/* Flecha Izquierda */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition backdrop-blur-sm"
          aria-label="Anterior"
        >
          <FaChevronLeft className="text-lg md:text-xl" />
        </button>

        {/* Flecha Derecha */}
        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition backdrop-blur-sm"
          aria-label="Siguiente"
        >
          <FaChevronRight className="text-lg md:text-xl" />
        </button>

        {/* Indicadores (Puntos) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => show(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${
                i === current 
                  ? "bg-gray-700 scale-110" 
                  : "bg-gray-500/50 hover:bg-gray-700/80"
              }`}
              aria-label={`Ir a banner ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}