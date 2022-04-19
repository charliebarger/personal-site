import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 22px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryFontColor};
  background: ${({ theme }) => theme.colors.backgroundColor};
  width: 100vw;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.colors.backgroundColor};
  z-index: 90;
`;

const StyledLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.serifPrimary};
`;

export { StyledHeader, StyledLogo };
