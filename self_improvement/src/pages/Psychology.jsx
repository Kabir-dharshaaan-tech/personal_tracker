import React from "react";

const Psychology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-red-600 text-white p-6">
      <h2 className="text-4xl font-bold text-center">Psychology & Relationships</h2>
      <div className="max-w-2xl mx-auto mt-6 bg-white p-6 rounded-lg text-black shadow-lg">
        <p className="text-lg font-semibold">
          Understand human behavior, attraction, and relationships.
        </p>
        <ul className="mt-4 space-y-2">
          <li>🧠 How emotions & attraction work</li>
          <li>❤️ Building deep relationships</li>
          <li>💬 Communication & influence</li>
          <li>🔍 Understanding body language</li>
          <li>⚖️ Balancing emotions & logic</li>
        </ul>
      </div>
    </div>
  );
};

export default Psychology;
