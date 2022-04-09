export interface companyInterface {
  ceo: string;
  coo: string;
  cto_propulsion: string;
  cto: string;
  employees: number;
  founded: number;
  founder: string;
  launch_sites: number;
  name: string;
  summary: string;
  test_sites: number;
  valuation: number;
  vehicles: number;
}

export const initialCompany:companyInterface ={
    ceo:"",
    coo: "",
    cto_propulsion: "",
    cto: "",
    employees: 0,
    founded: 0,
    founder: "",
    launch_sites: 0,
    name: "",
    summary:" ",    
    test_sites: 0,
    valuation: 0,
    vehicles: 0,

}