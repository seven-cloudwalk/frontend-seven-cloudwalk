import { useEffect } from "react";
import { CgBorderStyleSolid } from "react-icons/cg";
import { createUserType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../assets/Icons/logoutButton.svg";
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

  const nicknameUser = "Olá, " + props.loggedUser.nickname.split(' ')[0] + " " + props.loggedUser.nickname.split(' ')[1];

  const LogoutBtn = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/")
  };

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
          <S.TitleOptionsHeader onClick={() => navigate("/AboutUs")}>
            Sobre nós
          </S.TitleOptionsHeader>

          <S.CadLogin>
            <S.TitleOptionsHeader onClick={jwt ? undefined : () => navigate("/login")}>
               {jwt ? nicknameUser : "Login"}
            </S.TitleOptionsHeader>

            <CgBorderStyleSolid className="betweenCadLogin" />

            <S.TitleOptionsHeader onClick={jwt ? undefined : () => navigate("/register-user")}>
              {jwt ? <S.BtnLogout src={LogoutButton} onClick={LogoutBtn} /> : "Cadastre-se"}
            </S.TitleOptionsHeader>
          </S.CadLogin>
        </S.OptionsHeader>
      </S.LogoSearchHeader>
    </S.Header>
  );
};
