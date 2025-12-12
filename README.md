# Evaluación Práctica 1 - Next.js Edition

### Unidad Curricular: Programación III
**Estudiante:** Yesmir Guzmán  
**Cédula:** 20130682

---

## 🚀 Descripción del Proyecto

Este repositorio contiene la resolución de la **Evaluación Práctica 1**, implementada utilizando **Next.js 15 (App Router)**. Se ha optado por este framework moderno para garantizar una arquitectura robusta, escalable y con un excelente rendimiento (Server-Side Rendering).

## 📋 Ejercicios Resueltos

### Ejercicio 1: Interceptor de Animal Favorito
**Objetivo:** Capturar un dato y mostrarlo en otra vista.
**Implementación:**
1.  **Formulario (Client/Server):** Ubicado en `/ejercicio1`. Utiliza un formulario HTML estilizado.
2.  **Server Action:** La lógica de procesamiento ocurre en el servidor (`action.ts`). La función `submitAnimal` recibe los datos del `FormData`, extrae el nombre y ejecuta una redirección (`redirect`) hacia la página de resultados.
3.  **Resultado:** La página `/ejercicio1/result` lee el parámetro de búsqueda (`searchParams`) y lo renderiza en pantalla. Esto cumple el requisito de "interceptar y recargar" en una nueva vista.

### Ejercicio 2: Registro de Películas (Enums + Estado)
**Objetivo:** Uso de enumeraciones y persistencia temporal.
**Implementación:**
1.  **Modelo de Datos:** Se define una interfaz `Pelicula` y un array en memoria (`src/lib/storage.ts`) que actúa como base de datos temporal del servidor.
2.  **Formulario:** Permite ingresar Título y seleccionar Género y País (usando los `Enums` definidos).
3.  **Server Action:** La función `registrarPelicula` recibe los datos, crea el objeto y lo guarda en el array. Luego utiliza `revalidatePath` para actualizar la vista automáticamente.
4.  **Tabla:** Se renderiza una tabla HTML que lista todas las películas almacenadas en la sesión actual del servidor.

---

## 🛠️ Stack Tecnológico

*   **Framework:** Next.js 15 (App Router)
*   **Lenguaje:** TypeScript
*   **Estilos:** Vanilla CSS (CSS Modules / Global) con diseño **Glassmorphism**.
*   **Despliegue:** Vercel (Configuración Zero-Config).

## 📂 Estructura de Directorios

```
src/
├── app/
│   ├── layout.tsx       # Estructura global (HTML, Body, Footer)
│   ├── globals.css      # Estilos globales y variables CSS
│   ├── page.tsx         # Menú Principal
│   ├── ejercicio1/      
│   │   ├── page.tsx     # Vista Formulario
│   │   ├── action.ts    # Lógica de servidor (Server Action)
│   │   └── result/
│   │       └── page.tsx # Vista Resultado
│   └── ejercicio2/
│       └── page.tsx     # Vista Enums
└── types/
    └── enums.ts         # Definición de Enums
```

## ⚙️ Cómo Ejecutar

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Modo Desarrollo:**
    ```bash
    npm run dev
    ```
    Visita [http://localhost:3000](http://localhost:3000).

3.  **Compilación para Producción:**
    ```bash
    npm run build
    npm start
    ```
