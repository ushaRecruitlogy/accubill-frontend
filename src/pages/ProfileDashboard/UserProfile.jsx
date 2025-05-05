import React, { useState, useRef, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { toast } from 'react-toastify';

const UserProfile = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    setIsDropdownOpen(false);
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <style>
        {`
        .fontSize {
          color: #555555;
          font-size: 0.8rem;
          font-weight: 400;
        }

        .headingFont {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: #555555;
        }
        `}
      </style>

      {/* Avatar */}
      <div
        className="cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <CgProfile className="text-3xl text-[var(--color-red)]" />
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-65 bg-white border border-gray-300 rounded shadow-lg z-10">
          <div className="px-4 py-3 text-sm text-gray-800 space-y-1">
            <p className="fontSize"><span>Name: </span>{user.name}</p>
            <p><span className="font-medium">ID: </span><span className='fontSize'>{user.id}</span></p>
            <p><span className="font-medium">Email: </span><span className='fontSize'>{user.email}</span></p>
            <p><span className="font-medium">Mobile: </span><span className='fontSize'>{user.mobileNo}</span></p>
          </div>
          <div className="border-t border-gray-200">
            <button
              className="w-full px-4 py-2 text-sm text-[var(--color-red)] hover:bg-red-100 text-left"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
