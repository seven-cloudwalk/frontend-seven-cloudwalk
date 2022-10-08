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

export const CardRegisterUser = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.CardRegisterUserPage}
  `}
`;

export const InputRegisterField = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
  `}
`;

export const InputLabelRegister = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-bottom: 1.3rem;
    .label {
      font-family: ${theme.constants.fontFamilyHeader};
      color: ${theme.colors.logoLoginPage};
    }
  `}
`;

export const LabelRegister = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeHeader};
    font-family: ${theme.constants.fontFamilyHeader};
    font-weight: bold;
    color: ${theme.colors.hoverHeaderColor};
  `}
`;

export const InputRegister = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    width: 22rem;
    font-size: 1.02rem;
    border: 1px solid transparent;
    border-bottom-color: #fff;
    outline: 0;
    transition: all 0.3s ease-in-out;
    color: #fff;
    padding: 0.1rem;
    :focus {
      background: none;
      border-bottom: 2px solid ${theme.colors.hoverHeaderColor};
      padding: 0.1rem;
    }
    ::placeholder {
      color: #8e8e8e;
      font-size: 0.8rem;
    }
  `}
`;

export const btnRegister = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.BtnRegisterUserPage}
  `}
`;

export const headerCardRegister = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`;

export const logoNameRegisterPage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.constants.fontFamilyLogoHeader};
    font-size: ${theme.constants.fontSizeCardLogin};
    color: ${theme.colors.logoLoginPage};
    width: 100%;
  `}
`;

export const titleCardRegister = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-family: ${theme.constants.fontFamilyLogoHeader};
  `}
`;

export const NatureLogo = styled.img`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    margin-left: -0.7rem;
  `}
`;

export const spanLogoRegisterPage = styled.span`
  /* font-size: ; */
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

export const IconHome = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 2.1rem;
    left: 8rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    :hover {
      transform: scale(1.08);
    }
  `}
`;

export const CNPJField = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: -2.5rem;
  `}
`;

export const labelInputCNPJ = styled.div`
  ${({ theme }) => css`
    ${InputRadio} + ${LabelRadio}::before {
      content: "";
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      background-color: rgba(0, 0, 0, 0.73);
      border: 2px solid #04bf55;
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
      margin-bottom: 3px;
      cursor: pointer;
    };

    ${InputRadio}:checked + ${LabelRadio}::before {
      background-color: white;
      box-sizing: border-box;
      border: 5px solid #04bf55;
      padding: 5px;
    };
  `}
`;

export const OptionsCNPJ = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
  `}
`;

export const InputRadio = styled.input`
  ${({ theme }) => css`
    display: none;
  `}
`;

export const LabelRadio = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.constants.fontFamilyHeader};
    font-weight: bold;
    cursor: pointer;
  `}
`;
