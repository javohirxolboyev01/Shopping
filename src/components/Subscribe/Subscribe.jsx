import React from "react";
import Banner from "../../assets/hero/footer1.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className=" container backdrop:blue-sm py-10 pl-44">
        <div className="space-y-6 max-w-xl max-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your Email"
            className="w-full p-3 bg-white text-xl text-black border rounded-[5px]  border-0 focus:outline-none f"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
