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
  const [values, setValues] = useState<createUserType>({
    nickname: "",
    email: "",
    password: "",
    accountType: undefined,
  });

  const navigate = useNavigate();

  const handleChangesValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: createUserType) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));

  };

  console.log(values.accountType, values.accountType === "PJ");

  const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await userService.createUser(values);
    
    if (response.status === 201) {
      toast.success(`${response.data.message}`);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      toast.error(`${response.data.message}`);
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

            <S.OptionsCNPJ>
              <S.labelInputCNPJ>
                <S.InputRadio
                  onChange={handleChangesValue}
                  type="radio"
                  id="PessoaFisica"
                  name="accountType"
                  value="PF"
                  defaultChecked={false}
                />
                <S.LabelRadio htmlFor="PessoaFisica">
                  Pessoa Fisica
                </S.LabelRadio>
              </S.labelInputCNPJ>

              <S.labelInputCNPJ>
                <S.InputRadio
                  onChange={handleChangesValue}
                  type="radio"
                  id="PessoaJuridica"
                  name="accountType"
                  value="PJ"
                />
                <S.LabelRadio htmlFor="PessoaJuridica">
                  Pessoa Juridica (CNPJ)
                </S.LabelRadio>
              </S.labelInputCNPJ>
            </S.OptionsCNPJ>
          </S.CNPJField>

          <S.btnRegister>Cadastrar</S.btnRegister>
        </S.InputRegisterField>
      </S.CardRegisterUser>
    </S.MainSection>
  );
};
