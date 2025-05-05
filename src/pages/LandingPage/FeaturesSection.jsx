import React, { useEffect, useRef, useState } from "react";
import contactBg from "../../assets/images/about-bg.png";
import aboutLeftImage from "../../assets/images/about-left-image.png";

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5-3.5 9.74-8 11-4.5-1.26-8-6-8-11V7l8-4z" />
  </svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6M13 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V9l-7-5z" />
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm0 4h16" />
  </svg>
);

const CalculatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zM16 7h.01M8 11h8m-8 4h8" />
  </svg>
);

const RepeatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M4 20l5-5M20 4l-5 5" />
  </svg>
);

const FileCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M13 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V9l-7-5z" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path strokeWidth={2} d="M2 12h20M12 2c2 2 4 6 4 10s-2 8-4 10c-2-2-4-6-4-10s2-8 4-10z" />
  </svg>
);

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M3 3v18h18M9 17V9M15 17V5" />
  </svg>
);

const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M3 7l9 5 9-5M3 17l9 5 9-5M3 7v10l9 5 9-5V7" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M15 17h5l-1.405-1.405C18.21 14.79 18 13.918 18 13V9a6 6 0 10-12 0v4c0 .918-.21 1.79-.595 2.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M3 7h4l2 3h10a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z" />
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M3 15a4 4 0 100 8h13a4 4 0 100-8H5.5a4.5 4.5 0 010-9 5.5 5.5 0 0110.9 1.5" />
  </svg>
);

const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M3 5h18v14H3zM3 9h18M15 13h2v2h-2z" />
  </svg>
);

const BanknoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect width="18" height="12" x="3" y="6" rx="2" strokeWidth={2} />
    <path strokeWidth={2} d="M9 12h6" />
  </svg>
);

const LanguagesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M12 3v18m0-18c-3.333 3-5 6.5-5 11s1.667 8 5 11m0-18c3.333 3 5 6.5 5 11s-1.667 8-5 11" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path strokeWidth={2} d="M12 6v6l4 2" />
  </svg>
);

const LayoutDashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M3 3h7v7H3V3zm11 0h7v4h-7V3zM3 14h7v7H3v-7zm11 3h7v4h-7v-4z" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 4.25 7 13 7 13s7-8.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const FileSignatureIcon = () => (
  <svg xmlns="http://wwwhttp://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M16 2H8a2 2 0 00-2 2v16l4-4h6a2 2 0 002-2V4a2 2 0 00-2-2z" />
  </svg>
);

const FileSearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M10 2H6a2 2 0 00-2 2v16l4-4h6a2 2 0 002-2v-4M21 21l-4.35-4.35" />
  </svg>
);

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4v12" />
  </svg>
);

const BarcodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M2 4h2v16H2V4zm4 0h1v16H6V4zm3 0h1v16H9V4zm3 0h2v16h-2V4zm4 0h1v16h-1V4zm3 0h2v16h-2V4z" />
  </svg>
);

const FilePlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M13 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V9l-7-5zM12 10v6m3-3H9" />
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeWidth={2} d="M3 3h13v13H3V3zm13 0l5 5v8h-5V3zm-3 16a2 2 0 100 4 2 2 0 000-4zm6 0a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);


