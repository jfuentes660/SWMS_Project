
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Dashboard from "./Pages/Dashboard";
import DataPage from "./Pages/DataPage";
import ProfileSettingsPage from "./Pages/ProfileSettingsPage";
import ManageUsersPage from "./Pages/ManageUsersPage";
import PasswordReset from "./Pages/PasswordReset";
export default function App() {
  const username = localStorage.getItem("username");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={username ? "/dashboard" : "/login"} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/dashboard" element={username ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/data" element={username ? <DataPage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={username ? <ProfileSettingsPage /> : <Navigate to="/login" />} />
        <Route path="/manage-users" element={username ? <ManageUsersPage /> : <Navigate to="/login" />} />        
      </Routes>
    </Router>
  );
}
