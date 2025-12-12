import Link from "next/link";
import { GeneroPelicula, PaisPelicula } from "@/types/enums";
import { registrarPelicula } from "./actions";
import { peliculas } from "@/lib/storage";

export default function Ejercicio2Page() {
    const generos = Object.values(GeneroPelicula);
    const paises = Object.values(PaisPelicula);

    return (
        <div>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <h1>Registro de Películas</h1>
                <p style={{ color: "#666" }}>
                    Ejercicio 2: Uso de Enums y persistencia temporal en memoria.
                </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
                {/* LADO IZQUIERDO: FORMULARIO */}
                <div className="glass-panel">
                    <h2>📝 Nueva Película</h2>
                    <form action={registrarPelicula}>
                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="titulo" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                Título
                            </label>
                            <input
                                type="text"
                                id="titulo"
                                name="titulo"
                                placeholder="Añadir pelicula"
                                required
                            />
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="genero" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                Género
                            </label>
                            <select id="genero" name="genero" required defaultValue="">
                                <option value="" disabled>Seleccione un género...</option>
                                {generos.map((g) => (
                                    <option key={g} value={g}>{g}</option>
                                ))}
                            </select>
                        </div>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <label htmlFor="pais" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                                País de Origen
                            </label>
                            <select id="pais" name="pais" required defaultValue="">
                                <option value="" disabled>Seleccione un país...</option>
                                {paises.map((p) => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="btn" style={{ width: "100%", background: "#0070f3", color: "white" }}>
                            Registrar Película
                        </button>
                    </form>
                </div>

                {/* LADO DERECHO: TABLA */}
                <div className="glass-panel">
                    <h2>🎬 Películas Registradas</h2>

                    {peliculas.length === 0 ? (
                        <p style={{ color: "#999", fontStyle: "italic", textAlign: "center", marginTop: "2rem" }}>
                            No hay películas registradas aún.
                        </p>
                    ) : (
                        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                            <thead>
                                <tr style={{ borderBottom: "2px solid #eaeaea", textAlign: "left" }}>
                                    <th style={{ padding: "0.5rem", color: "#333" }}>Título</th>
                                    <th style={{ padding: "0.5rem", color: "#333" }}>Género</th>
                                    <th style={{ padding: "0.5rem", color: "#333" }}>País</th>
                                </tr>
                            </thead>
                            <tbody>
                                {peliculas.map((pelicula) => (
                                    <tr key={pelicula.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                                        <td style={{ padding: "0.8rem 0.5rem", color: "#333", fontWeight: "500" }}>{pelicula.titulo}</td>
                                        <td style={{ padding: "0.8rem 0.5rem", color: "#666" }}>{pelicula.genero}</td>
                                        <td style={{ padding: "0.8rem 0.5rem", color: "#666" }}>{pelicula.pais}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            <div style={{ marginTop: "3rem", textAlign: "center" }}>
                <Link href="/" className="btn" style={{ background: "transparent", border: "1px solid #eaeaea", color: "#333" }}>
                    &larr; Volver al Menú Principal
                </Link>
            </div>
        </div>
    );
}
