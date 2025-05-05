import React, { useState } from "react";
import contactBg from "../../assets/images/contact-bg.png";

import { IoCall } from "react-icons/io5";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thanks for contacting us!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="max-w-6xl w-full p-4  flex flex-col md:flex-row  ">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center p-6 animate-slide-in-left">
          <h2 className="text-4xl font-bold mb-10 text-white">Get in Touch</h2>
          <p className="text-white mb-10">
            We’d love to hear from you! Whether you have a question about
            features, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
          <div className="text-white text-xl">
            <p>You can also reach us directly, call us at</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-white text-[var(--color-red)] border border-[var(--color-red)] rounded-full p-2">
                <IoCall className="w-5 h-5" />
              </span>
              <strong className="text-white text-xl">456-7890</strong>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="md:w-1/2 p-6 animate-slide-in-right">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 bg-white bg-opacity-80 p-6 rounded-xl shadow-md"
          >
            {/* Name + Surname Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-blue-100 bg-opacity-30 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-blue-500"
              />
              <input
                type="text"
                name="surname"
                placeholder="Last Name"
                value={formData.surname}
                onChange={handleChange}
                required
                className="bg-blue-100 bg-opacity-30 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-blue-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-blue-100 bg-opacity-30  rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-blue-500"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-blue-100 bg-opacity-30 rounded-3xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-blue-500"
            />

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="cursor-pointer px-8 py-2 bg-[var(--color-blue)] hover:bg-[var(--color-blue)] transition text-white rounded-full shadow"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
