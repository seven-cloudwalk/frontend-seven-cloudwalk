import { createUserType, updatePasswordType } from "../../types/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import userService from "../../services/userService";
import * as S from "./style";
import LoginService from "../../services/authService";

export const UpdatePassword = () => {
  const [userLogged, setUserLogged] = useState<createUserType>({
    id: "",
    nickname: "",
    email: "",
    password: "",
    accountType: undefined,
  });

  const [password, setPassword] = useState<updatePasswordType>({
    password: "",
    passwordConfirmation: "",
  });

  const [userId, setUserId] = useState<string>("");

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      getUserLogged();
    } else {
      console.log("Sem informações do usuario logado");
    }
  }, []);

  const getUserLogged = async () => {
    const response = await LoginService.loggedUser();
    setUserLogged(response.data);
    debugger
    console.log(response.data.id);
    setUserId(response.data.id);

  };

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((password: updatePasswordType) => ({
      ...password,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await userService.updatePassword(userId);

    if (response.status == 201) {
      toast.success(`${response.data.message}`);
    } else {
      toast.error(`${response.data.message}`);
    }
  };

  return (
    <S.MessageField>
      {/* <S.IconBack onClick={() => history.back()} src={IconBack} /> */}

      <S.CardLogin onSubmit={handleSendEmail}>
        <S.InputLabelLogin>
          <S.TitleRecoverEmail>Atualização de senha</S.TitleRecoverEmail>
          <S.LabelLogin className="label" htmlFor="password">
            Digite sua senha
          </S.LabelLogin>
          <S.InputLogin
            onChange={handleChangesValues}
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Senha"
          />

          <S.LabelLogin className="label2" htmlFor="password">
            Digite novamente sua senha
          </S.LabelLogin>
          <S.InputLogin
            onChange={handleChangesValues}
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Senha"
          />
        </S.InputLabelLogin>

        <S.btnLogin>Enviar</S.btnLogin>
      </S.CardLogin>
    </S.MessageField>
  );
};
