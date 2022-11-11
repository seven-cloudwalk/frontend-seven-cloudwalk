import styled, { css } from "styled-components";

export const MainBackground = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.MainBackground}
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
  margin-top: 2.5rem;
  margin-bottom: -5rem;
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
export const ProductInfo = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.ProductInfo}
  `}
`;
export const ProductInfoImage = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.ProductInfoImage}
  `}
`;
export const ProductInfoTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.ProductInfoTitle}
  `}
`;
export const ProductInfoSubtitle = styled.h3`
  ${({ theme }) => css`
    ${theme.mixins.ProductInfoSubtitle}
  `}
`;
export const ProductInfoPrice = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.ProductInfoPrice}
  `}
`;
export const ProductInfoCategory = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.ProductInfoCategory}
  `}
`;
export const ProductInfo2 = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.ProductInfo2}
  `}
`;
export const ProductInfoValor = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.ProductInfoValor}
  `}
`;
export const ProductInfoBotao = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.ProductInfoBotao}
  `}
`;
