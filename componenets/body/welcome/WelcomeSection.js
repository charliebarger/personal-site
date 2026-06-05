import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  StyledContent,
  StyledH1,
  StyledH2,
  StyledRotatingLine,
  StyledWaveSprite,
  StyledWelcomeSection,
} from "./WecomeStyles";

const idleFrame = 1;
const finalFrame = 10;
const rotatingLines = [
  "Currently designing and developing healthcare applications at Klein Buendel.",
  "Building scalable design systems with Figma, React, and TypeScript.",
  "Turning complex workflows into intuitive user experiences.",
  "Creating accessible interfaces that solve real-world problems.",
  "From research and wireframes to production-ready applications.",
];

export const Welcome = () => {
  const [waveDirection, setWaveDirection] = useState(null);
  const [frame, setFrame] = useState(idleFrame);
  const [spriteOpacity, setSpriteOpacity] = useState(1);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    if (!waveDirection) return;

    const frameTimer = setInterval(() => {
      setFrame((currentFrame) => {
        if (waveDirection === "forward") {
          return currentFrame === finalFrame ? idleFrame : currentFrame + 1;
        }

        if (currentFrame === idleFrame) {
          setWaveDirection(null);
          return idleFrame;
        }

        return currentFrame - 1;
      });
    }, 65);

    return () => clearInterval(frameTimer);
  }, [waveDirection]);

  useEffect(() => {
    let animationFrame = null;

    const updateSpriteOpacity = () => {
      const fadeDistance = window.innerHeight * 0.2;
      const nextOpacity = Math.max(0, 1 - window.scrollY / fadeDistance);

      setSpriteOpacity(nextOpacity);
    };

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        updateSpriteOpacity();
        animationFrame = null;
      });
    };

    updateSpriteOpacity();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setActiveLine((currentLine) => (currentLine + 1) % rotatingLines.length);
    }, 4200);

    return () => clearInterval(lineTimer);
  }, []);

  const startWaving = () => setWaveDirection("forward");
  const stopWaving = () => setWaveDirection("backward");

  return (
    <StyledWelcomeSection id="welcome">
      <StyledContent>
        <StyledH1>Hello, I&apos;m Charlie</StyledH1>
      </StyledContent>
      <StyledH2>
        <StyledRotatingLine key={`current-${activeLine}`} $position="current">
          {rotatingLines[activeLine]}
        </StyledRotatingLine>
        <StyledRotatingLine key={`next-${activeLine}`} $position="next">
          {rotatingLines[(activeLine + 1) % rotatingLines.length]}
        </StyledRotatingLine>
      </StyledH2>
      <StyledWaveSprite
        tabIndex={0}
        onBlur={stopWaving}
        onFocus={startWaving}
        onMouseEnter={startWaving}
        onMouseLeave={stopWaving}
        style={{ opacity: spriteOpacity }}
      >
        <span>👋 Hi there. Thanks for stopping by.</span>
        <Image
          alt="Charlie waving"
          draggable="false"
          height="400"
          src={`/charlie-wave/${encodeURIComponent(`Frame ${frame}.png`)}`}
          width="375"
        />
      </StyledWaveSprite>
    </StyledWelcomeSection>
  );
};

export default Welcome;
