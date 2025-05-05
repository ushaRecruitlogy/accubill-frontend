import React from "react";
import bannerDecLeft from "../../assets/images/baner-dec-left.png";
import bannerRightImage from "../../assets/images/banner-right-image.png";
import bannerDecRight from "../../assets/images/baner-dec-right.png";

const HeroSection = () => {
  return (
    <div className="relative bg-white px-4 py-10 md:px-10 md:py-20 overflow-hidden">
      {/* Left Decoration */}
      <img
        src={bannerDecLeft}
        alt="Left Decoration"
        className="absolute left-0 top-0 z-0 w-24 md:w-40"
      />

      {/* Right Decoration */}
      <img
        src={bannerDecRight}
        alt="Right Decoration"
        className="absolute right-0 top-0 z-0 w-24 md:w-40"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-left animate-slide-in-left">
        <p className="text-lg md:text-xl font-bold mb-4 colorPinkRed">
  Welcome to our Accounting Solutions
</p>

          <h1 className="text-3xl md:text-6xl font-bold text-gray-600 leading-tight mb-6">
            Accounting{" "}
            <span className="text-[65px]! md:text-xl font-bold mb-4 colorPinkRed">solutions</span> are
            streamlined for{" "}
            <span className="text-[var(--color-blue)]">accuracy</span>
          </h1>

          <p className="text-base md:text-lg text-gray-500">
            ensuring your business stays financially organized and on track.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center animate-slide-in-right">
          <img
            src={bannerRightImage}
            alt="Banner Right"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
