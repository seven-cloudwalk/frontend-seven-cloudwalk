import React, { useEffect } from "react";
import { CgBorderStyleSolid } from "react-icons/cg";
import { createUserType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import LogoNature from "../../assets/Icons/nature_future_ticket_1.png";
import * as S from "./style";

export const HeaderComponent = (props: { loggedUser: createUserType }) => {
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      props.loggedUser;
    }
  }, []);

  const navigate = useNavigate();
  return (
    <S.Header>
      <S.LogoSearchHeader>
        <S.LogoHeader
          src={LogoNature}
          alt="Logo Nature Future"
          onClick={() => navigate("/")}
        />
        <S.LogoNameHeader>NATURE FUTURE TICKET</S.LogoNameHeader>

        <S.SearchDiv>
          <S.Search>
            <S.InputSearch type="search" placeholder="Pesquisar" />
            <CgBorderStyleSolid className="between" />
            <S.BtnSearch type="button">Buscar</S.BtnSearch>
          </S.Search>
        </S.SearchDiv>

        <S.OptionsHeader>
          <S.TitleOptionsHeader onClick={() => navigate("/")}>
            Home
          </S.TitleOptionsHeader>
          <S.TitleOptionsHeader>Sobre nós</S.TitleOptionsHeader>

          <S.CadLogin>
            <S.TitleOptionsHeader onClick={() => navigate("/login")}>
              {jwt ? props.loggedUser.nickname : "Login"}
            </S.TitleOptionsHeader>

            <CgBorderStyleSolid className="betweenCadLogin" />

            <S.TitleOptionsHeader>
              {jwt ? props.loggedUser.nickname : "Cadastre-se"}
            </S.TitleOptionsHeader>
          </S.CadLogin>
        </S.OptionsHeader>
      </S.LogoSearchHeader>
    </S.Header>
  );
};
