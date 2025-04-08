import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

const handleSignIn = () => {
        console.log("Navigating to /login");
        navigate("/login");
};

  const handleSignUp = () => {
    console.log("Navigating to /register");
    navigate("/register");
  };

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">Accu-Bill</Link>
        </h1>
        <div className="flex space-x-6 items-center">
          {["Home", "Feature", "Price", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-500 text-sm sm:text-base"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => {
              handleSignIn();
              handleButtonClick("signIn");
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base ${
              activeButton === "signIn"
                ? "bg-gray-300 text-blue-500"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              handleSignUp();
              handleButtonClick("signUp");
            }}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base ${
              activeButton === "signUp"
                ? "bg-gray-300 text-blue-500"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
