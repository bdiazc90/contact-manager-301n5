import { useState, useEffect } from "react";

export default function TestPage() {
    const [mensaje, setMensaje] = useState("");
    const [contador, setContador] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    async function iniciar() {
        setIsLoading(true);
        setMensaje("Iniciando aplicación...");

        setTimeout(() => {
            setMensaje("<< Aplicación iniciada! >>");
            setIsLoading(false);
        }, 3000);
    }

    useEffect(() => {
        setTimeout(() => {
            iniciar();
        }, 1000);

    }, []);

    useEffect(() => {
        iniciar();
    }, [contador]);

    return <main className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-3xl">Test Page</h1>
        <button className="border border-amber-800 rounded p-2 text-2xl hover:cursor-pointer hover:bg-amber-600" onClick={iniciar}>Iniciar Aplicación</button>
        {mensaje && isLoading && <p className="mt-6 text-xl text-amber-800 animate-spin">⏳</p>}
        {mensaje && <p className="mt-6 text-xl text-amber-800">{mensaje}</p>}
        <button className="mt-6 border border-blue-800 rounded p-2 text-2xl hover:cursor-pointer hover:bg-blue-600" onClick={() => setContador(contador + 1)}>Incrementar Contador: {contador}</button>
    </main>;
}   