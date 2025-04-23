import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
    </Routes>
  )
}

export default AppRouter