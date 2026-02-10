import ContactTabs from "./ContactTabs";

export const metadata = {
  title: "Contacto - Grupo Olivares",
  description: "Ubícanos o cotiza en línea. Tres sedes en Lima. Formulario y WhatsApp.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Hablemos de tu Proyecto
          </h1>
          <p className="text-brand-primary font-bold uppercase tracking-wider">
          Cotiza en Línea o Ubícanos 
          </p>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10 -mt-8">
        <ContactTabs />
      </main>
    </>
  );
}
