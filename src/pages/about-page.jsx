export default function AboutPage(props) {

    return (
        <main className="pt-12 max-w-md mx-auto p-4">
            <h1 className="text-5xl font-black mb-4">About Page</h1>
            <h2 className="text-3xl font-bold mb-2">Esta es la página de información de la aplicación</h2>
            <button 
                className="p-4 rounded bg-slate-700 text-xl text-white" 
                onClick={props.aumentarContador}>
                    Aumentar Contador del Padre
            </button>
        </main>
    )
}