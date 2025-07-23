import React from 'react';

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="min-h-screen px-6 md:px-20 py-20 bg-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Sobre <span className="text-green-500">Mí</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Historia */}
        <div className="border border-zinc-600 rounded-lg p-6 flex-1">
          <h3 className="text-green-500 text-2xl font-bold mb-4">Mi Historia</h3>
          <p className="text-zinc-300 mb-4">
            Soy estudiante de Ingeniería de Sistemas con interés en la programación y el desarrollo web. He aprendido tecnologías como Python, HTML, CSS, React y bases de datos con MySQL, las cuales me han servido para construir proyectos funcionales y prácticos.
          </p>
          <p className="text-zinc-300 mb-4">
            Participé en pequeños trabajos como el desarrollo de una aplicación de tareas en React y una base de datos MySQL para gestionar información. También diseñé páginas web con HTML y CSS que se adaptan a distintos dispositivos.
          </p>
          <p className="text-zinc-300">
            Soy responsable, curioso y siempre busco aprender más. Me motivan los desafíos tecnológicos y el trabajo en equipo.
          </p>
        </div>

        {/* Habilidades técnicas */}
        <div className="border border-zinc-600 rounded-lg p-6 flex-1">
          <h3 className="text-green-500 text-2xl font-bold mb-6">
            Habilidades Técnicas
          </h3>

          {/* Etiquetas */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              'React',
              'JavaScript',
              'Node.js',
              'Python',
              'MySQL',
              'Git',
              'Tailwind CSS',
              'HTML',
              'CSS',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Barras de progreso */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Frontend Development</p>
              <div className="w-full bg-zinc-800 rounded-full h-2.5 mt-1">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <p className="text-right text-sm text-zinc-400 mt-1">90%</p>
            </div>

            <div>
              <p className="font-semibold">Backend Development</p>
              <div className="w-full bg-zinc-800 rounded-full h-2.5 mt-1">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-right text-sm text-zinc-400 mt-1">85%</p>
            </div>

            <div>
              <p className="font-semibold">Cloud & DevOps</p>
              <div className="w-full bg-zinc-800 rounded-full h-2.5 mt-1">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-right text-sm text-zinc-400 mt-1">80%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
