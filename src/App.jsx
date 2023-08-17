import React, { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import './App.css';
import styles from './App.module.css';
import MovieList from "./components/MovieList/MovieList";
import SearchBar from './components/Header/SearchBar';
import { getPopularMovies, searchMovies } from "./services/api";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const movies = await getPopularMovies();
      setPopularMovies(movies);
    }
    fetchPopularMovies();
  }, []);

  const handleSearch = async (searchQuery) => {
    const results = await searchMovies(searchQuery);
    setSearchResults(results);
  };

  const displayedMovies = searchResults.length > 0 ? searchResults : popularMovies;

  return (
    <div className={`${styles.appContainer}`}>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={displayedMovies} />
    </div>
  )
}

export default App
