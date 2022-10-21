import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const MainBackground = () => css`
  width: 100%;
  height: 100%;
  background-color: #e6ffef;
`;

const CardSpace = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  gap: 5rem;
  background: #e6ffef;
  width: 100%;
  height: 80%;
`;

const Header = () => css`
  position: relative;
  top: 0;
  background-color: ${colors.headerColor};
  width: 100%;
  height: 7.7%;
  border: none;
`;

const LogoHeader = () => css`
  width: 75px;
  height: 75px;
  margin-right: -1rem;
  cursor: pointer;
`;

const nameLogoHeader = () => css`
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeLogoHeader};
  color: ${colors.textLogoColor};
  margin-right: -2rem;
  cursor: context-menu;
`;

const titleLogoHeader = () => css`
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeTitleProducts};
  color: ${colors.textLogoColor};
  cursor: context-menu;
`;

const SearchHeader = () => css`
  width: 80%;
  background-color: ${colors.searchColor};
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem;
  font-family: ${constants.fontFamilyHeader};
  font-weight: ${constants.fontWeigthHeader};
  transition: all 0.5s ease-in-out;
  color: #757986;
  font-weight: bold;
`;

const BtnSearch = () => css`
  position: relative;
  color: #757986;
  font-family: ${constants.fontFamilyHeader};
  font-size: 1rem;
  font-weight: bold;
  background-color: ${colors.buttonSearch};
  border: none;
  border-radius: 0.3rem;
  padding: 0.6rem;
  margin-left: -3rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const OptionsHeader = () => css`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  left: 85rem;
  width: 100%;
  gap: 2.7rem;
`;

const TitleOptionsHeader = () => css`
  font-family: ${constants.fontFamilyHeader};
  font-size: ${constants.fontSizeHeader};
  font-weight: ${constants.fontWeigthHeader};
  padding: 0.2rem;
  border: 2px solid transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  :hover {
    border-bottom-color: ${colors.hoverHeaderColor};
    padding: 0.2rem;
  }
  :focus {
    border-bottom-color: ${colors.hoverHeaderColor};
  }
`;

const CadLogin = () => css`
  position: absolute;
  display: flex;
  align-items: center;
  right: 89rem;
  gap: 1rem;
`;

const Folhas = () => css`
  /* position: inherit; */
  /* bottom: 0rem; */
  margin-top: -55rem;
  width: 100%;
  height: 100%;
  background-image: url(../Images/folhas.png);
  /* background-position: center center; */
  background-attachment: local;
  background-repeat: repeat;
  background-size: cover;
`;

const CardLoginPage = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 27rem;
  height: 30rem;
  padding: 0.3rem;
  background-color: rgba(0, 0, 0, 0.73);
  border-radius: 0.7rem;
  -webkit-box-shadow: 2px 10px 9px 2px #000000;
  box-shadow: 2px 10px 9px 2px #000000;
  font-family: ${constants.fontFamilyHeader};
`;

const CardRegisterUserPage = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28rem;
  height: 42rem;
  padding: 0.3rem;
  background-color: rgba(0, 0, 0, 0.73);
  border-radius: 0.7rem;
  -webkit-box-shadow: 2px 10px 9px 2px #000000;
  box-shadow: 2px 10px 9px 2px #000000;
  font-family: ${constants.fontFamilyHeader};
`;

const BtnLoginPage = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 2.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeBtnCardLogin};
  color: #fff;
  background-color: #009e45;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: ${colors.hoverHeaderColor};
    -webkit-box-shadow: 0px 0px 6px 0px #04bf55;
    box-shadow: 0px 0px 6px 0px #04bf55;
    transform: scale(1.02);
  }
`;

const BtnRegisterUserPage = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 2.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
  border: none;
  border-radius: 0.3rem;
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeBtnCardLogin};
  color: #fff;
  background-color: #009e45;
  transition: all 0.4s ease-in-out;
  :hover {
    background-color: ${colors.hoverHeaderColor};
    -webkit-box-shadow: 0px 0px 6px 0px #04bf55;
    box-shadow: 0px 0px 6px 0px #04bf55;
    transform: scale(1.02);
  }
`;

const BtnLogout = () => css`
  position: absolute;
  top: 1.2rem;
  right: -1.5rem;
  width: 1.5rem;
  transition: all 0.5s ease-in-out;
  border: 2px solid transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 0.2rem;
  cursor: pointer;
  :hover {
    padding: 0.2rem;
    border-bottom-color: ${colors.hoverHeaderColor};
  }
`;

const CardProduct = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 11rem;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
  box-sizing: border-box;
  margin-top: 1.2rem;
  gap: 4rem;
  -webkit-box-shadow: 0px 11px 11px 4px rgba(0, 0, 0, 0.51);
  box-shadow: 0px 11px 11px 4px rgba(0, 0, 0, 0.53);
`;

const InfoProduct = () => css`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: -1.5rem;
  margin-bottom: -0.3rem;
  line-height: 1.3rem;
  /* gap: -1rem; */
`;

const ImgProduct = () => css`
  position: relative;
  bottom: 3rem;
  right: 1rem;
  width: 13.3rem;
  height: 11rem;
