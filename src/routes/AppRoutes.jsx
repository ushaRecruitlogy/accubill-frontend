import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "@/components/Home/Hero"; 
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/Register/SignUp";
import ContactUs from "@/components/Home/ContactUs";
import Feature from "@/components/Home/Feature";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} /> 
      <Route path='/register' element={<SignUp/>} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/Feature" element={<Feature/>} /> 
    </Routes>
  );
};

export default AppRoutes;