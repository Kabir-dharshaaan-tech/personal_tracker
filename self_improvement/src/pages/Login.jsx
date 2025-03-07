





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // For showing error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token); // Store JWT token
      localStorage.setItem("user", JSON.stringify(data.user)); // Store user data

      alert("Login Successful!");
      navigate("/"); // Redirect to home after login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-4xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white"
          required
        />
        <button type="submit" className="w-full bg-green-600 hover:bg-green-500 p-3 rounded-lg font-semibold">
          Login
        </button>
        <p className="text-center mt-4 text-gray-400">
          Don't have an account?  
          <button 
            type="button" 
            onClick={() => navigate("/signup")} 
            className="text-blue-400 hover:underline ml-1"
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
