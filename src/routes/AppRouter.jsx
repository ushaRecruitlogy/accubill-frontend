import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboardlayout from '../pages/ProfileDashboard/Dashboardlayout'
import Personal from '../pages/ProfileDashboard/Profile/Personal'
import UserMails from '../pages/ProfileDashboard/Profile/UsereMails'
import MobileNumbers from '../pages/ProfileDashboard/Profile/MobileNumbers'
import ProfilePage from '../pages/ProfilePage/ProfilePage'


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/dashboard" element={<Dashboardlayout/>}/> */}
        <Route path="/profilepage" element={<ProfilePage/>}/>

        <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route path="profile/personal" element={<Personal />} />
        <Route path="profile/email" element={<UserMails />} />
        <Route path="profile/mobile" element={<MobileNumbers />} />
      </Route>
        
    </Routes>
  )
}

export default AppRouter