import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchContactById, updateContact } from "../services/contactService";

export default function ContactDetailPage() {
    const { id } = useParams();
    const [contact, setContact] = useState(null);

    const [isEditing, setIsEditing] = useState(false);

    function toggleEdit() {
        setIsEditing(!isEditing);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Guardando cambios...");
        const { fullname, phonenumber, email, type } = event.target;
        const contactData = {
            fullname: fullname.value,
            phonenumber: phonenumber.value,
            email: email.value,
            type: type.value,
        };
        await updateContact(id, contactData);
        setContact(contactData);
        setIsEditing(false);
    }

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
                {isEditing ? (
                    <div className="text-slate-800">
                        <p className="text-red-200">Editando...</p>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-4">
                                <input type="text" name="fullname" defaultValue={contact.fullname} className="h-12 bg-white border border-slate-200 rounded text-xl font-bold placeholder:text-slate-400 placeholder:ps-2 placeholder:text-lg" placeholder="Nombre Completo" />
                                <input type="text" name="phonenumber" defaultValue={contact.phonenumber} className="h-12 bg-white border border-slate-200 rounded text-lg placeholder:text-slate-400 placeholder:ps-2 placeholder:text-lg" placeholder="Teléfono" />
                                <input type="email" name="email" defaultValue={contact.email} className="h-12 bg-white border border-slate-200 rounded text-lg placeholder:text-slate-400 placeholder:ps-2 placeholder:text-lg" placeholder="Email" />
                                <input type="text" name="type" defaultValue={contact.type} className="h-12 bg-white border border-slate-200 rounded text-lg placeholder:text-slate-400 placeholder:ps-2 placeholder:text-lg" placeholder="Tipo" />
                                <button type="submit" className="bg-teal-400 p-2 rounded text-white">Guardar</button>
                            </div>
                        </form>
                    </div>
                ) : <>
                    <p className="text-slate-800"><span className="font-medium">Nombre:</span> {contact.fullname}</p>
                    <p className="text-slate-800"><span className="font-medium">Teléfono:</span> {contact.phonenumber}</p>
                    <p className="text-slate-800"><span className="font-medium">Email:</span> {contact.email}</p>
                    <p className="text-slate-800"><span className="font-medium">Tipo:</span> {contact.type}</p>
                </>}

                <div className="grid">
                    <button className="rounded px-4 py-2 bg-teal-200 hover:cursor-pointer" onClick={toggleEdit}>{isEditing ? "Cancelar" : "Editar"}</button>
                </div>
            </div>

        </main>
    )
}