import styled, { css } from "styled-components";

export const SpaceTest = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  height: 100%;
`;

export const CardProduct = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.CardProduct}
  `}
`;

export const LeftSide = styled.div`
  ${({ theme }) => css`
    width: 60%;
    display: flex;
    flex-direction: column;
  `}
`;

export const RightSide = styled.div`
  ${({ theme }) => css`
    width: 40%;
  `}
`;

export const InfoProduct = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.InfoProduct}
  `}
`;

export const NameProduct = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.constants.fontFamilyHeader};
  `}
`;

export const DescriptionProduct = styled.p`
  ${({ theme }) => css`
    margin-top: -0.5rem;
    font-size: 0.9rem;
  `}
`;

export const ImgProduct = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.ImgProduct}
  `}
`;

export const PriceBtnBuy = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.DivPriceBtnBuy}
  `}
`;

export const PriceProduct = styled.p`
  ${({ theme }) => css`
    font-size: 1.3rem;
    font-weight: bold;
  `}
`;

export const BtnBuyProduct = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.BtnBuyProduct}
  `}
`;
