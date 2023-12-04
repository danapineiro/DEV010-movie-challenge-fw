// MovieInfo.tsx
import React from "react";

interface MovieInfoProps {
  title: string;
  release_date: string;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ title, release_date }) => {
  return (
    <div>
      {/*<h1>Fun Films</h1>*/}
      <h2>{title}</h2>
      <h4 style={{ color: "white"}}>{release_date}</h4>
      {/* Agrega más información de la película aquí */}
    </div>
  );
};

export default MovieInfo;