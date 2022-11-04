import { createUserType, RecoverEmailType } from "../types/types";
import api from "./api";

const userService = {
  createUser: (values: createUserType) =>
    api
      .post("users/create", values)
      .then((response: any) => response)
      .catch((error: any) => error.response),

  recoverEmail: (email: string) =>
    api
      .patch(`users/recovery/${email}`)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

export default userService;
