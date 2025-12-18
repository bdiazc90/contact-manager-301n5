import { useState, useEffect } from "react";
import { fetchContacts } from "../services/contactService";

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
        <main className="pt-20 px-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Contact Manager</h1>
            <p className="text-slate-600 mb-6">Aplicación para gestionar contactos</p>

            {loading && <p className="text-slate-500">Cargando contactos...</p>}

            <div className="space-y-4">
                {contacts && contacts.length > 0 && contacts.map((contact, index) => (
                    <Card
                        key={index}
                        fullname={contact.fullname}
                        phonenumber={contact.phonenumber}
                        id={contact.id}
                    />
                ))}
            </div>
        </main>
    );
}