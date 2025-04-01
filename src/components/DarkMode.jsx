import React from "react";
import DarkMode from "../assets/darkMode.png";
import LightMode from "../assets/lightMode.png;";

const Dark = () => {
  return (
    <div>
      <img
        src={LightMode}
        alt="LightMode"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300"
      />
      <img
        src={DarkMode}
        alt="darkMode"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default Dark;
