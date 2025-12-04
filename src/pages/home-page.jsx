import Card from "../card-contact";

export default function HomePage(props) {
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
        <main className="pt-12 max-w-md mx-auto p-4">
            <h1 className="text-5xl font-black mb-4">Contact Manager</h1>
            <h2 className="text-3xl font-bold mb-2">Aplicación para gestionar contactos</h2>

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
                    setFavoriteContact={props.setFavoriteContact}
                />
            ))}

        </main>
    );
}