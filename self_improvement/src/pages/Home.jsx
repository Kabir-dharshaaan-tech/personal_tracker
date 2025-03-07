
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        Elevate Yourself to Excellence
      </h1>
      <p className="text-xl max-w-3xl text-center text-gray-300 mb-8">
        Master Health, Business, Languages, and Psychology. Transform your mindset, build skills, and achieve financial & personal success.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        <Link to="/videos" className="bg-blue-800 hover:bg-blue-700 p-8 rounded-xl shadow-xl transform hover:scale-105 transition text-lg font-semibold text-center">
          🎥 Exclusive Video Library
        </Link>
        <Link to="/health-tracker" className="bg-green-700 hover:bg-green-600 p-8 rounded-xl shadow-xl transform hover:scale-105 transition text-lg font-semibold text-center">
          🏋️‍♂️ Optimize Your Health
        </Link>
        <Link to="/language-learning" className="bg-indigo-700 hover:bg-indigo-600 p-8 rounded-xl shadow-xl transform hover:scale-105 transition text-lg font-semibold text-center">
          🌍 Master New Languages
        </Link>
        <Link to="/business-skills" className="bg-yellow-600 hover:bg-yellow-500 p-8 rounded-xl shadow-xl transform hover:scale-105 transition text-lg font-semibold text-center">
          💼 Build Business & Wealth
        </Link>
        <Link to="/psychology" className="bg-red-600 hover:bg-red-500 p-8 rounded-xl shadow-xl transform hover:scale-105 transition text-lg font-semibold text-center">
          🧠 Master Psychology & Influence
        </Link>
      </div>
    </div>
  );
};

export default Home;
