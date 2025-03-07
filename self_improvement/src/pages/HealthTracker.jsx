
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const HealthTracker = () => {
  const [tracker, setTracker] = useState({
    sugar: false,
    friedFood: false,
    oilyFood: false,
  });
  const [progress, setProgress] = useState([]);
  const [dayCount, setDayCount] = useState(1);

  const toggleTracker = (item) => {
    setTracker({ ...tracker, [item]: !tracker[item] });
  };

  const submitDailyUpdate = () => {
    const healthyScore = Object.values(tracker).filter(Boolean).length; // Count avoided items
    setProgress([...progress, healthyScore]);
    setDayCount(dayCount + 1);
    setTracker({ sugar: false, friedFood: false, oilyFood: false }); // Reset daily tracker
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-yellow-500 p-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Health Tracker - 365 Days</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-black">
        {Object.keys(tracker).map((key) => (
          <div key={key} className="flex justify-between items-center p-3 border-b">
            <span className="capitalize">Avoided {key.replace(/([A-Z])/g, " $1")}</span>
            <button
              className={`px-4 py-2 rounded-lg ${tracker[key] ? "bg-green-500" : "bg-gray-300"}`}
              onClick={() => toggleTracker(key)}
            >
              {tracker[key] ? "Yes" : "No"}
            </button>
          </div>
        ))}
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg w-full font-semibold"
          onClick={submitDailyUpdate}
        >
          ✅ Submit Daily Update
        </button>
      </div>

      {/* Graph Section */}
      <div className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-4 text-black">Your Health Progress</h3>
        <Line
          data={{
            labels: progress.map((_, i) => `Day ${i + 1}`),
            datasets: [
              {
                label: "Healthy Choices Per Day",
                data: progress,
                borderColor: "#10B981",
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                fill: true,
                tension: 0.3, // Smoother line
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              y: { min: 0, max: 3, ticks: { stepSize: 1 } },
            },
          }}
        />
      </div>
    </div>
  );
};

export default HealthTracker;
