import React from "react";

import hoverImage from "../../assets/images/hover-bg.png";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, FinCorp Solutions",
    message:
      "This billing software has completely transformed how we handle our finances. User-friendly and super efficient!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    // backgroundImage: `url(${firstImage})`,
  },
  {
    name: "Neha Sharma",
    role: "Account Manager, SmartPay",
    message:
      "Reliable, secure, and packed with powerful features. Highly recommended for any growing business.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    // backgroundImage: `url(${secondImage})`,
  },
  {
    name: "Amit Singh",
    role: "Founder, TechStart India",
    message:
      "Excellent UI, real-time support, and seamless integration. It’s a complete solution for modern billing!",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    // backgroundImage: `url(${thirdImage})`,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl! font-bold! fontNavbar text-center! mb-10!">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative shadow-xl bg-white rounded-4xl overflow-hidden group h-[32rem] transition"
            // style={{
            //   backgroundImage: item.backgroundImage,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            {/* Top Half with Centered Image */}
            <div className="flex items-center justify-center h-3/7 ">
              <div className="relative w-44 h-44 pl-[15px] pb-[15px]">
                {/* Profile Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-tr-[3rem] border-1 border-gray-200 shadow-lg z-20"
                />
                {/* Bottom border (half width) */}
                <div className="absolute bottom-0 left-0 w-1/2 h-[15px] bg-[var(--color-red)] z-10"></div>

                {/* Left border (half height) */}
                <div className="absolute bottom-0 left-0 h-4/7 w-[15px] bg-[var(--color-red)] z-10"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-white/5  group-hover:bg-black/5 transition-all duration-500 z-0"></div>

            {/* Message */}
            <div className="p-1  text-center">
              <p className="text-black italic">
                <span className="text-4xl font-bold">"</span>
               <span className="fontNavbar text-[15px]!">{item.message}</span> 
                <br />
                <span className="text-4xl font-bold">"</span>
              </p>
            </div>

            {/* Hidden Bottom Overlay on Hover */}
            {/* Hidden Bottom Overlay on Hover */}
            <div
              className="absolute bottom-4 right-4 w-40 h-39 text-white p-4 text-left shadow-lg opacity-0 group-hover:opacity-100 transform translate-x-10 group-hover:translate-x-0 transition-all duration-700 rounded-tl-xl rounded-br-xl z-10"
              style={{
                backgroundImage: `url(${hoverImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="text-base font-bold">{item.name}</h3>
              <p className="text-sm mt-1">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;



