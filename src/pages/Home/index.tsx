import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BannerCarousel } from "../../components/BannerCarousel";
import { HeaderComponent } from "../../components/HeaderComponent";
import { createUserType } from "../../types/types";
import { CardComponent } from "../../components/CardComponent";
import { FooterComponent } from "../../components/FooterComponent"
import LoginService from "../../services/authService";
import Folhas from "../../assets/Images/folhas.png";
import * as S from "./style";
import "../../fonts/Intro-Rust/stylesheet.css";
import "./style.css";


export const Home = () => {
  const [userLogged, setUserLogged] = useState<createUserType>({
    id: "",
    nickname: "",
    email: "",
    password: "",
    accountType: undefined,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getUserLogged();
    } else {
      console.log("Sem informações do usuario logado");
    }
  }, []);

  const getUserLogged = async () => {
    const response = await LoginService.loggedUser();
    setUserLogged(response.data);
    console.log(response);
  };

  //TODO Search nos produtos

  return (
    <S.MainBackground>
      
      <HeaderComponent loggedUser={userLogged} />
      
      <BannerCarousel />

      <S.CardSpace>
        <S.TitleSpace>
          <S.Divisors />
          <S.TitleProducts>NOVOS PRODUTOS</S.TitleProducts>
          <S.Divisors />
        </S.TitleSpace>

        <S.SpaceCards>
          <CardComponent loggedUser={userLogged}/>
        </S.SpaceCards>

        <S.FolhasImg  src={Folhas} />
      </S.CardSpace>
      
      <FooterComponent />

    </S.MainBackground>
    
  );
};
