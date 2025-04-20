import { useState, useEffect } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Aos from "aos";
import "aos/dist/aos.css";
import TopProducs from "./components/TopProducts/TopProducs";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";

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
        <Banner/>
        <Subscribe/>
        <Products />
        <Testimonials/>
      </div>
    </>
  );
}

export default App;
