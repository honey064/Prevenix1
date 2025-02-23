import React from "react";
import Dashboard from "./Pages/Dashboard";
import "./css/App.css";
import AppFieldsProvider from "./GlobalContext/AppContext";
import Alert from "./Component/Alert";

function App() {
  return (
    <div className="App">
      <AppFieldsProvider>
        <Dashboard />
      </AppFieldsProvider>
    </div>
  );
}

export default App;
