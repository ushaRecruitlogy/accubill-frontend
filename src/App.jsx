import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import AppRoutes from "./routes/AppRoutes"; // Import the separate routes file

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <AppRoutes /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;