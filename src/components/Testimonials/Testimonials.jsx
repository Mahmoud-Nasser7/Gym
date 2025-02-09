import React from "react";
import { TestimonialsData } from "../../mockData/data";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header */}
        <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <p className="text-4xl font-bold">
            What Are The Customers Saying About Us
          </p>
        </div>
        {/* card */}
        <div className="px-2">
          <Slider {...settings}>
            {TestimonialsData.map((card) => (
              <div 
                key={card.id} 
                className="mx-4 my-6 p-5 bg-[#FFF3E5] rounded-lg shadow-md"
              >
                <div>
                  <div className="flex justify-left items-center gap-4 mb-2">
                    <img className="rounded-full" src={card.img} alt="" />
                    <div>
                      <p className="text-xl font-bold mb-1">{card.name}</p>
                      <p>{card.name}</p>
                    </div>
                  </div>
                  <div className="py-3">
                    <p className="py-3 text-sm text-gray-500">{card.text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
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
