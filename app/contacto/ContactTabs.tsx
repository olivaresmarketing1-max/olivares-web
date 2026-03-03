"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelopeOpenText,
  FaMapLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa";

// --- CONFIGURACIÓN ---
const WHATSAPP_NUMBER = "51933542681";
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_76499xo",
  TEMPLATE_ID: "template_c5nyzhe",
  PUBLIC_KEY: "6t-ItahPK-3kOJo0X",
};

const sedes = [
  {
    num: 1,
    nombre: "Sede Santa Rosa de Lima",
    color: "bg-brand-primary",
    direccion: "Av. Santa Rosa de Lima 652\nSan Juan de Lurigancho, Lima",
    telefono: "933 542 681",
    // Enlace externo (Botón de texto)
    mapUrl: "https://maps.app.goo.gl/DXLKvTAjEgJrjBp68",
    // Enlace para el mapa incrustado (Iframe)
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.593741639836!2d-77.00947082568652!3d-11.968132938562366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c561b3658511%3A0x6338421008061404!2sAv.%20Santa%20Rosa%20de%20Lima%20652%2C%20San%20Juan%20de%20Lurigancho%2015419!5e0!3m2!1ses-419!2spe!4v1707920000000!5m2!1ses-419!2spe",
    pinLabel: "Santa Rosa de Lima",
  },
  {
    num: 2,
    nombre: "Sede Jicamarca",
    color: "bg-brand-accent-orange",
    direccion:
      "Anexo 22 Jicamarca Mz AW Lt 06\nAsc. de Pob. El Cercado - Huarochiri San Antonio",
    telefono: "977 928 236",
    mapUrl: "https://maps.app.goo.gl/yedVNjaHaHSpRw8T8",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.454278453582!2d-76.9935105!3d-11.9065112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c3d2296495cb%3A0x280d8531185489f6!2sJicamarca!5e0!3m2!1ses-419!2spe!4v1707920000000!5m2!1ses-419!2spe",
    pinLabel: "Jicamarca",
  },
  {
    num: 3,
    nombre: "Sede Héroes de Cénepa",
    color: "bg-brand-accent-yellow",
    direccion:
      "Av. Héroes de Cénepa Mz B17 lote 15\nUrb. Mariscal Andres Avelino C., San Juan de Lurigancho",
    telefono: "955 035 898",
    mapUrl: "https://maps.app.goo.gl/qGHFHzxEPGYnozTz7",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.663188546513!2d-76.9926884!3d-11.9631586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5576564619d%3A0x10da5625463f61!2sAv.%20Heroes%20del%20Cenepa%2C%20San%20Juan%20de%20Lurigancho!5e0!3m2!1ses-419!2spe!4v1707920000000!5m2!1ses-419!2spe",
    pinLabel: "Héroes de Cénepa",
  },
];

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState<"formulario" | "ubicacion">(
    "formulario",
  );
  const [isSending, setIsSending] = useState(false);

  // ESTADO PARA LA VENTANA MODAL
  const [modal, setModal] = useState<{
    isOpen: boolean;
    type: "success" | "error" | "warning";
    title: string;
    message: string;
  } | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  // Función para cerrar el modal
  const closeModal = () => setModal(null);

  // Lógica para enviar a WhatsApp
  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const nombre = formData.get("nombre") as string;
    const celular = formData.get("celular") as string;
    const producto = formData.get("producto") as string;
    const mensaje = formData.get("mensaje") as string;

    if (nombre && celular && producto) {
      let text = `*Solicitud de Cotización*%0A%0A`;
      text += `*Nombre:* ${encodeURIComponent(nombre)}%0A`;
      text += `*Celular:* ${encodeURIComponent(celular)}%0A`;
      text += `*Producto:* ${encodeURIComponent(producto)}%0A`;
      if (mensaje) text += `*Mensaje:* ${encodeURIComponent(mensaje)}%0A`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
      formRef.current.reset();
    } else {
      setModal({
        isOpen: true,
        type: "warning",
        title: "Faltan datos",
        message:
          "Por favor completa los campos para poder generar el enlace de WhatsApp.",
      });
    }
  };

  // Lógica para enviar Email vía EmailJS
  const handleEmailClick = async () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const nombre = formData.get("nombre") as string;
    const celular = formData.get("celular") as string;
    const producto = formData.get("producto") as string;
    const mensaje = formData.get("mensaje") as string;

    if (!nombre || !celular || !producto) {
      setModal({
        isOpen: true,
        type: "warning",
        title: "Campos incompletos",
        message:
          "Por favor completa los campos obligatorios (*) marcados en el formulario.",
      });
      return;
    }

    setIsSending(true);

    const templateParams = {
      nombre: nombre,
      celular: celular,
      producto: producto,
      mensaje: mensaje || "Sin mensaje adicional",
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      setModal({
        isOpen: true,
        type: "success",
        title: "¡Mensaje Enviado!",
        message:
          "Hemos recibido tu solicitud correctamente. Nos pondremos en contacto contigo a la brevedad.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("Error al enviar email:", error);
      setModal({
        isOpen: true,
        type: "error",
        title: "Error de envío",
        message:
          "Hubo un problema al enviar el correo. Por favor intenta mediante el botón de WhatsApp.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-gray-100 relative">
      {/* --- VENTANA MODAL (POPUP) --- */}
      {modal && modal.isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-sm w-full text-center transform scale-100 animate-in zoom-in-95 duration-200">
            <div className="flex justify-center mb-4">
              {modal.type === "success" && (
                <FaCheckCircle className="text-5xl text-green-500" />
              )}
              {modal.type === "error" && (
                <FaTimesCircle className="text-5xl text-red-500" />
              )}
              {modal.type === "warning" && (
                <FaExclamationCircle className="text-5xl text-brand-accent-yellow" />
              )}
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">
              {modal.title}
            </h3>
            <p className="text-brand-grey mb-6 text-sm">{modal.message}</p>
            <button
              onClick={closeModal}
              className="w-full py-3 rounded-xl bg-brand-primary text-white font-bold hover:opacity-90 transition-opacity bg-black"
              style={{
                backgroundColor: modal.type === "error" ? "#EF4444" : "",
              }}
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* TABS HEADER */}
      <div className="flex border-b border-gray-200">
        <button
          type="button"
          onClick={() => setActiveTab("formulario")}
          className={`w-1/2 py-4 md:py-6 text-center font-bold text-sm md:text-lg transition duration-300 border-b-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 ${
            activeTab === "formulario"
              ? "border-brand-primary bg-white text-brand-primary"
              : "border-transparent bg-gray-50 text-gray-400 hover:text-brand-dark"
          }`}
        >
          <FaEnvelopeOpenText className="text-lg md:text-xl" />
          <span className="leading-tight">Cotizar</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("ubicacion")}
          className={`w-1/2 py-4 md:py-6 text-center font-bold text-sm md:text-lg transition duration-300 border-b-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 ${
            activeTab === "ubicacion"
              ? "border-brand-primary bg-white text-brand-primary"
              : "border-transparent bg-gray-50 text-gray-400 hover:text-brand-dark"
          }`}
        >
          <FaMapLocationDot className="text-lg md:text-xl" />
          <span className="leading-tight">Ubicación</span>
        </button>
      </div>

      {/* CONTENIDO FORMULARIO */}
      <div
        className={`p-6 md:p-12 ${activeTab === "formulario" ? "block" : "hidden"}`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Envíanos tu Consulta
            </h3>
            <p className="text-brand-grey text-sm md:text-base">
              Completa los datos y te contactaremos pronto
            </p>
          </div>

          <form ref={formRef} className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nombrePage"
                  className="block text-xs md:text-sm font-bold text-brand-dark mb-2"
                >
                  Nombre y Apellido *
                </label>
                <input
                  name="nombre"
                  type="text"
                  id="nombrePage"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary outline-none text-sm md:text-base"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="celularPage"
                  className="block text-xs md:text-sm font-bold text-brand-dark mb-2"
                >
                  Celular *
                </label>
                <input
                  name="celular"
                  type="tel"
                  id="celularPage"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary outline-none text-sm md:text-base"
                  placeholder="999 888 777"
                />
              </div>
            </div>

            <div className="bg-brand-accent-yellow/5 p-4 rounded-lg border border-brand-accent-yellow/20">
              <label
                htmlFor="productoPage"
                className="block text-xs md:text-sm font-bold text-brand-dark mb-2"
              >
                ¿Qué producto necesitas? *
              </label>
              <input
                name="producto"
                type="text"
                id="productoPage"
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-primary outline-none text-sm md:text-base"
                placeholder="Ej: Ladrillos King Kong"
              />
            </div>

            <div>
              <label
                htmlFor="mensajePage"
                className="block text-xs md:text-sm font-bold text-brand-dark mb-2"
              >
                Mensaje Adicional
              </label>
              <textarea
                name="mensaje"
                id="mensajePage"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary outline-none text-sm md:text-base resize-none"
                placeholder="Detalles extra..."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <button
                onClick={handleWhatsApp}
                type="button"
                className="flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-all hover:-translate-y-1 shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                Cotizar por WhatsApp
              </button>

              <button
                onClick={handleEmailClick}
                type="button"
                disabled={isSending}
                className="flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-xl bg-brand-primary text-white font-bold transition-all hover:-translate-y-1 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed bg-blue-600"
              >
                {isSending ? (
                  "Enviando..."
                ) : (
                  <>
                    <FaEnvelopeOpenText className="text-xl" />
                    Enviar Correo
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CONTENIDO UBICACIÓN CON MAPA EN FILAS */}
      <div
        className={`p-6 md:p-12 ${activeTab === "ubicacion" ? "block" : "hidden"}`}
      >
        {/* Cambiamos grid-cols-2 por grid-cols-1 para forzar filas */}
        <div className="grid grid-cols-1 gap-8">
          {sedes.map((sede) => (
            <div
              key={sede.num}
              className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Contenedor de Información */}
              <div className="w-full md:w-1/2">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${sede.color === "brand-primary" ? "bg-blue-600" : sede.color}`}
                >
                  Sede {sede.num}
                </div>
                <h4 className="font-bold text-2xl text-brand-dark mb-4">
                  {sede.nombre}
                </h4>

                <div className="space-y-3 mb-6">
                  <p className="text-brand-grey text-base flex gap-3">
                    <FaMapLocationDot className="mt-1 text-brand-primary shrink-0" />{" "}
                    {sede.direccion}
                  </p>
                  <p className="text-brand-grey text-base flex gap-3">
                    <FaPhone className="mt-1 text-brand-primary shrink-0" />{" "}
                    {sede.telefono}
                  </p>
                </div>

                <a
                  href={sede.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-brand-primary font-bold text-sm underline decoration-2 underline-offset-4 hover:text-brand-dark transition-colors"
                >
                  Ver en Google Maps
                </a>
              </div>

              {/* Contenedor del Mapa */}
              <div className="w-full md:w-1/2 h-64 md:h-72 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src={sede.embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${sede.nombre}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
