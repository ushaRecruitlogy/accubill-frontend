import React from "react";
import bgImage from "../../assets/images/tables-left-dec.png";
import leftImage from "../../assets/images/first-plan-bg.png";
import middleImage from "../../assets/images/second-plan-bg.png";
import rightImage from "../../assets/images/third-plan-bg.png";

const plans = [
  {
    title: "Basic",
    price: 0,
    backgroundImage: `url(${leftImage})`,
    features: [
      "Basic Accounting tools",
      "Accounting templates",
      "Basic financial reports",
      "Basic invoicing tools",
      "Tax calculation support",
    ],
    highlight: false,
  },
  {
    title: "Pro",
    price: 79,
    backgroundImage: `url(${middleImage})`,
    features: [
      "Advanced accounting tools",
      "Automated tax reporting",
      "Custom invoicing templates",
      "Advanced financial reports",
      "Accounting system integration",
      "Priority customer support",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: 199,
    backgroundImage: `url(${rightImage})`,
    features: [
      "Full-featured accounting software",
      "Customized reporting & analytics",
      "Enterprise-level support",
      "Dedicated account manager",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <div
      className="flex flex-wrap items-start justify-center gap-6 p-6 sm:p-8 md:p-12 lg:p-16 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "contain" }}
    >
      {plans.map((plan, idx) => (
        <div
          key={idx}
          className="w-full sm:w-[300px] md:w-[340px] lg:w-80 xl:w-80 h-[420px] text-center text-gray-800/90 p-6 rounded-[3rem] shadow-2xl flex flex-col justify-between bg-cover bg-no-repeat bg-center relative"
          style={{ backgroundImage: plan.backgroundImage }}
        >
          <div>
            <div className="w-full ml-15 items-center justify-center">
              <p className="font-semibold  text-xl w-30   md:text-2xl text-center">
                {plan.title}
              </p>

              <h1 className="text-3xl mr-25 md:text-4xl text-[var(--color-red)] font-semibold">
                ${plan.price}
                <span className="text-sm font-normal text-[var(--color-red)]">/month</span>
              </h1>
            </div>

            <ul className="list-none text-sm mt-6 space-y-1 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                      fill={plan.highlight ? "currentColor" : "#6366F1"}
                    />
                  </svg>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            className={`cursor-pointer justify-center w-fit px-3 py-2 mx-auto transition text-white text-sm rounded-full bg-[var(--color-red)] hover:bg-[var(--color-blue)] ${
              plan.highlight
                ? "bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue)] "
                : "bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue)]"
            }`}
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;


