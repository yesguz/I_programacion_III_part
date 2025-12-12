'use server'

import { revalidatePath } from "next/cache";
import { peliculas, Pelicula } from "@/lib/storage";
import { GeneroPelicula, PaisPelicula } from "@/types/enums";

export async function registrarPelicula(formData: FormData) {
    const titulo = formData.get("titulo")?.toString();
    const genero = formData.get("genero")?.toString();
    const pais = formData.get("pais")?.toString();

    if (!titulo || !genero || !pais) {
        return;
    }

    const nuevaPelicula: Pelicula = {
        id: Date.now().toString(),
        titulo: titulo,
        genero: genero as GeneroPelicula,
        pais: pais as PaisPelicula,
    };

    peliculas.push(nuevaPelicula);

    // Revalidamos la ruta para que la tabla se actualice automáticamente tras el envío
    revalidatePath("/ejercicio2");
}
