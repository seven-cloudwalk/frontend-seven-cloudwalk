import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";
// import Folhas from "../Images/folhas.png";

const MainBackground = () => css`
  width: 100%;
  /* height: 100; */
  background-color: #e6ffef;
`;

const CardSpace = () => css`
  background-color: #e6ffef;
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
  right: 5rem;
  width: 23%;
  gap: 2.7rem;
`;

const TitleOptionsHeader = () => css`
  font-family: ${constants.fontFamilyHeader};
  font-size: ${constants.fontSizeHeader};
  font-weight: ${constants.fontWeigthHeader};
  border: 2px solid transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  :hover {
    border-bottom-color: ${colors.hoverHeaderColor};
  }
  :focus {
    border-bottom-color: ${colors.hoverHeaderColor};
  }
`;

export const CadLogin = () => css`
  position: absolute;
  display: flex;
  align-items: center;
  right: 1rem;
  gap: 1rem;
`;

export const Folhas = () => css`
  width: 100%;
  height: 100%;
  background: url(../Images/folhas.png);
  background-attachment: scroll;
  background-repeat: round;
  background-size: auto;
`;
const LogoFooter = () => css`
  width: 280px;
  height: 280px;
  margin-right: -1rem;
  cursor: pointer;
`;
<<<<<<< Updated upstream
export const Footer = () => css`
  width: 100%;
  height:300px;
  color: ${colors.footerTextColor};
  background-color: ${colors.footerColor};
`
export const TitleFooter = () => css`
 color: ${colors.footerTextColor};
 font-family: ${constants.fontFamilyLogoFooter};
 font-size: ${constants.fontSizeTitlesFooter};
`
export const TitleLogoFooter = () => css`
 color: ${colors.footerTextColor};
 font-family: ${constants.fontFamilyLogoFooter};
 font-size: ${constants.fontSizeLogoFooter}
=======
const Footer = () => css`
  width: 100%;
  height: 220px;
  background-color: ${colors.footerColor};
  display: inline-grid;
  grid-template-column: auto auto auto auto auto;
  justify-content: space-evenly;
  align-content: center;
  
`;
const LogoFooter = () => css`
  width:200px;
  height: 200px;
  grid-column: 1;
  align-self:center;
`;
const nameLogoFooter =() => css`
  font-family:${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeLogoFooter};
  color: ${colors.colorLogoFooter};
  text-align: right;
  grid-column: 2;
  align-self:center;
  padding-right:15px;
  border-right:3px solid white;
`;
const titleFooter= () => css`
  font-family:${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeHeader};
  color: ${colors.colorLogoFooter};
  grid-column:3;
  padding-top:20px;
`;
const titleFooter2= () => css`
  font-family:${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeHeader};
  color: ${colors.colorLogoFooter};
  grid-column:4;
  padding-top:20px;
`;
const titleFooter3= () => css`
  font-family:${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeHeader};
  color: ${colors.colorLogoFooter};
  grid-column:5;
  padding-top:20px;
`;
const itemFooter =() => css`
  text-decoration: none;
  color: ${colors.colorLogoFooter};
  font-size: ${constants.fontSizeItensFooter};
  font-family: ${constants.fontFamilyHeader};
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  LogoFooter,
  Footer,
  TitleLogoFooter,
=======
  CardLoginPage,
  BtnLoginPage,
  Footer,
  LogoFooter,
  nameLogoFooter,
  titleFooter,
  titleFooter2,
  titleFooter3,
  itemFooter,
>>>>>>> Stashed changes
};
