const API_URL = import.meta.env.VITE_API_URL;

// Verificación de configuración
if (!API_URL) {
  console.error('⚠️ VITE_API_URL no está configurada en .env');
}

export async function fetchContacts() {
    try {
        const response = await fetch(`${API_URL}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return error;
    }
}