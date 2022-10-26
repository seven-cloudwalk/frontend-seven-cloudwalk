import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BannerCarousel } from "../../components/BannerCarousel";
import { HeaderComponent } from "../../components/HeaderComponent";
import { createUserType, productType } from "../../types/types";
import { CardComponent } from "../../components/CardComponent";
import { FooterComponent } from "../../components/FooterComponent";
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

  const [searchProducts, setSearchProducts] = useState<productType[]>([
    {
      name: "",
      category: "",
      description: "",
      price: 26,
      image: "",
    },
  ]);

  const [inputSearchProducts, setInputSearchProducts] = useState("");

  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    // getAllProducts();
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

  // const getAllProducts = async () => {
  //   const response = await productService.getAllProducts();
  //   if (response) {
  //     setSearchProducts(response);
  //   }
  // };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const srcProduct = event.target.value.toLowerCase();
    setInputSearchProducts(srcProduct);
  };

  return (
    <S.MainBackground>
      <HeaderComponent loggedUser={userLogged} />

      <BannerCarousel />

      <S.CardSpace>
        <S.SearchProduct
          placeholder="Busque sua semente"
          onChange={inputHandler}
        />
        <S.SearchProductBtn></S.SearchProductBtn>

        <S.TitleSpace>
          <S.Divisors />
          <S.TitleProducts>NOVOS PRODUTOS</S.TitleProducts>
          <S.Divisors />
        </S.TitleSpace>

        <S.SpaceCards>
          <CardComponent loggedUser={userLogged} inputSearch={inputSearchProducts}/>
        </S.SpaceCards>

        <S.FolhasImg src={Folhas} />

        <FooterComponent />
      </S.CardSpace>
    </S.MainBackground>
  );
};
