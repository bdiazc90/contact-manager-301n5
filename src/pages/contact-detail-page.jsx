import { useParams } from "react-router-dom";

export default function ContactDetailPage() {
    const params = useParams();

    return (
        <main className="pt-12 max-w-md mx-auto p-4">
            <h1 className="text-5xl font-black mb-4">Contact Detail Page</h1>
            <h2 className="text-3xl font-bold mb-2">Nombre: {params.name}</h2>
            {params.years && params.years !== 'null' && (<h2 className="text-3xl font-bold mb-2">Edad: {params.years}</h2>)}
            
        </main>
    )
}