import { CgBorderStyleSolid } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { BannerCarousel } from "../../components/BannerCarousel";
import Folhas from "../../assets/Images/folhas.png";
import LogoNature from "../../assets/Icons/nature_future_ticket_1.png";
import * as S from "./style";
import "../../fonts/Intro-Rust/stylesheet.css";
import "./style.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <S.MainBackground>
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
            <S.TitleOptionsHeader>Home</S.TitleOptionsHeader>
            <S.TitleOptionsHeader>Sobre nós</S.TitleOptionsHeader>
            <S.CadLogin>
              <S.TitleOptionsHeader>Login</S.TitleOptionsHeader>
              <CgBorderStyleSolid className="betweenCadLogin" />
              <S.TitleOptionsHeader>Cadastre-se</S.TitleOptionsHeader>
            </S.CadLogin>
          </S.OptionsHeader>
        </S.LogoSearchHeader>
      </S.Header>

      <BannerCarousel />

      <S.CardSpace>
        <S.TitleSpace>
          <S.Divisors />
          <S.TitleProducts>NOVOS PRODUTOS</S.TitleProducts>
          <S.Divisors />
        </S.TitleSpace>

        <S.FolhasImg src={Folhas} />
        <h1>Espaço do card</h1>
      </S.CardSpace>
    </S.MainBackground>
  );
};
