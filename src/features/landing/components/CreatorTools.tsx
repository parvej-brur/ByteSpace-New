import Image from "next/image";
import { HappyStudentsCard } from "./StatCards";

const BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const glassCardClass = "absolute flex flex-col gap-2 rounded-2xl bg-persian-blue-800 p-4 backdrop-blur-[10px]";

function BadgePill({ children }: { children: string }) {
  return (
    <span className="rounded-3xl bg-electric-lime-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-shuttle-gray-950">
      {children}
    </span>
  );
}

function CardHeading({ title, caption }: { title: string; caption: string }) {
  return (
    <div>
      <p className="text-label-m text-shuttle-gray-50">{title}</p>
      <p className="text-[10px] leading-[1.2] text-shuttle-gray-50">{caption}</p>
    </div>
  );
}

/** "Create & Manage Courses Easily" row: earnings collage and benefit list. */
export function CreatorTools() {
  return (
    <div
      id="creators"
      className="relative mx-auto grid max-w-300 items-center gap-12 lg:left-px lg:grid-cols-[541px_580px] lg:gap-19.75"
    >
      <div className="relative mx-auto h-82 w-full sm:h-108 md:h-149 md:w-135.25">
        <div className="absolute top-0 left-1/2 h-149 w-135.25 origin-top -translate-x-1/2 scale-[0.55] sm:scale-[0.72] md:scale-100">
          <div className={`${glassCardClass} top-11 left-0 w-58`}>
            <CardHeading title="Total Revenue" caption="July 1-28" />
            <div className="flex items-center justify-between gap-2">
              <p className="font-heading text-heading-s text-shuttle-gray-50">$120.29</p>
              <BadgePill>+12$</BadgePill>
            </div>
            <div className="h-2 w-50 rounded-3xl bg-white">
              <div className="h-full w-28 rounded-3xl bg-electric-lime-400" />
            </div>
          </div>
          <div className={`${glassCardClass} top-48.5 left-0 w-33.5`}>
            <CardHeading title="Year to Date" caption="2023" />
            <p className="font-heading text-heading-s text-shuttle-gray-50">$1,200.38</p>
            <div className="w-fit">
              <BadgePill>+12$</BadgePill>
            </div>
          </div>
          <Image
            src="/images/creators/woman.png"
            alt="Smiling creator with headphones holding a tablet"
            width={435}
            height={596}
            className="absolute top-0 left-7 h-149 w-108.75 max-w-none drop-shadow-photo"
          />
          <HappyStudentsCard roomy className="absolute top-103.25 left-70.75" />
          <Image
            src="/images/creators/spiral-b.png"
            alt=""
            width={215}
            height={215}
            className="pointer-events-none absolute top-28.5 left-76.25 size-53.75 max-w-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h2 className="max-w-97.75 font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-950 sm:text-heading-m">
          Create &amp; Manage Courses Easily.
        </h2>
        <p className="max-w-143.5 text-body-l leading-7 text-shuttle-gray-700">
          <strong className="font-bold text-shuttle-gray-950">ByteSpace</strong> supports
          individuals or entities in the creation, publication, and administration of educational
          courses.
        </p>
        <ul className="flex flex-col gap-4">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <Image src="/icons/check.svg" alt="" width={24} height={24} />
              <span className="pt-0.5 text-label-l text-shuttle-gray-950">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
