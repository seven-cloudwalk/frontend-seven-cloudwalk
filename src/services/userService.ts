import { createUserType, updatePasswordType } from "../types/types";
import api from "./api";

const userService = {
  createUser: (values: createUserType) =>
    api
      .post("users/create", values)
      .then((response: any) => response)
      .catch((error: any) => error.response),

  recoverEmail: (email: string) =>
    api
      .post(`users/recovery/${email}`)
      .then((response: any) => response)
      .catch((error: any) => error.response),
  
      updatePassword: (id: string) =>
    api
      .patch(`users/updatePassword/${id}`, { password:"Abc12345*", passwordConfirmation:"Abc12345*" })
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

export default userService;
