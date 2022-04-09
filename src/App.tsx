import React, { useEffect } from "react";
import "./App.css";
import { Capsulas } from "./components/Capsulas";
import { Company } from "./components/Company";
import { Cores } from "./components/Cores";

const App = () => {
  return (
    <>
      <div className="row">
        <div className="column">
          <div className="card">
            <Company />
          </div>
        </div>
        <div className="column">
          <div className="card">
            <Capsulas />
          </div>
        </div>
        <div className="column">
          <div className="card">
            <Cores />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
