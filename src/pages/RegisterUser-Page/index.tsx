import React from "react";
import * as S from "../RegisterUser-Page/style";
import LogoNature from "../../assets/Icons/LogoNature2.png";
import IconBack from "../../assets/Icons/angulo-circulo-esquerda.svg";
import IconHome from "../../assets/Icons/pagina-inicial.png";
import { useNavigate } from "react-router-dom";

export const RegisterUserPage = () => {
  const navigate = useNavigate();
  return (
    <S.MainSection>
      <S.IconBack onClick={() => history.back()} src={IconBack} />
      <S.IconHome onClick={() => navigate("/")} src={IconHome} />

      <S.CardRegisterUser>
        <S.headerCardRegister>
          <S.logoNameRegisterPage>
            <S.NatureLogo src={LogoNature} />
            <S.spanLogoRegisterPage>
              Nature Future Ticket
            </S.spanLogoRegisterPage>
          </S.logoNameRegisterPage>

          <S.titleCardRegister>
            Cadastre-se, ajude o meio ambiente!
          </S.titleCardRegister>
        </S.headerCardRegister>

        <S.InputRegisterField className="inputs">
          <S.InputLabelRegister className="LabelInput">
            <S.LabelRegister htmlFor="nickname">Apelido</S.LabelRegister>
            <S.InputRegister
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Apelido"
            />
          </S.InputLabelRegister>

          <S.InputLabelRegister className="LabelInput">
            <S.LabelRegister htmlFor="email">E-mail</S.LabelRegister>
            <S.InputRegister
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
            />
          </S.InputLabelRegister>

          <S.InputLabelRegister className="LabelInput">
            <S.LabelRegister htmlFor="password">Senha</S.LabelRegister>
            <S.InputRegister
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
            />
          </S.InputLabelRegister>

          <S.btnRegister>Cadastrar</S.btnRegister>
        </S.InputRegisterField>
      </S.CardRegisterUser>
    </S.MainSection>
  );
};
