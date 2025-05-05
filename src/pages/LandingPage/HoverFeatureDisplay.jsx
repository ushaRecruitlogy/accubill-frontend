import React from "react";
import hoverImage from "../../assets/images/hover-bg.png";
// import cardImage from "../../assets/images/portfolio-image.png";
import security from "../../assets/images/security.jpg";
import AI from "../../assets/images/AI.jpg";
import bill from "../../assets/images/invoiceBill.jpg";
import mobile from "../../assets/images/mobile.jpg";

const cards = [
  {
    title: "AI-Powered Automation ",
    description:
      "Implement AI-driven tools to automate tasks such as expense categorization, anomaly detection, and predictive analytics.",
    reveal:
      "Implement AI-driven tools to automate tasks such as expense categorization, anomaly detection, and predictive analytics. .",
    backgroundImage: AI,
  },
  {
    title: " E-Way Bill Generation, E-Invoice",
    description:
      "Facilitate the creation of e-way bills to ensure compliance with transportation regulations and streamline delivery processes.",
    reveal:
      "Facilitate the creation of e-way bills to ensure compliance with transportation regulations and streamline delivery processes.",
    backgroundImage: bill,
  },
  {
    title: "Mobile Accessibility",
    description:
      "Develop mobile applications or responsive web interfaces to allow users to manage finances on the go.",
    reveal:
      "Develop mobile applications or responsive web interfaces to allow users to manage finances on the go.",
    backgroundImage: mobile,
  },
  {
    title: "Security and Error Prevention",
    description:
      "Incorporate advanced security measures like encryption, multi-factor authentication, and audit trails to protect sensitive financial data.",
    reveal:
      "Incorporate advanced security measures like encryption, multi-factor authentication, and audit trails to protect sensitive financial data.",
    backgroundImage: security,
  },
];

const HoverFeatureDisplay = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex  flex-col items-center justify-center px-4 py-12">
      {/* 🟡 Section Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-500 text-center mb-20">
        See What Our Agency{" "}
        <span className="text-[var(--color-blue)]">Offers </span>
        <br /> & What We <span className="text-[var(--color-red)]">Provide</span>
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
                          transition-all duration-900 shadow-xl
                          h-40  hide-scrollbar"
                style={{ backgroundImage: `url(${hoverImage})` }}
              >
                <h4 className="text-md font-bold">{card.title}</h4>
                <p className="text-sm mt-2 overflow-y-auto">{card.reveal}</p>

                {/* Caret Arrow */}
                <div
                  className="absolute bottom-[-17px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                              border-l-[20px] border-r-[20px] border-t-[20px] 
                              border-l-transparent border-r-transparent border-t-[var(--color-red)]"
                ></div>
              </div>
            </div>

            {/* Main Card */}
            <div
              className="relative w-full h-48 rounded-xl shadow-md p-6 bg-white 
             transform group-hover:translate-y-30 transition-all duration-900 z-10 
             bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
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
