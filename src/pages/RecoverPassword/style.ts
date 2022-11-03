import styled, { css } from "styled-components";
import LoginBackground from "../../assets/Images/LoginBackground.jpg";

export const MessageField = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: url(${LoginBackground});
    background-size: 100% 100%;
    background-attachment: fixed;
    background-position: bottom;
    background-blend-mode: darken;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;