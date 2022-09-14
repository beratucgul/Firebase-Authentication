import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import { AuthProvider } from "../context/AuthContext";

export default function RoutesComponent() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Dashboard/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
