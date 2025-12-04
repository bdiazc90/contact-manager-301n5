import { useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="flex justify-between items-center border border-black/30 bg-white/40 rounded-2xl p-6 mt-5">
            <div>
                <h3>Contacto: {props.name}</h3>
                {!menorEdad && (<h3>Apellido: {props.lastName}</h3>)}
                {props.edad && (<h3>Edad: {props.edad}</h3>)}
            </div>
            <div>
                <button className="p-2 border rounded cursor-pointer hover:bg-teal-300" onClick={() => props.clickBehavior && props.clickBehavior(props.name)}>Click Behavior</button>
                <button className="p-2 border rounded cursor-pointer hover:bg-cyan-300" onClick={aumentarContador}>Contador: {contador}</button>
                <button className="p-2 border rounded cursor-pointer hover:bg-pink-300" onClick={() => props.setFavoriteContact(props.name)}>Favorite Contact</button>
                <Link to={`/contact/${props.name}/${props.edad ?? ''}`} className="p-2 border rounded cursor-pointer hover:bg-amber-300">Detalle</Link>
            </div>
        </div>
    )
}