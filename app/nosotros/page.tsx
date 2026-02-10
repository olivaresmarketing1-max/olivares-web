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
    text: "Segundo Santa Cruz y Regina Olivares inician su camino como ambulantes en la Av. Montevideo del Centro de Lima. Su premisa era simple: calidad y marca, ganándose la confianza cliente a cliente.",
    icon: FaStar,
  },
  {
    year: "1995",
    title: "Primera Ferretería en SJL",
    text: "Viendo el crecimiento de San Juan de Lurigancho, transformaron parte de su hogar en la primera ferretería familiar. Un compromiso real con una comunidad en expansión.",
    icon: FaHouse,
  },
  {
    year: "2014",
    title: "Distribuidores Estratégicos",
    text: "Tras una ampliación en 2002, dimos el gran salto convirtiéndonos en distribuidores de gigantes como UNACEM, ACEROS AREQUIPA y SIDERPERU. La segunda generación asume el liderazgo.",
    icon: FaHandshake,
  },
  {
    year: "2024",
    title: "Nace Grupo Olivares",
    text: "Iniciamos una etapa de modernización y reestructuración total. Renovamos nuestra identidad bajo el nombre GRUPO OLIVARES, reafirmando nuestro legado y proyección a futuro.",
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
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-6 leading-tight">
                Somos <span className="text-brand-primary">Grupo Olivares</span>
              </h1>
              <p className="text-2xl md:text-3xl text-brand-grey font-bold mb-8">
                Tu socio estratégico en construcción
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-brand-light border-2 border-brand-primary/20 p-6 rounded-2xl text-center hover:border-brand-primary transition"
                >
                  <div className="text-4xl font-extrabold text-brand-primary mb-2">
                    {value}
                  </div>
                  <div className="text-brand-dark text-sm font-semibold">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-light border-2 border-brand-primary/20 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                    <FaBuilding /> Nuestra Esencia
                  </div>
                  <p className="text-xl text-brand-dark leading-relaxed mb-4">
                    <strong className="text-brand-primary">Desde 1980</strong>,
                    hemos transformado la manera de construir en Lima, pasando de
                    vendedores ambulantes a ser{" "}
                    <strong className="text-brand-dark">
                      distribuidores oficiales
                    </strong>{" "}
                    de las marcas más importantes del sector.
                  </p>
                  <p className="text-lg text-brand-grey leading-relaxed">
                    Hoy, como{" "}
                    <strong className="text-brand-primary">GRUPO OLIVARES</strong>
                    , ofrecemos soluciones integrales que impulsan cada proyecto
                    con calidad garantizada y servicio personalizado.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      icon: FaCertificate,
                      title: "Calidad Certificada",
                      desc: "Distribuidores autorizados de UNACEM, Aceros Arequipa y más",
                    },
                    {
                      icon: FaHandshake,
                      title: "Atención Personalizada",
                      desc: "Asesoría técnica y acompañamiento en cada etapa",
                    },
                    {
                      icon: FaTruckFast,
                      title: "Logística Eficiente",
                      desc: "Entregas puntuales a obra en toda Lima",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 bg-white p-4 rounded-xl border-2 border-gray-200"
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-brand-primary text-xl" />
                      </div>
                      <div>
                        <h3 className="text-brand-dark font-bold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-brand-grey text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="text-brand-accent-yellow font-bold uppercase tracking-widest text-sm mb-4 block">
            Desde 1980
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Construyendo Historia Juntos
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            46 años de trayectoria, pasando de la venta ambulante a ser
            referentes en la distribución de materiales de construcción en Lima.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white relative z-20 -mt-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-brand-primary flex flex-col items-center text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-primary text-3xl mb-6">
              <FaBullseye />
            </div>
            <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
              Nuestra Misión
            </h2>
            <p className="text-brand-grey text-lg leading-relaxed">
              Proveemos materiales de construcción e impulsamos los proyectos de
              nuestros clientes con un portafolio de alta calidad y una
              atención cercana y flexible.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-brand-accent-orange flex flex-col items-center text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-brand-accent-orange text-3xl mb-6">
              <FaEye />
            </div>
            <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
              Nuestra Visión
            </h2>
            <p className="text-brand-grey text-lg leading-relaxed">
              Ser una empresa líder, reconocida y sólida en el sector de la venta
              de materiales de construcción de la región de Lima.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-dark">
              Nuestra Historia
            </h2>
            <div className="w-24 h-1.5 bg-brand-primary mx-auto mt-4 rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform md:-translate-x-1/2" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="relative mb-16 flex flex-col md:flex-row items-center w-full"
              >
                <div
                  className={`order-1 w-full md:w-5/12 px-4 ${i % 2 === 0 ? "md:text-right" : "hidden md:block"}`}
                >
                  {i % 2 === 0 && (
                    <>
                      <span className="text-4xl font-black text-brand-primary/20 absolute -top-10 md:right-4 left-4 md:left-auto z-0">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-brand-dark mb-2 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-brand-grey text-base leading-relaxed relative z-10">
                        {item.text}
                      </p>
                    </>
                  )}
                </div>
                <div className="order-1 md:w-2/12 flex justify-center py-4 md:py-0 relative z-10">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-4 border-white shadow-lg rounded-full ${
                      i === timeline.length - 1
                        ? "bg-brand-accent-orange animate-pulse"
                        : i % 2 === 0
                          ? "bg-brand-primary text-white"
                          : "bg-brand-dark text-white"
                    }`}
                  >
                    <item.icon className="text-sm md:text-base" />
                  </div>
                </div>
                <div
                  className={`order-1 w-full md:w-5/12 px-4 ${i % 2 === 1 ? "" : "hidden md:block"}`}
                >
                  {i % 2 === 1 && (
                    <>
                      <span className="text-4xl font-black text-brand-dark/10 absolute -top-10 left-4 z-0">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-brand-dark mb-2 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-brand-grey text-base leading-relaxed relative z-10">
                        {item.text}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark text-white relative">
        <FaGem className="absolute -left-10 bottom-0 text-white/5 text-[15rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white">
              Nuestros Valores
            </h2>
            <p className="text-brand-primary mt-2 uppercase tracking-widest font-bold">
              Los pilares de nuestra cultura
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {values.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group bg-white/5 p-6 rounded-xl hover:bg-brand-primary transition duration-300 cursor-default border border-white/10"
              >
                <Icon className="text-3xl mb-4 text-brand-primary group-hover:text-white transition mx-auto" />
                <h4 className="font-bold">{label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
