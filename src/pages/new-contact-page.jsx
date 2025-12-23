import { useState, useEffect, use } from "react";
import { validateField } from "../lib/utils";

export default function NewContactPage() {

    const [inputs, setInputs] = useState({
        fullname: "",
        phonenumber: "",
        email: "",
        type: ""
    });

    const [errors, setErrors] = useState({
        fullname: "",
        phonenumber: "",
        email: "",
        type: ""
    });

    const [touchedInputs, setTouchedInputs] = useState({
        fullname: false,
        phonenumber: false,
        email: false,
        type: false
    });

    function handleInput(event) {
        const { name, value } = event.target;
        console.log(`Input cambiado: ${name} = ${value}`);
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    function handleBlur(event) {
        const { name } = event.target;
        console.log(`Input perdido foco: ${name}`);
        setTouchedInputs({
            ...touchedInputs,
            [name]: true
        });
    }

    useEffect(() => {
        const newErrors = {};
        for (const fieldName in inputs) {
            if (touchedInputs[fieldName]) {
                const errorMessage = validateField(fieldName, inputs[fieldName]);
                newErrors[fieldName] = errorMessage;
            }
        }
        // setErrors({...errors, ...newErrors});
        setErrors(newErrors);
    }, [inputs, touchedInputs]);



    return (
        <main className="pt-20 px-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Nuevo Contacto</h1>
            <p className="text-slate-600">Llena todos los campos obligatorios <span className="text-red-700">*</span></p>
            <section>
                <form className="flex flex-col w-full gap-4 mt-8">
                    <div className="flex flex-col gap-2">
                        <input type="text" name="fullname" className="h-12 bg-white border border-slate-200 rounded text-xl font-bold placeholder:text-slate-400 placeholder:ps-2 placeholder:text-lg" placeholder="Nombre Completo"
                        onChange={handleInput} onBlur={handleBlur} />
                        {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <input type="text" name="phonenumber" className="h-12 bg-white border border-slate-200 rounded text-lg placeholder:text-slate-400 placeholder:ps-2 placeholder:text-lg" placeholder="Teléfono" 
                            onChange={handleInput} onBlur={handleBlur} />
                        {errors.phonenumber && <p className="text-red-500 text-sm">{errors.phonenumber}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <input type="email" name="email" className="h-12 bg-white border border-slate-200 rounded text-lg placeholder:text-slate-400 placeholder:ps-2 placeholder:text-lg" placeholder="Email" 
                            onChange={handleInput} onBlur={handleBlur} />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <input type="text" name="type" className="h-12 bg-white border border-slate-200 rounded text-lg placeholder:text-slate-400 placeholder:ps-2 placeholder:text-lg" placeholder="Tipo de Contacto (Personal, Trabajo, etc.)" 
                            onChange={handleInput} onBlur={handleBlur} />
                        {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
                    </div>

                    <button type="submit" className="bg-teal-400 p-2 rounded text-white">Crear Contacto</button>
                </form>
            </section>
        </main>
    )
}