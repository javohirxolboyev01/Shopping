import React from "react";
import { FaStar } from "react-icons/fa";

import Img1 from "../../assets/womens/hello.webp";
import Img2 from "../../assets/womens/hellon.webp";
import Img3 from "../../assets/womens/helloo.webp";
import Img4 from "../../assets/womens/hellos.webp";
import Img5 from "../../assets/womens/helo.webp";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.3,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women wesern",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.8,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashing T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

// import { ProductsData } from "../../utils/ProductsData";

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p  data-aos= "fade-up" className="text-sm text-orange-500">
            Top Selling Products for you
          </p>
          <h1 data-aos= "fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos= "fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quae
            harum recusandae.
          </p>
        </div>

        {/* Body section  */}
        <div>
          <div
            className="
            grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
             place-item-center gap-5
            "
          >
            {/* card sectio */}
            {ProductsData.map((data) => (
              <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}

              
              key={data.id}
              className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className= "text-yellow-400"/>
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
