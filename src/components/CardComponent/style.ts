import styled, { css } from "styled-components";

export const SpaceCard = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 5rem;
  margin-top: 1.5rem;
  ::-webkit-scrollbar {
    width: .6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #04bf5592;
  border-radius: 2rem;
  }
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
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
    align-items: flex-start;
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
    font-size: ${theme.constants.fontSizeCardProduct};
  `}
`;

export const DescriptionProduct = styled.p`
  ${({ theme }) => css`
    margin-top: -0.5rem;
    margin-bottom: -0rem;
    font-size: ${theme.constants.fontSizeInfoCardProduct};
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
    color: #009e45;
  `}
`;

export const BtnBuyProduct = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.BtnBuyProduct}
  `}
`;
