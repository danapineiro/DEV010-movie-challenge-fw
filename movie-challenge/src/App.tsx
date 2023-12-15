import React, { useState, useEffect } from "react";
import axios from 'axios';
import MoviePoster from "./components/MoviePoster";
import MovieInfo from "./components/MovieInfo";
import Search from "./components/search";
import Detail from "./components/detail";
import Pagination from "./components/Pagination";
import "./App.css";

// Definición de la interfaz para los resultados de pelis
export interface movieResult {
  id: number,
  title: string,
  poster_path: string,
  vote_average: number,
  overview: string,
  release_date: string,

}

export interface iParams {
  page:number,
  query?:string
}

//Componente principal
function App() {
  // Estado para almacenar datos de películas y controlar paginación
  const [state, setState] = useState({
    movieName: "",
    results: [] as movieResult[],
    selected: {} as movieResult,
    currentPage: 1,
    totalPages: 1,
  });

  // Configuracion de la API y la clave de autenticación
  const apiurl = "https://api.themoviedb.org/3";
  const initialCatalog = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35";


  const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWM5Njc3MGFiNDcyZGY3OGQ4ZmI1MmEyMTRhMWE0ZCIsInN1YiI6IjY1NTRlOWQ3ZDRmZTA0MDEzOTgxZDFiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9FxXkHj2aYmuCMrNyxVu2vDEHj8bk8R7XoZhmEyFdo'
  };

  // Función para manejar el cambio en el cuadro de búsqueda
  const searchInput = (e: React.FormEvent<HTMLInputElement>) => {
    // Obtiene el valor actual del input
    const s = e.currentTarget.value;
  
    // Actualiza el estado del componente utilizando la función de actualización del estado
    setState((prevState) => {
      // Retorna un nuevo objeto de estado con la propiedad 'movieName' actualizada
      return { ...prevState, movieName: s };
    });
  };
  
    // Función para realizar la búsqueda al presionar Enter
  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Verifica si la tecla presionada es "Enter"
    if (e.key === "Enter") {
    // Llama a la función de búsqueda
    getAppCatalog();
  }
};

// Función para realizar la búsqueda de películas
const performSearch = () => {
  // Restablecer totalPages a 1 antes de realizar la búsqueda
  setState((prevState) => ({
    ...prevState,
    totalPages: 1,
  }));
  // Hace la solicitud a la API de búsqueda de películas
  axios(apiurl + "/search/movie?query=" + state.movieName, {
    headers: headers
  }).then(({ data }) => {
    const results: movieResult[] = data.results;
    const totalPages = data.total_pages;
    // Actualiza el estado con los resultados y la información de paginación
    setState(prevState => ({
      ...prevState,
      results: results,
      currentPage: 1,
      totalPages: totalPages,
    }));
  })
  .catch((error) => {
    console.error("Error en la búsqueda:", error);
  });
};

  // Función para abrir los detalles de una película
  const openDetail = (id: number) => {
    axios(apiurl + "/movie/" + id, {
      headers: headers
    }).then(({ data }) => {
      const result = data as movieResult
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    })
    .catch((error) => {
      console.error("Error al abrir detalles:", error);
    });
};

    // Función para cerrar los detalles de una película
  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} as movieResult };
    });
  };

   // Función para cambiar la página de resultados
const handlePageChange = (page: number) => {
  // Hace la solicitud a la API para obtener resultados de la página seleccionada
  const params: iParams = {
    page: page
  };
let endPoint = "/search/movie";
  // Verifica si hay un término de búsqueda (state.movieName no está vacío)
  if (state.movieName.trim() !== "") {
    params.query = state.movieName;

    // Si search tiene información, utiliza la ruta de búsqueda ("/search/movie")
     // axios(apiurl + "/search/movie", {  //si tiene algo search
    
     // Si hay un término de búsqueda, utiliza la ruta de búsqueda ("/search/movie")
  } else {
    // Si no hay un término de búsqueda, utiliza la ruta de descubrimiento ("/discover/movie")
    endPoint = "/discover/movie"
  }

    // Realiza una solicitud a la API utilizando axios
  axios(apiurl + endPoint, { 
    headers: headers,
    params: params
  }).then(({ data }) => {
    console.log(data);
    const results: movieResult[] = data.results;
    // Actualiza el estado con los nuevos resultados y la página actual
    setState((prevState) => ({
      ...prevState,
      results: results,
      currentPage: page,
    }));
  })
  .catch((error) => {
    console.error("Error al cambiar de página:", error);
  });
};


  // Función para obtener el catálogo inicial de películas
  const getAppCatalog = () => {
      // Realiza una solicitud a la API para obtener el catálogo inicial de aplicaciones
    axios(apiurl + initialCatalog, {
      headers: headers
    }).then(({ data }) => {
      // Actualiza el estado con los resultados del catálogo y el número total de páginas
      setState((prevState) => {
        return { ...prevState, results: data.results, totalPages:data.total_pages }
      });
    })
    .catch((error) => {
      console.error("Error al obtener el catálogo inicial:", error);
    });
};

  // Efecto de inicialización
  useEffect(() => {
      // Definición de la función fetchData, que realiza operaciones asíncronas
    const fetchData =  () => {
       getAppCatalog(); // Realiza alguna otra lógica para obtener datos iniciales, posiblemente de otra API
    };
    
    // Llamada a la función fetchData después de que el componente es montado
    fetchData();
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // El array de dependencias está vacío, lo que significa que este useEffect se ejecutará solo una vez después del montaje inicial del componente
  
 // Efecto de inicialización
 useEffect(() => {
  // Definición de la función fetchData, que realiza operaciones asíncronas
const fetchData =  () => {
   performSearch(); // Realiza una búsqueda, posiblemente en una API
};

// Llamada a la función fetchData después de que el componente es montado
if (state.movieName) fetchData();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [state.movieName]); // El array de dependencias está vacío, lo que significa que este useEffect se ejecutará solo una vez después del montaje inicial del componente


   // Renderiza el componente principal
   return (
    <section className="App">
      {/* Componentes de encabezado y búsqueda */}
      <header className="App-header">
        <h1 className="title">Fun Films</h1>
        <h2 className="subtitle"> TIMELINE</h2>
      </header>
      <main>
        <Search searchInput={searchInput} search={search} />
        {/*state.results.length === 0 && <Search searchInput={searchInput} search={search} />*/}


        {/* Lista de resultados de películas */}
        <section className="container">
          {state.results.length &&
            state.results.map((e: movieResult) => (
              <div key={e.id}>
                <MoviePoster
                  posterPath={e.poster_path}
                  title={e.title}
                  releaseDate={e.release_date}
                  onClick={() => openDetail(e.id)}
                />
                <MovieInfo title={e.title} release_date={e.release_date} />
              </div>
            ))}
        </section>
{/* Componente de paginación en el pie de página */}
<section className="footer">
<footer className="pagination-footer">
            <Pagination
              currentPage={state.currentPage}
              totalPages={state.totalPages}
              onPageChange={handlePageChange}
            />
          </footer>
          </section>

        {/* Detalles de la película seleccionada */}
        {typeof state.selected.title !== "undefined" ? (
          <section>
            <MovieInfo title={state.selected.title} 
            release_date={state.selected.release_date}
             />
            <Detail selected={state.selected} closeDetail={closeDetail} />
          </section>
        ) : (
          false
        )}
      </main>
    </section>
  );
}

export default App;