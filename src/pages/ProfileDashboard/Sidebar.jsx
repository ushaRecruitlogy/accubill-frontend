import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdPersonalInjury, MdMarkEmailUnread } from "react-icons/md";
import { FaMobileRetro } from "react-icons/fa6";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { SiSpringsecurity } from "react-icons/si";
import { RiSettings5Fill } from "react-icons/ri";

const Sidebar = ({ collapsed }) => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="flex-1 px-2 py-10   ml-5 p-2   text-sm">


      {/* Profile Section */}
      <div>
        <div
          className="cursor-pointer font-normal mt-5 mb-3  text-gray-300 hover:text-[var(--color-blue)] transition"
          onClick={() => setOpenMenu(openMenu === "profile" ? null : "profile")}
        >
          <div className="flex items-center justify-between pr-2">
            <div className="flex items-center space-x-2">
              <CgProfile className="text-2xl" />
              {!collapsed && <span>Profile</span>}
            </div>
            {!collapsed &&
              (openMenu === "profile" ? (
                <FiChevronUp className="text-base" />
              ) : (
                <FiChevronDown className="text-base" />
              ))}
          </div>
        </div>

        {/* Profile Submenu */}
        <div
          className={`ml-4  overflow-hidden transition-all duration-300 ${
            openMenu === "profile" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <NavLink
            to="/dashboard/profile/personal"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 profileDashFont"
                  : "text-gray-200 hover:text-white hover:bg-[var(--color-blue)]"
              }`
            }
          >
            <MdPersonalInjury />
            {!collapsed && <span >Personal Info</span>}
          </NavLink>

          <NavLink
            to="/dashboard/profile/email"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-white hover:bg-[var(--color-blue)]"
              }`
            }
          >
            <MdMarkEmailUnread />
            {!collapsed && <span>Email Address</span>}
          </NavLink>

          <NavLink
            to="/dashboard/profile/mobile"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  :"text-gray-200 hover:text-white hover:bg-[var(--color-blue)]"
              }`
            }
          >
            <FaMobileRetro />
            {!collapsed && <span>Mobile Numbers</span>}
          </NavLink>
        </div>
      </div>

      {/* Security Section */}
      <div>
        <div
          className="cursor-pointer font-normal mt-5 mb-3 text-gray-300 hover:text-[var(--color-blue)] transition"
          onClick={() => setOpenMenu(openMenu === "Security" ? null : "Security")}
        >
          <div className="flex items-center justify-between pr-2">
            <div className="flex items-center space-x-2">
              <SiSpringsecurity className="text-2xl" />
              {!collapsed && <span>Security</span>}
            </div>
            {!collapsed &&
              (openMenu === "Security" ? (
                <FiChevronUp className="text-base" />
              ) : (
                <FiChevronDown className="text-base" />
              ))}
          </div>
        </div>

        {/* Security Submenu */}
        <div
          className={`ml-4 overflow-hidden transition-all duration-300 ${
            openMenu === "Security" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <NavLink
            to="/dashboard/security/password"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-white hover:bg-[var(--color-blue)]"
              }`
            }
          >
            <MdPersonalInjury />
            {!collapsed && <span>Password</span>}
          </NavLink>

          <NavLink
            to="/dashboard/security/geo-fencing"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-white hover:bg-[var(--color-blue)]"
              }`
            }
          >
            <MdMarkEmailUnread />
            {!collapsed && <span>Geo-fencing</span>}
          </NavLink>

          <NavLink
            to="/dashboard/security/ip-address"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-white hover:bg-[var(--color-blue)]"
              }`
            }
          >
            <FaMobileRetro />
            {!collapsed && <span>Allowed IP Address</span>}
          </NavLink>

          <NavLink
            to="/dashboard/security/app-passwords"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-white hover:bg-[var(--color-blue)]"
              }`
            }
          >
            <MdPersonalInjury />
            {!collapsed && <span>App Passwords</span>}
          </NavLink>

          <NavLink
            to="/dashboard/security/device-signins"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-white hover:bg-[var(--color-blue)]"
              }`
            }
          >
            <MdMarkEmailUnread />
            {!collapsed && <span>Device Sign-ins</span>}
          </NavLink>
        </div>
      </div>

      {/* Settings Section */}
      <div>
        <div
          className="cursor-pointer font-normal mt-5 mb-3 text-gray-300 hover:text-[var(--color-blue)] transition"
          onClick={() => setOpenMenu(openMenu === "Settings" ? null : "Settings")}
        >
          <div className="flex items-center justify-between pr-2">
            <div className="flex items-center space-x-2">
              <RiSettings5Fill className="text-2xl" />
              {!collapsed && <span>Settings</span>}
            </div>
            {!collapsed &&
              (openMenu === "Settings" ? (
                <FiChevronUp className="text-base" />
              ) : (
                <FiChevronDown className="text-base" />
              ))}
          </div>
        </div>

        {/* Settings Submenu */}
        <div
          className={`ml-4 overflow-hidden transition-all duration-300 ${
            openMenu === "Settings" ? "max-h-screen" : "max-h-0"
          }`}
        >
          <NavLink
            to="/dashboard/settings/preferences"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-[var(--color-blue)] hover:bg-blue-50"
              }`
            }
          >
            <MdPersonalInjury />
            {!collapsed && <span>Preferences</span>}
          </NavLink>

          <NavLink
            to="/dashboard/settings/authorized-websites"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-[var(--color-blue)] hover:bg-blue-50"
              }`
            }
          >
            <MdMarkEmailUnread />
            {!collapsed && <span>Authorized Websites</span>}
          </NavLink>

          <NavLink
            to="/dashboard/settings/linked-accounts"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-[var(--color-blue)] hover:bg-blue-50"
              }`
            }
          >
            <FaMobileRetro />
            {!collapsed && <span>Linked Accounts</span>}
          </NavLink>

          <NavLink
            to="/dashboard/settings/close-account"
            className={({ isActive }) =>
              `block flex items-center space-x-2 px-2 mb-2 p-3  rounded transition ${
                isActive
                  ? "bg-blue-100 text-[var(--color-blue)]"
                  : "text-gray-200 hover:text-[var(--color-blue)] hover:bg-blue-50"
              }`
            }
          >
            <MdPersonalInjury />
            {!collapsed && <span>Close Account</span>}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
