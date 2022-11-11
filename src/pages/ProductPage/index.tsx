import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BannerCarousel } from "../../components/BannerCarousel";
import { HeaderComponent } from "../../components/HeaderComponent";
import { createUserType } from "../../types/types";
import { FooterComponent } from "../../components/FooterComponent";
import { CardComponent } from "../../components/CardComponent";
import LoginService from "../../services/authService";
import productService from "../../services/productService";
import * as S from "./style";
import "../../fonts/Intro-Rust/stylesheet.css";
import "./style.ts";
import { productType } from "../../types/types";

export const ProductPage = () => {
  const [userLogged, setUserLogged] = useState<createUserType>({
    id: "",
    nickname: "",
    email: "",
    password: "",
    accountType: undefined,
  });
  const [product, setProduct] = useState<productType>({
    name: "",
    category: "",
    description: "",
    price: 26,
    image: "",
  });
  const params = useParams();
  const data = JSON.stringify(params.id);
  const productId = data.replace(/[\\"]/g, "");

  const getProductByIdData = async (productId: string) => {
    const response = await productService.getProductById(productId);

    setProduct(response.data);
  };
  useEffect(() => {
    getProductByIdData(productId);
  }, []);
  const navigate = useNavigate();

  const getUserLogged = async () => {
    const response = await LoginService.loggedUser();
    setUserLogged(response.data);
    console.log(response);
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      console.log("Sem informações do usuario logado");
    } else {
      getUserLogged();
    }
  }, []);

  return (
    <S.MainBackground>
      <HeaderComponent loggedUser={userLogged} />
      <BannerCarousel />
      <S.TitleSpace>
        <S.Divisors />
        <S.TitleProducts>veja mais</S.TitleProducts>
        <S.Divisors />
      </S.TitleSpace>
      <S.ProductInfo>
        <S.ProductInfo2>
          <S.ProductInfoImage
          src={product.image}/>
        </S.ProductInfo2>
        <S.ProductInfo2>
          <S.ProductInfoTitle>{product.name}</S.ProductInfoTitle>
          <S.ProductInfoCategory>Categoria: {product.category}</S.ProductInfoCategory>
          <S.ProductInfoSubtitle>{product.description}</S.ProductInfoSubtitle>
          <S.ProductInfoPrice>
            <S.ProductInfoValor>{product.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}</S.ProductInfoValor>
            <S.ProductInfoBotao>Comprar</S.ProductInfoBotao>
          </S.ProductInfoPrice>
        </S.ProductInfo2>
        
      </S.ProductInfo>

      <FooterComponent />
    </S.MainBackground>
  );
};
