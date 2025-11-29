import './App.css' // importar un modulo es estilos.
import Card from "./card-contact";

// Cómo escribir un componente React:
// 1. es una funcion constructora -> nombre de función con primera letra en mayúscula SIEMPRE.
// 2. SIEMPRE tiene que retornar JSX. -> DEBE existir `return`
// 3. el JSX SIEMPRE debe retonar 1 solo elemento JSX. -> por eso existen los fragmentos <></>
// 4. JSX es casi idéntico a HTML, Diferencias:
//    - Atributos de valor string -> Propiedades de un objeto JS.
//    - Atributos se pasan en camelCase (onclick="" / onClick="") (onmouseover / onMouseOver)
//    - Atributo class (indicar clasificación) en JSX es className !IMPORTANTE


function App() {

  function clickConsole(mensaje) {
    console.log("soy clickConsole, este es mi mensaje: ", mensaje);
  }

  return (
    <>
      <h1>Contact Manager</h1>
      <h2>Aplicación para gestionar contactos</h2>
      <Card name="Bruno" lastName="Diaz" edad={35} />
      <Card name="Diego" clickBehavior={clickConsole} />
      <Card name="Renato" lastName="Perez" edad={15} />
      <Card name="Santiago" />
      <Card name="Fernando" clickBehavior={clickConsole} />
    </>
  )
}

export default App
