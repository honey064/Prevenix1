import React from "react";
import { FaHeartbeat, FaThermometerHalf, FaTint, FaWind } from "react-icons/fa"; // Importing some icons

export default function Metrics() {
  return (
    <div className="metrics">
      <div className="metric-item">
        <FaWind className="metric-icon" />
        <span className="metric-label">normal temperature:</span>
        <span className="metric-value">32°C</span>
      </div>
      <div className="metric-item">
        <FaTint className="metric-icon" />
        <span className="metric-label">normal acceleraction x-axis:</span>
        <span className="metric-value">20.00343218</span>
      </div>
      <div className="metric-item">
        <FaHeartbeat className="metric-icon" />
        <span className="metric-label">normal acceleraction y-axis:</span>
        <span className="metric-value">30.515367</span>
      </div>
      <div className="metric-item">
        <FaThermometerHalf className="metric-icon" />
        <span className="metric-label">normal acceleraction z-axis:</span>
        <span className="metric-value">25.36313387301</span>
      </div>
    </div>
  );
}
