import React from 'react';
import { NavLink } from 'react-router-dom';

const CRMNavbar = () => {
  const navItems = [
    { name: 'Home', path: '/crm/home' },
    { name: 'Leads', path: '/crm/leads' },
    { name: 'Contacts', path: '/crm/contacts' },
    { name: 'Accounts', path: '/crm/accounts' },
    { name: 'Deals', path: '/crm/deals' },
    { name: 'Services', path: '/crm/services' },
    { name: 'Projects', path: '/crm/projects' },
  ];

  return (
    <nav className="flex items-center px-6 py-3 border-b bg-gray-600 text-white shadow-sm">
      <div className="text-xl text-white font-bold mr-10">CRM</div>
      <ul className="flex items-center  gap-6 ">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `pb-1 border-b-2  ${
                  isActive ? 'border-[var(--color-blue)] text-[var(--color-blue)]' : 'border-transparent text-white! fontHeading'
                } hover:text-[var(--color-blue)]`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {/* "More" Dropdown */}
        <li className="relative group">
          <button className="text-gray-700 hover:text-[var(--color-blue)]">More ▾</button>
          <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md p-2 rounded w-40 z-10">
            <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Reports</p>
            <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Campaigns</p>
            <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Settings</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default CRMNavbar;
