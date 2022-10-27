import styled, { css } from "styled-components";

export const SpaceModal = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #0000009f; */
  `}
`;

export const TitleModal = styled.h1`
  ${({ theme }) => css`
    position: absolute;
    top: 12.5rem;
    left: 46.2rem;
    font-family: ${theme.constants.fontFamilyLogoHeader};
    color: #014034;
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1rem;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
    background-color: #c2f2dc;
    width: 40rem;
    height: 30rem;
    border-radius: 0.5rem;
    gap: 4rem;
  `}
`;

export const FormModal = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 60%;
    height: 100%;
    margin-bottom: 1rem;
  `}
`;

export const TitleFormModal = styled.h1`
  ${({ theme }) => css`
    position: absolute;
    top: 15rem;
    left: 51.5rem;
    color: #014034;
    font-size: 1.2rem;
  `}
`;

export const InputField = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    line-height: 1.2rem;
    /* gap: ; */
  `}
`;

export const InputModal = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    width: 18rem;
    font-size: 1.02rem;
    border: 2px solid transparent;
    border-bottom-color: ${theme.colors.hoverHeaderColor};
    /* border-right-color: ${theme.colors.hoverHeaderColor}; */
    outline: 0;
    transition: all 0.3s ease-in-out;
    color: #014034;
    font-weight: bold;
    padding: 0.1rem;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    :focus {
      background-color: #04bf551e;
      border-bottom: 2.5px solid #fff;
      padding: 0.1rem;
      box-sizing: border-box;
    }
    ::placeholder {
      color: #575757cb;
      font-size: 0.85rem;
    }
  `}
`;

export const LabelModal = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeHeader};
    font-family: ${theme.constants.fontFamilyHeader};
    font-weight: bold;
    color: #014034;
    box-sizing: border-box;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
  `}
`;

export const OptionsModal = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 40%;
    height: 100%;
    margin-bottom: 1rem;
  `}
`;

export const BtnModal = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18rem;
    height: 2.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.3rem;
    font-family: ${theme.constants.fontFamilyLogoHeader};
    font-size: ${theme.constants.fontSizeBtnCardLogin};
    color: #fff;
    background-color: #009e45;
    transition: all 0.4s ease-in-out;
    :hover {
      background-color: ${theme.colors.hoverHeaderColor};
      -webkit-box-shadow: 0px 0px 6px 0px #04bf55;
      box-shadow: 0px 0px 6px 0px #04bf55;
      transform: scale(1.01);
    }
  `}
`;

export const BtnModalUpdate = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14rem;
    height: 2.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.3rem;
    font-family: ${theme.constants.fontFamilyLogoHeader};
    font-size: ${theme.constants.fontSizeBtnCardLogin};
    color: #fff;
    background-color: #009e45;
    transition: all 0.4s ease-in-out;
    margin-top: -0.1rem;
    :hover {
      background-color: ${theme.colors.hoverHeaderColor};
      -webkit-box-shadow: 0px 0px 6px 0px #04bf55;
      box-shadow: 0px 0px 6px 0px #04bf55;
      transform: scale(1.01);
    }
  `}
`;

export const BtnModalDelete = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14rem;
    height: 2.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.3rem;
    font-family: ${theme.constants.fontFamilyLogoHeader};
    font-size: ${theme.constants.fontSizeBtnCardLogin};
    color: #fff;
    background-color: #ac0000;
    transition: all 0.4s ease-in-out;
    :hover {
      background-color: #fd0000;
      -webkit-box-shadow: 0px 0px 6px 0px #fd0000;
      box-shadow: 0px 0px 6px 0px #fd0000;
      transform: scale(1.01);
    }
  `}
`;

export const LogoModal = styled.img`
  ${({ theme }) => css`
    width: 16rem;
    height: 17rem;
    /* margin-top: 1rem; */
  `}
`;

export const CloseBtnModal = styled.p`
  ${({ theme }) => css`
    position: absolute;
    transform: rotate(90);
    color: #014034;
    font-size: 1.2rem;
    font-weight: bold;
    top: 12.5rem;
    left: 74rem;
    cursor: pointer;
    :hover {
      color: #04bf55;
    }
  `}
`;
