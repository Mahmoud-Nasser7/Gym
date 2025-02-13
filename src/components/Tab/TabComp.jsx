import React, { useState } from "react";
import { ProductsData } from "../../mockData/data";
import { motion } from "framer-motion";

const TabComp = React.memo(() => {
  const [data, setData] = useState(ProductsData);
  const Tabs = ["All", "Yoga", "Fitness", "Muscles"];
  const [activeTab, setActiveTab] = useState("All");

  function handleClick(category) {
    setActiveTab(category);
    if (category === "All") {
      setData(ProductsData);
    } else {
      const filteredData = ProductsData.filter(
        (item) => item.category === category
      );
      setData(filteredData);
    }
  }

  return (
    <div className="container my-12 md:my-16">
      <div className="flex">
        {Tabs.map((tab) => (
          <button
            className={`py-2 px-4 bg-[#f6f6f6] ml-2 rounded-lg ${
              activeTab === tab ? "bg-primary text-white" : ""
            }`}
            key={tab}
            onClick={() => handleClick(tab)}
            aria-label={`Filter by ${tab}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {data.map((item) => (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={item.id}
            className="border p-4"
          >
            <img src={item.image} alt={item.title} />
            <h2 className="text-[20px] py-2 font-bold">{item.title}</h2>
            <p>{item.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default TabComp;