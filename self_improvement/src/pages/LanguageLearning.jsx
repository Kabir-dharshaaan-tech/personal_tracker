import React, { useState } from "react";

const LanguageLearning = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("French");
  const languages = ["French", "German", "Spanish", "Japanese", "Tamil"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-6">
      <h2 className="text-4xl font-bold text-center">Language Learning</h2>
      <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg text-black shadow-lg">
        <label className="block mb-2 text-lg font-semibold">Choose a language:</label>
        <select
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {languages.map((lang, index) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <p className="mt-4 text-lg">Start learning <span className="font-bold">{selectedLanguage}</span> today!</p>
      </div>
    </div>
  );
};

export default LanguageLearning;
