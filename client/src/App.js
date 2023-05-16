//import "./App.css";

import React from "react";
import { Route, Routes, Router } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
//import Auth from "./hoc/auth";

function App() {
  //const LandingPage = Auth(LandingPage,null);
  //const LoginPage = Auth(LoginPage, false);
  //const RegisterPage = Auth(RegisterPage, false);
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;