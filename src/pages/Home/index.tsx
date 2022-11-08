import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BannerCarousel } from "../../components/BannerCarousel";
import { HeaderComponent } from "../../components/HeaderComponent";
import {
  createUserType,
  productType,
  updateAllProductsType,
} from "../../types/types";
import { CardComponent } from "../../components/CardComponent";
import { FooterComponent } from "../../components/FooterComponent";
import LoginService from "../../services/authService";
import Folhas from "../../assets/Images/folhas.png";
import CheckIcon from "../../assets/Icons/check.png";
import SearchIcon from "../../assets/Icons/search.png";
import UpdateIcon from "../../assets/Icons/system-update.png";
import * as XLSX from "xlsx";
import * as S from "./style";
import "../../fonts/Intro-Rust/stylesheet.css";
import "./style.css";
import productService from "../../services/productService";
import { toast } from "react-toastify";

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
  const [updateProduct, setUpdateProduct] = useState<updateAllProductsType[]>([]);
  const [inputSearchProducts, setInputSearchProducts] = useState("");

  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      getUserLogged();      
    } else {
      localStorage.clear();
      console.log("Sem informações do usuario logado");
    }
  }, []);

  const getUserLogged = async () => {
    const response = await LoginService.loggedUser();
    setUserLogged(response.data);

  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const srcProduct = event.target.value.toLowerCase();
    setInputSearchProducts(srcProduct);
  };

  const updateAllProducts = async () => {
    const response = await productService.updateAllProducts(updateProduct);
    if (response) {
      toast.success("Sementes atualizadas com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error(`${response.data.message}`);
    }
  };

  const readExcel = (file: File | Blob) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const bufferArray = e.currentTarget.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

      fileReader.readAsArrayBuffer(file);
    });

    promise.then((data: any) => {
      console.table(data);
      setUpdateProduct(data);
    });
    console.log(updateProduct);
  };
  console.log(updateProduct);

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

        <S.SearchSpace>
          <S.SearchProduct
            placeholder="Busque sua semente"
            onChange={inputHandler}
          />
          <S.SearchIcon
            src={SearchIcon}
            className="loadingIcon"
            alt="Icone de busca"
          />

          <S.InputUpdateAll
            type="file"
            id="updateAll"
            name="updateAll"
            onClick={(e: any) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
          />
          <label htmlFor="updateAll">
            {userLogged.roleAdmin == true ? (
              <S.UpdateIcon src={UpdateIcon} alt="Icone de atualização" />
            ) : (
              ""
            )}
          </label>

          {updateProduct.length <= 0 ? "" : <S.ConfirmUpdateAll src={CheckIcon} alt="Icone de confirmação" onClick={updateAllProducts}/>}
        </S.SearchSpace>

        <S.SpaceCards>
          <CardComponent
            loggedUser={userLogged}
            inputSearch={inputSearchProducts}
          />
        </S.SpaceCards>

        {/* <S.FolhasImg src={Folhas} /> */}

        <FooterComponent />
      </S.CardSpace>
    </S.MainBackground>
  );
};
