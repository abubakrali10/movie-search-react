import React, { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import './App.css';
import styles from './App.module.css';
import MovieList from "./components/MovieList/MovieList";
import { getPopularMovies } from "./services/api";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const movies = await getPopularMovies();
      setPopularMovies(movies);
    }
    fetchPopularMovies();
  }, []);

  return (
    <div className={`${styles.appContainer}`}>
      <Header />
      <MovieList movies={popularMovies}/>
    </div>
  )
}

export default App
