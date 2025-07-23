import React from 'react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="h-screen flex flex-col justify-center items-center text-center px-4 pt-16 bg-gradient-to-b from-zinc-900 to-black text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hola, soy <span className="text-green-500">Junior Clemente</span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-300 mb-6 max-w-xl">
        Estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú
      </p>

      <a
        href="#proyectos"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition mb-10"
      >
        Proyectos
      </a>

      <div className="border border-zinc-600 rounded-lg p-6 w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center">
          <h3 className="text-green-500 font-bold text-lg">JS</h3>
          <p className="text-sm text-zinc-300">1 año de experiencia</p>
        </div>
        <div className="text-center">
          <h3 className="text-purple-400 font-bold text-lg">React</h3>
          <p className="text-sm text-zinc-300">1 año de experiencia</p>
        </div>
        <div className="text-center">
          <h3 className="text-green-400 font-bold text-lg">Node.js</h3>
          <p className="text-sm text-zinc-300">2 años de experiencia</p>
        </div>
        <div className="text-center">
          <h3 className="text-indigo-400 font-bold text-lg">MongoDB</h3>
          <p className="text-sm text-zinc-300">2 años de experiencia</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
