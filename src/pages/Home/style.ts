import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    ${theme.mixins.Header}
  `}
`;
export const logoSearchHeader = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.5rem;
`;

export const logoNameHeader = styled.span`
  ${({ theme }) => css`
    ${theme.mixins.nameLogoHeader}
  `}
`;

export const LogoHeader = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.LogoHeader}
  `}
`;
