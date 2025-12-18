import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchContactById } from "../services/contactService";

export default function ContactDetailPage() {
    const { id } = useParams();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function loadContact() {
            const data = await fetchContactById(id);
            console.log(data);
            setContact(data);
        }
        loadContact();
    }, [id]);

    if (!contact) {
        return (
            <main className="pt-20 px-6 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-800 mb-4">Detalle del Contacto</h1>
                <p className="text-slate-500">Cargando detalles del contacto...</p>
            </main>
        );
    }

    return (
        <main className="pt-20 px-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Detalle del Contacto</h1>
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 space-y-2">
                <p className="text-slate-800"><span className="font-medium">Nombre:</span> {contact.fullname}</p>
                <p className="text-slate-800"><span className="font-medium">Teléfono:</span> {contact.phonenumber}</p>
                <p className="text-slate-800"><span className="font-medium">Email:</span> {contact.email}</p>
                <p className="text-slate-800"><span className="font-medium">Tipo:</span> {contact.type}</p>
            </div>
        </main>
    )
}