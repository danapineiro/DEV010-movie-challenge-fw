import { movieResult } from "../App";

// Define la interfaz de props para el componente Detail
interface Props {
  selected: movieResult; // Objeto que contiene los detalles de la película seleccionada
  closeDetail(): void; // Función para cerrar el detalle y volver
}

// Componente funcional Detail que recibe las propiedades seleccionadas y la función de cierre
function Detail(props: Props) {
  // Desestructura las propiedades para facilitar su uso
  const { selected, closeDetail } = props;

  // Construye la URL del póster utilizando el path proporcionado por la API
  const posterPath = "https://image.tmdb.org/t/p/w154" + selected.poster_path;

  // Renderiza el componente con detalles de la película y un botón de regreso
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

// Exporta el componente Detail como la exportación predeterminada
export default Detail;
