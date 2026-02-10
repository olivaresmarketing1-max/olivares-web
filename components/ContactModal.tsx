"use client";

import { useCallback, useEffect, useState } from "react";
import { FaXmark, FaComments, FaCheck, FaBoxOpen, FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "51999888777";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 10);
    if (typeof document !== "undefined") document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      if (typeof document !== "undefined") document.body.style.overflow = "auto";
    }, 300);
  }, []);

  const sendWhatsApp = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const nombre = (form.querySelector("#nombre") as HTMLInputElement)?.value;
      const celular = (form.querySelector("#celular") as HTMLInputElement)?.value;
      const producto = (form.querySelector("#producto") as HTMLInputElement)?.value;
      const mensaje = (form.querySelector("#mensaje") as HTMLTextAreaElement)?.value;

      let text = `*Solicitud de Cotización*%0A%0A`;
      text += `*Nombre:* ${encodeURIComponent(nombre || "")}%0A`;
      text += `*Celular:* ${encodeURIComponent(celular || "")}%0A`;
      text += `*Producto:* ${encodeURIComponent(producto || "")}%0A`;
      if (mensaje?.trim()) text += `*Mensaje:* ${encodeURIComponent(mensaje)}%0A`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
      closeModal();
      form.reset();
    },
    [closeModal]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  useEffect(() => {
    (window as unknown as { openContactModal?: () => void }).openContactModal = openModal;
    return () => {
      delete (window as unknown as { openContactModal?: () => void }).openContactModal;
    };
  }, [openModal]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-brand-dark text-white p-6 rounded-t-3xl flex justify-between items-center z-10">
          <div>
            <h2 id="modal-title" className="text-2xl font-bold">
              ¿Necesitas una cotización?
            </h2>
            <p className="text-brand-primary text-sm mt-1">
              Completa el formulario y te responderemos en menos de 24 horas
            </p>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="text-white hover:text-brand-accent-orange transition text-3xl"
            aria-label="Cerrar"
          >
            <FaXmark />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8">
          <div className="md:col-span-2 bg-brand-dark text-white p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <FaComments className="absolute -right-6 -bottom-6 text-white/5 text-[10rem]" />
            <div>
              <h3 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h3>
              <p className="text-gray-300 mb-6">
                Déjanos los detalles de tu requerimiento y nuestro equipo de
                ventas te responderá con una propuesta formal.
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-brand-primary" /> Precios por volumen
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-brand-primary" /> Asesoría técnica
                  gratuita
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-brand-primary" /> Envíos a obra
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-brand-primary" /> Garantía de fábrica
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-2">
                ¿Prefieres chatear directamente?
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition"
              >
                <FaWhatsapp className="text-xl" /> Chat Directo WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <form
              id="contactForm"
              onSubmit={sendWhatsApp}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-bold text-brand-dark mb-2"
                >
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white outline-none transition"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label
                  htmlFor="celular"
                  className="block text-sm font-bold text-brand-dark mb-2"
                >
                  Celular *
                </label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white outline-none transition"
                  placeholder="999 888 777"
                />
              </div>
              <div className="bg-brand-accent-yellow/10 p-4 rounded-lg border border-brand-accent-yellow/30">
                <label
                  htmlFor="producto"
                  className="block text-sm font-bold text-brand-dark mb-2"
                >
                  <FaBoxOpen className="text-brand-accent-orange mr-1 inline" />{" "}
                  Producto de Interés *
                </label>
                <input
                  type="text"
                  id="producto"
                  name="producto"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-accent-orange outline-none transition placeholder-gray-400"
                  placeholder="Ej: Cemento Sol, Taladro Bosch, Tuberías..."
                />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-bold text-brand-dark mb-2"
                >
                  Mensaje Adicional
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white outline-none transition resize-none"
                  placeholder="Cantidad, lugar de entrega, etc..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 rounded-lg transition shadow-xl flex items-center justify-center gap-2 transform active:scale-95"
              >
                <FaWhatsapp className="text-xl" /> Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
