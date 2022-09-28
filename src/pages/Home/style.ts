import styled, { css } from "styled-components";

export const MainBackground = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.MainBackground}
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    ${theme.mixins.Header}
  `}
`;
export const LogoSearchHeader = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.5rem;
`;

export const LogoNameHeader = styled.span`
  ${({ theme }) => css`
    ${theme.mixins.nameLogoHeader}
  `}
`;

export const LogoHeader = styled.img`
  ${({ theme }) => css`
    ${theme.mixins.LogoHeader}
  `}
`;

export const SearchDiv = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: -2rem;
`;

export const InputSearch = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.SearchHeader}
    :focus {
      outline: 0;
      color: #000;
      ::placeholder {
        color: #757986;
      }
    }
  `}
`;

export const BtnSearch = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.BtnSearch}
  `}
`;

export const OptionsHeader = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.OptionsHeader}
  `}
`;

export const TitleOptionsHeader = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.TitleOptionsHeader}
  `}
`;

export const CadLogin = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.CadLogin}
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
  margin-top: 2.5rem;
  margin-bottom: -5rem;
`;

export const TitleProducts = styled.span`
    ${({ theme }) => css`
    ${theme.mixins.titleLogoHeader}
  `}
`

export const Divisors = styled.div`
  width: 550px;
  border-radius: 1rem;
  /* height: .1px; */
  border: 2px solid #014034;
`;
