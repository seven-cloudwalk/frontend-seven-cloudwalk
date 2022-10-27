import styled, { css } from "styled-components";

export const SearchSpace = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  `}
`;

export const SearchProduct = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    width: 20%;
    font-size: 1.02rem;
    border: 2.5px solid transparent;
    border-bottom-color: ${theme.colors.hoverHeaderColor};
    outline: 0;
    transition: all 0.3s ease-in-out;
    color: #014034;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.3rem;
    box-sizing: border-box;
    margin-bottom: -1rem;
    :focus {
      height: 2.5rem;
      background-color: #04bf551e;
      border-bottom: 2.5px solid #ffffff;
      padding: 0.3rem;
      box-sizing: border-box;
      border-radius: 0.5rem;
    }
    ::placeholder {
      color: #575757cb;
      font-size: 1.2rem;
    }
  `}
`;

export const SearchIcon = styled.img`
  ${({ theme }) => css`
    position: relative;
    width: 1.5rem;
    right: 2.1rem;
    top: .37rem;
  `}
`;

export const MainBackground = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.MainBackground}
  `}
`;

export const CardSpace = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.CardSpace}
  `}
`;

export const FolhasImg = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.Folhas}
  `}
`;

export const TitleSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-top: 1rem;
  margin-bottom: -3rem;
`;

export const TitleProducts = styled.span`
  ${({ theme }) => css`
    ${theme.mixins.titleLogoHeader}
  `}
`;

export const Divisors = styled.div`
  width: 550px;
  border-radius: 1rem;
  /* height: .1px; */
  border: 2px solid #014034;
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    ${theme.mixins.Footer}
  `}
`;
export const TitleLogoFooter = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.TitleLogoFooter}
  `}
`;
export const LogoFooter = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.LogoFooter}
  `}
`;

export const SpaceCards = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 75%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10rem;
    /* overflow-y: scroll; */
  `}
`;
