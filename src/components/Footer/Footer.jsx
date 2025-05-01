import React from "react";
import FooterLogo from "../../assets/Loggo.png";
import Banner from "../../assets/footer/Footer.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTelegram,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "button",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLink = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container">
        <div 
        data-aos= "zoom-in"
        className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details   */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={FooterLogo} className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              fugiat quam aliquid, pariatur natus aperiam repellendus dolores
              ullam placeat. Molestias.
            </p>
          </div>
          {/* Footer Links details   */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1
                  className="sm:text-3xl text-xl font-bold
                 sm:text-left text-justify mb-3"
                >
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink.map((link) => (
                    <li
                      className="cursor-pointer hover:text-orange-400
                        hover:translate-x-1 duration-300 text-gray-200
                        "
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1
                  className="sm:text-3xl text-xl font-bold
                 sm:text-left text-justify mb-3"
                >
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink.map((link) => (
                    <li
                      className="cursor-pointer hover:text-orange-400
                        hover:translate-x-1 duration-300 text-gray-200
                        "
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social link */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://instagram.com/xolboyev0109">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://t.me/xolboyev201">
                  <FaTelegram className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaTelegram />
                  <p>@xolboyev2001</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+99893 329 3553</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
