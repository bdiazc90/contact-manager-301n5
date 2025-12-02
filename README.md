# Contact Manager

Aplicación educativa para gestionar contactos en la web. Proyecto desarrollado durante el curso; sirve como laboratorio para aprender React + Vite y buenas prácticas básicas (estado, props, composición de componentes).

## Stack
- Node
- Vite
- React

## Instalación (rápida)
- Instalar dependencias con `npm install`.
- Ejecutar entorno de desarrollo con `npm run dev`.

## Uso / Desarrollo
- Abrir el proyecto en tu editor y editar los componentes en `src/`.
- Archivo principal: `src/App.jsx`. Componentes auxiliares: `src/card-contact.jsx`, `src/main.jsx`.
- Para construir: `npm run build`. Para previsualizar el build: `npm run preview`.

## Estructura del proyecto (resumen)
- `index.html` — documento HTML de entrada.
- `src/main.jsx` — punto de montaje de React.
- `src/App.jsx` — componente principal de la aplicación.
- `src/card-contact.jsx` — componente para la tarjeta de cada contacto.
- `src/` — aquí también están `App.css`, `index.css` y `assets/`.
- `vite.config.js` — configuración de Vite.

## Funcionalidades implementadas (estado actual)
- Renderizado de una lista de contactos definida en el código.
- Tarjeta de contacto con contador interno (cada tarjeta usa `useState` para un contador local).
- Estilos básicos y layout aplicados vía CSS.

## Estado actual — Resumen objetivo
- La app está en estado de prototipo/ejercicio: UI y componentes base creados, lógica de interacción básica presente en métodos y botones, pero faltan mejoras clave (persistencia, estado compartido para la lista, eliminación/edición real, tests).

## CHANGELOG (por número de clase)
### Clase 03
- [LEARN] Uso de `useState` para estados locales (contador en `card-contact`).
- [LEARN] Uso del spread operator para clonar/propagar objetos y props.
- [TASK] Planeado: migrar la lista de contactos a estado en `App.jsx` para permitir agregar/eliminar (pendiente).
- [TASK] Planeado: implementar eliminación con `filter` y usar IDs únicos por contacto (pendiente).

### Clase 02
- [SETUP] Inicialización del proyecto con Vite + React.
- [STRUCTURE] Creación de componentes base (`App.jsx`, `card-contact.jsx`) y configuración de estilos.

### Clase 01
- [BOOT] Configuración inicial del repositorio y dependencias básicas.

## TODO / Roadmap (priorizado)
1. **Mover lista de contactos a estado** en `App.jsx` usando `useState` y `setPersonas(prev => [...prev, nuevo])`.
2. **Implementar agregar/eliminar**: formulario para añadir y `filter` por `id` para eliminar.
3. **Asignar IDs únicos** a cada contacto (ej. `crypto.randomUUID()` o `Date.now()`).
4. **Persistencia opcional**: guardar/restaurar contactos desde `localStorage` o backend.
5. **Calidad**: limpiar comentarios de aula, añadir validaciones mínimas y tests (Jest + React Testing Library).

## Cómo contribuir
- Crea una rama por feature: `feature/<breve-descripción>`.
- Abre un PR hacia `main` con descripción y referencia a la clase correspondiente.
- Añade pruebas básicas si introduces lógica no trivial.

## Licencia
- No se ha definido una licencia en el repositorio. Añade un archivo `LICENSE` si quieres publicar el código con una licencia clara.

---

Si quieres, puedo ajustar el tono (más técnico o más didáctico), añadir ejemplos puntuales de implementación (por ejemplo, cómo migrar la lista a `useState`) o generar el diff para aplicar otras mejoras. Dime qué prefieres revisar primero.

