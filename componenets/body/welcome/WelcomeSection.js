import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./WelcomeSection.module.css";

const idleFrame = 1;
const finalFrame = 10;
const rotatingLines = [
  "Currently designing and developing healthcare applications at Klein Buendel.",
  "Building scalable design systems with Figma, React, and TypeScript.",
  "Turning complex workflows into intuitive user experiences.",
  "Creating accessible interfaces that solve real-world problems.",
  "From research and wireframes to production-ready applications.",
];

const heroContactIconClassName =
  "h-[1.1rem] w-[1.1rem] flex-none bg-muted-text [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]";

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

  const getRotatingLineClassName = (position) => {
    const activeClass =
      position === "current"
        ? styles.rotatingLineCurrentActive
        : styles.rotatingLineNextActive;
    const introClass =
      !introComplete && position === "next" ? styles.rotatingLineNextIntro : "";

    return [
      "absolute inset-0 flex h-full items-start justify-center [text-wrap:balance]",
      introComplete ? activeClass : "",
      introClass,
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <section
      className="relative -mx-6 -mt-4 flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[linear-gradient(121deg,#fff_0%,oklch(97%_0.014_254.604)_100%)] px-6 min-[500px]:-mx-8 min-[500px]:px-8 min-[778px]:-mx-12 min-[778px]:px-12"
      id="welcome"
    >
      <div className="relative flex w-full justify-center">
        <h1
          className={`m-auto font-serif text-[1.1rem] font-normal text-hello-blue opacity-0 min-[500px]:text-[1.3rem] min-[1024px]:text-[1.45rem] ${styles.introGreeting}`}
        >
          Hello, I&apos;m Charlie
        </h1>
      </div>
      <h2
        className={`relative mx-auto mb-0 mt-[0.85rem] h-[5.75rem] w-[min(100%,980px)] overflow-hidden px-1 text-center font-sans text-[1.45rem] font-normal leading-[1.05] text-base-text opacity-0 min-[500px]:h-[6.5rem] min-[500px]:text-[1.9rem] min-[1024px]:h-28 min-[1024px]:text-[2.35rem] ${styles.introRotatingText}`}
      >
        <span
          className={getRotatingLineClassName("current")}
          key={`current-${activeLine}-${introComplete}`}
        >
          {rotatingLines[activeLine]}
        </span>
        <span
          className={getRotatingLineClassName("next")}
          key={`next-${activeLine}-${introComplete}`}
        >
          {rotatingLines[(activeLine + 1) % rotatingLines.length]}
        </span>
      </h2>
      <div
        className="group absolute bottom-[-0.75rem] right-[clamp(0.75rem,4vw,3rem)] aspect-[375/400] w-[clamp(60px,11vw,115px)] cursor-pointer outline-none transition-opacity duration-[180ms] ease-linear focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[oklch(68.5%_0.169_237.323)] [&_img]:h-full [&_img]:w-full [&_img]:select-none [&_img]:object-contain [&_img]:object-right-bottom"
        tabIndex={0}
        onFocus={waveOnce}
        onMouseEnter={waveOnce}
        style={{ opacity: spriteOpacity }}
      >
        <span className="pointer-events-none absolute bottom-[72%] right-[calc(100%+0.75rem)] w-max max-w-[min(190px,70vw)] translate-y-1 rounded-lg border border-black/10 bg-white/90 px-2 py-[0.35rem] font-sans text-[0.8rem] leading-[1.2] text-base-text opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-[opacity,transform] duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          👋 Hi there. Thanks for stopping by.
        </span>
        <Image
          alt="Charlie waving"
          draggable="false"
          height="400"
          src={`/charlie-wave/${encodeURIComponent(`Frame ${frame}.png`)}`}
          width="375"
        />
      </div>
      <address
        className="absolute bottom-[clamp(1rem,2.5vw,1.75rem)] left-[clamp(1.5rem,4vw,3rem)] m-0 flex flex-col items-start gap-[0.45rem] text-left font-sans text-[0.82rem] not-italic leading-[1.2] text-base-text min-[500px]:text-[0.85rem]"
        aria-label="Contact links"
      >
        <strong className="mb-1 text-base font-normal text-muted-text">
          GET IN TOUCH
        </strong>
        <div className="flex flex-wrap gap-x-[0.9rem] gap-y-[0.45rem]">
          <a
            className="inline-flex items-center gap-[0.35rem] text-inherit no-underline underline-offset-[0.2rem] transition-colors duration-150 hover:text-hello-blue focus-visible:text-hello-blue [&:focus-visible_i]:bg-hello-blue [&:hover_i]:bg-hello-blue"
            href="mailto:charliebarger96@gmail.com"
          >
            <i
              aria-hidden="true"
              className={`${heroContactIconClassName} [mask-image:url('/mail.svg')] [-webkit-mask-image:url('/mail.svg')]`}
            />
            charliebarger96@gmail.com
          </a>
          <a
            className="inline-flex items-center gap-[0.35rem] text-inherit no-underline underline-offset-[0.2rem] transition-colors duration-150 hover:text-hello-blue focus-visible:text-hello-blue [&:focus-visible_i]:bg-hello-blue [&:hover_i]:bg-hello-blue"
            href="https://www.linkedin.com/in/charlie-barger/"
            rel="noreferrer"
            target="_blank"
          >
            <i
              aria-hidden="true"
              className={`${heroContactIconClassName} [mask-image:url('/linkedin.svg')] [-webkit-mask-image:url('/linkedin.svg')]`}
            />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-[0.35rem] text-inherit no-underline underline-offset-[0.2rem] transition-colors duration-150 hover:text-hello-blue focus-visible:text-hello-blue [&:focus-visible_i]:bg-hello-blue [&:hover_i]:bg-hello-blue"
            href="https://github.com/charliebarger"
            rel="noreferrer"
            target="_blank"
          >
            <i
              aria-hidden="true"
              className={`${heroContactIconClassName} [mask-image:url('/github.svg')] [-webkit-mask-image:url('/github.svg')]`}
            />
            GitHub
          </a>
        </div>
        <span className="mt-[0.35rem] inline-flex items-center justify-start gap-[0.35rem]">
          <svg
            aria-hidden="true"
            className="h-[1.1rem] w-[1.1rem] flex-none text-hello-blue"
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
      </address>
    </section>
  );
};

export default Welcome;
