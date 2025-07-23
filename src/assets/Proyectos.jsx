import React, { useState } from "react";
import { Link } from "react-router-dom";

const proyectosData = [
  {
    titulo: "Emmet",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> Emmet acelera la escritura de HTML y CSS usando abreviaciones. Se aprendió explorando el plugin de Emmet en editores como VSCode y aplicando sus atajos.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/emmet.png`} alt="Ejemplo Emmet" className="mx-auto" />
        <p><strong>Reflexión:</strong> Facilitó el desarrollo rápido de código. Se aprendió practicando e identificando patrones frecuentes en estructuras HTML.</p>
      </>
    ),
  },
  {
    titulo: "HTML",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> HTML permite estructurar contenido web. Se aprendió a través de cursos introductorios y prácticas creando páginas desde cero.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/html.png`} alt="Ejemplo HTML" className="mx-auto" />
        <p><strong>Reflexión:</strong> Ayudó a entender cómo se construyen las páginas. Practicar fue clave para familiarizarse con etiquetas semánticas.</p>
      </>
    ),
  },
  {
    titulo: "CSS",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> CSS define el estilo visual de un sitio. Se aprendió aplicando propiedades como <code>flexbox</code>, <code>grid</code> y animaciones en pequeños proyectos.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/css.png`} alt="Ejemplo CSS" className="mx-auto" />
        <p><strong>Reflexión:</strong> Comprender la separación entre estructura (HTML) y estilo (CSS) fue importante. Se aprendió diseñando interfaces básicas.</p>
      </>
    ),
  },
  {
    titulo: "JavaScript",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> JavaScript añade interactividad. Se aprendió resolviendo ejercicios lógicos, manipulando el DOM y haciendo páginas dinámicas.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/javascript.png`} alt="Ejemplo JavaScript" className="mx-auto" />
        <p><strong>Reflexión:</strong> Aprender JS abrió la puerta a funciones avanzadas. La práctica constante ayudó a dominar conceptos como variables, funciones y eventos.</p>
      </>
    ),
  },
  {
    titulo: "React",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> React permite crear interfaces modernas usando componentes y JSX. Se aprendió creando apps con <code>create-react-app</code> y luego Vite.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/react.png`} alt="Ejemplo React" className="mx-auto" />
        <p><strong>Reflexión:</strong> JSX facilitó escribir componentes reutilizables. Se entendió mejor al construir interfaces con estados y props.</p>
      </>
    ),
  },
  {
    titulo: "Uso de Hooks",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> Los Hooks en React permiten manejar estado y ciclos de vida. Se aprendió usando <code>useState</code>, <code>useEffect</code> en componentes funcionales.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/hooks.png`} alt="Ejemplo Hooks" className="mx-auto" />
        <p><strong>Reflexión:</strong> Los hooks simplificaron el control del estado. Se aprendió a través de pruebas y refactorización de componentes existentes.</p>
      </>
    ),
  },
  {
    titulo: "Spring",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> Spring es un framework Java para aplicaciones web. Se aprendió integrando controladores, servicios y repositorios en proyectos Java.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/spring.png`} alt="Ejemplo Spring" className="mx-auto" />
        <p><strong>Reflexión:</strong> Ayudó a comprender arquitectura MVC y APIs REST. Se aprendió montando un backend simple y controlar la salida con postman.</p>
      </>
    ),
  },
  {
    titulo: "Laravel",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> Laravel es un framework PHP para desarrollo ágil. Se aprendió explorando rutas, controladores, migraciones y blade templates.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/laravel.png`} alt="Ejemplo Laravel" className="mx-auto" />
        <p><strong>Reflexión:</strong> Facilitó el trabajo con bases de datos y autenticación. Se entendió mejor practicando CRUD.</p>
      </>
    ),
  },
  {
    titulo: "Flask con Python",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> Flask es un micro-framework web para Python. Se aprendió construyendo APIs REST simples y conectándolas con bases de datos.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/flask.png`} alt="Ejemplo Flask" className="mx-auto" />
        <p><strong>Reflexión:</strong> Se vio su potencia para proyectos pequeños y escalables. Aprenderlo fue sencillo gracias a su simplicidad y buena documentación.</p>
      </>
    ),
  },
  {
    titulo: "Sistemas inteligentes con Python",
    descripcion: (
      <>
        <p><strong>Definición y procedimiento:</strong> Se utilizan técnicas de IA con Python para análisis de datos y predicciones. Se aprendió implementando algoritmos con librerías como <code>scikit-learn</code>.</p>
        <p><strong>Ejercicio de laboratorio 🧪 Resultado:</strong></p>
        <img src={`${import.meta.env.BASE_URL}images/ia.png`} alt="Ejemplo IA" className="mx-auto" />
        <p><strong>Reflexión:</strong> Permite resolver problemas complejos con inteligencia artificial. Se aprendió utilizando el modelo Llama de Meta.</p>
      </>
    ),
  },
  { titulo: "Reflexiones Finales",
    descripcion: (
      <>
        <p>Estos proyectos abarcan desde el frontend con HTML, CSS y JavaScript, hasta el backend con Spring, Laravel y Flask. Cada uno aportó habilidades clave para el desarrollo web moderno.</p>
        <p>La experiencia adquirida en cada tecnología refuerza la importancia de la práctica constante y la exploración de nuevas herramientas.</p></>),
  }
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
              <pre className="mt-2 text-gray-300 whitespace-pre-wrap">{proyecto.descripcion}</pre>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default Proyectos;
