import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserType } from "../../types/types";
import { toast } from "react-toastify";
import LogoNature from "../../assets/Icons/LogoNature2.png";
import IconBack from "../../assets/Icons/angulo-circulo-esquerda.svg";
import IconHome from "../../assets/Icons/pagina-inicial.png";
import userService from "../../services/userService";
import * as S from "../RegisterUser-Page/style";

export const RegisterUserPage = () => {
  const [values, setValues] = useState({
    nickname: "",
    email: "",
    password: "",
    pj: false,
  });

  const navigate = useNavigate();

  const handleChangesValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "PJ") {
      setValues((values: createUserType) => ({
        ...values,
        [event.target.name]: event.target.checked,
      }));

      console.log(event);
    } else {
      setValues((values: createUserType) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
      console.log(event);
    }
  };

  const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await userService.createUser(values);

    if (response.status === 201) {
      toast.success("Usuário criado com sucesso!");
      navigate("/login")
    } else {
      toast.error(response.data.message);
    }
  };

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

        <S.InputRegisterField onSubmit={createUser}>
          <S.InputLabelRegister>
            <S.LabelRegister htmlFor="nickname">Nome</S.LabelRegister>
            <S.InputRegister
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Nome"
              onChange={handleChangesValue}
              autoComplete="off"
              />
          </S.InputLabelRegister>
          <S.InputLabelRegister>
            <S.LabelRegister htmlFor="email">E-mail</S.LabelRegister>
            <S.InputRegister
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              onChange={handleChangesValue}
              autoComplete="off"
              />
          </S.InputLabelRegister>
          <S.InputLabelRegister>
            <S.LabelRegister htmlFor="password">Senha</S.LabelRegister>
            <S.InputRegister
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              onChange={handleChangesValue}
              autoComplete="off"
              />
          </S.InputLabelRegister>

          <S.CNPJField>
            <h1>Selecione uma das opções:</h1>
            <S.labelInputCNPJ>
              <S.LabelRadio>
                <S.InputRadio
                  onChange={handleChangesValue}
                  type="radio"
                  name="pj"
                  value="PF"
                  checked={values.pj}
                  autoComplete="off"
                />
                Pessoa Fisica
              </S.LabelRadio>

              <S.LabelRadio>
                <S.InputRadio
                  onChange={handleChangesValue}
                  type="radio"
                  name="pj"
                  value="PJ"
                  autoComplete="off"
                />
                Pessoa Jurídica(CNPJ)
              </S.LabelRadio>
            </S.labelInputCNPJ>
          </S.CNPJField>

          <S.btnRegister>Cadastrar</S.btnRegister>
        </S.InputRegisterField>
      </S.CardRegisterUser>
    </S.MainSection>
  );
};
