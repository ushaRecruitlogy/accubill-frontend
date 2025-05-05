import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProductModel from "../Modules/Product/ProductModel";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Logo from "./Logo/Logo";
import LanguageDropdown from "./lang/LanguageDropdown";
import { style } from "framer-motion/client";

const Navbar = () => {
  const [productOpen, setProductOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = React.useState("EN");

  const dropdownRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const user = {
    isAuthenticated: false, // Set to false to test unauthenticated state
    profilePic: "https://i.pravatar.cc/40?img=12", // Mock profile picture
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Add localization logic if necessary
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const closeDropdowns = (e) => {
    if (!e.target.closest(".product-dropdown")) {
      setProductOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  // Disable scroll when product modal is open
  React.useEffect(() => {
    document.body.style.overflow = productOpen ? "hidden" : "auto";
  }, [productOpen]);

  return (
    <>
      <nav className=" custom-w-full  flex items-center justify-between px-10 md:px-8 lg:px-12 xl:px-6 py-4 border-b border-gray-300 bg-white relative z-50">
        {/* <nav className="relative  flex bg-white px-4 py-3 md:px-10 md:py-5 overflow-hidden z-50"> */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            className="inline-flex items-center group"
          >
            <Logo />
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <div className="relative product-dropdown">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className=" fontNavbar hover:text-[var(--color-red)]! transition! flex! items-center! gap-1!"
              >
                Product
                {productOpen ? (
                  <FiChevronUp className="transition-transform duration-200" />
                ) : (
                  <FiChevronDown className="transition-transform duration-200" />
                )}
              </button>
            </div>

            <Link
              className=" fontNavbar hover:text-[var(--color-red)]! transition! flex! items-center! gap-1!"
              to="#"
            >
              Customer
            </Link>

            <div className="relative group">
              <Link className=" fontNavbar hover:text-[var(--color-red)]! transition! flex! items-center! gap-1!">
                Company
              </Link>
              <div className="absolute invisible text-[var(--color-red)] opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 top-full left-0 mt-2 bg-white shadow-md rounded-md p-4 w-40 z-50">
                <Link
                  to="/blog"
                  className="block text-sm hover:text-[var(--color-blue)] mb-2"
                >
                  About us
                </Link>
                <Link
                  to="/community"
                  className="block text-sm hover:text-[var(--color-blue)] mb-2"
                >
                  Our Story
                </Link>
                <Link
                  to="/support"
                  className="block text-sm hover:text-[var(--color-blue)] mb-2"
                >
                  Rural revival
                </Link>
                <Link
                  to="/contact"
                  className="block text-sm hover:text-[var(--color-blue)] mb-2"
                >
                  Press
                </Link>
                <Link
                  to="/contact"
                  className="block text-sm hover:text-[var(--color-blue)] mb-2"
                >
                  Events
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden sm:block relative group ml-2 cursor-pointer hover:text-[var(--color-red)] transition">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="3" r="2" fill="currentColor" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="10" cy="17" r="2" fill="currentColor" />
            </svg>

            <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 top-full left-0 mt-2 bg-white shadow-md rounded-md p-4 w-40 z-50">
              <Link
                to="/blog"
                className="block text-sm hover:text-[var(--color-blue)] mb-2"
              >
                Blog
              </Link>
              <Link
                to="/community"
                className="block text-sm hover:text-[var(--color-blue)] mb-2"
              >
                Community
              </Link>
              <Link
                to="/support"
                className="block text-sm hover:text-[var(--color-blue)] mb-2"
              >
                Support
              </Link>
              <Link
                to="/contact"
                className="block text-sm hover:text-[var(--color-blue)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="flex  gap-2 p-2">
          {/* Hide login/register if on profile page */}
          {location.pathname !== "/profilepage" && (
            <div className="hidden sm:flex items-center gap-6 ml-auto mr-0">
              {user.isAuthenticated ? (
                <>
                  <div className="relative ">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[var(--color-red)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    {/* LanguageDropdown  select lang */}
                    <LanguageDropdown />
                  </div>
                  <div className="relative" ref={dropdownRef}>
                    <img
                      src={user.profilePic}
                      alt="Profile"
                      className="w-10 h-10 rounded-full border cursor-pointer"
                      onClick={() => setOpen(!open)}
                    />
                    {open && (
                      <div className="absolute w-50 h-20 flex bg-gray-400 flex-row right-0 mt-2 bg-white shadow-lg rounded-md  z-10">
                        <button
                          className=" thinText block w-full text-left px-2 py-2 "
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: "300",
                            lineHeight: "24px",
                            color: "rgb(20, 19, 19)",
                          }}
                          onClick={() => {
                            navigate("/profilepage");
                            setOpen(false);
                          }}
                        >
                          My Account
                        </button>
                        <button
                          className=" thinText block w-full text-left px-4 py-2 "
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: "300",
                            lineHeight: "24px",
                            color: "rgb(20, 19, 19)",
                          }}
                          onClick={() => {
                            onLogout();
                            setOpen(false);
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLogin}
                    style={{
                      background: "linear-gradient(to top, #ef4444, #ec4899)",
                    }}
                    className="cursor-pointer px-8 py-2 transition text-white rounded-full hover:opacity-90"
                  >
                    Login
                  </button>

                  <button
                    onClick={handleRegister}
                    className="cursor-pointer px-8 py-2  transition text-white rounded-full"
                    style={{
                      background: "linear-gradient(to top, #ef4444, #ec4899)",
                    }}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden p-3 mr-4"
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="sm:hidden fixed top-0 left-0 right-5 bg-white z-40 p-6 overflow-y-auto animate-slide-in-down shadow-lg">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-xl font-bold"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-4 mt-10 text-lg font-medium text-gray-700">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setProductOpen(true);
                setOpen(false);
              }}
              className="text-left mt-5 hover:text-[var(--color-red)]"
            >
              Product
            </button>

            <Link
              to="#"
              className="hover:text-[var(--color-red)]"
              onClick={() => setOpen(false)}
            >
              Customer
            </Link>

            <div>
              <span className="block mb-1 text-gray-500">Company</span>
              <div className="ml-2 flex flex-col gap-2 text-sm">
                <Link
                  to="/blog"
                  className="hover:text-[var(--color-blue)]"
                  onClick={() => setOpen(false)}
                >
                  About us
                </Link>
                <Link
                  to="/community"
                  className="hover:text-[var(--color-blue)]"
                  onClick={() => setOpen(false)}
                >
                  Our Story
                </Link>
                <Link
                  to="/support"
                  className="hover:text-[var(--color-blue)]"
                  onClick={() => setOpen(false)}
                >
                  Rural Revival
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-[var(--color-blue)]"
                  onClick={() => setOpen(false)}
                >
                  Press
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-[var(--color-blue)]"
                  onClick={() => setOpen(false)}
                >
                  Events
                </Link>
              </div>
            </div>

            <div className="relative group mt-4 ml-2 cursor-pointer text-sm text-gray-700 hover:text-[var(--color-red)] transition w-max">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="3" r="2" fill="currentColor" />
                  <circle cx="10" cy="10" r="2" fill="currentColor" />
                  <circle cx="10" cy="17" r="2" fill="currentColor" />
                </svg>
                <span>More</span>
              </div>

              <div className="absolute left-6 top-0 translate-x-full ml-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-md rounded-md p-4 w-40 z-50">
                <Link
                  to="/blog"
                  className="block text-sm hover:text-[var(--color-blue)] mb-2"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/community"
                  className="block text-sm hover:text-[var(--color-blue)] mb-2"
                  onClick={() => setOpen(false)}
                >
                  Community
                </Link>
                <Link
                  to="/support"
                  className="block text-sm hover:text-[var(--color-blue)] mb-2"
                  onClick={() => setOpen(false)}
                >
                  Support
                </Link>
                <Link
                  to="/contact"
                  className="block text-sm hover:text-[var(--color-blue)]"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hide login/register in mobile menu too */}
            {location.pathname !== "/profilepage" && (
              <div className="hidden sm:flex items-center gap-6 ml-auto mr-0">
                {/* Language Selector */}
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="border border-gray-300 px-3 py-1 rounded-full text-sm text-gray-700 bg-white focus:outline-none"
                >
                  <option value="EN">EN</option>
                  <option value="FR">FR</option>
                  <option value="ES">ES</option>
                </select>

                {user.isAuthenticated ? (
                  <img
                    src={user.profilePic}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border cursor-pointer"
                    onClick={() => navigate("/profilepage")}
                  />
                ) : (
                  <>
                    <button
                      onClick={handleLogin}
                      className="cursor-pointer px-8 py-2 transition text-white rounded-full bg-[var(--color-red)] hover:bg-[var(--color-blue)]"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleRegister}
                      className="cursor-pointer px-8 py-2 bg-[var(--color-red)] hover:bg-[var(--color-blue)] transition text-white rounded-full"
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
            )}
          </nav>
        </div>
      )}

      {/* Product Modal Overlay */}
      {productOpen && (
        <div
          className="fixed inset-0 h-full z-40 mt-18 bg-black/40 bg-opacity backdrop-blur-sm flex justify-center pt-[20px]"
          onClick={() => setProductOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <ProductModel />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
