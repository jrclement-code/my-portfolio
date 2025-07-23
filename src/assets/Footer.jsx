import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-zinc-300 pt-16 pb-8 px-6 md:px-20 border-t border-zinc-700">
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
        {/* Sección: Descripción */}
        <div className="md:w-1/3">
          <h3 className="text-green-500 text-xl font-bold mb-2">Portfolio</h3>
          <p>
            Desarrollador Full Stack especializado en crear soluciones web modernas e innovadoras.
          </p>
        </div>

        {/* Sección: Enlaces rápidos */}
        <div className="md:w-1/3">
          <h4 className="text-white font-semibold mb-2">Enlaces Rápidos</h4>
          <ul className="space-y-1">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:underline">Sobre Mí</a></li>
            <li><a href="#conocimientos" className="hover:underline">Conocimientos</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Sección: Redes sociales */}
        <div className="md:w-1/3">
          <h4 className="text-white font-semibold mb-2">Sígueme</h4>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/jrclement-code" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr className="border-zinc-700 mb-6" />

      {/* Copyright */}
      <p className="text-center text-sm text-zinc-400">
        © 2024 Portfolio. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
