import React from "react"
import Header from "./components/Header/Header"
import './App.css';
import styles from './App.module.css';
import MovieItem from "./components/MovieList/MovieItem";
import MovieList from "./components/MovieList/MovieList";

function App() {

  return (
    <div className={`${styles.appContainer}`}>
      <Header />
      <MovieList />
    </div>
  )
}

export default App
