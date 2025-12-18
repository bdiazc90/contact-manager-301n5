import { Link } from "react-router-dom";

// Funciones reciben "parámetros".
// A las funciones les envías "argumentos".

// React, para NO tocar esa regla, le ha puesto un nombre propio:
// En React, los "COMPONENTES" (funciones) reciben "props".

export default function Card(props) {
    

    // Después de la lógica, recién construyes el JSX:
    return (
        <div className="flex justify-between items-center bg-white border border-slate-200 rounded-lg shadow-sm p-4 mt-4">
            <div className="space-y-1">
                <h3 className="text-base font-medium text-slate-800">Contacto: {props.fullname}</h3>
                <h3 className="text-base font-medium text-slate-800">Numero: {props.phonenumber}</h3>
            </div>
            <div className="flex gap-2">
                <Link to={`/contact/${props.id}`} className="px-3 py-1.5 text-sm text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors">Detalle</Link>
            </div>
        </div>
    )
}