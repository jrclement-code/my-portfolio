import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'


import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Hero from "./assets/Hero";
import About from "./assets/About";
import Skills from "./assets/Skills";
import Contact from "./assets/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* Espacio superior para el header fijo */}
        <section id="hero">
          <Hero />
        </section>
        <section id="sobre-mi">
          <About />
        </section>
        <section id="proyectos">
          <Skills />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
