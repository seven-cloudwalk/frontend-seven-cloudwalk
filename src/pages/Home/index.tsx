import React from "react";
import LogoNature from "../../assets/Icons/nature_future_ticket_1.png";
import "../../app.css";
import * as S from "./style";

export const Home = () => {
  return (
    <>
      <S.Header>
        <S.logoSearchHeader>
          <S.LogoHeader src={LogoNature} alt="Logo Nature Future" />
          <S.logoNameHeader className="font-face-header-span">
            NATURE FUTURE TICKET
          </S.logoNameHeader>

          <input type="search" placeholder="Pesquisar" />
          <button type="button">Procurar</button>

          <p>Home</p>
          <p>Sobre nós</p>
          <p>Cadastre-se</p>
          <p>Login</p>
        </S.logoSearchHeader>
      </S.Header>
    </>
  );
};
