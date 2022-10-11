export interface LoginType {
  email: string;
  password: string;
}

export interface createUserType {
  id?: string;
  nickname: string;
  email: string;
  password: string;
  accountType: "PJ" | "PF" | undefined;
  roleAdmin?: boolean;
}

export interface userLoggedType {
  id?: string;
  nickname: string;
  email: string;
  pj: boolean;
  roleAdmin?: true;
  createdAt?: string;
  updatedAt?: string;
}