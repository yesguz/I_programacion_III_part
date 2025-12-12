import { GeneroPelicula, PaisPelicula } from "@/types/enums";

export interface Pelicula {
    id: string;
    titulo: string;
    genero: GeneroPelicula;
    pais: PaisPelicula;
}

// Almacenamiento en memoria temporal (se reinicia al reiniciar el servidor)
// En Vercel (Serverless), esto se reiniciará con frecuencia, pero cumple el requisito funcional básico.
export const peliculas: Pelicula[] = [];
