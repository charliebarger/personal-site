import React from "react";
import Image from "next/image";
import ezParentHeader from "../../../public/projects/EzParent/header.png";
import fitBrothersHeader from "../../../public/projects/FitBrothers/header.png";
import freshHeader from "../../../public/projects/Fresh/header.png";
import speacsHeader from "../../../public/projects/Speacs/header.png";
import stacHeader from "../../../public/projects/Stac/header.png";

const projects = [
  {
    name: "Speacs",
    description:
      "Healthcare communication platform supporting care planning, surveys, and clinical resource workflows.",
    role: "Product Design • Design Systems • Frontend Development",
    image: speacsHeader,
    alt: "Speacs healthcare platform preview",
  },
  {
    name: "Project FRESH",
    description:
      "Student wellness and behavioral research platform transforming data into actionable health insights.",
    role: "Product Design • Mobile UI • Frontend Development",
    image: freshHeader,
    alt: "Project FRESH platform preview",
  },
  {
    name: "Fit Brothers",
    description:
      "Wellness platform helping participants build healthier habits through Fitbit-powered insights and goal tracking.",
    role: "Product Design • Frontend Development",
    image: fitBrothersHeader,
    alt: "Fit Brothers wellness platform preview",
  },
  {
    name: "EzParent",
    description:
      "Evidence-based parent education platform focused on learning, assessments, and progress tracking.",
    role: "Product Design • Frontend Development",
    image: ezParentHeader,
    alt: "EzParent platform preview",
  },
  {
    name: "STAC",
    description:
      "Interactive education platform helping students move through research-backed bullying prevention activities.",
    role: "Product Design • Learning Experience • Frontend Development",
    image: stacHeader,
    alt: "STAC education platform preview",
  },
];

export const WorkSection = () => {
  return (
    <section
      className="-mx-6 min-h-screen bg-white px-6 pb-24 pt-[clamp(4.5rem,10vh,6rem)] min-[500px]:-mx-8 min-[500px]:px-8 min-[778px]:-mx-12 min-[778px]:px-12"
      id="work"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-6 text-center">
        <h2 className="m-0 font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-[1.1] text-base-text">
          Things I&apos;ve Made Recently
        </h2>
        <div
          aria-label="Work from 2022 to today"
          className="flex items-center justify-center gap-[clamp(0.75rem,3vw,1.5rem)] rounded-full border border-black/5 bg-white px-5 py-2.5 font-sans text-[clamp(1rem,2vw,1.25rem)] font-medium text-muted-text shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        >
          <span>2022</span>
          <svg
            aria-hidden="true"
            className="h-[1.35rem] w-[clamp(4.5rem,12vw,7rem)] flex-none overflow-visible [&_path]:fill-none [&_path]:stroke-black [&_path]:stroke-[2.25] [&_path]:[stroke-linecap:round] [&_path]:[stroke-linejoin:round]"
            viewBox="0 0 170 32"
          >
            <path d="M3 17C20 4 35 30 52 17S84 4 101 17s32 13 49 0" />
            <path d="M150 7l17 10-17 10" />
          </svg>
          <span>Today</span>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1320px] flex-col gap-16 md:mt-20 md:gap-20">
        {projects.map(({ alt, description, image, name, role }, index) => {
          const isReversed = index % 2 === 1;

          return (
            <article
              className="grid items-center gap-8 rounded-[18px] border border-black/5 bg-white p-3 shadow-[0_18px_60px_rgba(0,0,0,0.08)] md:grid-cols-2 md:gap-10 md:p-5 lg:gap-14"
              key={name}
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-[12px] bg-zinc-100 ${
                  isReversed ? "md:order-2" : ""
                }`}
              >
                <Image
                  alt={alt}
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  quality={100}
                  src={image}
                  sizes="(min-width: 1480px) 720px, (min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div
                className={`px-2 pb-3 text-left font-sans md:px-0 md:pb-0 ${
                  isReversed ? "md:order-1" : ""
                }`}
              >
                <h3 className="m-0 text-[clamp(1.75rem,4vw,3.75rem)] font-semibold leading-[0.95] text-base-text">
                  {name} <span aria-hidden="true">→</span>
                </h3>
                <p className="mt-5 max-w-[34rem] text-[clamp(1rem,1.6vw,1.25rem)] font-normal leading-relaxed text-base-text">
                  {description}
                </p>
                <div className="mt-8">
                  <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted-text">
                    Role
                  </p>
                  <p className="m-0 text-[clamp(1rem,1.5vw,1.15rem)] font-semibold leading-snug text-muted-text">
                    {role}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WorkSection;
