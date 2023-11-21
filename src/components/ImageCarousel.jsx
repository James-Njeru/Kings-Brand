import React from "react";
import hoodie from "../assets/hoodie.svg";
import hoodie1 from "../assets/hoodie1.svg";
import hoodie2 from "../assets/hoodie2.svg";
import tshirt from "../assets/tshirt.svg";
import Slider from "react-slick";

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex flex-col p-4">
        <h1 className="text-magenta text-3xl ">Glow in the Dark Hoodie</h1>
        <p className="my-4">
          Light up the night with our Glow in the Dark Hoodie.
        </p>
        <button className="bg-magenta h-10 w-20 rounded-md text-white">
          Buy Now
        </button>
      </div>

      <Slider {...settings} className="w-[200px]">
        <img src={hoodie} className="h-[250px] w-[200px]" />
        <img src={hoodie1} className="h-[250px] w-[200px]" />
        <img src={hoodie2} className="h-[250px] w-[200px]" />
        <img src={tshirt} className="h-[250px] w-[200px]" />
      </Slider>
    </div>
  );
}

export default ImageCarousel;
