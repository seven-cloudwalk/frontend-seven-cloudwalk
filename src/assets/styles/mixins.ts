import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const MainBackground = () => css`
  width: 100%;
  height: 100%;
  /* background-image: url(../Images/folhas.png);
  background-position: center center;
  background-attachment: local;
  background-repeat: repeat;
  background-size: cover; */
`;

const CardSpace = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  gap: 5rem;
  width: 100%;
  height: 100%;
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
  margin-top: 1rem;
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeTitleProducts};
  color: ${colors.textLogoColor};
  cursor: context-menu;
`;

const SearchHeader = () => css`
  width: 80%;
  /* background-color: ${colors.searchColor}; */
  background-color: #c2f2dc;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23000000' fill-opacity='0.11' fill-rule='evenodd'/%3E%3C/svg%3E");
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
  color: #5f5f5f;
  font-family: ${constants.fontFamilyHeader};
  font-size: 1rem;
  font-weight: bold;
  background-color: #c2f2dc;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23000000' fill-opacity='0.11' fill-rule='evenodd'/%3E%3C/svg%3E");
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
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 15rem;
  width: 85%;
  gap: 2.8rem;
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
  /* position: absolute; */
  display: flex;
  align-items: center;
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
  width: 30rem;
  height: 32rem;
  padding: 1rem;
  box-sizing: border-box;
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
  width: 25rem;
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
  width: 22rem;
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
  margin-top: -2.2rem;
  margin-bottom: 0.4rem;
  line-height: 1.3rem;
  /* gap: -1rem; */
`;

const ImgProduct = () => css`
  position: relative;
  bottom: 1.5rem;
  left: 0.5rem;
  /* right: 0.1rem; */
  width: 11rem;
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
  margin-left: 2rem;
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
`;
export const TitleLogoFooter = () => css`
  color: ${colors.footerTextColor};
  font-family: ${constants.fontFamilyLogoFooter};
  font-size: ${constants.fontSizeLogoFooter};
`;

const Footer = () => css`
  width: 100vw;
  height: 220px;
  background-color: ${colors.footerColor};
  display: flex;
  grid-template-column: auto auto auto auto auto;
  justify-content: center;
  align-content: center;
  gap: 5rem;
  margin-top: 56rem;
`;

const LogoFooter = () => css`
  width: 200px;
  height: 200px;
  grid-column: 1;
  align-self: center;
`;

const nameLogoFooter = () => css`
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeLogoFooter};
  color: ${colors.colorLogoFooter};
  text-align: right;
  grid-column: 2;
  align-self: center;
  padding-right: 15px;
  border-right: 3px solid white;
  margin-left: -5rem;
  margin-right: 5rem;
`;

const titleFooter = () => css`
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeHeader};
  color: ${colors.colorLogoFooter};
  grid-column: 3;
  padding-top: 20px;
  cursor: pointer;
`;
const titleFooter2 = () => css`
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeHeader};
  color: ${colors.colorLogoFooter};
  grid-column: 4;
  padding-top: 20px;
  cursor: pointer;
`;
const titleFooter3 = () => css`
  /* text-align: start; */
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeHeader};
  color: ${colors.colorLogoFooter};
  grid-column: 5;
  padding-top: 20px;
  cursor: pointer;
`;

const itemFooter = () => css`
  text-decoration: none;
  color: ${colors.colorLogoFooter};
  font-size: ${constants.fontSizeItensFooter};
  font-family: ${constants.fontFamilyHeader};
  margin-left: 1rem;
`;
const TituloAboutUs = () => css`
  font-size: ${constants.fontSizeTitlesFooter};
  font-family: ${constants.fontFamilyLogoHeader};
  padding: 100px 0 0px 100px;
  color: ${colors.textLogoColor};
`;
const TextoAboutUs = () => css`
  font-size: ${constants.fontSizeCardLogin};
  font-family: ${constants.fontFamilyHeader};
  color: ${colors.textLogoColor};
  padding: 0px 100px 0px 100px;
  text-align: justify;
`;
const TimeAboutUs = () => css`
  display: grid;
  grid-template-column: auto auto auto auto auto auto auto;
  padding: 0px 100px 50px 100px;
  align-items: center;
`;
const FotoDev = () => css`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  grid-column: 1/2;
  grid-row: auto;
`;
const TituloAboutUsDev = () => css`
  font-size: ${constants.fontSizeBtnCardLogin};
  font-family: ${constants.fontFamilyLogoHeader};
  padding: 0px 0 0px 0px;
  color: ${colors.textLogoColor};
  grid-column: 3/7;
`;
const TextoAboutUsDev = () => css`
  font-size: ${constants.fontSizeCardProduct};
  font-family: ${constants.fontFamilyHeader};
  color: ${colors.textLogoColor};
  padding: 0px 100px 0px 100px;
  text-align: justify;
  grid-column: 3/7;
`;

const LinksDevs = () => css`
  font-size: ${constants.fontSizeCardProduct};
  font-family: ${constants.fontFamilyHeader};
  color: ${colors.textLogoColor};
  text-decoration: none;
  padding-right: 80px;
`;

const IconRedes = () => css`
  width: 32px;
  height: 32px;
`;

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
  LinksDevs,
  IconRedes,
};
