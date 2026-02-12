import {
  FaBuilding,
  FaCertificate,
  FaHandshake,
  FaTruckFast,
  FaBullseye,
  FaEye,
  FaStar,
  FaHouse,
  FaRocket,
  FaHeart,
  FaScaleBalanced,
  FaHandHoldingHeart,
  FaUsers,
  FaShuffle,
  FaGem,
} from "react-icons/fa6";

const stats = [
  { value: "46+", label: "Años de Experiencia" },
  { value: "3", label: "Sedes en Lima" },
  { value: "10+", label: "Marcas Líderes" },
  { value: "1000+", label: "Clientes Satisfechos" },
];

const timeline = [
  {
    year: "1980",
    title: "El Inicio del Sueño",
    text: "Segundo Santa Cruz y Regina Olivares inician su camino como ambulantes en la Av. Montevideo. Su premisa era simple: calidad y marca.",
    icon: FaStar,
  },
  {
    year: "1995",
    title: "Primera Ferretería",
    text: "Transformaron parte de su hogar en la primera ferretería familiar en SJL. Un compromiso real con una comunidad en expansión.",
    icon: FaHouse,
  },
  {
    year: "2014",
    title: "Distribuidores Estratégicos",
    text: "Damos el gran salto siendo distribuidores de UNACEM, ACEROS AREQUIPA y SIDERPERU. La segunda generación asume el liderazgo.",
    icon: FaHandshake,
  },
  {
    year: "2024",
    title: "Nace Grupo Olivares",
    text: "Renovamos nuestra identidad bajo el nombre GRUPO OLIVARES, reafirmando nuestro legado y proyección a futuro.",
    icon: FaRocket,
  },
];

const values = [
  { icon: FaHeart, label: "Empatía" },
  { icon: FaScaleBalanced, label: "Honestidad" },
  { icon: FaHandHoldingHeart, label: "Compromiso" },
  { icon: FaUsers, label: "Trabajo en Equipo" },
  { icon: FaShuffle, label: "Adaptabilidad" },
];

export const metadata = {
  title: "Nosotros - Grupo Olivares",
  description: "Conoce la historia y valores de Grupo Olivares. Más de 46 años como tu socio en construcción.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-dark mb-4 md:mb-6 leading-tight">
                Somos <span className="text-brand-primary">Grupo Olivares</span>
              </h1>
              <p className="text-lg md:text-3xl text-brand-grey font-bold">
                Tu socio estratégico en construcción
              </p>
            </div>

            {/* STATS - 2 columns mobile, 4 desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-brand-light border-2 border-brand-primary/10 p-4 md:p-6 rounded-2xl text-center hover:border-brand-primary transition duration-300"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-1">
                    {value}
                  </div>
                  <div className="text-brand-dark text-xs md:text-sm font-semibold uppercase tracking-tighter md:tracking-normal">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* ESENCIA BOX */}
            <div className="bg-brand-light border-2 border-brand-primary/20 rounded-3xl p-6 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <div className="text-brand-primary font-bold uppercase tracking-wider text-xs md:text-sm mb-4 flex items-center gap-2">
                    <FaBuilding /> Nuestra Esencia
                  </div>
                  <p className="text-lg md:text-xl text-brand-dark leading-relaxed mb-6">
                    <strong className="text-brand-primary">Desde 1980</strong>, hemos transformado la manera de construir en Lima, pasando de ser vendedores ambulantes a <strong>distribuidores oficiales</strong> de las marcas más importantes del sector.
                  </p>
                  <p className="text-base md:text-lg text-brand-grey leading-relaxed">
                    Hoy, como <strong className="text-brand-primary">GRUPO OLIVARES</strong>, ofrecemos soluciones integrales que impulsan cada proyecto con calidad y servicio personalizado.
                  </p>
                </div>
                {/* Feature List */}
                <div className="space-y-3 md:space-y-4">
                  {[
                    { icon: FaCertificate, title: "Calidad Certificada", desc: "Distribuidores de UNACEM y Aceros Arequipa" },
                    { icon: FaHandshake, title: "Atención Personalizada", desc: "Asesoría técnica en cada etapa" },
                    { icon: FaTruckFast, title: "Logística Eficiente", desc: "Entregas puntuales en toda Lima" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4 bg-white p-4 rounded-xl border-2 border-gray-100 shadow-sm">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-brand-primary text-lg md:text-xl" />
                      </div>
                      <div>
                        <h3 className="text-brand-dark font-bold text-sm md:text-base">{item.title}</h3>
                        <p className="text-brand-grey text-xs md:text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER INTERMEDIO */}
      <section className="bg-brand-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="text-brand-accent-yellow font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Desde 1980</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Construyendo Historia Juntos</h2>
          <p className="text-lg md:text-xl text-gray-300">46 años de trayectoria siendo referentes en la distribución de materiales en Lima.</p>
        </div>
      </section>

      {/* MISION & VISION - Stack on mobile */}
      <section className="py-12 bg-white relative z-20 -mt-8 md:-mt-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { icon: FaBullseye, color: "brand-primary", bg: "brand-light", title: "Nuestra Misión", text: "Proveemos materiales de construcción e impulsamos los proyectos de nuestros clientes con un portafolio de alta calidad." },
            { icon: FaEye, color: "orange-600", bg: "orange-50", title: "Nuestra Visión", text: "Ser una empresa líder, reconocida y sólida en el sector de la venta de materiales de construcción de la región de Lima." }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-current flex flex-col items-center text-center hover:-translate-y-1 transition duration-300">
               <div className={`w-14 h-14 bg-${card.bg} rounded-full flex items-center justify-center text-3xl mb-6 text-${card.color}`}>
                <card.icon />
              </div>
              <h2 className="text-2xl font-extrabold text-brand-dark mb-4">{card.title}</h2>
              <p className="text-brand-grey text-base md:text-lg leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE - Vertical on mobile, Zig-zag on desktop */}
      <section className="py-20 bg-brand-light overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-dark">Nuestra Historia</h2>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-4 rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Line - Hidden on very small mobile if needed, but here kept responsive */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 md:-translate-x-1/2" />
            
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative mb-12 flex flex-col md:flex-row items-center w-full ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Contenido */}
                <div className="w-full md:w-5/12 pl-16 md:pl-0 md:px-8">
                  <div className={`${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <span className="text-3xl md:text-4xl font-black text-brand-primary/20 block mb-1">{item.year}</span>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-brand-grey text-sm md:text-base leading-relaxed">{item.text}</p>
                  </div>
                </div>
                {/* Icono Central */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex justify-center w-12 h-12">
                  <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-4 border-white shadow-md rounded-full z-10 ${i === timeline.length - 1 ? "bg-brand-primary text-white animate-pulse" : "bg-brand-dark text-white"}`}>
                    <item.icon className="text-sm md:text-base" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES - 2 columns mobile, 5 desktop */}
      <section className="py-16 md:py-24 bg-brand-dark text-white relative">
        <FaGem className="absolute -left-10 bottom-0 text-white/5 text-[10rem] md:text-[15rem] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">Nuestros Valores</h2>
            <p className="text-brand-primary mt-2 uppercase tracking-widest font-bold text-xs md:text-sm">Los pilares de nuestra cultura</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {values.map(({ icon: Icon, label }) => (
              <div key={label} className="group bg-white/5 p-6 rounded-xl hover:bg-brand-primary transition duration-300 border border-white/10 text-center">
                <Icon className="text-3xl mb-4 text-brand-primary group-hover:text-white transition mx-auto" />
                <h4 className="font-bold text-sm md:text-base">{label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}