import styled, { keyframes } from "styled-components";
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 3rem 0;
`;

const StyledCopy = styled.small`
  font-family: ${({ theme }) => theme.fonts.sansSerifPrimary};
  font-weight: 300;
  text-transform: uppercase;
`;

const oscillate = keyframes`
   0%, 100%{
       transform: translateY(0px);
   }

   50%{
       transform:translateY(10px);
   }
`;

const StyledArrowWrapper = styled.a`
  width: 30px;
  margin: 1rem;
  fill: ${({ theme }) => theme.colors.secondaryFontColor};
  animation: ${oscillate} 1s linear infinite;

  &:hover {
    fill: ${({ theme }) => theme.colors.primaryFontColor};
  }
`;

export { StyledFooter, StyledCopy, StyledArrowWrapper };
