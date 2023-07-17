import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginType } from "../../types/types";
import { toast, ToastContainer } from "react-toastify";
import LoginService from "../../services/authService";
import LogoNature from "../../assets/Icons/LogoNature2.png";
import IconBack from "../../assets/Icons/angulo-circulo-esquerda.svg";
import * as S from "../Login-Page/style";
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: LoginType) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    console.log(event);
  };

  const handleAuthLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await LoginService.login(values);
    const jwt = response.data.token;

    if (!jwt) {
      toast.error(`${response.data.message}`)
    } else {
      localStorage.setItem("jwt", jwt);
      navigate("/");
      toast.success("Login efetuado com sucesso!");
    }
  };

  return (
    <S.MainSection>
      <S.IconBack onClick={() => history.back()} src={IconBack} />

      <S.CardLogin>
        
        <S.headerCardLogin>
          <S.logoNameLoginPage>
            <S.NatureLogo src={LogoNature} />
            <S.spanLogoLoginPage>Nature Future Ticket</S.spanLogoLoginPage>
          </S.logoNameLoginPage>

          <S.titleCardLogin>Seja bem vindo!</S.titleCardLogin>
        </S.headerCardLogin>

        <S.InputLoginField onSubmit={handleAuthLogin}>
          <S.InputLabelLogin>
            <S.LabelLogin className="label" htmlFor="email">
              E-mail
            </S.LabelLogin>
            <S.InputLogin
              onChange={handleChangesValues}
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="E-mail"
            />
          </S.InputLabelLogin>

          <S.InputLabelLogin>
            <S.LabelLogin className="label" htmlFor="password">
              Senha
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

          <S.LinkRegisterPage>
            <S.pLoginPage>Não tem conta? </S.pLoginPage>
            <S.spanLoginPage onClick={() => navigate("/register-user")}>
              Cadastre-se
            </S.spanLoginPage>
          <S.RecoverPassword onClick={() => navigate("/recover-password")}>Recuperar senha</S.RecoverPassword>

          </S.LinkRegisterPage>

          <S.btnLogin>Entrar</S.btnLogin>
          
        </S.InputLoginField>
      </S.CardLogin>
    </S.MainSection>
  );
};
