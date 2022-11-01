import styled, { css } from "styled-components";

export const LoadingContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
  `}
`;

export const LoadingCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.footerColor};
    height: 28rem;
    width: 39rem;
    border-radius: 0.5rem;
  `}
`;

export const LoadingHeading = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25%;
    width: 100%;
  `}
`;

export const LoadingH1Component = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0 0 0;
    color: #C2F2DC;
  `}
`;

export const LoadingGifContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;
    width: 100%;
  `}
`;

export const LoadingGif = styled.img`
  ${({ theme }) => css`
    width: 50%;
  `}
`;

export const LoadingFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    width: 100%;
  `}
`;

export const FooterLoadingComponent = styled.footer`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: bold;
    color: #C2F2DC;
    margin-top: 0.5rem;
  `}
`;
