import { createUserType, updatePasswordType } from "../../types/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import userService from "../../services/userService";
import LoginService from "../../services/authService";
import * as S from "./style";

export const UpdatePassword = () => {
  const [password, setPassword] = useState<updatePasswordType>({
    id: '',
    password: "",
    passwordConfirmation: "",
  });

  const [userId, setUserId] = useState<string>("");

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    handleUserId();
  }, []);


  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((password: updatePasswordType) => ({
      ...password,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await userService.updatePassword(password);

    if (response.status == 201) {
      toast.success(`${response.data.message}`);
    } else {
      toast.error(`${response.data.message}`);
    }
  };

  const handleUserId = () => {
    const { userId } = useParams();
   console.log(userId);
  }

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
