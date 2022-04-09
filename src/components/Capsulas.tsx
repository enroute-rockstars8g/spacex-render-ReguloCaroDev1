import React, { useEffect, useState } from "react";
import { getCapsules } from "../service/service";
import capsules from "../assets/img/capsules.jpg";
/* import { ReactComponent as Next } from "../assets/img/next.svg"; */
import Next from "../assets/img/next.png";
import Back from "../assets/img/back.png";
import { capsuleInterface, initialCapsule } from "./types/capsulesInterface";

export const Capsulas = () => {
  const [capsulas, setCapsulas] = useState<capsuleInterface>(initialCapsule);
  const [number, setNumber] = useState(1);
  const capsulasIntegradas = async () => {
    setCapsulas(await getCapsules(number));
  };
  const handleNext = () => {
    if (number > 8) return;
    setNumber(number + 1);
  };
  const handleBack = () => {
    if (number < 2) return;
    setNumber(number - 1);
  };
  useEffect(() => {
    capsulasIntegradas();
  }, [number]);

  return (
    <>
      <h1 className="card__title">CAPSULES</h1>
      <div className="container">
        <div className="card">
          <div className="card__image-container">
            <img className="card__image" src={capsules} alt="" />
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
            <h1 className="card__title">ID: {capsulas.id}</h1>
            <h2 className="card__title">Status: {capsulas.status}</h2>
            <h3 className="card__title">
              Original lauch: {capsulas.original_launch}
            </h3>
            <p>Reuse count: {capsulas.reuse_count}</p>
            <p>Landings: {capsulas.landings}</p>
            <p>Type: {capsulas.type}</p>
          </div>
          <div className="buttons-total">
            <button className="button-back" onClick={handleBack}>
              <img className="img-next" src={Back}></img>
            </button>
            <button className="button-next" onClick={handleNext}>
              <img className="img-next" src={Next}></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
