// src/modules/CRM/CRMLayout.js
import React from 'react';
import CRMNavbar from './CRMNavbar';
import { Outlet } from 'react-router-dom';
import './CRM.css'; 


const CRMLayout = () => (
  <>
    <CRMNavbar />
    <div className="p-6 bg-gray-300 min-h-screen">
      <Outlet />
    </div>
  </>
);

export default CRMLayout;
