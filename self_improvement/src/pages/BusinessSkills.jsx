import React from "react";

const BusinessSkills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6">
      <h2 className="text-4xl font-bold text-center">Business & Entrepreneur Skills</h2>
      <div className="max-w-2xl mx-auto mt-6 bg-white p-6 rounded-lg text-black shadow-lg">
        <p className="text-lg font-semibold">
          Learn strategies from top entrepreneurs and build your empire!
        </p>
        <ul className="mt-4 space-y-2">
          <li>📈 How to start & scale a business</li>
          <li>💡 Innovative thinking & leadership</li>
          <li>💰 Wealth creation & financial strategies</li>
          <li>🎯 Marketing & brand positioning</li>
          <li>📊 Sales & negotiation tactics</li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessSkills;
