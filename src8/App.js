import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
