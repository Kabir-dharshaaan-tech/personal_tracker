



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // To show error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup Successful! Redirecting to Login...");
      navigate("/login"); // Redirect to login after signup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-4xl font-bold mb-6">Sign Up</h2>
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
          Sign Up
        </button>
        <p className="text-center mt-4 text-gray-400">
          Already have an account?
          <Link to="/login" className="text-blue-400 hover:underline ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
