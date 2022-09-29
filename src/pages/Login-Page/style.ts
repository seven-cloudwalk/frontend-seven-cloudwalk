import styled, { css } from "styled-components";
import LoginBackground from "../../assets/Images/LoginBackground.jpg";

export const MainSection = styled.section`
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

export const CardLogin = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.CardLoginPage}
  `}
`;

export const InputLoginField = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
  `}
`;

export const InputLabelLogin = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-bottom: 1.3rem;
    .label-login {
      font-family: ${theme.constants.fontFamilyHeader};
      color: ${theme.constants.textButtonsAndFooter};
    }
  `}
`;

export const LabelLogin = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeHeader};
    font-family: ${theme.constants.fontFamilyHeader};
    font-weight: bold;
    color: ${theme.colors.hoverHeaderColor};
  `}
`;

export const InputLogin = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    width: 20rem;
    font-size: 1.02rem;
    border: 1px solid transparent;
    border-bottom-color: #fff;
    outline: 0;
    transition: all 0.3s ease-in-out;
    color: #fff;
    :focus {
      background: none;
      border-bottom: 2px solid ${theme.colors.hoverHeaderColor};
    }
    ::placeholder {
      color: #8e8e8e;
    }
  `}
`;

export const LinkRegisterPage = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin-left: -5.5rem;
    margin-top: -3.5rem;
  `}
`;

export const pLoginPage = styled.p`
  ${({ theme }) => css`
    color: white;
  `}
`;

export const spanLoginPage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.hoverHeaderColor};
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    :hover {
      transform: scale(1.07);
      margin-left: 0.2rem;
      font-weight: bold;
    }
  `}
`;

export const btnLogin = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.BtnLoginPage}
  `}
`;

export const headerCardLogin = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* margin-top: -.5rem; */
  `}
`;

export const logoNameLoginPage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.constants.fontFamilyLogoHeader};
    font-size: ${theme.constants.fontSizeCardLogin};
    color: ${theme.colors.hoverHeaderColor};
    width: 100%;
    /* gap: .5rem; */
    margin-top: -2rem;
  `}
`;

export const titleCardLogin = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    margin-top: -.2rem;
    margin-bottom: 2rem;
    font-family: ${theme.constants.fontFamilyLogoHeader};
  `}
`;

export const NatureLogo = styled.img`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    margin-left: -.7rem;
  `}
`;

export const spanLogoLoginPage = styled.span`
 /* font-size: ; */
`;
