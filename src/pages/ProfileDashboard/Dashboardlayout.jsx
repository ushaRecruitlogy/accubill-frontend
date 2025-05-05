import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { RxCodesandboxLogo } from "react-icons/rx";
import { RiArrowLeftBoxLine } from "react-icons/ri";
import { LuSquareArrowRight } from "react-icons/lu";
import Sidebar from "./sidebar";
import UserProfile from "./UserProfile";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar Container */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ${
          collapsed ? "w-[72px]" : "w-[220px]"
        } flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 text-4xl">
          <RxCodesandboxLogo />
        </div>

        {/* Sidebar Component with collapsed prop */}
        <Sidebar collapsed={collapsed} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 py-5 bg-white shadow flex items-center px-4 justify-between">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-[var(--color-red)] text-2xl"
          >
            {collapsed ? <LuSquareArrowRight /> : <RiArrowLeftBoxLine />}
          </button>

          {/* User Profile */}
          <div className="flex items-center mr-10 space-x-4">
            <UserProfile
              className="text-[var(--color-red)] text-3xl"
              user={{
                name: "Jane Doe",
                id: "USR-00123",
                email: "jane.doe@example.com",
                mobileNo: "9876543210",
              }}
            />
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 overflow-auto bg-white m-6 h-140 rounded shadow">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
