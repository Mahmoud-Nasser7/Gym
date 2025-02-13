import React from "react";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
import { IoIosPlay } from "react-icons/io";
import dumbell from '../../assets/dumbell.png';

const Hero = React.memo(() => {
  return (
    <>
      <section className="container grid grid-cols-1 md:grid-cols-2 h-screen relative">
        {/* brand info */}
        <div className="flex flex-col justify-center items-center py-14 md:py-0">
          <div className="font-playfair text-center md:text-left">
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="capitalize text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
            >
              Gym Gives you the perfect{" "}
              <span className="text-primary">health</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-600 xl:max-w-[500px]"
            >
              It is a long established fact that a reader will always prefer
              well-structured and readable content when choosing the best
              product.
            </motion.p>
          </div>
          {/* button */}
          <motion.div
            variants={SlideRight(1.5)}
            initial="hidden"
            animate="visible"
            className="flex md:self-start justify-center gap-8 md:justify-start mt-4"
          >
            <button className="primary-btn flex items-center gap-2" aria-label="Order Now">
              Order Now
            </button>
            <button className="flex justify-center items-center gap-2" aria-label="Watch Now">
              <IoIosPlay />Watch Now
            </button>
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={dumbell}
            alt="Dumbbell"
            className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
          />
        </div>
      </section>
    </>
  );
});

export default Hero;