import React from "react";

// Define la interfaz de props para el componente MovieInfo
interface MovieInfoProps {
  title: string; // Título de la película
  release_date: string; // Fecha de lanzamiento de la película
}

// Componente funcional MovieInfo con tipo React.FC y desestructuración de props
const MovieInfo: React.FC<MovieInfoProps> = ({ title, release_date }) => {
  return (
    <section className="infoPoster">
      {/* <h1>Fun Films</h1> */}
      <h1 className="posterTitle">{title}</h1>
      <h2 className="posterDate" style={{ color: "white" }}>{release_date}</h2>
    </section>
  );
};

// Exporta el componente MovieInfo como la exportación predeterminada
export default MovieInfo;
