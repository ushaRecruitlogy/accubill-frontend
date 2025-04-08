import React, { useRef } from "react";
import Hero from "../components/Home/Hero";
import ContactUs from "../components/Home/ContactUs";

const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero onScrollToContact={scrollToContact} />
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
