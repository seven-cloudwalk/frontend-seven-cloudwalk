import api from "./api";
import { LoginType } from "../types/types";

const LoginService = {
  login: (values: LoginType) =>
    api
      .post("auth", values)
      .then((response: any) => response)
      .catch((error: any) => error.response),

  loggedUser: () =>
    api
      .get("auth/logged")
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

export default LoginService;
