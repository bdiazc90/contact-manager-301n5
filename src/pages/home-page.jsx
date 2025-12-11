import { useState, useEffect } from "react";
import { fetchContacts } from "../services/contacts";

import Card from "../card-contact";

export default function HomePage() {

    const [loading, setLoading] = useState(false); // Estado para indicar si la carga está en progreso
    const [contacts, setContacts] = useState([]); // Estado para almacenar los contactos obtenidos de la API

    useEffect(() => {
        // Inicio lógica useEffect:
        setLoading(true); // Indica que la carga ha comenzado
        async function loadContacts() {
            const data = await fetchContacts(); // Llama a la función para obtener los contactos
            setContacts(data); // Actualiza el estado con los contactos obtenidos
            setLoading(false); // Indica que la carga ha finalizado
        }
        loadContacts();
        // Fin lógica useEffect
    }, []);

    return (
        <main className="pt-12 max-w-md mx-auto p-4">
            <h1 className="text-5xl font-black mb-4">Contact Manager</h1>
            <h2 className="text-3xl font-bold mb-2">Aplicación para gestionar contactos</h2>

            {loading && <p className="text-xl text-white">Cargando contactos...</p>}

            {/* Renderizar múltiples Card con map */}
            {/* Cuando utilizas map para renderizar múltiples elementos, es OBLIGATORIO asignar una key a cada componente */}
            {/* --> Para esto, se utiliza el índice del array como key */}
            {contacts && contacts.length > 0 && contacts.map((contact, index) => (
                <Card
                    key={index}
                    name={contact.fullname}
                />
            ))}
        </main>
    );
}