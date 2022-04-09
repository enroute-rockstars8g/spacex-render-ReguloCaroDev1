export interface missionInterface {
  description: string;
  id: string;
  name: string;
  twitter?: string | null;
  website: string;
  wikipedia: string;
}
export const initialMission:missionInterface ={
  description: "",
  id: "",
  name: "",
  twitter: "",
  website: "",
  wikipedia: "",
}