"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaBookOpen,
  FaArrowRight,
  FaCertificate,
  FaLocationDot,
  FaRocket,
} from "react-icons/fa6";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600",
    badge: "Calidad Garantizada desde 1980",
    badgeClass: "bg-brand-primary/20 text-brand-accent-yellow border-brand-accent-yellow/40",
    title: "Tu proyecto empieza con las",
    highlight: "mejores herramientas.",
    paragraph:
      "Soluciones integrales para construcción, industria y hogar. Asesoría técnica personalizada y stock permanente.",
    borderClass: "border-brand-accent-yellow",
    ctaPrimary: { href: "/catalogo", label: "Ver Catálogo 2026", icon: FaBookOpen },
    ctaSecondary: { href: "/marcas", label: "Nuestras Marcas", icon: FaArrowRight },
  },
  {
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600",
    badge: "Distribuidores Autorizados",
    badgeClass: "bg-brand-accent-orange/20 text-brand-accent-orange border-brand-accent-orange/40",
    title: "Cemento, Fierro y",
    highlight: "Materiales de Primera",
    paragraph:
      "Distribuidores oficiales de UNACEM, Aceros Arequipa y Sider Perú. Stock permanente en nuestras 3 sedes.",
    borderClass: "border-brand-accent-orange",
    ctaPrimary: { href: "/marcas", label: "Ver Marcas Oficiales", icon: FaCertificate },
    ctaSecondary: { href: "/contacto", label: "Cotizar Ahora", icon: FaArrowRight },
  },
  {
    image:
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=1600",
    badge: "46 Años de Experiencia",
    badgeClass: "bg-brand-primary/20 text-brand-primary border-brand-primary/40",
    title: "3 Sedes en Lima para",
    highlight: "atenderte mejor",
    paragraph:
      "San Juan de Lurigancho y Jicamarca. Encuentra la sede más cercana y visítanos para asesoría personalizada.",
    borderClass: "border-brand-primary",
    ctaPrimary: { href: "/contacto", label: "Ver Ubicaciones", icon: FaLocationDot },
    ctaSecondary: { href: "/nosotros", label: "Nuestra Historia", icon: FaArrowRight },
  },
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

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [current, next]);

  return (
    <section className="relative bg-brand-dark overflow-hidden">
      <div className="carousel-container relative h-[500px] md:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide absolute inset-0 transition-opacity duration-700 ${
              index === current ? "active opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover opacity-20 grayscale mix-blend-luminosity"
                sizes="100vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent" />
            </div>
            <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
              <div className="max-w-2xl">
                <span
                  className={`inline-block py-1 px-3 rounded-full text-sm font-bold mb-4 uppercase tracking-wider border ${slide.badgeClass}`}
                >
                  {slide.badge}
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  {slide.title}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-yellow via-brand-primary to-brand-accent-orange">
                    {slide.highlight}
                  </span>
                </h2>
                <p
                  className={`text-xl text-white/90 mb-10 leading-relaxed border-l-4 pl-4 ${slide.borderClass}`}
                >
                  {slide.paragraph}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={slide.ctaPrimary.href}
                    className="bg-brand-primary hover:bg-brand-primary-dark text-white px-8 py-4 rounded-lg font-bold text-center transition flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/30"
                  >
                    <slide.ctaPrimary.icon />
                    {slide.ctaPrimary.label}
                  </Link>
                  <Link
                    href={slide.ctaSecondary.href}
                    className="group border-2 border-brand-accent-yellow hover:border-brand-accent-orange text-brand-accent-yellow hover:text-brand-accent-orange px-8 py-4 rounded-lg font-bold text-center transition flex items-center justify-center gap-2"
                  >
                    <span>{slide.ctaSecondary.label}</span>{" "}
                    <FaArrowRight className="group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition group"
          aria-label="Anterior"
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition group"
          aria-label="Siguiente"
        >
          <FaChevronRight className="group-hover:translate-x-1 transition" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => show(i)}
              className={`carousel-indicator w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "active bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
