import React, { useEffect, useRef, useState } from "react";
import contactBg from "../../assets/images/about-bg.png";
import aboutLeftImage from "../../assets/images/about-left-image.png";

// 🔷 ICONS
const BillingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h13v6M9 11V5a2 2 0 012-2h4a2 2 0 012 2v6m0 0v6m-6 0v-6" />
  </svg>
);

const InventoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);

const AccountingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GSTIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
    <path d="M8 12h4v4" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const BarcodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M2 4h2v16H2V4zm4 0h1v16H6V4zm3 0h1v16H9V4zm3 0h2v16h-2V4zm4 0h1v16h-1V4zm3 0h2v16h-2V4z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A6.967 6.967 0 0012 20c2.21 0 4.21-.896 5.656-2.344M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ReportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M4 4h16v16H4V4zm4 4h8v2H8V8zm0 4h8v6H8v-6z" />
  </svg>
);

const VendorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="7" r="4" strokeWidth="2" stroke="currentColor" fill="none" />
    <path strokeWidth="2" d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2H5z" />
  </svg>
);

// 🔹 Card Component
const Card = ({ title, description, icon }) => (
  <div className="text-sm text-white w-full md:w-50 h-60 p-4 hover:shadow-xl duration-400">
    <div className="flex flex-col items-center justify-between">
      <div className="bg-white p-3 rounded-full mb-3 text-[var(--bs-red)]">{icon}</div>
      <h2 className="text-lg font-semibold text-center">{title}</h2>
      <p className="text-center mt-2 text-sm">{description}</p>
    </div>
  </div>
);


// 🔸 Main Component
const FeaturesSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { title: "Barcode Scanner", description: "Generate & scan barcodes for quick billing & stock", icon: <BarcodeIcon /> },
    { title: "Invoice Customization & Sharing", description: "Improve billing speed by 40%, customize invoices and share easily", icon: <BillingIcon /> },
    { title: "Business Custom Fields", description: "Add custom fields to tailor software to your business needs", icon: <AccountingIcon /> },
    { title: "GST Compliant", description: "Auto-calculate GST, create invoices, and file returns easily", icon: <GSTIcon /> },
    { title: "E-Invoice & Eway Bill Creation", description: "Easily generate e-invoices and e-way bills for compliance", icon: <CheckIcon /> },
    { title: "Payment Reminders", description: "Send payment reminders to customers via SMS & WhatsApp", icon: <UserIcon /> },
    { title: "WhatsApp Personalization", description: "Send personalized messages to customers directly on WhatsApp", icon: <UserIcon /> },
    { title: "Direct Print Compatibility", description: "Print receipts, bills and reports directly without extra setup", icon: <ReportIcon /> },
    { title: "Cash And Bank Management", description: "Manage cash flow and reconcile bank transactions easily", icon: <VendorIcon /> },
    { title: "Multiple Payment Modes", description: "Accept cash, card, UPI, net banking and more seamlessly", icon: <VendorIcon /> },
    { title: "Stock & Inventory Tracking", description: "Track stock in real-time, manage stock-in/out with ease", icon: <InventoryIcon /> },
    { title: "Order Management", description: "Manage sales, purchase and delivery orders efficiently", icon: <InventoryIcon /> },
    { title: "Online Store", description: "Launch your own store online and start taking orders instantly", icon: <BillingIcon /> },
    { title: "Multiple Business Reports", description: "Generate insightful reports for better business decisions", icon: <ReportIcon /> },
    { title: "Multi-Device and User Sync", description: "Use on mobile, tablet & desktop with real-time sync", icon: <UserIcon /> },
  ];

  const itemsPerPage = 3;
  const totalDots = Math.ceil(cards.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const newIndex = (activeIndex + 1) % totalDots;

      container.scrollTo({
        left: newIndex * cardWidth * itemsPerPage,
        behavior: "smooth",
      });

      setActiveIndex(newIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleDotClick = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.querySelector("div")?.offsetWidth || 0;
    container.scrollTo({
      left: index * cardWidth * itemsPerPage,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-6 animate-slide-in-left ">
        {/* Left Image */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0 ">
          <img
            src={aboutLeftImage}
            alt="About Left"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Cards + Dots */}
        <div className="md:w-2/3 relative overflow-hidden w-full animate-slide-in-right">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth "
          >
            {cards.map((card, index) => (
              <div key={index} className="w-full md:w-1/3 ">
                <Card {...card} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-white" : "bg-white/40"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
