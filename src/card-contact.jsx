// Funciones reciben "parámetros".
// A las funciones les envías "argumentos".

// React, para NO tocar esa regla, le ha puesto un nombre propio:
// En React, los "COMPONENTES" (funciones) reciben "props".

export default function Card(props) {
    // Lógica (DENTRO DEL COMPONENTE)
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
        <div style={{border: "3px solid white", borderRadius: 10, padding: 10}} onClick={() => props.clickBehavior && props.clickBehavior(props.name)} >
            <h3>Contacto: {props.name}</h3>
            {!menorEdad && (<h3>Apellido: {props.lastName}</h3>)}
            {props.edad && (<h3>Edad: {props.edad}</h3>)}
        </div>
    )
}