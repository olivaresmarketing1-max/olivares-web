"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6"; // Importamos también el icono de cerrar

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/marcas", label: "Marcas" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-brand-off-white text-brand-dark sticky top-0 z-50 shadow-lg border-b-4 border-brand-primary">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group z-50" onClick={closeMenu}>
          <Image
            src="/isotipo.png"
            alt="Olivares"
            width={48}
            height={48}
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold leading-none tracking-tight text-brand-dark">
              OLIVARES
            </h1>
            <span className="text-[10px] md:text-sm text-brand-primary font-bold tracking-[0.2em] uppercase">
              Grupo Olivares
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-bold uppercase tracking-wider text-brand-dark">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? "text-brand-primary border-b-2 border-brand-primary pb-1"
                    : "hover:text-brand-primary transition pb-1 border-b-2 border-transparent hover:border-brand-primary"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="lg:hidden text-3xl text-brand-primary z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Alternar Menú"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-brand-off-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden z-40 flex flex-col items-center justify-center gap-8`}
        >
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`text-2xl font-bold uppercase tracking-widest ${
                  isActive ? "text-brand-primary" : "text-brand-dark"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}