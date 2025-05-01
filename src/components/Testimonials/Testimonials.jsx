import React from "react";
import Slider from "react-slick";
import Victor from "../../assets/Slider/Victor.jpg";

const TestimonialDta = [
  {
    id: 1,
    name: "Abdulloh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis cum sed rerum adipisci labore nobis autem consequuntur inventore doloremque soluta!",
    img: Victor,
  },
  {
    id: 2,
    name: "Serdar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis cum sed rerum adipisci labore nobis autem consequuntur inventore doloremque soluta!",
    img: Victor,
  },
  {
    id: 3,
    name: "Nodirbek",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis cum sed rerum adipisci labore nobis autem consequuntur inventore doloremque soluta!",
    img: Victor,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidersToShow:2,
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pouseOnHover: true,
    pouseOnFocus: true,
    responsive: [
      {
        breackpoint: 10000,
        settings: {
          sliderToShow: 3,
          sliderToScroll: 1,
          infinite: true,
        },
      },
      {
        breackpoint: 1024,
        settings: {
          sliderToShow: 2,
          sliderToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breackpoint: 640,
        settings: {
          sliderToShow: 1,
          sliderToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10  mb-10">
      <div className="container">
        {/* header section  */}
        <div className="text-center mb-10 max-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-orange-500">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quae
            harum recusandae.
          </p>
        </div>
        {/* Testimonial card */}

        <div
        data-aos="zoom-in"
        >
          <Slider {...settings}>
            {TestimonialDta.map((data) => (
              <div  className="my-6">

              <div
                key={data.id}
                className="flex flex-col gap-4
                shadow-lg py-8 px-6 mx-4 rounded-xl  dark:gray-500 bg-orange-200 relative"
                >
                <div className="mb-4">
                  <img src={data.img} className="rounded-full w-30 h-30" />
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-light">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                ,,
                </p>
              </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
