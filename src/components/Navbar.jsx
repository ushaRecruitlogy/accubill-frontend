import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductModel from "../Modules/Product/ProductModel";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Logo from "./Logo/Logo";

const Navbar = () => {
  const [productOpen, setProductOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

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
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative z-50">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            className="inline-flex items-center group"
          >
           <Logo/>
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <div className="relative product-dropdown">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="hover:text-[var(--bs-red)] transition flex items-center gap-1"
              >
                Product
                {productOpen ? (
                  <FiChevronUp className="transition-transform duration-200" />
                ) : (
                  <FiChevronDown className="transition-transform duration-200" />
                )}
              </button>
            </div>

            <Link className="hover:text-[var(--bs-red)] transition" to="#">
              Customer
            </Link>

            <div className="relative group">
              <Link className="hover:text-[var(--bs-red)] transition">
                Company
              </Link>
              <div className="absolute invisible text-[var(--bs-red)] opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 top-full left-0 mt-2 bg-white shadow-md rounded-md p-4 w-40 z-50">
                <Link
                  to="/blog"
                  className="block text-sm hover:text-[var(--bs-blue)] mb-2"
                >
                  About us
                </Link>
                <Link
                  to="/community"
                  className="block text-sm hover:text-[var(--bs-blue)] mb-2"
                >
                  Our Story
                </Link>
                <Link
                  to="/support"
                  className="block text-sm hover:text-[var(--bs-blue)] mb-2"
                >
                  Rural revival
                </Link>
                <Link
                  to="/contact"
                  className="block text-sm hover:text-[var(--bs-blue)] mb-2"
                >
                  Press
                </Link>
                <Link
                  to="/contact"
                  className="block text-sm hover:text-[var(--bs-blue)] mb-2"
                >
                  Events
                </Link>
              </div>
            </div>
          </div>
          <div className=" hidden sm:block relative group ml-2 cursor-pointer hover:text-[var(--bs-red)] transition">
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
                className="block text-sm hover:text-[var(--bs-blue)] mb-2"
              >
                Blog
              </Link>
              <Link
                to="/community"
                className="block text-sm hover:text-[var(--bs-blue)] mb-2"
              >
                Community
              </Link>
              <Link
                to="/support"
                className="block text-sm hover:text-[var(--bs-blue)] mb-2"
              >
                Support
              </Link>
              <Link
                to="/contact"
                className="block text-sm hover:text-[var(--bs-blue)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-6 ml-auto">
          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.836 10.615 15 14.695"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                clipRule="evenodd"
                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <button
            onClick={handleLogin}
            className="cursor-pointer px-8 py-2 transition text-white rounded-full bg-[var(--bs-red)] hover:bg-[var(--bs-blue)]"
          >
            Login
          </button>

          <button
            onClick={handleRegister}
            className="cursor-pointer px-8 py-2 bg-[var(--bs-red)] hover:bg-[var(--bs-blue)] transition text-white rounded-full"
          >
            Register
          </button>
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
    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
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
        className="text-left mt-5  hover:text-[var(--bs-red)]"
      >
        Product
      </button>

      <Link to="#" className="hover:text-[var(--bs-red)]" onClick={() => setOpen(false)}>
        Customer
      </Link>

      <div>
        <span className="block mb-1 text-gray-500">Company</span>
        <div className="ml-2 flex flex-col gap-2 text-sm">
          <Link to="/blog" className="hover:text-[var(--bs-blue)]" onClick={() => setOpen(false)}>About us</Link>
          <Link to="/community" className="hover:text-[var(--bs-blue)]" onClick={() => setOpen(false)}>Our Story</Link>
          <Link to="/support" className="hover:text-[var(--bs-blue)]" onClick={() => setOpen(false)}>Rural Revival</Link>
          <Link to="/contact" className="hover:text-[var(--bs-blue)]" onClick={() => setOpen(false)}>Press</Link>
          <Link to="/contact" className="hover:text-[var(--bs-blue)]" onClick={() => setOpen(false)}>Events</Link>
        </div>
      </div>

      {/* Three Dot Menu - Now below Company */}
      <div className="relative group mt-4 ml-2 cursor-pointer text-sm text-gray-700 hover:text-[var(--bs-red)] transition w-max">
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
            className="block text-sm hover:text-[var(--bs-blue)] mb-2"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/community"
            className="block text-sm hover:text-[var(--bs-blue)] mb-2"
            onClick={() => setOpen(false)}
          >
            Community
          </Link>
          <Link
            to="/support"
            className="block text-sm hover:text-[var(--bs-blue)] mb-2"
            onClick={() => setOpen(false)}
          >
            Support
          </Link>
          <Link
            to="/contact"
            className="block text-sm hover:text-[var(--bs-blue)]"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <button
          onClick={() => {
            handleLogin();
            setOpen(false);
          }}
          className="px-6 w-2/5 py-2 bg-[var(--bs-red)] hover:bg-[var(--bs-blue)] text-white rounded-full"
        >
          Login
        </button>

        <button
          onClick={() => {
            handleRegister();
            setOpen(false);
          }}
          className="px-6 w-2/5 py-2 bg-[var(--bs-red)] hover:bg-[var(--bs-blue)] text-white rounded-full"
        >
          Register
        </button>
      </div>
    </nav>
  </div>
)}



      {/* Product Modal Overlay */}
      {productOpen && (
        <div
          className="fixed inset-0 h-140 z-40 mt-18 bg-black/40
           bg-opacity backdrop-blur-sm flex justify-center pt-[20px]"
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
