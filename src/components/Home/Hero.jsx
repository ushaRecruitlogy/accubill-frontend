import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/gst.svg";
import ContactUs from "./ContactUs";
import ImageCarousel from "./ImageCarousel";
import Feature from "./Feature";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="bg-red-400 border border-blue-200 rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-10">
          {/* Left: Animated Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={heroImage}
              alt="GST Billing"
              className="rounded-xl w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right: Animated Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white hover:text-black  mb-6">
              GST Billing & Return Filing
            </h2>
            <p className="text-gray-700 text-lg md:text-xl  leading-relaxed">
              Experience easy account and billing management with Marg Software.
              Handle invoices, track payments, and manage financial records
              seamlessly. Run internal audits to ensure 100% error-free repo
            </p>
          </motion.div>
        </div>
        <div className="min-h-screen mt-10 flex flex-col items-center justify-center">
          <ImageCarousel />
        </div>
        <Feature/>
        <ContactUs />
      </div>
    </section>
  );
};

export default Hero;
