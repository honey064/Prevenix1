import React, { useContext, useEffect } from "react";
import Header from "../Component/Header";
import RealTimeVisualizer from "../Component/RealTimeVisualizer";
import Metrics from "../Component/Metrics";
import Prediction from "../Component/Prediction";
import { useAppState } from "../GlobalContext/AppContext";
import axios from "axios";

function Dashboard() {
  
  const VisualizerData = [
    {
      title: "Blood SpO2 Levels :",
      data: useAppState().bloodSpo2,
    },
    {
      title: "Bio-Impedence Levels :",
      data: useAppState().bioImpendence,
    },
    {
      title: "Pulse Rate :",
      data: useAppState().pulseRate,
    },
    {
      title: "Body Temperature :",
      data: useAppState().bodyTemperature,
    },
  ];

  const {
    bloodSpo2,
    bioImpendence,
    pulseRate,
    bodyTemperature,
    setSpo2,
    setBioImpendence,
    setPulseRate,
    setBodyTemp,
    DATA_URL,
  } = useAppState();

  const fetchData = async () => {
    const response = await axios.get("ws://54.83.118.12/ws");
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [bloodSpo2, bioImpendence, pulseRate, bodyTemperature]);

  return (
    <div className="dashboard">
      <Header />

      <div className="redirect-button-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button 
          onClick={() => window.location.href = 'https://prevenix.vercel.app/'} 
          className="redirect-button"
        >
          See The Alerts
        </button>
      </div>

      <style jsx>{`
        .redirect-button {
          background-color: var(--primary-color);
          color: var(--text-color);
          border: none;
          padding: 15px 30px;
          border-radius: 20px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: all var(--transition-duration);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
        }

        .redirect-button:hover {
          background-color: var(--secondary-color);
          transform: scale(1.1);
        }

        .redirect-button:active {
          transform: scale(0.95);
        }
      `}</style>

      <div className="gaps">
        {VisualizerData.map((item, index) => (
          <RealTimeVisualizer
            key={index}
            title={item.title}
            chartData={item.data}
          />
        ))}
      </div>

      <div className="metrics-prediction">
        <Metrics />
        <Prediction />
      </div>
    </div>
  );
}

export default Dashboard;