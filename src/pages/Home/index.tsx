import { useNavigate } from "react-router-dom";
import { BannerCarousel } from "../../components/BannerCarousel";
import Folhas from "../../assets/Images/folhas.png";
import * as S from "./style";
import "../../fonts/Intro-Rust/stylesheet.css";
import "./style.css";
import { HeaderComponent } from "../../components/HeaderComponent";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <S.MainBackground>
      <HeaderComponent />
      
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
