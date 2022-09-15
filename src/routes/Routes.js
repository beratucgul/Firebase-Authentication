import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRoute from "../pages/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";

export default function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/update-profile"
          element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          }
        />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}
