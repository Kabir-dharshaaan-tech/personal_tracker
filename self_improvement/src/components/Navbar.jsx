




import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Check if token exists
    setUser(token ? true : null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // Update state to re-render the Navbar
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        {user && (
          <>
            <Link to="/videos" className="hover:text-yellow-400 transition">Videos</Link>
            <Link to="/health-tracker" className="hover:text-yellow-400 transition">Health</Link>
            <Link to="/language-learning" className="hover:text-yellow-400 transition">Languages</Link>
            <Link to="/business-skills" className="hover:text-yellow-400 transition">Business</Link>
            <Link to="/psychology" className="hover:text-yellow-400 transition">Psychology</Link>
          </>
        )}
      </div>
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-white font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
