import React from 'react';
import logo from '../../assets/images/logoIcon.png'

const Logo = () => {
  return (
    <div className="flex items-center justify-center font-extrabold text-3xl cursor-pointer">
      <div className="bg-[var(--color-red)] text-white rounded-full h-12 w-12 flex items-center justify-center mr-3 shadow-md">
        <img src={logo} className="w-9 h-9" />
      </div>
      <div className="flex">
        <span className="text-[var(--color-blue)] transition-transform duration-300 group-hover:animate-bounce">
          ACCU
        </span>
        <span className="text-[var(--color-red)] ml-1 transition-transform duration-300 group-hover:animate-bounce">
          BILL
        </span>
      </div>
    </div>
  );
};

export default Logo;
