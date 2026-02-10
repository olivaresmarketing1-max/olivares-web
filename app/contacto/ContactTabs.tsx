"use client";

import { useState } from "react";
import {
  FaEnvelopeOpenText,
  FaMapLocationDot,
  FaLocationDot,
  FaPhone,
  FaClock,
  FaEnvelope,
  FaBoxOpen,
  FaWhatsapp,
  FaMapPin,
} from "react-icons/fa6";

const WHATSAPP_NUMBER = "51999888777";
const EMAIL = "info@grupoolivares.com";

const sedes = [
  {
    num: 1,
    nombre: "Sede Santa Rosa de Lima",
    color: "brand-primary",
    direccion: "Av. Santa Rosa de Lima 652\nSan Juan de Lurigancho, Lima",
    telefono: "933 542 681",
    horario: "8:00 AM a 6:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.3066!2d-76.99!3d-12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5bc7c3f8c8b%3A0x0!2zMTLCsDAwJzAwLjAiUyA3NsKwNTknMjQuMCJX!5e0!3m2!1ses!2spe!4v1709228400000!5m2!1ses!2spe",
    pinLabel: "Santa Rosa de Lima",
  },
  {
    num: 2,
    nombre: "Sede Jicamarca",
    color: "brand-accent-orange",
    direccion:
      "Anexo 22 Jicamarca Mz AW Lt 06\nAsc. de Pob. El Cercado - Huarochiri San Antonio",
    telefono: "977 928 236",
    horario: "8:00 AM a 6:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5!2d-76.93!3d-11.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105da0b3c0d0001%3A0x0!2zMTHCsDU3JzM2LjAiUyA3NsKwNTUnNDguMCJX!5e0!3m2!1ses!2spe!4v1709228500000!5m2!1ses!2spe",
    pinLabel: "Jicamarca",
  },
  {
    num: 3,
    nombre: "Sede Héroes de Cénepa",
    color: "brand-accent-yellow",
    direccion:
      "Av. Héroes de Cénepa Mz B17 lote 15\nUrb. Mariscal Andres Avelino C., San Juan de Lurigancho",
    telefono: "955 035 898",
    horario: "8:00 AM a 6:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.2!2d-76.98!3d-12.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5d0e0e0001%3A0x0!2zMTLCsDAwJzM2LjAiUyA3NsKwNTgnNDguMCJX!5e0!3m2!1ses!2spe!4v1709228600000!5m2!1ses!2spe",
    pinLabel: "Héroes de Cénepa",
  },
];

