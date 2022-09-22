import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const Header = () => css`
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
  margin-left: -0.5rem;
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
  transition: all .5s ease-in-out;
  cursor: pointer;
  :hover{
    border-bottom-color: ${colors.hoverHeaderColor};
  }
  :focus{
    border-bottom-color: ${colors.hoverHeaderColor};
  }
`
export const CadLogin = () => css`
  position: absolute;
  display: flex;
  align-items: center;
  right: 1rem;
  gap: 1rem;
`

export const mixins = {
  Header,
  LogoHeader,
  nameLogoHeader,
  SearchHeader,
  BtnSearch,
  OptionsHeader,
  TitleOptionsHeader,
  CadLogin
};
