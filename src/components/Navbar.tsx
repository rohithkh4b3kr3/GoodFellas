import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Megaphone, UserCircle, Home } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [showRoles, setShowRoles] = useState(false);

  const handleRoleClick = (role) => {
    navigate(`/login/${role}`);
    setShowRoles(false); // close dropdown after click
  };

  return (
    <nav className="bg-indigo-800 border-b-2 border-blue-900 px-6 py-4 flex justify-between items-center shadow-sm relative">
      {/* Logo / Title */}
      <h1 className="text-2xl font-semibold text-white tracking-wide">
        Water Safety Portal
      </h1>

      {/* Menu */}
      <div className="flex items-center space-x-6 font-semibold text-lg">
        <Link to="/" className="flex items-center text-white hover:text-blue-400 transition">
          <Home size={18} className="mr-1" />
          Home
        </Link>

        <Link to="/announcements" className="text-white hover:text-blue-400 transition">
          Announcements
        </Link>
        {/* <Link to="/Dashboard" className="flex items-center text-white hover:text-amber-400 transition">
          <Megaphone size={18} className="mr-1" />
          Dashboard
        </Link> */}

        <Link to="/about" className="flex items-center text-white hover:text-amber-400 transition">
          <Megaphone size={18} className="mr-1" />
          About
        </Link>

        {/* Role-based Login */}
        <div className="relative">
          <button
            onClick={() => setShowRoles(!showRoles)}
            className="flex items-center text-white hover:text-green-400 transition"
          >
            <UserCircle size={18} className="mr-1" />
            Login
          </button>

          {showRoles && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
              <button
                onClick={() => handleRoleClick("admin")}
                className="w-full text-left px-4 py-2 hover:bg-indigo-100"
              >
                Admin
              </button>
              <button
                onClick={() => handleRoleClick("scientist")}
                className="w-full text-left px-4 py-2 hover:bg-indigo-100"
              >
                Scientist
              </button>
              <button
                onClick={() => handleRoleClick("public")}
                className="w-full text-left px-4 py-2 hover:bg-indigo-100"
              >
                Public / NGO
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
