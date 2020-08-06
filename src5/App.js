import React from "react";
import Jumbotron from "./components/Jumbotron";
import Card from './components/Card';
import NavBar from './components/NavBar'

function App() {
  return <>
    <Jumbotron displayName = "Joe"/>
    
    <Jumbotron displayName = "Denis"/>
    <Jumbotron displayName = "Aslan"/>
  </>;
}

export default App;
