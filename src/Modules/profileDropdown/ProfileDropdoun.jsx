import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <img
        src={user.profilePic}
        alt="Profile"
        className="w-10 h-10 rounded-full border cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-10">
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              navigate("/profilepage");
              setOpen(false);
            }}
          >
            My Account
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              onLogout(); // Call your logout logic here
              setOpen(false);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
