import { createUserType, updatePasswordType } from "../../types/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import userService from "../../services/userService";
import LoginService from "../../services/authService";
import * as S from "./style";

export const UpdatePassword = () => {
  const params = useParams();
  const data = JSON.stringify(params.id);
  const userId = data.replace(/[\\"]/g, '');
  const navigate = useNavigate();
  
  const [password, setPassword] = useState<updatePasswordType>({
    password: "",
    passwordConfirmation: "",
  });

  useEffect(() => {
    // handleUserId();
    // const { userId } = useParams();
    // console.log(userId);
    console.log("ID:", userId);
    
  }, []);

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });
  };

  const handleSendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userId);
    const response = await userService.updatePassword(userId, password);

    if (response.status == 200) {
      toast.success(`Senha alterada com sucesso!`);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      toast.error(`${response.data.message}`);
    }
  };

  // const handleUserId = () => {
  //   const { userId } = useParams();
  //   console.log(userId);
  //   setUserIdData(userId);
  // };

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

          <S.LabelLogin className="label2" htmlFor="passwordConfirmation">
            Digite novamente sua senha
          </S.LabelLogin>
          <S.InputLogin
            onChange={handleChangesValues}
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            autoComplete="off"
            placeholder="Senha"
          />
        </S.InputLabelLogin>

        <S.btnLogin>Enviar</S.btnLogin>
      </S.CardLogin>
    </S.MessageField>
  );
};
