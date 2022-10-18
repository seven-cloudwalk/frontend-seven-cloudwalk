import React from "react";
import { CgBorderStyleSolid } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import LogoNature2 from "../../assets/Icons/nature_future_ticket_1.png";
import * as S from "./style";

export const FooterComponent = () => {
    const navigate = useNavigate();
    return(
        <S.Footer className="grid-container">
            <S.LogoFooter 
                className= "grid-item"
                src={LogoNature2}
                alt="logo Nature Future Ticket"
                onClick={() => navigate("/")}
            />
            <S.nameLogoFooter className="grid-item">
                NATURE<br/>FUTURE<br/>TICKET
            </S.nameLogoFooter>
            <S.titleFooter className="grid-item1">
                Páginas
                <S.itemFooter>Home</S.itemFooter>
                <S.itemFooter>Sobre Nós</S.itemFooter>
                <S.itemFooter>Registre-se|Login</S.itemFooter>
            </S.titleFooter>
            <S.titleFooter2 className="grid-item2">
                Redes sociais
            </S.titleFooter2>
            <S.titleFooter3>
                Desenvolvido por
                <S.itemFooter>Jaymerson</S.itemFooter>
                <S.itemFooter>Keven</S.itemFooter>
                <S.itemFooter>Elieldo</S.itemFooter>
                <S.itemFooter>Karen</S.itemFooter>
            </S.titleFooter3>
        </S.Footer>
    );
};