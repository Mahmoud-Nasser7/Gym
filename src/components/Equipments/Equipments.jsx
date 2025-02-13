import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const EquipmentsData = [
  {
    title: "Yoga Equipments",
    description: "It is a long established fact that a reader readable.",
    icon: <GrYoga aria-label="Yoga Equipments" />,
    delay: 0.3,
  },
  {
    title: "Muscles Equipments",
    description: "It is a long established fact that a reader readable.",
    icon: <FaDumbbell aria-label="Muscles Equipments" />,
    delay: 0.6,
  },
  {
    title: "Fitness Equipments",
    description: "It is a long established fact that a reader readable.",
    icon: <GiGymBag aria-label="Fitness Equipments" />,
    delay: 0.9,
  },
];

const Equipments = React.memo(() => {
  return (
    <div className="container py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 font-playfair">
        <div className="space-y-4 p-6">
          <h1 className="text-3xl md:text-4xl font-bold">What we offer for you</h1>
          <p className="text-gray-500">It is a long established fact that a reader readable.</p>
        </div>
        {EquipmentsData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: item.delay }}
            key={index}
            className="space-y-4 p-6 bg-[#f6f6f6] rounded-xl hover:bg-white duration-500 hover:shadow-2xl"
          >
            <div className="text-4xl py-4">{item.icon}</div>
            <p className="text-2xl font-semibold">{item.title}</p>
            <p className="text-gray-500">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default Equipments;