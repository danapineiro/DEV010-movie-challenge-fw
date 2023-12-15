import React from "react";

// Define la interfaz de props para el componente MoviePoster
export interface MoviePosterProps {
  posterPath: string;
  title: string;
  releaseDate: string;
  onClick?: () => void | string; // Propiedad onClick opcional, puede ser una función o una cadena
}

// Componente funcional MoviePoster con tipo React.FC y desestructuración de props
const MoviePoster: React.FC<MoviePosterProps> = ({ posterPath, onClick }) => {
  // Define una función manejadora de clics
  const handleClick = () => {
    // Verifica si onClick es una función
    if (typeof onClick === 'function') {
      // Llama a la función onClick si es una función
      (onClick as () => void)();
    } else {
      // Muestra un mensaje en la consola si onClick no es una función
      console.log('¡Clickeado!');
    }
  };
  
  // Renderiza el componente con una imagen y un evento de clic opcional
  return (
    <section className="item" onClick={handleClick}>
      <img
        className="poster"
        alt="Este es el póster"
        style={{ width: "200px" }}
        src={`https://image.tmdb.org/t/p/w154${posterPath}`}
      />
    </section>
  );
};

// Exporta el componente MoviePoster como la exportación predeterminada
export default MoviePoster;
