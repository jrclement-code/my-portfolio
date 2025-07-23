import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Proyectos from './assets/Proyectos.jsx' // Asegúrate de que esta ruta sea correcta

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/my-portfolio"> {/* Importante para GitHub Pages */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
