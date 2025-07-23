import React, { useState } from "react";
import { Link } from "react-router-dom";

const proyectosData = [
  { titulo: "Emmet", descripcion: "Emmet acelera la escritura de HTML y CSS usando abreviaciones." },
  { titulo: "HTML", descripcion: "Lenguaje de marcado utilizado para estructurar contenido web." },
  { titulo: "CSS", descripcion: "Lenguaje de estilos para diseñar sitios web de forma atractiva." },
  { titulo: "JavaScript", descripcion: "Lenguaje de programación usado para interactividad en la web." },
  { titulo: "React", descripcion: "Librería para construir interfaces de usuario modernas." },
  { titulo: "Uso de Hooks", descripcion: "Técnica para manejar estado y ciclo de vida en componentes React." },
  { titulo: "Jakarta y Spring", descripcion: "Frameworks de Java para aplicaciones web robustas." },
  { titulo: "PHP Laravel", descripcion: "Framework PHP moderno para aplicaciones web." },
  { titulo: "Flask con Python", descripcion: "Micro-framework para construir APIs y sitios web rápidos." },
  { titulo: "Sistemas inteligentes con Python", descripcion: "Uso de IA y lógica para resolver problemas complejos." },
  { titulo: "Más sobre desarrollo", descripcion: "Profundización en herramientas y buenas prácticas de desarrollo." },
];

const Proyectos = () => {
  const [expandido, setExpandido] = useState(null);

  const toggleExpand = (index) => {
    setExpandido(expandido === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h1>

      <div className="space-y-6 max-w-2xl mx-auto">
        {proyectosData.map((proyecto, index) => (
          <div
            key={index}
            className="bg-neutral-800 p-4 rounded-xl shadow-md border border-neutral-700 transition"
          >
            <h2
              className="text-xl font-semibold cursor-pointer hover:text-green-400"
              onClick={() => toggleExpand(index)}
            >
              {proyecto.titulo}
            </h2>
            {expandido === index && (
              <p className="mt-2 text-gray-300">{proyecto.descripcion}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/" className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default Proyectos;
