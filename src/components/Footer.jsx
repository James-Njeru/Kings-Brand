import React from "react";
import logo from "../assets/logo.svg";
import { TfiEmail } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-bgcolor flex justify-between items-center p-8">
      <div className="w-full">
        <img src={logo} className="h-[115px] w-[115px]" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Sollicitudin euismod in diam
          duis aliquet ut aliquet.
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-3xl text-magenta mb-2">Our Company</h1>
        <p>About Us</p>
        <p className="my-2">Contact Us</p>
        <p>Terms and Conditions</p>
      </div>
      <div className="w-full">
        <h1 className="text-3xl text-magenta mb-2">Stay Connected</h1>
        <div className="flex mb-2 items-center">
          <BsTwitterX className="w-6 h-6 text-magenta" />
          <FaInstagram className="w-6 h-6 mx-4 text-magenta" />
          <FaFacebookF className="w-6 h-6 text-magenta" />
        </div>
        <div className="flex mb-2 items-center">
          <IoCallOutline className="w-6 h-6 mr-2 text-magenta" />
          <p>+25471829222</p>
        </div>
        <div className="flex mb-2 items-center">
          <TfiEmail className="w-6 h-6 mr-2 text-magenta" />
          <p>support@kingsbrand.co.ke</p>
        </div>
        <div className="flex items-center">
          <CiLocationOn className="w-6 h-6 mr-2 text-magenta" />
          <p>RM 104, Imenti House Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
