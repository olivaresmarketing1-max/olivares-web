import type { Metadata } from "next";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Grupo Olivares - Ferretería y Materiales de Construcción",
  description:
    "Ferretería Olivares. Distribuidores autorizados. Cemento, fierro, herramientas. Envíos a obra en Lima. Más de 46 años de experiencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white font-sans text-brand-dark antialiased">
        <TopBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ContactModal />
      </body>
    </html>
  );
}
