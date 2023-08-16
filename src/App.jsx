import React from "react"
import Header from "./components/Header/Header"
import './App.css';
import styles from './App.module.css';

function App() {

  return (
    <div className={`${styles.appContainer}`}>
      <Header />
    </div>
  )
}

export default App
