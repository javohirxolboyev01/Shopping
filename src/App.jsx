import { useState, useEffect } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Aos from "aos";
import "aos/dist/aos.css";
import TopProducs from "./components/TopProducts/TopProducs";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Products />
        <TopProducs/>
      </div>
    </>
  );
}

export default App;