// 🔹 Card Component
const Card = ({ title, description, icon }) => (
  <div className="text-sm text-white w-full md:w-50 h-60 p-4 hover:shadow-xl duration-400">
    <div className="flex flex-col items-center justify-between">
      <div className="bg-white p-3 rounded-full mb-3 text-[var(--color-red)]">
        {icon}
      </div>
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
    {
      title: "User Access Control",
      description: "Implement role-based access controls to ensure data security and appropriate permission levels for different users.",
      icon: <ShieldIcon />,
    },
    {
      title: "Invoice Customization & Template Design",
      description: "Allow users to customize invoices with selectable templates, logos, company info, authorization text, and currency preferences.",
      icon: <FileTextIcon />,
    },
    {
      title: "Payment Gateway Integration",
      description: "Integrate with multiple gateways like PayPal, Stripe, Razorpay, and Instamojo for real-time invoice settlements and payment tracking.",
      icon: <CreditCardIcon />,
    },
    {
      title: "Automated Tax Calculations",
      description: "Automatically calculate taxes such as GST, VAT, and service tax based on the user's country or region during invoice generation.",
      icon: <CalculatorIcon />,
    },
    {
      title: "Recurring Billing & Subscriptions",
      description: "Enable the creation of recurring invoices, subscription plans, and scheduled payments for consistent billing cycles.",
      icon: <RepeatIcon />,
    },
    {
      title: "GST E-filing & Compliance",
      description: "Directly integrate with GST systems to automate GST returns and reporting for compliance and easy filing.",
      icon: <FileCheckIcon />,
    },
    {
      title: "Multi-currency Support",
      description: "Support international transactions by enabling users to operate and report in multiple currencies.",
      icon: <GlobeIcon />,
    },
    {
      title: "Financial Reports & Dashboards",
      description: "Provide real-time financial reports and analytics dashboards showing sales, revenue, expenses, and taxes.",
      icon: <BarChartIcon />,
    },
    {
      title: "Inventory & Stock Management",
      description: "Track inventory levels, set reorder alerts, and manage product stock across locations efficiently.",
      icon: <PackageIcon />,
    },
    {
      title: "Debt Collection & Payment Reminders",
      description: "Send automated reminders for overdue invoices and generate debt collection reports to recover payments on time.",
      icon: <BellIcon />,
    },
    {
      title: "Document Management",
      description: "Upload, manage, and organize key documents such as receipts, invoices, and contracts in one place.",
      icon: <FolderIcon />,
    },
    {
      title: "Cloud Backup & Data Security",
      description: "Ensure data protection with automatic cloud backups and robust encryption protocols.",
      icon: <CloudIcon />,
    },
    {
      title: "Expense Management",
      description: "Track daily business expenses, bills, and receipts for better financial oversight and control.",
      icon: <WalletIcon />,
    },
    {
      title: "Bank Reconciliation",
      description: "Sync bank transactions and match them with accounting entries for seamless reconciliation.",
      icon: <BanknoteIcon />,
    },
    {
      title: "Multi-language Support",
      description: "Provide the interface in multiple languages for better accessibility to global users.",
      icon: <LanguagesIcon />,
    },
    {
      title: "Time Tracking for Billable Hours",
      description: "Track billable hours, set hourly rates, and generate invoices based on time worked.",
      icon: <ClockIcon />,
    },
    {
      title: "Customizable Dashboards",
      description: "Allow users to personalize their dashboard with preferred financial KPIs and metrics.",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Multi-location Business Support",
      description: "Manage multiple branches, warehouses, or stores with centralized tracking and control.",
      icon: <MapPinIcon />,
    },
    {
      title: "Document Templates for Contracts & Agreements",
      description: "Use pre-designed templates to quickly generate contracts, agreements, and legal documents.",
      icon: <FileSignatureIcon />,
    },
    {
      title: "Tax Filing & Reporting (TDS & Advance Tax)",
      description: "Generate reports for TDS, Advance Tax, and GST filings to simplify compliance and tax planning.",
      icon: <FileSearchIcon />,
    },
    {
      title: "Bulk Import/Export (CSV, Excel)",
      description: "Easily migrate and manage data with bulk import/export options for customers, invoices, expenses, and more.",
      icon: <UploadIcon />,
    },
    {
      title: "Barcode Printing for Inventory",
      description: "Generate and scan barcodes to streamline inventory management and billing accuracy.",
      icon: <BarcodeIcon />,
    },
    {
      title: "Quotation & Purchase Order Management",
      description: "Create and manage quotations and purchase orders to streamline procurement and sales processes.",
      icon: <FilePlusIcon />,
    },
    {
      title: "Delivery Challan Generation",
      description: "Generate delivery challans for improved delivery tracking and transparent client communication.",
      icon: <TruckIcon />,
    }
    
  ]

  const itemsPerPage = 4;
  const totalDots = Math.ceil(cards.length / itemsPerPage);
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;
  
      const newIndex = (activeIndex + 1) % totalDots;
      const scrollAmount = container.scrollWidth / totalDots;
  
      container.scrollTo({
        left: newIndex * scrollAmount,
        behavior: "smooth",
      });
  
      setActiveIndex(newIndex);
    }, 4000);
  
    return () => clearInterval(interval);
  }, [activeIndex, totalDots]);
  

  const handleDotClick = (index) => {
    const container = scrollRef.current;
    if (!container) return;
  
    const scrollAmount = container.scrollWidth / totalDots;
  
    container.scrollTo({
      left: index * scrollAmount,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };
  
  return (
    <>
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-500 text-center">
          Simplify Your Workflow{" "}
          <span className="text-[var(--color-blue)]">with </span>
          <br /> These <span className="text-[var(--color-red)]"> Key Highlights</span>
        </h1>
        {/* <h1>
        Simplify Your Workflow with These Highlights
        </h1> */}
      </div>
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
    </>
  );
};

export default FeaturesSection;
