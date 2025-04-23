import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductModel from "../Modules/Product/ProductModel";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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
          <Link to="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            <span className="text-[var(--bs-blue)]">ACCU</span>
            <span className="text-[var(--bs-red)]">BILL</span>
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
              <div className="absolute hidden group-hover:block top-full left-0 mt-2 bg-white shadow-md rounded-md p-4">
                <p className="text-sm">About Us</p>
                <p className="text-sm">Careers</p>
                <p className="text-sm">Contact</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-6 ml-auto">
          <div className="relative group ml-4 cursor-pointer hover:text-[var(--bs-red)] transition">
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
            <div className="absolute hidden group-hover:block top-full right-0 mt-2 bg-white shadow-md rounded-md p-4">
              <p className="text-sm">Option 1</p>
              <p className="text-sm">Option 2</p>
              <p className="text-sm">Option 3</p>
            </div>
          </div>

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
          className="sm:hidden"
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

      {/* Product Modal Overlay */}
      {productOpen && (
        <div
          className="fixed inset-0 z-40 mt-18 bg-black/40
           bg-opacity backdrop-blur-sm flex justify-center pt-[72px]"
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
