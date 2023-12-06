import React from "react";

interface MoviePosterProps {
  posterPath: string;
  title: string;
  releaseDate: string,
  onClick: () => void;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ posterPath, onClick }) => {
  return (
    <div className="item" onClick={onClick}>
      <img className="poster"
        alt="Este es el póster"
        style={{ width: "200px" }}
        src={`https://image.tmdb.org/t/p/w154${posterPath}`}
      />
      {/*<h3 style={{ color: "white" }}>{title}</h3>*/}
      
    </div>
  );
};

export default MoviePoster;