import IconBack from "../../assets/Icons/angulo-circulo-esquerda.svg";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecoverEmailType } from "../../types/types";
import * as S from "./style";
import userService from "../../services/userService";

export const RecoverPassword = () => {
  const [email, setEmail] = useState<string>("");
  
  const navigate = useNavigate();

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await userService.recoverEmail(email);

    if (response.status == 201) {
      toast.success(`${response.data.message}`);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      console.log(email);
    } else {
      toast.error(`${response.data.message}`);
  
    }
  };

  return (
    <S.MessageField>
      <S.IconBack onClick={() => history.back()} src={IconBack} />

      <S.CardLogin onSubmit={handleSendEmail}>
        <S.InputLabelLogin>
          <S.TitleRecoverEmail>Recuperação de conta</S.TitleRecoverEmail>
          <S.LabelLogin className="label" htmlFor="email">
            Digite o e-mail cadastrado
          </S.LabelLogin>
          <S.InputLogin
            onChange={handleChangesValues}
            type="text"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="E-mail"
          />
        </S.InputLabelLogin>

        <S.btnLogin>Enviar</S.btnLogin>

      </S.CardLogin>

    </S.MessageField>
  );
};
