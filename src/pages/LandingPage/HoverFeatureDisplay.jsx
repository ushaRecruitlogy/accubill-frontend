import React from "react";
import hoverImage from "../../assets/images/hover-bg.png";
import cardImage from "../../assets/images/portfolio-image.png";

const cards = [
  {
    title: "Fast Billing",
    description: "Generate bills quickly using barcode scan.",
    reveal: "Auto-calculate discounts, apply offers & send invoice instantly.",
  },
  {
    title: "Inventory Management",
    description: "Track stock across warehouses and shelves.",
    reveal: "Auto reorder low-stock items and sync with sales.",
  },
  {
    title: "GST Compliance",
    description: "Generate GST invoices with accurate tax splitting.",
    reveal: "Supports GSTR-1, GSTR-3B filing directly from the app.",
  },
  {
    title: "Insightful Reports",
    description: "View sales, purchases and profit trends easily.",
    reveal: "Custom filter by product, customer or time range.",
  },
];

const HoverFeatureDisplay = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex  flex-col items-center justify-center px-4 py-12">
      {/* 🟡 Section Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-500 text-center mb-20">
        See What Our Agency <span className="text-blue-400">Offers </span>
        <br /> & What We <span className="text-red-400">Provide</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group transition-all duration-300 ease-in-out"
          >
            {/* Reveal Card - Slides into view above */}
            <div className="relative group">
              {/* Reveal Box */}
              <div
                className="absolute -top-20 left-0 w-full 
      bg-no-repeat bg-cover bg-center text-white
      rounded-xl p-4 opacity-0 transform translate-y-30
      group-hover:opacity-100 group-hover:translate-y-0 z-20
      transition-all duration-900 shadow-xl"
                style={{ backgroundImage: `url(${hoverImage})` }}
              >
                <h4 className="text-md font-bold">{card.title} - Details</h4>
                <p className="text-sm mt-2">{card.reveal}</p>

                {/* Caret Arrow */}
                <div
                  className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-0 h-0 
  border-l-[20px] border-r-[20px] border-t-[20px] 
  border-l-transparent border-r-transparent border-t-red-400"
                ></div>
              </div>
            </div>

            {/* Main Card */}
            <div
              className="relative w-full h-50 rounded-xl
             shadow-md p-6 bg-white transform bg-no-repeat  bg-center group-hover:translate-y-15 transition-all duration-900 z-10"
              style={{ backgroundImage: `url(${cardImage})` }}
            >
              {/* <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverFeatureDisplay;
