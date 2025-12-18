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

export async function fetchContactById(id) {
    console.log(id, typeof id);
    try {
        const response = await fetch(`${API_URL}/${id}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return error;
    }
}

export async function createContact(data) {
    try {
        return await fetch(`${API_URL}`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.error("Error creating contact:", error);
        return error;
    }
}