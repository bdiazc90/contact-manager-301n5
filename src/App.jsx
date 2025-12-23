import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import NewContactPage from './pages/new-contact-page';
import TestPage from './pages/test-page';
import AboutPage from './pages/about-page';
import Header from './components/header';
import ContactDetailPage from './pages/contact-detail-page';
import NotFoundPage from './pages/not-found-page';

import { useState } from 'react';

// Cómo escribir un componente React:
// 1. es una funcion constructora -> nombre de función con primera letra en mayúscula SIEMPRE.
// 2. SIEMPRE tiene que retornar JSX. -> DEBE existir `return`
// 3. el JSX SIEMPRE debe retonar 1 solo elemento JSX. -> por eso existen los fragmentos <></>
// 4. JSX es casi idéntico a HTML, Diferencias:
//    - Atributos de valor string -> Propiedades de un objeto JS.
//    - Atributos se pasan en camelCase (onclick="" / onClick="") (onmouseover / onMouseOver)
//    - Atributo class (indicar clasificación) en JSX es className !IMPORTANTE


function App() {

  const [contadorApp, setContadorApp] = useState(0);

  function incrementarContador() {
    setContadorApp(contadorApp + 1);
  }

  const [favoriteContact, setFavoriteContact] = useState("Bruno");

  return (
    <div className='bg-linear-to-br from-cyan-100 via-teal-200 to-90% to-amber-400 min-h-screen'>
      <Header favoriteContact={favoriteContact} />

      <div className="pt-20 px-6 max-w-2xl mx-auto mb-6">
        <p className="text-sm text-slate-500 text-center mb-2">Contador: {contadorApp}</p>
        <button
          className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          onClick={incrementarContador}
        >
          Contador App: {contadorApp}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<HomePage setFavoriteContact={setFavoriteContact} />} />
        <Route path="/about" element={<AboutPage aumentarContador={incrementarContador} />} />
        <Route path="/new-contact" element={<NewContactPage />} />
        {/* Ruta Dinámica /test recibe get y post: */}
        <Route path="/test" element={<TestPage />} />
        {/* Ruta Dinámica Estricta: */}
        <Route path="/contact/:id" element={<ContactDetailPage />} />
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
