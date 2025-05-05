import React, { useState } from 'react';
import bgImage from '../../assets/images/faq-que-bg.png'; // adjust path if needed
import { IoChevronDown,IoChevronUp  } from "react-icons/io5";

const faqData = [
  {
    question: "Which is the best software for billing?",
    answer: "Some of the best billing software include Zoho Invoice, TallyPrime, and QuickBooks depending on your needs.",
  },
  {
    question: "What is billing software?",
    answer: "Billing software helps businesses generate invoices, manage accounts, and track payments automatically.",
  },
  {
    question: "How much does a billing software cost?",
    answer: "Billing software can range from free to ₹5000+ per month depending on features and user licenses.",
  },
  {
    question: "Which software is best for billing?",
    answer: "Zoho Invoice, Marg ERP, and QuickBooks are among the top choices for billing solutions.",
  },
  {
    question: "Is there free billing software?",
    answer: "Yes, options like Zoho Invoice (free for small businesses) and Vyapar (basic version) are available for free.",
  },
  {
    question: "Which software is used for GST billing?",
    answer: "Software like TallyPrime, Zoho Books, and Marg ERP are widely used for GST billing in India.",
  },
  {
    question: "Which is the best free billing software for PC?",
    answer: "Vyapar and Zoho Invoice offer excellent free versions compatible with PC.",
  },
  {
    question: "Which is the best free billing software in India?",
    answer: "Vyapar and Zoho Invoice are considered top choices for free billing in India.",
  },
  {
    question: "How do I invoice clients for free?",
    answer: "Use free tools like Zoho Invoice, Invoice Ninja, or Wave to invoice clients at no cost.",
  },
  {
    question: "What is online billing software?",
    answer: "Online billing software allows you to create, send, and track invoices over the internet through cloud-based systems.",
  },
  {
    question: "What is the cheapest billing software?",
    answer: "Wave, Zoho Invoice, and Marg ERP offer some of the cheapest or even free billing solutions.",
  },
  {
    question: "How do I get a computerised GST bill?",
    answer: "You can use GST-enabled software like Tally, Zoho Books, or Vyapar to generate computerized GST-compliant bills.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-cover bg-center py-10 px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto bg-white bg-opacity-30 rounded-lg p-6 shadow-md">
        <h2 className="text-3xl! fontNavbar font-bold! text-center! mb-8!">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md mb-4 p-4 shadow cursor-pointer transition-all bg-white"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center text-[14px]! fontNavbar">
              <span>{item.question}</span>
              <span className="text-xl">{openIndex === index ? <IoChevronDown className='text-[var(--color-red)]'/> : <IoChevronUp className='text-[var(--color-blue)]' />}</span>
            </div>
            {openIndex === index && (
              <div className="mt-3 p-3 rounded bg-[var(--color-red-light)] fontTopHeading text-[14px]!">
          
              
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
