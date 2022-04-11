import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 22px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  background: white;
  width: 100vw;
  position: sticky;
  top: 0;
  background: white;
  z-index: 90;
`;

const StyledLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.serifPrimary};
`;

export { StyledHeader, StyledLogo };
