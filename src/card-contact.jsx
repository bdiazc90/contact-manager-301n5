import { useState } from "react";

// Funciones reciben "parámetros".
// A las funciones les envías "argumentos".

// React, para NO tocar esa regla, le ha puesto un nombre propio:
// En React, los "COMPONENTES" (funciones) reciben "props".

export default function Card(props) {
    // Los estados se DEFINEN DENTRO DEL COMPONENTE. Suelen ser las primeras líneas:
    const [contador, setContador] = useState(0);
    
    
    // Lógica (DENTRO DEL COMPONENTE)

    function aumentarContador() {
        // contador += 1; // ESTO NUNCA SE DEBE HACER CUANDO USAS ESTADOS.
        setContador(contador + 1);
    }

    // condiciones
    // Lógica de Negocio:
    // Si el contacto es MENOR de edad, NO DEBE APARECER SU APELLIDO.
    // Si NO hay edad, asume que es menor.
    let menorEdad = true;
    if (props.edad) {
        if (props.edad >= 18) {
            menorEdad = false;
        }
    }

    // Reconocer si vino la funcion clickBehavior:

    // Después de la lógica, recién construyes el JSX:
    return (
        <div style={{ display: 'flex', gap: 10, justifyContent: "space-between", alignItems: "center", border: "3px solid white", borderRadius: 10, padding: 10, marginTop: 20}}>
            <div>
                <h3>Contacto: {props.name}</h3>
                {!menorEdad && (<h3>Apellido: {props.lastName}</h3>)}
                {props.edad && (<h3>Edad: {props.edad}</h3>)}
            </div>
            <div>
                <button onClick={() => props.clickBehavior && props.clickBehavior(props.name)}>Click Behavior</button>
                <button onClick={aumentarContador}>Contador: {contador}</button>
            </div>
        </div>
    )
}