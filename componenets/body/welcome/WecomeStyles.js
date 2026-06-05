import styled, { keyframes } from "styled-components";

const pushCurrentLine = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  82% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-105%);
  }
`;

const pushNextLine = keyframes`
  0% {
    opacity: 0;
    transform: translateY(105%);
  }

  82% {
    opacity: 0;
    transform: translateY(105%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledH1 = styled.h1`
  font-weight: 400;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.serifPrimary};
  text-align: center;
  font-size: 1.1rem;
  margin: auto;
  color: oklch(48.8% 0.243 264.376);

  @media ${({ theme }) => theme.breakPoints.mobileLg} {
    font-size: 1.3rem;
  }

  @media ${({ theme }) => theme.breakPoints.laptop} {
    font-size: 1.45rem;
  }
`;

const StyledH2 = styled.h2`
  position: relative;
  width: min(100%, 980px);
  height: 5.75rem;
  margin: 0.85rem auto 0;
  padding: 0 0.25rem;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  overflow: hidden;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.sansSerifPrimary};
  text-align: center;
  font-size: 1.45rem;
  line-height: 1.05;

  @media ${({ theme }) => theme.breakPoints.mobileLg} {
    height: 6.5rem;
    font-size: 1.9rem;
  }

  @media ${({ theme }) => theme.breakPoints.laptop} {
    height: 7rem;
    font-size: 2.35rem;
  }
`;

const StyledRotatingLine = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  text-wrap: balance;
  animation: ${({ $position }) =>
      $position === "current" ? pushCurrentLine : pushNextLine}
    4.2s cubic-bezier(0.2, 0, 0, 1) forwards;
`;

const StyledContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledWelcomeSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0 1.5rem;
  margin: -1rem -1.5rem 0;
  background: linear-gradient(121deg, #fff 0%, oklch(97% 0.014 254.604) 100%);

  @media ${({ theme }) => theme.breakPoints.mobileLg} {
    padding-right: 2rem;
    padding-left: 2rem;
    margin-right: -2rem;
    margin-left: -2rem;
  }

  @media ${({ theme }) => theme.breakPoints.tablet} {
    padding-right: 3rem;
    padding-left: 3rem;
    margin-right: -3rem;
    margin-left: -3rem;
  }
`;

const StyledWaveSprite = styled.div`
  position: absolute;
  right: clamp(0.75rem, 4vw, 3rem);
  bottom: -0.75rem;
  width: clamp(60px, 11vw, 115px);
  aspect-ratio: 375 / 400;
  cursor: pointer;
  outline: none;
  transition: opacity 180ms linear;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentColor};
    outline-offset: 6px;
  }

  span {
    position: absolute;
    right: calc(100% + 0.75rem);
    bottom: 72%;
    width: max-content;
    max-width: min(190px, 70vw);
    padding: 0.35rem 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    color: ${({ theme }) => theme.colors.primaryFontColor};
    font-family: ${({ theme }) => theme.fonts.sansSerifPrimary};
    font-size: 0.8rem;
    line-height: 1.2;
    opacity: 0;
    pointer-events: none;
    transform: translateY(0.25rem);
    transition: opacity 140ms ease, transform 140ms ease;
  }

  &:hover span,
  &:focus span,
  &:focus-within span {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom right;
    user-select: none;
  }
`;

export {
  StyledContent,
  StyledH1,
  StyledH2,
  StyledRotatingLine,
  StyledWaveSprite,
  StyledWelcomeSection,
};
