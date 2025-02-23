import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppFieldsProvider = ({ children }) => {
  const [temperature, setTemperature] = useState([
    10, 20, 30, 20, 100, 10, 20, 30, 40, 60, 77, 80, 90,
  ]);
  const [accelerationX, setAccelerationX] = useState([
    10, 20, 30, 20, 100, 10, 20, 30, 40, 60, 77, 80, 90,
  ]);
  const [accelerationY, setAccelerationY] = useState([
    10, 20, 30, 20, 100, 10, 20, 30, 40, 60, 77, 80, 90,
  ]);
  const [accelerationZ, setAccelerationZ] = useState([
    10, 20, 30, 20, 100, 10, 20, 30, 40, 60, 77, 80, 90,
  ]);

  const DATA_URL = "54.83.118.12:8000/ws";

  return (
    <AppContext.Provider
      value={{
        temperature,
        setTemperature,
        accelerationX,
        setAccelerationX,
        accelerationY,
        setAccelerationY,
        accelerationZ,
        setAccelerationZ,
        DATA_URL,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};

export default AppFieldsProvider;
