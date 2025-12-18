export default function AboutPage(props) {

    return (
        <main className="pt-20 px-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">About</h1>
            <p className="text-slate-600 mb-6">Esta es la página de información de la aplicación</p>
            <button
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                onClick={props.aumentarContador}>
                    Aumentar Contador del Padre
            </button>
        </main>
    )
}