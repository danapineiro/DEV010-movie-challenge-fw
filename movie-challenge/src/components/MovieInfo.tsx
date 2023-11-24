// MovieInfo.tsx
import React from "react";

interface MovieInfoProps {
  title: string;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ title }) => {
  return (
    <div>
      <h1>Fun Films</h1>
      <h2>{title}</h2>
      {/* Agrega más información de la película aquí */}
    </div>
  );
};

export default MovieInfo;