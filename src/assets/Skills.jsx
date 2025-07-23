import React from "react";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6" id="proyectos">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Tarjeta Emmet */}
          <div className="bg-zinc-800 rounded-xl shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-green-500 mb-2">Emmet</h3>
            <p>
              Uso de abreviaciones para escribir código HTML y CSS de forma rápida y eficiente.
            </p>
          </div>

          {/* Tarjeta HTML */}
          <div className="bg-zinc-800 rounded-xl shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-green-500 mb-2">HTML</h3>
            <p>
              Maquetación de páginas web estructuradas utilizando etiquetas semánticas de HTML5.
            </p>
          </div>

          {/* Tarjeta CSS */}
          <div className="bg-zinc-800 rounded-xl shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-green-500 mb-2">CSS</h3>
            <p>
              Aplicación de estilos modernos con Flexbox, Grid y animaciones usando CSS3 puro.
            </p>
          </div>

        </div>

        {/* Botón debajo de las tarjetas */}
        <div className="mt-6 text-center">
          <Link to="/proyectos" className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition">
            Ver Más Proyectos
          </Link>
        </div>

      </div>
    </section>
  );
}
