import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import footerImage from "../assets/images//footer-dec.png";
import Logo from "./Logo/Logo";

const Footer = () => {
  return (
    <>
      <footer
        className="px-6  bg-cover bg-center md:px-8 lg:px-12 xl:px-6 pt-8 mt-50 w-full text-gray-00 "
      // className="relative  bg-cover bg-center flex bg-white px-6 py-3 mt-50 md:px-10 md:py-5 overflow-hidden"
        style={{ backgroundImage: `url(${footerImage})`,}}
      >
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
          {/*Logo*/}
          <div className="md:max-w-96">
            <Link to="/">
              <Logo />
            </Link>

            <p className="mt-6 text-sm text-gray-400">accubill@gmail.com</p>

            {/* Social Icons - Circle, Blue Background, White Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-blue)] text-white p-2.5 rounded-full hover:bg-[var(--color-blue)] transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-blue)] text-white p-2.5 rounded-full hover:bg-[var(--color-blue)] transition"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-blue)] text-white p-2.5 rounded-full hover:bg-[var(--color-blue)] transition"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 flex items-start md:justify-end gap-5 flex-wrap">
            {/* Services */}
            <div>
              <h2 className="font-semibold mb-5">Services</h2>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>
                  <a href="#">SEO Development</a>
                </li>
                <li>
                  <a href="#">Business Growth</a>
                </li>
                <li>
                  <a href="#">Social Media Management</a>
                </li>
                <li>
                  <a href="#">Website Optimization</a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h2 className="font-semibold mb-5">Community</h2>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Business Ideas</a>
                </li>
                <li>
                  <a href="#">Website Checkup</a>
                </li>
                <li>
                  <a href="#">Page Speed Test</a>
                </li>
              </ul>
            </div>
            {/* Subscribe to our Newsletters */}

            <div className="min-w-[220px] max-w-xs">
              <h3 className="font-semibold text-lg mb-3">
                Subscribe to our Newsletters
              </h3>
              <p className="text-sm mb-4 text-gray-400">
                Get our latest news and ideas to your inbox
              </p>

              {/* Responsive Form */}
              <form className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-50 sm:w-56 border border-gray-300 
                              bg-[var(--color-blue)] rounded-full px-3 py-1.5 
                              text-sm text-white placeholder-white 
                              focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
                />
                <button
                  type="submit"
                  className="bg-[var(--color-blue)] text-white p-3 rounded-full hover:bg-[var(--color-blue)] transition"
                >
                  <FaLocationArrow size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-400">
        Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved. <br />
        Designed by{" "}
        <a href="" className="underline text-red-400 ">
          K-ved
        </a>
      </p>
    </>
  );
};

export default Footer;
