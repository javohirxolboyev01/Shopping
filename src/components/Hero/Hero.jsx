import React from "react";
import Image1 from "../../assets/hero/Image1.png";
import Image2 from "../../assets/hero/Image2.png";
import Image3 from "../../assets/hero/Image3.png";
import Slider from "react-slick"

const ImageList = [
  {
    id: 1,
    img: Image2,
    title: "Upto 58% off on all Men's Wear",
    description:
      "Lorem His Life Will forever be Changed dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqiua.",
  },
  {
    id: 2,
    img: Image1,
    title: "30% off on all Women's Wear",
    description:
      "Who's there Lorem dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqiua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Hero = () => {
  var settings = {
    dots:false,
    arrows: false,
    speed: 800,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:4000,
    cssEase:"ease-in-out",
    pouseOnHover: false,
    pouseOnFocus:true,
  }
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-orange-200 
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"
      ></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>

          {ImageList.map((item)=>(

<div>
<div className=" grid grid-cols-1  sm:grid-cols-2">
  {/* text content section  */}
  <div
    className="flex flex-col justify-center gap4 pt-12 sm:pt-0 text-center sm:text-left
  order-2 sm:order-1 relative z-10
  "
  >
    <h1
    data-aos ="zoom-out"
    data-aos-duration = "500"
    data-aos-once ="true"
    className="text-5xl sm:text-6xl lg:text-7xl font-bold">
     {item.title}
    </h1>
    <p 
    data-aos = "fade-up"
    data-aos-duration = "500"
    data-aos-delay ="100"
    className="text-sm">
     {item.description}
    </p>
    <div
    data-aos = "fade-up"
    data-aos-duration = "500"
    data-aos-delay = "300"
    >
      <button
        className="bg-gradient-to-r from-orange-300 to-orange-400 hover:scale-105
      duration-200 text-white py-2 px-4 rounded-full
      "
      >
        Order Now{" "}
      </button>
    </div>
  </div>
  {/* image section */}
  <div className="order-1 sm:order-2">
    <div
    data-aos = "zoom-in"
    data-aos-once = "true"
    className="relative z-10">
      <img
        src={item.img}
        alt=""
        className="w-[300px] h-[300px] sm:h-[450px] 
      sm:w-[450px] sm:scale-105  lg:scale-120 object-contain
      mx-auto
      "
      />
    </div>
  </div>
</div>
</div>
          ))}
      
        </Slider>
       
      </div>
    </div>
  );
};

export default Hero;
