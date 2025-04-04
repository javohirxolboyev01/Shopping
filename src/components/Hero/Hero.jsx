import React from "react";

const ImageList = [
  {
    id: 1,
    img: "",
    title: "Upto 58% off on all Men's Wear",
    description:
      "Lorem His Life Will forever be Changed dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqiua.",
  },
  {
    id: 2,
    img: "",
    title: "30% off on all Women's Wear",
    description:
      "Who's there Lorem dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqiua.",
  },
  {
    id: 3,
    img: "",
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-orange-200 
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"
      ></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className=" grid grid-cols-1  sm:grid-cols-2">
            {/* text content section  */}
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
