import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
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


function NewContactPage() {
    return (
        <main className="pt-12 max-w-md mx-auto p-4">
            <h1 className="text-5xl font-black mb-4">New Contact Page</h1>
            <h2 className="text-3xl font-bold mb-2">Aquí podrás crear un nuevo contacto</h2>
        </main>
    )
}


function App() {

  const [contadorApp, setContadorApp] = useState(0);

  function incrementarContador() {
    setContadorApp(contadorApp + 1);
  }

  const [favoriteContact, setFavoriteContact] = useState("Bruno");

  return (
    <>
      <Header favoriteContact={favoriteContact} />

      <div className="pt-24 w-fit mx-auto">
        <p className='text-xl text-center mb-6'>Contador: {contadorApp}</p>
        <button className='p-4 rounded bg-black text-xl text-white' onClick={incrementarContador}>Contador App: {contadorApp}</button>
      </div>
      
      <Routes>
        <Route path="/" element={<HomePage setFavoriteContact={setFavoriteContact} />} />
        <Route path="/about" element={<AboutPage aumentarContador={incrementarContador} />} />
        <Route path="/new-contact" element={<NewContactPage />} />
        {/* Ruta Dinámica Estricta: */}
        <Route path="/contact/:name/:years?" element={<ContactDetailPage />} />
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
