import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BannerCarousel } from "../../components/BannerCarousel";
import { HeaderComponent } from "../../components/HeaderComponent";
import { createUserType } from "../../types/types";
import { FooterComponent } from "../../components/FooterComponent"
import LoginService from "../../services/authService";
import Folhas from "../../assets/Images/folhas.png";
import * as S from "./style";
import "../../fonts/Intro-Rust/stylesheet.css";
import "./style.ts";
import Jay from "../../assets/Images/jay.jpeg"
import Keven from "../../assets/Images/keven.jpeg"
import Elieldo from "../../assets/Images/elieldo.jpg"
import Karen from "../../assets/Images/FotoKaren.jpg"
import Proposta from "../../assets/Images/proposta.png"
import GitHub from "../../assets/Icons/icons8-github-32.png"
import LinkedIn from "../../assets/Icons/icons8-linkedin-32.png"
export const AboutUs = () => {
  const [userLogged, setUserLogged] = useState<createUserType>({
    id: "",
    nickname: "",
    email: "",
    password: "",
    accountType: undefined,
  });

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
          <S.TitleProducts>SOBRE NÓS</S.TitleProducts>
          <S.Divisors />
        </S.TitleSpace>
        


        <S.FolhasImg src={Folhas} />
        <S.TituloAboutUs>
            Nossa proposta
        </S.TituloAboutUs>
        <S.TextoAboutUs>
            A crise ambiental é um dos problemas mais relevantes do século XXI. 
            Pensando nisso nós da Nature Future Ticket criamos essa iniciativa para resolvermos em conjunto essa questão.
            
        </S.TextoAboutUs>
        <S.Proposta
        src={Proposta}/>
        <S.TituloAboutUs>
            Nosso time
        </S.TituloAboutUs>
        <S.TimeAboutUs>
            <S.FotoDev
            src={Jay}/>
            <S.TextoAboutUsDev>
            <S.TituloAboutUsDev>Jaymerson</S.TituloAboutUsDev>
            Formado em Administração pela Universidade do Estado do Rio Grande do Norte, 
            aluno do curso de Desenvolvimento Web pela Blue EdTech. Meu sonho sobre foi ser 
            jogador de futebol, até meio que consegui, mas tive que parar para trabalhar. 
            Meu interesse por programação surgiu em 2016, quando participei da implantação 
            de um sistema ERP na empresa a qual eu trabalhava.<br/>
            Esse interesse ficou guardado na gaveta até 2022, quando decidi que era hora de 
            correr atrás... Hoje sou um entusiasta da tecnologia, me orgulho da decisão que 
            tomei em relação ao curso e posso dizer: hoje, eu sou feliz!<br/>
            Com tudo isso, esqueci do meu sonho de criança e vivo intensamente o meu sonho 
            de adulto!<br/><br/>
            <S.LinksDev>
              <S.AboutUsLinks href='https://www.linkedin.com/in/jaymesonmendes/'>
                  <S.AboutUsIcon src={LinkedIn}/><p>LinkedIn</p>
                </S.AboutUsLinks>
                <S.AboutUsLinks href='https://github.com/jayymeson'>
                  <S.AboutUsIcon src={GitHub}/><p>GitHub</p>
                </S.AboutUsLinks>
            </S.LinksDev>
            </S.TextoAboutUsDev>
            

        </S.TimeAboutUs>
        <S.TimeAboutUs>
        <S.FotoDev
            src={Keven}/>
            
            <S.TextoAboutUsDev>
            <S.TituloAboutUsDev>Keven</S.TituloAboutUsDev>
            Estudante de Desenvolvimento Full-stack, pela escola BlueEdTech, com a ambição de 
            se tornar o mago do Front-end! 25 anos, solteiro e apaixonado por tecnologia.<br/> 
            "A programação é uma atividade incrível, que, por certa ótica, pode-se dizer que 
            é como a magia, complexa e poderosa, para quem domina, não existe obstáculos. 
            Se a época da Inquisição fosse hoje, com certeza estaríamos condenados. 
            Algumas linhas de código, diversos arquivos, e scripts, conseguimos criar um 
            universo inteiro, ou melhor, um Metaverso".<br/> Que todos nós nos tornemos magos 
            implacáveis!<br/><br/>
            <S.LinksDev>
              <S.AboutUsLinks href='https://www.linkedin.com/in/keven-ferreira-moraes-4327a463/'>
                  <S.AboutUsIcon src={LinkedIn}/><p>LinkedIn</p>
                </S.AboutUsLinks>
                <S.AboutUsLinks href='https://github.com/Kevenfz'>
                  <S.AboutUsIcon src={GitHub}/><p>GitHub</p>
                </S.AboutUsLinks>
            </S.LinksDev>
            </S.TextoAboutUsDev>
        </S.TimeAboutUs>
        <S.TimeAboutUs>
            <S.FotoDev src={Elieldo}/>
            
            <S.TextoAboutUsDev>
            <S.TituloAboutUsDev>Elieldo Martins</S.TituloAboutUsDev>
            Olá , Meu nome é Elieldo Martins, sou desenvolvedor BackEnd.

Tenho 44 anos, sou do Rio De Janeiro e nasci em Junho. Gosto de estudar ferramentas de desenvolvimento pessoal pois creio que são muito úteis em várias dimensões de nossa existência.

Estou envolvido com o mundo da programação a uns 20 anos , fiz curso de processamento de dados, tranquei um curso de ciência da computação e consegui a alguns anos um diploma de tecnólogo em análise e desenvolvimento.

Ja trabalhei na área de softwares desenvolvendo aplicativos desktop , client-dserver e integrados com outros sistemas.

Estou atualmente  na escola BlueEdtech  porque senti necessidade de fazer um upgrade e aprender como desenvolver utilizando as novas tecnologias web.  Achei muito boa a proposta do curso e estou aprendendo bastante no curso de FullStack e melhorando meu portifólio.<br/><br/>
            <S.LinksDev>
              <S.AboutUsLinks href='https://www.linkedin.com/in/elieldo-martins-05839673/'>
                  <S.AboutUsIcon src={LinkedIn}/><p>LinkedIn</p>
                </S.AboutUsLinks>
                <S.AboutUsLinks href='https://github.com/hefi1413'>
                  <S.AboutUsIcon src={GitHub}/><p>GitHub</p>
                </S.AboutUsLinks>
            </S.LinksDev>
            </S.TextoAboutUsDev>
        </S.TimeAboutUs>
        <S.TimeAboutUs>
        <S.FotoDev src={Karen}/>
            <S.TextoAboutUsDev>
            <S.TituloAboutUsDev>Karen Lourenço</S.TituloAboutUsDev>
            Olá, sou Karen Lourenço, uma desenvolvedora full-stack e entusiasta do design de UI e UX.
            
            No momento estou cursando engenharia da computação na Faculdade Descomplica e sou aluna da Blue Edtech.
           <br/> Estou sempre disposta a novos desafios!<br/><br/>
            <S.LinksDev>
              <S.AboutUsLinks href='https://www.linkedin.com/in/karenlourenco/'>
                  <S.AboutUsIcon src={LinkedIn}/><p>LinkedIn</p>
                </S.AboutUsLinks>
                <S.AboutUsLinks href='https://github.com/KarenMascarenhasLourenco'>
                  <S.AboutUsIcon src={GitHub}/><p>GitHub</p>
                </S.AboutUsLinks>
            </S.LinksDev>
            </S.TextoAboutUsDev>
        </S.TimeAboutUs>
      {/* <S.Footer>
        <S.LogoFooter src = {LogoNatureDark} />
        <S.TitleLogoFooter> NATURAL FUTURE TICKET</S.TitleLogoFooter>
      </S.Footer> */}

      <FooterComponent />

    </S.MainBackground>
    
  );
};
