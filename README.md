# Evaluación Práctica 1 - Fastify Edition

### Unidad Curricular: Programación III
**Estudiante:** Yesmir Guzmán  
**Cédula:** 20130682

---

## 🚀 Descripción del Cambio Tecnológico

Originalmente implementado en NestJS, el proyecto ha sido migrado a **Fastify** para demostrar la capacidad de adaptación y el uso de herramientas de alto rendimiento para soluciones backend específicas. Fastify ofrece una arquitectura significativamente más ligera y rápida, ideal para los requerimientos de esta evaluación.

## 📋 Ejercicios Resueltos

### Ejercicio 1: Interceptor de Animal Favorito
**Lógica:**
1.  **Ruta GET `/ejercicio1`:** Renderiza `views/ejercicio1-form.ejs` solicitando el nombre.
2.  **Ruta POST `/ejercicio1`:** El servidor Fastify intercepta la solicitud, extrae el campo `nombreAnimal` del cuerpo (`request.body`) y renderiza `views/ejercicio1-result.ejs` con el dato procesado.

### Ejercicio 2: Enums con TypeScript
**Lógica:**
1.  Se definen las enumeraciones `GeneroPelicula` y `PaisPelicula` en `src/enums.ts`.
2.  **Ruta GET `/ejercicio2`:** Convierte estos Enums en arreglos iterables y los pasa a la vista `views/ejercicio2.ejs` para su visualización dinámica.

---

## 🛠️ Tecnologías

*   **Fastify**: Framework web rápido y de bajo overhead.
*   **TypeScript**: Lenguaje base para tipado estático.
*   **EJS**: Motor de plantillas para las vistas.
*   **Vercel**: Plataforma de despliegue.

## 📂 Nueva Estructura

```
src/
├── server.ts     # Punto de entrada y definición de todas las rutas
└── enums.ts      # Definición de tipos Enum
views/
├── index.ejs
├── ejercicio1-form.ejs
├── ejercicio1-result.ejs
└── ejercicio2.ejs
dist/             # <--- CARPETA GENERADA AUTOMÁTICAMENTE
└── ...           # Contiene el código JavaScript compilado para producción.
```

## 📚 Arquitectura de Directorios

Es importante entender la función de cada carpeta:

*   **`src/` (Source):** Aquí es donde escribimos nuestro código **TypeScript**. Es el código fuente original, legible por humanos.
*   **`views/`:** Contiene las plantillas HTML/EJS. Estas no se compilan, pero son leídas por el servidor para generar las páginas web.
*   **`dist/` (Distribution):** Esta carpeta **NO** se toca manualmente.
    *   **¿Para qué sirve?** El navegador y los servidores como Vercel a veces prefieren ejecutar JavaScript estándar, no TypeScript. La carpeta `dist` contiene la versión "traducida" (compilada) de nuestro código de `src`.
    *   **¿Puedo borrarla?** ¡Sí! Si la borras, simplemente ejecuta `npm run build` y se creará de nuevo con los cambios más recientes. Es una carpeta temporal de salida.

## ⚙️ Ejecución

1.  **Instalar dependencias:** `npm install`
2.  **Modo desarrollo:** `npm run dev` (Usa ts-node)
3.  **Compilar y Ejecutar:** 
    ```bash
    npm run build
    npm start
    ```
