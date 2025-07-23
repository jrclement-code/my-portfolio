import React from "react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold text-green-500">Portfolio</h1>
        <nav className="hidden md:flex space-x-8 text-zinc-300 font-medium">
          <a href="#hero" className="hover:text-green-500 transition">Inicio</a>
          <a href="#sobre-mi" className="hover:text-green-500 transition">Sobre Mí</a>
          <a href="#proyectos" className="hover:text-green-500 transition">Proyectos</a>
          <a href="#contacto" className="hover:text-green-500 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
