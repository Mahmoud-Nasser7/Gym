import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className="container">
        {/* brand */}
        <div className="parent text-center md:text-start space-y-3 text-white pt-3 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6">
          <div className="first space-y-3  ">
            <div className="text-2xl font-bold flex   gap-2 items-center uppercase">
              <FaDumbbell className="text-white" />
              <p className="text-white">Coders</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p className="text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              placeat quaerat doloribus odit perferendis autem blanditiis, nihil
              pariatur iusto accusamus.
            </p>
            <div className="flex gap-3 text-2xl ">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaLocationPin />
            </div>
          </div>
          <div className="second">
            <h2 className="font-bold text-2xl mb-2">Important Links
            </h2>
            <div className="flex flex-col ">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Login</a>
            </div>
          </div>
          <div className="third">
            <h2 className="font-bold text-2xl mb-2">Important Links
            </h2>
            <div className="flex flex-col ">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Login</a>
            </div>
          </div>
          <div className="fourth">
            <h2 className="font-bold text-2xl mb-2">Important Links
            </h2>
            <div className="flex flex-col ">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Login</a>
            </div>
          </div>
   
        </div>

        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Footer;
