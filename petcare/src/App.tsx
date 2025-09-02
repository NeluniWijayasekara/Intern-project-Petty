import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyOtp from "./pages/auth/VerifyOtp";
import ResetPassword from "./pages/auth/ResetPassword";

import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
// import Users from "./pages/dashboard/Users";
// import Pets from "./pages/dashboard/Pets";
// import Appointments from "./pages/dashboard/Appointments";
// import Profile from "./pages/dashboard/Profile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/login" replace />} />

        {/* 📊 Dashboard Routes (with navbar + footer) */}
        <Route path="/home" element={<MainLayout><Dashboard /></MainLayout>} />
        {/* <Route path="/users" element={<MainLayout><Users /></MainLayout>} />
        <Route path="/pets" element={<MainLayout><Pets /></MainLayout>} />
        <Route path="/appointments" element={<MainLayout><Appointments /></MainLayout>}/>
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} /> */}

        {/* Catch-all → redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
