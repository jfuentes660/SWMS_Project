// src/Components/Sidebar.jsx
import { Home, Database, Users, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={`bg-gray-900 text-white h-screen transition-all duration-300 ${open ? "w-64" : "w-16"} flex flex-col justify-between`}>
      <div>
        <button className="p-5 hover:bg-gray-800 focus:outline-none w-full text-left" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <nav className="flex flex-col gap-2 mt-4 px-2">
          <NavItem to="/dashboard" icon={<Home />} label="Dashboard" open={open} />
          <NavItem to="/data" icon={<Database />} label="Data" open={open} />
          <NavItem to="/profile" icon={<Settings />} label="Profile Settings" open={open} />
          <NavItem to="/manage-users" icon={<Users />} label="Manage Users" open={open} />
        </nav>
      </div>
      <button onClick={handleLogout} className="flex items-center gap-5 p-4 hover:bg-gray-800 transition">
        <LogOut />
        {open && <span>Log Out</span>}
      </button>
    </div>
  );
}

function NavItem({ to, icon, label, open }) {
  return (
    <a href={to} className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded transition">
      {icon}
      {open && <span>{label}</span>}
    </a>
  );
}
