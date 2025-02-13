import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../../mockData/data";

const ResponsiveMenu = React.memo(({ open }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20"
          >
            <div className="m-6 rounded-3xl py-10 text-xl text-white font-semibold uppercase bg-primary">
              <ul className="py-2 flex flex-col justify-center items-center gap-10">
                {NavbarMenu.map((tab) => (
                  <li key={tab.id}>
                    <a href={tab.link}>{tab.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default ResponsiveMenu;