import React from "react";
import LandingPage from "../pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboardlayout from "../pages/ProfileDashboard/Dashboardlayout";
import Personal from "../pages/ProfileDashboard/Profile/Personal";
import UserMails from "../pages/ProfileDashboard/Profile/UsereMails";
import MobileNumbers from "../pages/ProfileDashboard/Profile/MobileNumbers";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import CRMLayout from "../Modules/CRM/CRMLayout";
import CRMHome from "../Modules/CRM/Dashboard/CRMHome";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profilepage" element={<ProfilePage />} />


      {/* dashboard layout  */}
      <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route path="profile/personal" element={<Personal />} />
        <Route path="profile/email" element={<UserMails />} />
        <Route path="profile/mobile" element={<MobileNumbers />} />
      </Route>

      {/* CRM Routes */}
      <Route path="/crm" element={<CRMLayout />}>
        <Route index element={<CRMHome />} />
       {/* <Route path="leads" element={<Leads />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="deals" element={<Deals />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