`;

const DivPriceBtnBuy = () => css`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  margin-top: -0.4rem;
`;

const BtnBuyProduct = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 2rem;
  border: none;
  border-radius: 0.3rem;
  box-sizing: border-box;
  color: #000;
  font-weight: bold;
  background-color: ${colors.buttonColor};
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    color: #fff;
    background-color: ${colors.hoverHeaderColor};
    -webkit-box-shadow: 0px 0px 6px 0px #04bf55;
    box-shadow: 0px 0px 6px 0px #04bf55;
  }
`;

const OptionsBtnCard = () => css`
  width: 2rem;
  height: 1.9rem;
  margin-left: 1.2rem;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.09);
  }
`;

// const LogoFooter = () => css`
//   width: 280px;
//   height: 280px;
//   margin-right: -1rem;
//   cursor: pointer;
// `;

// export const Footer = () => css`
//   width: 100%;
//   height:300px;
//   color: ${colors.footerTextColor};
//   background-color: ${colors.footerColor};
// `
export const TitleFooter = () => css`
 color: ${colors.footerTextColor};
 font-family: ${constants.fontFamilyLogoFooter};
 font-size: ${constants.fontSizeTitlesFooter};
`
export const TitleLogoFooter = () => css`
 color: ${colors.footerTextColor};
 font-family: ${constants.fontFamilyLogoFooter};
 font-size: ${constants.fontSizeLogoFooter};
 `;

const Footer = () => css`
  width: 100%;
  height: 220px;
  background-color: ${colors.footerColor};
  display: inline-grid;
  /* grid-template-column: auto auto auto auto auto; */
  justify-content: center;
  align-content: center;
  gap: 5rem;
  margin-top: 15rem;
`;

const LogoFooter = () => css`
  width:200px;
  height: 200px;
  grid-column: 1;
  align-self:center;
`;

const nameLogoFooter = () => css`
  font-family:${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeLogoFooter};
  color: ${colors.colorLogoFooter};
  text-align: right;
  grid-column: 2;
  align-self:center;
  padding-right:15px;
  border-right:3px solid white;
  margin-left: -5rem;
  margin-right: 5rem;
`;

const titleFooter= () => css`
  font-family:${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeHeader};
  color: ${colors.colorLogoFooter};
  grid-column:3;
  padding-top:20px;
  cursor: pointer;
`;
const titleFooter2= () => css`
  font-family:${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeHeader};
  color: ${colors.colorLogoFooter};
  grid-column:4;
  padding-top:20px;
  cursor: pointer;
`;
const titleFooter3= () => css`
  
  font-size: ${constants.fontSizeHeader};
  color: ${colors.colorLogoFooter};
  grid-column:5;
  padding-top:20px;
  cursor: pointer;
`;

const itemFooter =() => css`
  text-decoration: none;
  color: ${colors.colorLogoFooter};
  font-size: ${constants.fontSizeItensFooter};
  font-family: ${constants.fontFamilyHeader};
`
const TituloAboutUs = () => css`
  font-size: ${constants.fontSizeTitlesFooter};
  font-family:${constants.fontFamilyLogoHeader};
  padding: 100px 0 0px 100px;
  color: ${colors.textLogoColor};
`
const TextoAboutUs = () => css`
  font-size: ${constants.fontSizeCardLogin};
  font-family: ${constants.fontFamilyHeader}; 
  color: ${colors.textLogoColor};
  padding: 0px 100px 0px 100px;
  text-align: justify;
`
const TimeAboutUs = () => css`
  display:grid;
  grid-template-column: auto auto auto auto auto auto auto;
  padding: 0px 100px 50px 100px;
  align-items:center 
`
const FotoDev = () => css`
  border-radius:50%;
  height:200px;
  width: 200px;
  grid-column: 1/2;
  grid-row: auto;
`
const TituloAboutUsDev = () => css`
  font-size: ${constants.fontSizeBtnCardLogin};
  font-family:${constants.fontFamilyLogoHeader};
  padding:0px 0 0px 0px;
  color: ${colors.textLogoColor};
  grid-column: 3/7;
`
const TextoAboutUsDev = () => css`
  font-size: ${constants.fontSizeCardProduct};
  font-family: ${constants.fontFamilyHeader}; 
  color: ${colors.textLogoColor};
  padding: 0px 100px 0px 100px;
  text-align: justify;
  grid-column: 3/7;
`
export const mixins = {
  Header,
  LogoHeader,
  nameLogoHeader,
  SearchHeader,
  BtnSearch,
  OptionsHeader,
  TitleOptionsHeader,
  CadLogin,
  MainBackground,
  Folhas,
  CardSpace,
  titleLogoHeader,
  LogoFooter,
  Footer,
  TitleLogoFooter,
  CardLoginPage,
  BtnLoginPage,
  nameLogoFooter,
  titleFooter,
  titleFooter2,
  titleFooter3,
  itemFooter,
  CardRegisterUserPage,
  BtnRegisterUserPage,
  BtnLogout,
  CardProduct,
  InfoProduct,
  ImgProduct,
  DivPriceBtnBuy,
  BtnBuyProduct,
  OptionsBtnCard,
  TituloAboutUs,
  TextoAboutUs,
  TimeAboutUs,
  FotoDev,
  TituloAboutUsDev,
  TextoAboutUsDev,
};
