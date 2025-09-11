import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 🔑 Auth Pages
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyOtp from "./pages/auth/VerifyOtp";
import ResetPassword from "./pages/auth/ResetPassword";

// 🖥️ Layout
import MainLayout from "./components/MainLayout";

// 📊 Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";
import MarketplaceListings from "./pages/dashboard/MarketplaceListings";
import VetsProviders from "./pages/dashboard/VetsProviders";
import Services from "./pages/dashboard/Services";
import AdminManagement from "./pages/dashboard/AdminManagement";
import Users from "./pages/dashboard/Users";
import InsuranceClaims from "./pages/dashboard/InsuranceClaims";
import PetcareManagement from "./pages/dashboard/PetcareManagement";
import CompanyManagement from "./pages/dashboard/CompanyManagement";
import PermissionsManagement from "./pages/dashboard/PermissionsManagement";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔑 Auth Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset" element={<ResetPassword />} />

        {/* 📊 Dashboard + Sidebar */}
        <Route path="/home" element={<MainLayout><Dashboard /></MainLayout>}/>
        <Route path="/users" element={<MainLayout><Users /></MainLayout>} />
        <Route path="/petcare-management" element={<MainLayout><PetcareManagement /></MainLayout>} />
        <Route path="/company-management" element={<MainLayout><CompanyManagement /></MainLayout>} />
        <Route path="/insurance-claims" element={   <MainLayout><InsuranceClaims /></MainLayout>}/>
        <Route path="/marketplace-listings" element={<MainLayout><MarketplaceListings /></MainLayout>} />
        <Route path="/vets-providers" element={<MainLayout><VetsProviders /></MainLayout>}/>
        <Route path="/services" element={<MainLayout><Services /></MainLayout>}/>
        <Route path="/admin-management"  element={<MainLayout><AdminManagement /></MainLayout> }/>
        <Route path="/permissions" element={<MainLayout><PermissionsManagement/></MainLayout>} />

        {/* ❌ Catch-all → back to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
