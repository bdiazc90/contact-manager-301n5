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

  const personas = [
    {
      name: "Bruno",
      lastName: "Diaz",
      edad: 35,
      behavior: null,
    },
    {
      name: "Diego",
      lastName: null,
      edad: null,
      behavior: clickConsole,
    },
    {
      name: "Renato",
      lastName: "Perez",
      edad: 15,
      behavior: null,
    },
    {
      name: "Santiago",
      lastName: null,
      edad: null,
      behavior: null,
    },
    {
      name: "Fernando",
      lastName: null,
      edad: null,
      behavior: clickConsole,
    },
    {
      name: "Isabel",
      lastName: null,
      edad: null,
      behavior: clickConsole,
    },
  ]

  function agregarPersona() {
    personas.push({
      name: "Nuevo",
      lastName: "Contacto",
      edad: 20,
      behavior: clickConsole,
    })

    console.log(personas);
  }

  return (
    <>
      <h1>Contact Manager</h1>
      <h2>Aplicación para gestionar contactos</h2>

      <button onClick={agregarPersona}>Agregar Persona</button>

      {/* Renderizar múltiples Card con map */}
      {/* Cuando utilizas map para renderizar múltiples elementos, es OBLIGATORIO asignar una key a cada componente */}
      {/* --> Para esto, se utiliza el índice del array como key */}
      {personas.map((persona, index) => (
        <Card 
          key={index}
          name={persona.name}
          lastName={persona.lastName}
          edad={persona.edad}
          clickBehavior={persona.behavior}
        />
      ))}

    </>
  )
}

export default App
