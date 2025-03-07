



import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import HealthTracker from "./pages/HealthTracker";
import LanguageLearning from "./pages/LanguageLearning";
import BusinessSkills from "./pages/BusinessSkills";
import Psychology from "./pages/Psychology";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// Private Route Component
const PrivateRoute = ({ element }) => {
  return localStorage.getItem("token") ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/videos" element={<PrivateRoute element={<VideoPage />} />} />
        <Route path="/health-tracker" element={<PrivateRoute element={<HealthTracker />} />} />
        <Route path="/language-learning" element={<PrivateRoute element={<LanguageLearning />} />} />
        <Route path="/business-skills" element={<PrivateRoute element={<BusinessSkills />} />} />
        <Route path="/psychology" element={<PrivateRoute element={<Psychology />} />} />
      </Routes>
    </Router>
  );
};

export default App;
