import styled from "styled-components";
import Image from "next/image";
const StyledSkillWrapper = styled.li`
  box-shadow: 6px 6px 10px ${({ theme }) => theme.colors.secondaryFontColor};
  width: 112px;
  justify-content: space-around;
  border-radius: 10px;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 5px;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.underlineColor},
      ${({ theme }) => theme.colors.accentColor}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @media ${({ theme }) => theme.breakPoints.laptop} {
    width: 132px;
  }
`;

const StyledFlexWrapper = styled.ul`
  max-width: 855px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const StyledImageWrapper = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  @media ${({ theme }) => theme.breakPoints.laptop} {
    height: 80px;
    width: 80px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const StyledTechName = styled.span`
  text-align: center;
`;

export {
  StyledSkillWrapper,
  StyledFlexWrapper,
  StyledImageWrapper,
  StyledTechName,
  StyledImage,
};
