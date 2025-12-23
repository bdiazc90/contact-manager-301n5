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
        const response = await fetch(`${API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating contact:", error);
        throw error;
    }
}

export async function updateContact(id, data) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error updating contact:", error);
        throw error;
    }
}