import Fastify from 'fastify';
import fastifyView from '@fastify/view';
import fastifyFormbody from '@fastify/formbody'; // Necesario para parsear formularios POST
import ejs from 'ejs';
import path from 'path';
import { GeneroPelicula, PaisPelicula } from './enums';

/**
 * Servidor Principal con Fastify.
 * Estudiante: Yesmir Guzmán - Cédula: 20130682
 * 
 * Se ha optado por Fastify por su eficiencia y bajo overhead.
 */

const server = Fastify({ logger: true });

// Registramos el plugin para renderizar vistas con EJS.
// Apuntamos a la carpeta 'views' que está en la raíz del proyecto.
server.register(fastifyView, {
    engine: {
        ejs: ejs,
    },
    root: path.join(__dirname, '..', 'views'), // Ajustamos la ruta para salir de 'src' (o 'dist') y buscar 'views'
});

// Plugin para procesar datos de formularios (application/x-www-form-urlencoded)
server.register(require('@fastify/formbody'));

// --- RUTAS ---

// Ruta Inicio
server.get('/', async (request, reply) => {
    return reply.view('index.ejs');
});

// Ejercicio 1: Mostrar Formulario (GET)
server.get('/ejercicio1', async (request, reply) => {
    return reply.view('ejercicio1-form.ejs');
});

// Ejercicio 1: Interceptar datos del Formulario (POST)
server.post('/ejercicio1', async (request, reply) => {
    // En Fastify, los datos del cuerpo vienen en request.body.
    // Es necesario definir el tipo o usar 'any' para acceso rápido en este ejemplo.
    const body: any = request.body;
    const nombre = body.nombreAnimal;

    // Renderizamos la vista de resultado pasando el dato.
    return reply.view('ejercicio1-result.ejs', { animal: nombre });
});

// Ejercicio 2: Listar Enums (GET)
server.get('/ejercicio2', async (request, reply) => {
    // Convertimos los Enums a array para iterar en la vista
    const generos = Object.values(GeneroPelicula);
    const paises = Object.values(PaisPelicula);

    return reply.view('ejercicio2.ejs', {
        generos,
        paises,
        titulo: 'Listado de Géneros y Países (Ejercicio 2)'
    });
});

// Iniciar el servidor
const start = async () => {
    try {
        // Escuchamos en el puerto definido por el entorno (Vercel/Render) o 3000
        // En Vercel a veces se requiere exportar la función handler, pero para ejecución local y contenedores usamos listen.
        const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        await server.listen({ port: port, host: '0.0.0.0' });
        console.log(`Servidor corriendo en http://localhost:${port}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
