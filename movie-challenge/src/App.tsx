import React, { useState, useEffect } from "react";
import axios from 'axios';
import MoviePoster from "./components/MoviePoster";
import MovieInfo from "./components/MovieInfo";
import Search from "./components/Search";
import Detail from "./components/Detail";
import "./App.css";

// interface para el genero
export interface movieResult {
  id: number,
  title: string,
  poster_path: string,
  vote_average: number,
  overview: string,
}


function App() { //componente padre 
  const [state, setState] = useState({
    movieName: "",
    results: [] as movieResult[],
    selected: {} as movieResult,
  });
  const apiurl = "https://api.themoviedb.org/3";
  const initialCatalog = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35";


  const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWM5Njc3MGFiNDcyZGY3OGQ4ZmI1MmEyMTRhMWE0ZCIsInN1YiI6IjY1NTRlOWQ3ZDRmZTA0MDEzOTgxZDFiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9FxXkHj2aYmuCMrNyxVu2vDEHj8bk8R7XoZhmEyFdo'
  };

  const searchInput = (e: React.FormEvent<HTMLInputElement>) => {
    const s = e.currentTarget.value;

    setState((prevState) => {
      return { ...prevState, movieName: s };
    });
  };

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      axios(apiurl + "/search/movie?query=" + state.movieName, {
        headers: headers
      }).then(({ data }) => {
         const results: movieResult[] = data.results;
         setState((prevState) => {
          return {
            ...prevState,
            results: results,
            };
          });
        }
      );
    }
  };

  const openDetail = (id: number) => {
    axios(apiurl + "/movie/" + id, {
      headers: headers
    }).then(({ data }) => {
      const result = data as movieResult
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} as movieResult };
    });
  };

  const getAppCatalog = () => {
    axios(apiurl + initialCatalog, {
      headers: headers
    }).then(({ data }) => {
      setState((prevState) => {
        return { ...prevState, results: data.results }
      });
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!state.results.length) {
        await getAppCatalog();
      }
    };
  
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAppCatalog]);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fun Films</h1>
      </header>
      <main>
        <Search searchInput={searchInput} search={search} />

        <div className="container">
          {state.results.length &&
            state.results.map((e: movieResult) => (
              <MoviePoster
                key={e.id}
                posterPath={e.poster_path}
                title={e.title}
                onClick={() => openDetail(e.id)}
              />
            ))}
        </div>

        {typeof state.selected.title !== "undefined" ? (
          <div>
            <MovieInfo title={state.selected.title} />
            <Detail selected={state.selected} closeDetail={closeDetail} />
          </div>
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;