// import Test from "@/pages/Test";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">About Us</h3>
          <p>
            We are committed to building responsive and modern web applications
            to meet the needs of users across the globe.
          </p>
        </div>
          {/* <Test/> */}
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Feature", "Price", "Contact", "Sign In", "Sign Up"].map(
              (link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:underline">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +91-9999999999</p>
          <p>Location: Nagpur, India</p>
        </div>
      </div>
      <div className="text-center text-sm mt-8 text-gray-500">
        © {new Date().getFullYear()} ReactPage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
