import React from "react";
import Img1 from "../../assets/shirts/Img1.jpg";
import Img2 from "../../assets/shirts/Img2.jpg";
import Img3 from "../../assets/shirts/Women.jpg";
import { FaStar } from "react-icons/fa6";
const ProducsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },

  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    img: Img3,
    title: "women shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const TopProducs = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-10  ">
          <p data-aos="fade-up" className="text-sm text-orange-500">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            {" "}
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quae
            harum recusandae.
          </p>
        </div>
        {/* Body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-3 gap-20 md:gap-5 place-items-center
        "
        >
          {ProducsData.map((data) => (
            <div
              className=" rounded-2xl bg-white dark:bg-gray-800
            hover:bg-black/80 dark:hover:bg-orange-300
            hover:text-white relative shadow-xl 
            duration-high group max-w-[300px]
            "
            >
              {/* image section */}
              <div>
                <img src={data.img} />
              </div>
              {/* details section  */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducs;
