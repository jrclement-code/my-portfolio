// src/assets/Bibliografia.jsx
const Bibliografia = () => {
    const fuentes = [
    {
      titulo: "Documentación oficial de React",
      url: "https://react.dev/",
    },
    {
      titulo: "MDN Web Docs - HTML",
      url: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {
      titulo: "CSS Tricks",
      url: "https://css-tricks.com/",
    },
    {
      titulo: "JavaScript.info",
      url: "https://javascript.info/",
    },
    {
      titulo: "Documentación de Laravel",
      url: "https://laravel.com/docs",
    },
    {
      titulo: "Flask - Python Microframework",
      url: "https://flask.palletsprojects.com/",
    },
    {
      titulo: "Spring Framework",
      url: "https://spring.io/projects/spring-framework",
    },
    {
      titulo: "Scikit-learn (Machine Learning en Python)",
      url: "https://scikit-learn.org/",
    },
    {
      titulo: "Curso de Harvard: Machine Learning and AI with Python",
      url: "https://pll-harvard-edu.translate.goog/course/machine-learning-and-ai-python?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wa",
    },
    {
      titulo: "FreeCodeCamp – Plataforma gratuita para aprender a programar",
      url: "https://www.freecodecamp.org",
    },
    {
      titulo: "EDteam – Cursos profesionales de programación y tecnología",
      url: "https://ed.team",
    },
    {
      titulo: "¿Qué es Spring Framework? - Tokio School",
      url: "https://www.tokioschool.com/noticias/que-es-spring-framework/",
    },
    {
      titulo: "Aprender Laravel – Código Perú",
      url: "https://codigo.edu.pe/blog/aprender-laravel-un-roadmap-hacia-el-exito-en-el-desarrollo-web/#:~:text=Beneficios%20de%20aprender%20Laravel,amplia%20gama%20de%20características%20incorporadas.",
    },
    {
      titulo: "Eniun – Recursos sobre desarrollo y tecnología",
      url: "https://www.eniun.com/",
    },
    {
      titulo: "W3Schools – Tutoriales web para principiantes",
      url: "https://www.w3schools.com/",
    },
  ];


  return (
    <section className="min-h-screen py-20 px-4 bg-black text-white" id="bibliografia">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">📚 Bibliografía</h2>
        <ul className="space-y-4">
          {fuentes.map((fuente, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition">
              <a
                href={fuente.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {fuente.titulo}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Bibliografia;