function sendWhatsAppFromForm(
  nombre: string,
  celular: string,
  producto: string,
  mensaje: string
) {
  let text = `*Solicitud de Cotización*%0A%0A`;
  text += `*Nombre:* ${encodeURIComponent(nombre)}%0A`;
  text += `*Celular:* ${encodeURIComponent(celular)}%0A`;
  text += `*Producto:* ${encodeURIComponent(producto)}%0A`;
  if (mensaje.trim()) text += `*Mensaje:* ${encodeURIComponent(mensaje)}%0A`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

function sendEmailFromForm(
  nombre: string,
  celular: string,
  producto: string,
  mensaje: string
) {
  const subject = encodeURIComponent("Solicitud de Cotización - " + producto);
  let body = `Nombre: ${nombre}%0D%0A`;
  body += `Celular: ${celular}%0D%0A`;
  body += `Producto de Interés: ${producto}%0D%0A`;
  if (mensaje.trim()) body += `Mensaje: ${mensaje}%0D%0A`;
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState<"formulario" | "ubicacion">(
    "formulario"
  );

  const handleSubmitWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.querySelector("#nombrePage") as HTMLInputElement)?.value;
    const celular = (form.querySelector("#celularPage") as HTMLInputElement)
      ?.value;
    const producto = (form.querySelector("#productoPage") as HTMLInputElement)
      ?.value;
    const mensaje = (
      form.querySelector("#mensajePage") as HTMLTextAreaElement
    )?.value;
    if (nombre && celular && producto) {
      sendWhatsAppFromForm(nombre, celular, producto, mensaje || "");
      form.reset();
    }
  };

  const handleSendEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = document.getElementById("contactFormPage");
    if (!form) return;
    const nombre = (form.querySelector("#nombrePage") as HTMLInputElement)?.value;
    const celular = (form.querySelector("#celularPage") as HTMLInputElement)
      ?.value;
    const producto = (form.querySelector("#productoPage") as HTMLInputElement)
      ?.value;
    const mensaje = (
      form.querySelector("#mensajePage") as HTMLTextAreaElement
    )?.value;
    if (!nombre || !celular || !producto) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }
    sendEmailFromForm(nombre, celular, producto, mensaje || "");
    (form as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
      <div className="flex border-b border-gray-200">
        <button
          type="button"
          onClick={() => setActiveTab("formulario")}
          className={`w-1/2 py-6 text-center font-bold text-lg transition duration-300 border-b-4 flex items-center justify-center gap-2 ${
            activeTab === "formulario"
              ? "border-brand-primary bg-white text-brand-primary hover:bg-gray-50"
              : "border-transparent bg-gray-50 text-gray-400 hover:text-brand-dark hover:bg-gray-100"
          }`}
        >
          <FaEnvelopeOpenText /> Escríbenos / Cotizar
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("ubicacion")}
          className={`w-1/2 py-6 text-center font-bold text-lg transition duration-300 border-b-4 flex items-center justify-center gap-2 ${
            activeTab === "ubicacion"
              ? "border-brand-primary bg-white text-brand-primary hover:bg-gray-50"
              : "border-transparent bg-gray-50 text-gray-400 hover:text-brand-dark hover:bg-gray-100"
          }`}
        >
          <FaMapLocationDot /> Ubicación y Horarios
        </button>
      </div>

      <div
        id="formulario"
        className={`tab-content p-8 md:p-12 ${activeTab === "formulario" ? "active" : ""}`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-brand-dark mb-3">
              Envíanos tu Consulta
            </h3>
            <p className="text-brand-grey">
              Completa el formulario y te contactaremos a la brevedad
            </p>
          </div>
          <form
            id="contactFormPage"
            onSubmit={handleSubmitWhatsApp}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="nombrePage"
                className="block text-sm font-bold text-brand-dark mb-2"
              >
                Nombre y Apellido *
              </label>
              <input
                type="text"
                id="nombrePage"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white outline-none transition"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label
                htmlFor="celularPage"
                className="block text-sm font-bold text-brand-dark mb-2"
              >
                Celular *
              </label>
              <input
                type="tel"
                id="celularPage"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white outline-none transition"
                placeholder="999 888 777"
              />
            </div>
            <div className="bg-brand-accent-yellow/10 p-4 rounded-lg border border-brand-accent-yellow/30">
              <label
                htmlFor="productoPage"
                className="block text-sm font-bold text-brand-dark mb-2"
              >
                <FaBoxOpen className="text-brand-accent-orange mr-1 inline" />{" "}
                Producto de Interés *
              </label>
              <input
                type="text"
                id="productoPage"
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-accent-orange outline-none transition placeholder-gray-400"
                placeholder="Ej: Cemento Sol, Taladro Bosch, Tuberías..."
              />
            </div>
            <div>
              <label
                htmlFor="mensajePage"
                className="block text-sm font-bold text-brand-dark mb-2"
              >
                Mensaje Adicional
              </label>
              <textarea
                id="mensajePage"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white outline-none transition resize-none"
                placeholder="Cantidad, lugar de entrega, etc..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="submit"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 rounded-lg transition shadow-xl flex items-center justify-center gap-2 transform active:scale-95"
              >
                <FaWhatsapp className="text-xl" /> Enviar por WhatsApp
              </button>
              <button
                type="button"
                onClick={handleSendEmail}
                className="bg-brand-dark hover:bg-brand-primary text-white font-bold py-4 rounded-lg transition shadow-xl flex items-center justify-center gap-2 transform active:scale-95"
              >
                <FaEnvelope className="text-xl" /> Enviar por Correo
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        id="ubicacion"
        className={`tab-content p-8 md:p-12 ${activeTab === "ubicacion" ? "active" : ""}`}
      >
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-3">
            Nuestras Sedes
          </h3>
          <p className="text-brand-grey">
            Ubícanos en cualquiera de nuestras 3 ubicaciones en Lima
          </p>
        </div>

        <div className="space-y-8">
          {sedes.map((sede) => (
            <div
              key={sede.nombre}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`bg-${sede.color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold`}
                      style={
                        sede.color === "brand-primary"
                          ? { backgroundColor: "var(--brand-primary)" }
                          : sede.color === "brand-accent-orange"
                            ? { backgroundColor: "var(--brand-accent-orange)" }
                            : { backgroundColor: "var(--brand-accent-yellow)", color: "#4B4445" }
                      }
                    >
                      {sede.num}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                        {sede.nombre}
                        {sede.num === 1 && (
                          <span className="text-xs font-semibold bg-brand-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Sede principal
                          </span>
                        )}
                      </h4>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FaLocationDot
                        className="text-xl mt-1 flex-shrink-0"
                        style={{
                          color:
                            sede.color === "brand-primary"
                              ? "var(--brand-primary)"
                              : sede.color === "brand-accent-orange"
                                ? "var(--brand-accent-orange)"
                                : "var(--brand-accent-yellow)",
                        }}
                      />
                      <div>
                        <p className="font-bold text-brand-dark">Dirección</p>
                        <p className="text-brand-grey whitespace-pre-line">
                          {sede.direccion}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaPhone
                        className="text-xl mt-1 flex-shrink-0"
                        style={{
                          color:
                            sede.color === "brand-primary"
                              ? "var(--brand-primary)"
                              : sede.color === "brand-accent-orange"
                                ? "var(--brand-accent-orange)"
                                : "var(--brand-accent-yellow)",
                        }}
                      />
                      <div>
                        <p className="font-bold text-brand-dark">Celular</p>
                        <p className="text-brand-grey font-bold">
                          {sede.telefono}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaClock
                        className="text-xl mt-1 flex-shrink-0"
                        style={{
                          color:
                            sede.color === "brand-primary"
                              ? "var(--brand-primary)"
                              : sede.color === "brand-accent-orange"
                                ? "var(--brand-accent-orange)"
                                : "var(--brand-accent-yellow)",
                        }}
                      />
                      <div>
                        <p className="font-bold text-brand-dark">Horario</p>
                        <p className="text-brand-grey text-sm whitespace-pre-line">
                          {sede.horario}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 h-80 md:h-auto relative group min-h-[320px]">
                  <iframe
                    src={sede.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition duration-700"
                    title={`Mapa ${sede.nombre}`}
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-bold">
                    <FaMapPin
                      className="inline mr-1"
                      style={{
                        color:
                          sede.color === "brand-primary"
                            ? "var(--brand-primary)"
                            : sede.color === "brand-accent-orange"
                              ? "var(--brand-accent-orange)"
                              : "var(--brand-accent-yellow)",
                      }}
                    />{" "}
                    {sede.pinLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-brand-primary/10 p-4 rounded-lg border border-brand-primary/20 text-center">
          <p className="text-brand-dark text-sm font-medium flex items-center justify-center gap-2 flex-wrap">
            <FaWhatsapp className="text-brand-primary text-2xl" />
            ¿Tienes dudas? Contáctanos por WhatsApp:{" "}
            <span className="font-bold ml-2">+51 999 888 777</span>
          </p>
        </div>
      </div>
    </div>
  );
}
