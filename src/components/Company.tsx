import React, { useEffect, useState } from "react";
import { getCompanys } from "../service/service";
import "../components/design/global.scss";
import companyX from "../assets/img/company.jpg";
import { companyInterface, initialCompany } from "./types/companyInterface";
export const Company = () => {
  const [company, setCompany] = useState<companyInterface>(initialCompany);

  const getCompanies = async () => {
    setCompany(await getCompanys());
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      <h1 className="card__title">COMPANY</h1>
      <div className="container">
        <div className="card">
          <div className="card__image-container">
            <img className="card__image" src={companyX} alt="" />
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
            <h1 className="card__title">CEO: {company.ceo}</h1>
            <h2 className="card__title">COO: {company.coo}</h2>
            <h3 className="card__title">CTO: {company.cto}</h3>
            <p>{company.summary}</p>
            <p>Employees: {company.employees}</p>
            <p>Valuation: {company.valuation}</p>
            <p>Vehicles: {company.vehicles}</p>
          </div>
        </div>
      </div>
    </>
  );
};
