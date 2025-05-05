import React, { useState } from 'react';
import { FaPaperPlane, FaClipboardList, FaPalette, FaMoneyCheckAlt } from 'react-icons/fa';
import { FaPaperclip } from "react-icons/fa6";

const features = [
  {
    title: 'Send Estimate and Quotations',
    icon: <FaPaperPlane />,
    content: `Using our free billing software, you can easily create useful documents. It includes quotations, estimates, and accurate GST invoices.
    Inbuilt features in the GST billing app allow you to send quotes/estimates to customers anytime via WhatsApp, email, SMS, or by printing.
    
    The Vyapar app helps automate most processes. It makes the quotes and estimates error-free. You can even set up a due date for tracking invoices.`,
  },
  {
    title: 'Track Orders',
    icon: <FaClipboardList />,
    content: `Track your sales and purchase orders in real time. Know what’s pending, what’s delivered, and manage delivery timelines effectively.`,
  },
  {
    title: 'Choose Themes',
    icon: <FaPalette />,
    content: `Customize invoice themes to match your brand identity. Choose from a wide range of elegant, professional invoice templates.`,
  },
  {
    title: 'Record Expenses',
    icon: <FaMoneyCheckAlt />,
    content: `Easily record business expenses and get insights into where your money is going. Track spending and control unnecessary costs.`,
  },
];

const GSTBenefit = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        
        <p><FaPaperclip className='text-[var(--color-red)] '/></p> Features of GST Billing and Accounting Software
      </h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Tabs */}
        <div className="w-full lg:w-1/3 space-y-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer shadow-sm transition ${
                activeIndex === index
                  ? 'bg-blue-50 text-[var(--color-blue)] font-semibold'
                  : 'bg-red-50 text-[var(--color-red)] hover:bg-blue-50'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-2/3 bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4">{features[activeIndex].title}</h3>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {features[activeIndex].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GSTBenefit;
