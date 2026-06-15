import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  StyledContent,
  StyledHeroContact,
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
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (!waveDirection) return;

    const frameTimer = setInterval(() => {
      setFrame((currentFrame) => {
        if (waveDirection === "forward") {
          if (currentFrame === finalFrame) {
            setWaveDirection("backward");
            return finalFrame;
          }

          return currentFrame + 1;
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
    const introTimer = setTimeout(() => {
      setIntroComplete(true);
    }, 2000);

    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (!introComplete) return;

    const lineTimer = setInterval(() => {
      setActiveLine((currentLine) => (currentLine + 1) % rotatingLines.length);
    }, 4200);

    return () => clearInterval(lineTimer);
  }, [introComplete]);

  const waveOnce = () => {
    if (waveDirection) return;

    setFrame(idleFrame);
    setWaveDirection("forward");
  };

  return (
    <StyledWelcomeSection id="welcome">
      <StyledContent>
        <StyledH1>Hello, I&apos;m Charlie</StyledH1>
      </StyledContent>
      <StyledH2>
        <StyledRotatingLine
          key={`current-${activeLine}-${introComplete}`}
          $introComplete={introComplete}
          $position="current"
        >
          {rotatingLines[activeLine]}
        </StyledRotatingLine>
        <StyledRotatingLine
          key={`next-${activeLine}-${introComplete}`}
          $introComplete={introComplete}
          $position="next"
        >
          {rotatingLines[(activeLine + 1) % rotatingLines.length]}
        </StyledRotatingLine>
      </StyledH2>
      <StyledWaveSprite
        tabIndex={0}
        onFocus={waveOnce}
        onMouseEnter={waveOnce}
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
      <StyledHeroContact aria-label="Contact links">
        <strong>GET IN TOUCH</strong>
        <div>
          <a href="mailto:charliebarger96@gmail.com">
            <i aria-hidden="true" className="hero-contact-icon hero-contact-icon--email" />
            charliebarger96@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/charlie-barger/"
            rel="noreferrer"
            target="_blank"
          >
            <i
              aria-hidden="true"
              className="hero-contact-icon hero-contact-icon--linkedin"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/charliebarger"
            rel="noreferrer"
            target="_blank"
          >
            <i aria-hidden="true" className="hero-contact-icon hero-contact-icon--github" />
            GitHub
          </a>
        </div>
        <span>
          <svg
            aria-hidden="true"
            className="hero-contact-location-icon"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21s7-5.33 7-12a7 7 0 1 0-14 0c0 6.67 7 12 7 12Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d="M12 12.25a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
          Denver, CO
        </span>
      </StyledHeroContact>
    </StyledWelcomeSection>
  );
};

export default Welcome;
