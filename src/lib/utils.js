const ALLOWED_TYPES = ['trabajo', 'familia', 'social'];

export function validateField(name, value) {
    switch (name) {
        case 'fullname':
            if (!value.trim()) return 'El nombre completo es requerido';
            if (value.length < 2) return 'Mínimo 2 caracteres';
            return '';
        case 'email':
            if (!value.trim()) return 'El email es requerido';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email inválido';
            return '';
        case 'phonenumber':
            if (value && !/^\d{9,}$/.test(value.replace(/\D/g, ''))) {
                return 'Teléfono debe tener al menos 9 dígitos';
            }
            return '';
        case 'type':
            if (!value.trim()) return 'El tipo de contacto es requerido';
            if (!ALLOWED_TYPES.some((type) => type === value.toLowerCase())) return 'Tipo de contacto inválido, permitidos: ' + ALLOWED_TYPES.join(',');
            return '';
        default:
            return '';
    }
}