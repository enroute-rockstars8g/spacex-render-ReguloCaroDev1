import React, { useEffect, useState } from "react";
import { getCores } from "../service/service";
import cores from "../assets/img/cores.jpg";
import { initialMission, missionInterface } from "./types/coresTypes";

export const Cores = () => {
  const [core, setCore] = useState([]);

  const coresIntegradas = async () => {
    setCore(await getCores());
  };

  useEffect(() => {
    coresIntegradas();
  }, []);
  console.log(core);

  return (
    <>
      <h1 className="card__title">LAST MISSION</h1>
      <div className="container">
        <div className="card">
          <div className="card__image-container">
            <img className="card__image" src={cores} alt="" />
          </div>
          <svg className="card__svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#333"
            />
            <path
              className="card__line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="pink"
              strokeWidth="3"
              fill="transparent"
            />
          </svg>

          <div className="card__content">
            {core.map((coreIndex: any, index: any) => (
              <h1 key={index} className="card__title">
                {coreIndex.name}
              </h1>
            ))}
            {core.map((coreIndex: any, index: any) => (
              <h1 key={index} className="card__title">
                {coreIndex.id}
              </h1>
            ))}
            {core.map((coreIndex: any, index: any) => (
              <p key={index}>{coreIndex.description}</p>
            ))}
            {core.map((coreIndex: any, index: any) => (
              <p key={index}>{coreIndex.twitter}</p>
            ))}
            {/* <h1 className="card__title">ID: </h1>
            <h2 className="card__title">Status: {core.name}</h2>
            <h3 className="card__title">Original lauch: {core.website}</h3>
            <p>Reuse count: {core.description}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};
