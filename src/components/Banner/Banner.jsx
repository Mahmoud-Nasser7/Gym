import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Banner = React.memo(({ img, title, description }) => {
  return (
    <div className="container mb-5">
      <div className="bg-[#f6f6f6] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="flex justify-center"
        >
          <img
            className="w-[300px] md:max-w-[400px] xl:min-w-[600px] h-full object-cover"
            src={img}
            alt={title}
            loading="lazy"
          />
        </motion.div>
        <div className="px-5 flex flex-col justify-center text-center lg:max-w-[500px] md:text-left space-y-4">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            className="text-3xl lg:text-4xl mb-5 font-bold capitalize font-playfair"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
          >
            {description}
          </motion.p>
          <motion.div
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center md:justify-start pt-5"
          >
            <button className="primary-btn" aria-label="Explore More">
              Explore More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Banner;