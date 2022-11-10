export interface LoginType {
  email: string;
  password: string;
}

export interface RecoverEmailType {
  email: string;
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

export interface productType {
  id?: string;
  name: string;
  cod?: number;
  category: string;
  description: string;
  price: number;
  image: string;
  stock?: boolean;
}

export interface updateAllProductsType {
  Código: string;
  Descrição: string;
  Percentual: number;
}

export interface updatePasswordType {
  id: string;
  password: string;
  passwordConfirmation: string;
}
