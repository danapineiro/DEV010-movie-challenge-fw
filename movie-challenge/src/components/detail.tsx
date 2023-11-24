import { movieResult } from "../App";

interface Props {
  selected: movieResult;
  closeDetail(): void;
}

function Detail(props: Props) {
  const { selected, closeDetail } = props;
  const posterPath = "https://image.tmdb.org/t/p/w154" + selected.poster_path;
  return (
    <section className="detail">
      <div className="content">
        <h2>{selected.title}</h2>
        <p className="rating">
          Rating: {selected.vote_average}
        </p>

        <div className="about">
          <img src={posterPath} alt="" />

          <p>{selected.overview}</p>
        </div>
        <button
          className="close"
          onClick={closeDetail}
        >
          Back
        </button>
      </div>
    </section>
  );
}
export default Detail;