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

export const ModalMessage = styled.div`
  ${({ theme }) => css`
    width: 55%;
    height: 60%;
    padding: 2rem;
    box-sizing: border-box;
    background-color: #014034;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    color: #ffff;
  `}
`;

export const TitleModal = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeLogoFooter};
    font-family: ${theme.constants.fontFamilyLogoFooter};
    color: ${theme.colors.logoLoginPage};
    /* margin-top: 13rem; */
  `}
`;

export const TextModal = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeModalConfEmail};
  `}
`;

export const TextField = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    text-align: justify;
    /* align-items: center; */
  `}
`;

export const IconConfEmail = styled.img`
  ${({ theme }) => css`
    position: relative;
    width: 30rem;
    top: -1rem;
    /* transform: scaleX(-1); */
  `}
`;

export const LogoNftField = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    width: 20%;
    gap: 5rem;
    left: 60rem;
    top: 30rem;
  `}
`;

export const LogoNFT = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.LogoFooter}
  `}
`;

export const TitleLogoNFT = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.constants.fontFamilyLogoHeader};
    font-size: ${theme.constants.fontSizeLogoFooter};
    color: ${theme.colors.searchColor};
    text-align: right;
    align-self: center;
    padding-right: 15px;
    border-right: 3px solid #C2F2DC;
    margin-left: -5rem;
    margin-right: 5rem;
  `}
`;
