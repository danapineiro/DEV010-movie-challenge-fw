import React from "react";

interface MoviePosterProps {
  posterPath: string;
  title: string;
  releaseDate: string,
  onClick: () => void;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ posterPath, title, releaseDate, onClick }) => {
  return (
    <div className="item" onClick={onClick}>
      <img
        alt="Este es el póster"
        style={{ width: "200px" }}
        src={`https://image.tmdb.org/t/p/w154${posterPath}`}
      />
      <h3 style={{ color: "white" }}>{title}</h3>
      <h4 style={{ color: "white"}}>{releaseDate}</h4>
    </div>
  );
};

export default MoviePoster;