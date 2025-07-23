import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="bg-[#0d0d0d] text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        <span className="text-green-500">Contáctame</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Información de contacto */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-4">¿Tienes una idea en mente?</h3>
          <p className="text-zinc-300 mb-8">
            Estoy siempre interesado en nuevos proyectos y oportunidades de colaboración.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-zinc-900 p-3 rounded-lg">
                <Mail className="text-cyan-300" size={20} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-zinc-400">juniorclemente.1508@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-zinc-900 p-3 rounded-lg">
                <Phone className="text-pink-400" size={20} />
              </div>
              <div>
                <p className="font-semibold">Teléfono</p>
                <p className="text-sm text-zinc-400">+=51 952 811 350</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-zinc-900 p-3 rounded-lg">
                <MapPin className="text-fuchsia-500" size={20} />
              </div>
              <div>
                <p className="font-semibold">Ubicación</p>
                <p className="text-sm text-zinc-400">Huancayo, Perú</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="md:w-1/2">
          <form className="border border-zinc-700 rounded-lg p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-transparent border border-zinc-600 px-3 py-2 rounded focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-transparent border border-zinc-600 px-3 py-2 rounded focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Asunto</label>
              <input
                type="text"
                placeholder="¿En qué puedo ayudarte?"
                className="w-full bg-transparent border border-zinc-600 px-3 py-2 rounded focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Mensaje</label>
              <textarea
                placeholder="Cuéntame sobre tu proyecto..."
                rows="5"
                className="w-full bg-transparent border border-zinc-600 px-3 py-2 rounded focus:outline-none focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
