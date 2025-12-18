import { useState } from "react";

import { createContact } from "../services/contactService.js";

export default function TestPage() {

    // Formulario controlado:
    async function handleSubmit(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario
        console.log("Formulario controlado NO hizo un request");
        const { fullname, phonenumber, email, type } = event.target;
        const formData = {
            fullname: fullname.value,
            phonenumber: phonenumber.value,
            email: email.value,
            type: type.value
        };
        console.log("Datos del formulario:", formData);
        console.log("Enviando datos al backend...");
        await createContact(formData);
        console.log("Datos enviados correctamente.");
    }

    // Formulario SUPER controlado:
    const [inputs, setInputs] = useState({
        fullname: "",
        phonenumber: "",
        email: "",
        type: ""
    });

    function handleInput(event) {
        const { name, value } = event.target;
        console.log(`Input cambiado: ${name} = ${value}`);
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    async function handleSubmitNoForm() {
        console.log("Formulario SUPER controlado NO hizo un request");
        console.log("Datos del formulario:", inputs);
        console.log("Enviando datos al backend...");
        await createContact(inputs);
        console.log("Datos enviados correctamente.");
    }


    return (
        <main className="py-20 px-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">Test Page</h1>
            <article className="space-y-10">
                <section>
                    <h2 className="text-xl text-slate-700">Formulario natural</h2>
                    <form action="https://www.guvery.com" method="post">
                        <div className="flex flex-col space-y-4">
                            <input type="text" name="nombre" id="nombre" className="h-12 bg-white rounded text-xl font-bold" />
                            <input type="text" name="apellido" id="apellido" className="h-12 bg-white rounded text-xl font-bold" />
                            <button type="submit" className="bg-teal-400 p-2 rounded">Enviar</button>
                        </div>
                    </form>


                </section>
                <hr />
                <section>
                    <h2 className="text-xl text-slate-700">Formulario Controlado</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-4">

                            <input type="text" name="fullname" id="fullname" className="h-12 bg-white rounded text-xl font-bold" />
                            <input type="text" name="phonenumber" id="phonenumber" className="h-12 bg-white rounded text-xl font-bold" />
                            <input type="email" name="email" id="email" className="h-12 bg-white rounded text-xl font-bold" />
                            <input type="text" name="type" id="type" className="h-12 bg-white rounded text-xl font-bold" />

                            <button type="submit" className="bg-teal-400 p-2 rounded">Enviar</button>
                        </div>
                    </form>
                </section>
                <hr />
                <section>
                    <h2 className="text-xl text-slate-700">Formulario SUPER Controlado</h2>
                    
                        <div className="flex flex-col space-y-4">

                            <input onChange={handleInput} type="text" name="fullname" id="fullname" className="h-12 bg-white rounded text-xl font-bold" />
                            <input onChange={handleInput} type="text" name="phonenumber" id="phonenumber" className="h-12 bg-white rounded text-xl font-bold" />
                            <input onChange={handleInput} type="email" name="email" id="email" className="h-12 bg-white rounded text-xl font-bold" />
                            <input onChange={handleInput} type="text" name="type" id="type" className="h-12 bg-white rounded text-xl font-bold" />

                            <button type="submit" className="bg-teal-400 p-2 rounded" onClick={handleSubmitNoForm}>Enviar</button>
                        </div>
                    
                </section>
            </article>
        </main>
    );
}