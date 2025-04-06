import { useState } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

function App() {


  return (
    <>
      <div>
        <Navbar />
        <Hero/>
        <Products/>
      </div>
    </>
  );
}

export default App;
