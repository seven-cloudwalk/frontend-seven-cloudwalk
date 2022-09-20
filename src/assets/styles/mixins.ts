import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const Header = () => css`
  background-color: ${colors.headerColor};
  width: 100%;
  height: 7.7%;
  background-color: aliceblue;
  border: none;
`;

const LogoHeader = () => css`
  width: 75px;
  height: 75px;
`;


const nameLogoHeader = () => css`
  font-family: ${constants.fontFamilyLogoHeader};
  font-size: ${constants.fontSizeLogoHeader};
`;

export const mixins = {
  Header,
  LogoHeader,
  nameLogoHeader,
};
