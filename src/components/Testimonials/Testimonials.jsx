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
    img: "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fi2.wp.com%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-men-in-suitmanpeoplepersonsmalein-suitbusinessbusinesspersonsbusinessman-1121525097545bfvwi.png&lr=10335&p=1&pos=2&rpt=simage&text=mens%20portret%20png",
  },
  {
    id: 3,
    name: "Nodirbek",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis cum sed rerum adipisci labore nobis autem consequuntur inventore doloremque soluta!",
    img: "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages.narisyu.com%2Fposts%2F5724714-portret-podrostka-31.jpg&lr=10335&p=1&pos=14&rpt=simage&text=mens%20portret%20png",
  },

  {
    id: 4,
    name: "Abu Bakr",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis cum sed rerum adipisci labore nobis autem consequuntur inventore doloremque soluta!",
    img: "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fimages.narisyu.com%2Fposts%2F5724714-portret-podrostka-31.jpg&lr=10335&p=1&pos=14&rpt=simage&text=mens%20portret%20png",
  },
  {
    id: 5,
    name: "Umar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis cum sed rerum adipisci labore nobis autem consequuntur inventore doloremque soluta!",
    img: "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2d%2Fd6%2F11%2F2dd61143707f9209c68c8a10b8b4570a.jpg&lr=10335&p=2&pos=5&rpt=simage&text=mens%20portret%20png",
  },
  {
    id: 6,
    name: "Ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis cum sed rerum adipisci labore nobis autem consequuntur inventore doloremque soluta!",
    img: "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fstatic.tildacdn.com%2Ftild3031-6162-4739-b630-363232323065%2Fimage_26.png&lr=10335&p=2&pos=17&rpt=simage&text=mens%20portret%20png",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidersToShow:2
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Lineer",
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

        <div>
          <Slider {...settings}>
            {TestimonialDta.map((data) => (
              <div
                key={data.id}
                className="flex flex-col gap-4
               shadow-lg py-8 px-6 mx-4 rounded-xl "
              >
                <div>
                  <img src={data.img} className="w-30 h-30" />
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
