# Evaluación Práctica 1: Resolución de Ejercicios con NestJS

### Unidad Curricular: Programación III
**Estudiante:** Yesmir Guzmán  
**Cédula:** 20130682

---

## 📋 Descripción del Proyecto

Este proyecto corresponde a la **Primera Evaluación Práctica** de la asignatura. El objetivo principal es demostrar la competencia en el desarrollo de aplicaciones backend utilizando **Node.js** y el framework **NestJS**, junto con **TypeScript**.

La evaluación consiste en la resolución de dos ejercicios específicos que abarcan:
*   Manejo de controladores y rutas.
*   Intercepción de datos mediante formularios (POST).
*   Renderizado de vistas dinámicas con **EJS**.
*   Uso de enumeraciones (**Enums**) en TypeScript para estructurar datos.

## 🚀 Ejercicios Resueltos

### Ejercicio 1: Interceptor de Animal Favorito
**Objetivo:** Crear un sistema de dos vistas para capturar y mostrar información.
1.  **Vista de Formulario (GET):** Solicita al usuario el nombre de su animal favorito.
2.  **Vista de Resultado (POST):** Intercepta el dato enviado por el servidor y renderiza una nueva página confirmando la selección.

### Ejercicio 2: Catálogo de Películas (Enums)
**Objetivo:** Utilizar características avanzadas de TypeScript.
1.  Se definen dos **Enumeraciones (Enums)**: `GeneroPelicula` y `PaisPelicula`.
2.  El servidor procesa estas estructuras y las envía a una vista para ser listadas dinámicamente.

---

## 🛠️ Tecnologías Utilizadas

*   **Node.js**: Entorno de ejecución para JavaScript en el servidor.
*   **NestJS**: Framework progresivo para construir aplicaciones eficientes y escalables.
*   **TypeScript**: Superset de JavaScript que añade tipado estático, mejorando la calidad del código.
*   **EJS (Embedded JavaScript)**: Motor de plantillas para generar vistas HTML dinámicas de forma sencilla.
*   **HTML/CSS**: Para la estructura y estilos básicos de las vistas.

---

## 📂 Estructura del Proyecto

El proyecto sigue la arquitectura modular estándar de NestJS:

```
src/
├── app.controller.ts    # Controlador principal (Menú de inicio)
├── app.module.ts        # Módulo raíz que organiza la aplicación
├── main.ts              # Punto de entrada (Configuración de servidor y vistas)
├── ejercicio1/
│   └── ejercicio1.controller.ts  # Lógica del Ejercicio 1
└── ejercicio2/
    ├── ejercicio2.controller.ts  # Lógica del Ejercicio 2
    └── enums.ts                  # Definición de Enums (Géneros y Países)
views/                   # Plantillas EJS (Frontend)
├── index.ejs            # Página de inicio
├── ejercicio1-form.ejs  # Formulario del Ejercicio 1
├── ejercicio1-result.ejs# Resultado del Ejercicio 1
└── ejercicio2.ejs       # Listado del Ejercicio 2
test/                    # Pruebas automatizadas
```

---

## ⚙️ Instalación y Ejecución

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Instalar dependencias:**
    Asegúrate de estar en la carpeta raíz del proyecto y ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar el servidor en modo desarrollo:**
    ```bash
    npm run start:dev
    ```

3.  **Acceder a la aplicación:**
    Abre tu navegador web e ingresa a:
    [http://localhost:3000](http://localhost:3000)

---

## 📝 Notas del Estudiante

El código ha sido documentado detalladamente para explicar el funcionamiento de cada componente, desde la configuración inicial en `main.ts` hasta la lógica de los controladores y la estructura de las vistas. Se ha prestado especial atención a la claridad y legibilidad, cumpliendo con las recomendaciones de la evaluación.

---
**Fecha de Entrega:** Jueves, 11 de diciembre de 2025  
**Ponderación:** 25% (5 Puntos)
