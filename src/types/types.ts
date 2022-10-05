export interface LoginType {
  email: string;
  password: string;
}

export interface createUserType {
  nickname: string;
  email: string;
  password: string;
  pj: boolean;
  roleAdmin?: boolean;
}
