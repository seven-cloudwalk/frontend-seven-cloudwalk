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

export const CardLogin = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 28rem;
    height: 24rem;
    padding: 1rem;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.73);
    border-radius: 0.7rem;
    -webkit-box-shadow: 2px 10px 9px 2px #000000;
    box-shadow: 2px 10px 9px 2px #000000;
    font-family: ${theme.constants.fontFamilyHeader};
  `}
`;

export const InputLoginField = styled.section`
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
    align-items: center;
    /* gap: 1rem; */
    /* line-height: 2; */
    margin-bottom: 1rem;
    .label {
      margin-right: 11rem;
      font-family: ${theme.constants.fontFamilyHeader};
      color: ${theme.colors.logoLoginPage};
    }
    .label2 {
      margin-right: 4.2rem;
      font-family: ${theme.constants.fontFamilyHeader};
      color: ${theme.colors.logoLoginPage};
    }
  `}
`;

export const TitleRecoverEmail = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeLogoHeader};
    font-family: ${theme.constants.fontFamilyHeader};
    font-weight: bold;
    color: ${theme.colors.hoverHeaderColor};
    margin-bottom: 2rem;
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
    margin-top: .5rem;
    margin-bottom: 3rem;
    :focus {
      background: none;
      border-bottom: 2px solid ${theme.colors.hoverHeaderColor};
    }
    ::placeholder {
      color: #8e8e8e;
    }
  `}
`;

export const btnLogin = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 2.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.3rem;
    font-family: ${theme.constants.fontFamilyLogoHeader};
    font-size: ${theme.constants.fontSizeBtnCardLogin};
    color: #fff;
    background-color: #009e45;
    transition: all 0.3s ease-in-out;
    margin-top: -.5rem;
    margin-bottom: 1.5rem;
    :hover {
      background-color: ${theme.colors.hoverHeaderColor};
      -webkit-box-shadow: 0px 0px 6px 0px #04bf55;
      box-shadow: 0px 0px 6px 0px #04bf55;
    }
  `}
`;

export const IconBack = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    top: 2.5rem;
    left: 3rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    :hover {
      transform: scale(1.08);
    }
  `}
`;
