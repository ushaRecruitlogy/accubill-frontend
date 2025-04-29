import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer position="top-right" />
      </BrowserRouter>
    </div>
  );
};

export default App;
