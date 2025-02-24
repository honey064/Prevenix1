import React from "react";
import { FaHeartbeat, FaThermometerHalf, FaTint, FaWind } from "react-icons/fa"; // Importing some icons

export default function Metrics() {
  return (
    <div className="metrics grid grid-cols-2 gap-4 p-4">
      <div className="metric-item flex items-center space-x-2 p-3 bg-gray-100 rounded-2xl shadow">
        <FaWind className="metric-icon text-blue-500 text-2xl" />
        <div>
          <span className="metric-label block text-gray-600">Normal Temperature:</span>
          <span className="metric-value text-lg font-bold">32°C</span>
        </div>
      </div>

      <div className="metric-item flex items-center space-x-2 p-3 bg-gray-100 rounded-2xl shadow">
        <FaTint className="metric-icon text-green-500 text-2xl" />
        <div>
          <span className="metric-label block text-gray-600">Normal Acceleration (X-axis):</span>
          <span className="metric-value text-lg font-bold">20.0034</span>
        </div>
      </div>

      <div className="metric-item flex items-center space-x-2 p-3 bg-gray-100 rounded-2xl shadow">
        <FaHeartbeat className="metric-icon text-red-500 text-2xl" />
        <div>
          <span className="metric-label block text-gray-600">Normal Acceleration (Y-axis):</span>
          <span className="metric-value text-lg font-bold">30.5154</span>
        </div>
      </div>

      <div className="metric-item flex items-center space-x-2 p-3 bg-gray-100 rounded-2xl shadow">
        <FaThermometerHalf className="metric-icon text-orange-500 text-2xl" />
        <div>
          <span className="metric-label block text-gray-600">Normal Acceleration (Z-axis):</span>
          <span className="metric-value text-lg font-bold">25.3631</span>
        </div>
      </div>
    </div>
  );
}
