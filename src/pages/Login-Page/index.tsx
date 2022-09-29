import React from "react";
import { useNavigate } from "react-router-dom";
import LogoNature from "../../assets/Icons/LogoNature2.png";
import * as S from "../Login-Page/style";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <S.MainSection>
      <S.CardLogin>
        <S.headerCardLogin>
          
          <S.logoNameLoginPage>
            <S.NatureLogo src={LogoNature} />
            <S.spanLogoLoginPage>Nature Future Ticket</S.spanLogoLoginPage>
          </S.logoNameLoginPage>

          <S.titleCardLogin>Seja bem vindo!</S.titleCardLogin>
        </S.headerCardLogin>

        <S.InputLoginField>
          <S.InputLabelLogin>
            <S.LabelLogin className="label" htmlFor="email">
              E-mail
            </S.LabelLogin>
            <S.InputLogin
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
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Senha"
            />
          </S.InputLabelLogin>

          <S.LinkRegisterPage>
            <S.pLoginPage>Não tem conta? </S.pLoginPage>
            <S.spanLoginPage onClick={() => navigate("/cadastro")}>
              Cadastre-se
            </S.spanLoginPage>
          </S.LinkRegisterPage>

          <S.btnLogin>Entrar</S.btnLogin>
        </S.InputLoginField>
      </S.CardLogin>
    </S.MainSection>
  );
};
