import styled, { css } from "styled-components";

export const Footer = styled.footer`
    ${({theme}) => css`
        ${theme.mixins.Footer}
    `}
`
export const LogoFooter = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.LogoFooter}
  `}
`;
export const nameLogoFooter = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.nameLogoFooter}
  `}
`
export const titleFooter = styled.ul`
  ${({ theme }) => css`
    ${theme.mixins.titleFooter}
`}
`
export const titleFooter2 = styled.ul`
  ${({ theme }) => css`
    ${theme.mixins.titleFooter2}
`}
`
export const titleFooter3 = styled.ul`
  ${({ theme }) => css`
    ${theme.mixins.titleFooter3}
`}
`
export const itemFooter = styled.li`
  ${({ theme }) => css`
    ${theme.mixins.itemFooter}
`}
`