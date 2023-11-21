import React from "react";
import { MdPayment } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoDiamondOutline, IoGlobeOutline } from "react-icons/io5";
import ImageCarousel from "../components/ImageCarousel";

function Home() {
  return (
    <div className="my-4">
      <div className="bg-bgcolor h-[300px]">
        <ImageCarousel />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl my-4">Welcome to King’s Brand</h1>
        <p className="w-2/3 text-center">
          Welcome to the ultimate online destination for stylish and sustainable
          fashion! Our shop offers a carefully curated selection of premium
          branded t-shirts, hoodies, and trash bags that are both fashionable
          and eco-friendly. Whether you're looking to make a statement with bold
          graphic tees or keep warm and cozy with our signature hoodies, we've
          got you covered. Shop now and elevate your wardrobe with the perfect
          combination of fashion and sustainability!
        </p>
        <div className="bg-bgcolor h-[2px] w-[250px] my-2"></div>

        <div className="flex w-3/4 my-4">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-bgcolor h-10 w-10 rounded-full flex justify-center items-center">
              <IoDiamondOutline />
            </div>
            <h1>Great Value</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur. Velit diam semper egestas
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-bgcolor h-10 w-10 rounded-full flex justify-center items-center">
              <IoGlobeOutline />
            </div>
            <h1>Countrywide Delivery</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur. Velit diam semper egestas
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-bgcolor h-10 w-10 rounded-full flex justify-center items-center">
              <MdPayment />
            </div>
            <h1>Safe Payment</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur. Velit diam semper egestas
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-bgcolor h-10 w-10 rounded-full flex justify-center items-center">
              <HiOutlineLightBulb />
            </div>
            <h1>Shop with Confidence</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur. Velit diam semper egestas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
