import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ title, description, icon }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 5, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.5 }}
    className="text-sm text-gray-500 w-72 divide-y divide-gray-300 border border-gray-300 rounded bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex flex-col items-center justify-between px-4 py-8">
      <div className="bg-green-100 p-3 rounded-full mb-3 text-green-600">
        {icon}
      </div>
      <h2 className="text-lg text-gray-800 font-semibold text-center">{title}</h2>
      <p className="text-center mt-2">{description}</p>
    </div>
  </motion.div>
);

const Feature = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const cards = [
    { title: "Fast Billing", description: "Improve Billing Speed by 40% with POS, barcode, and touchscreen systems.", icon: <BillingIcon /> },
    { title: "Inventory Management", description: "Track stock, reorder points, and expiry dates with ease.", icon: <InventoryIcon /> },
    { title: "Easy Accounting", description: "Track expenses, balance sheets, and financial reports easily.", icon: <AccountingIcon /> },
    { title: "GST Compliance", description: "Auto-calculate GST and generate tax reports easily.", icon: <GSTIcon /> },
    { title: "Customer Ledger", description: "Maintain customer balances, payments, and outstanding dues.", icon: <CheckIcon /> },
    { title: "Barcode Integration", description: "Generate & scan barcodes for quick billing and inventory.", icon: <BarcodeIcon /> },
    { title: "Multi-User Access", description: "Create roles & permissions for employees with full audit logs.", icon: <UserIcon /> },
    { title: "Real-Time Reports", description: "Generate real-time sales, purchase, and profit reports.", icon: <ReportIcon /> },
    { title: "Vendor Management", description: "Track vendor payments, purchase history, and contact details.", icon: <VendorIcon /> },
  ];

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, cards.length));
  };

  return (
    <div className="bg-blue-50 py-10 px-4">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <AnimatePresence>
          {cards.slice(0, visibleCount).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </AnimatePresence>
      </div>
      {visibleCount < cards.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleShowMore}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

// SVG Icons (same as before, but organized for readability)
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M9 16h6M3 21h18M4 3h16a1 1 0 011 1v5H3V4a1 1 0 011-1z" />
  </svg>
);

const GSTIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const BarcodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M12 12a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);

const ReportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V3H5v18h14V11h-8z" />
  </svg>
);

const VendorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V9a4 4 0 00-4-4H4m0 0L3 5l1 1m0 0l1 1-1 1M3 5v6h18" />
  </svg>
);

export default Feature;
