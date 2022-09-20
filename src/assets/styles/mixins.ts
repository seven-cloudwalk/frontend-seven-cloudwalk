import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const Header = () => css`
  background-color: ${colors.headerColor};
  width: 100%;
`;

export const mixins = {
    Header
}