import React, { useState } from 'react';
import contactBg from '../../assets/images/contact-bg.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for contacting us!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="max-w-5xl w-full p-8  shadow-lg flex flex-col md:flex-row  ">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center p-6 animate-slide-in-left">
          <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-white mb-6">
            We’d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <p className="text-white">
            You can also reach us directly at <strong>support@example.com</strong> or call us at <strong>(123) 456-7890</strong>.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="md:w-1/2 animate-slide-in-right ">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 bg-white p-6 rounded-xl shadow-md "
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="cursor-pointer px-8 py-2 bg-[var(--bs-blue)] transition text-white rounded-full"
                >
              
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;


