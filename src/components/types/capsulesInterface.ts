export interface capsuleInterface {
  id: string;
  landings: number;
  original_launch: string;
  reuse_count: number;
  status: string;
  type: string;
}

export const initialCapsule:capsuleInterface = {
  id:  "",
  landings:  0,
  original_launch:  "",
  reuse_count:  0,
  status:  "",
  type:  "",
}
