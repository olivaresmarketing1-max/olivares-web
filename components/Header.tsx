"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/marcas", label: "Marcas" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-brand-off-white text-brand-dark sticky top-0 z-50 shadow-lg relative border-b-4 border-brand-primary">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/isotipo.png"
            alt="Olivares"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-2xl font-extrabold leading-none tracking-tight text-brand-dark">
              OLIVARES
            </h1>
            <span className="text-sm text-brand-primary font-bold tracking-[0.2em] uppercase">
              Grupo Olivares
            </span>
          </div>
        </Link>
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
        <button
          type="button"
          className="lg:hidden text-3xl text-brand-primary"
          aria-label="Menú"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}
