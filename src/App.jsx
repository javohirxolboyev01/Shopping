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
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

function App() {
  // const [orderPopup, setOrderPopup] = React.useState(false);
  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };
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
      <div
        className="bg-white dark:bg-gray-900 dark:text-white duration-200
      
      "
      >
        <Navbar />
        <Hero />
        <Products />
        <TopProducs />
        <Banner />
        <Subscribe />
        <Products />
        <Testimonials />
        <Footer />
        {/* <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>  */}
      </div>
    </>
  );
}

export default App;
