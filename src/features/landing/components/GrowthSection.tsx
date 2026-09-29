import Image from "next/image";
import { CourseCard } from "@/components/shared/CourseCard";
import { GradientGlow } from "./GradientGlow";
import { LearningProgressCard } from "./StatCards";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

/** "Your Path to Professional Growth" row: copy, stats and the course preview collage. */
export function GrowthSection() {
  return (
    <div className="relative mx-auto grid max-w-300 items-center gap-12 lg:left-px lg:grid-cols-[574px_621px] lg:gap-15.75">
      <div className="flex flex-col gap-10">
        <h2 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-950 sm:text-heading-m">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="max-w-119.25 text-body-l text-shuttle-gray-700">
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>
        <dl className="flex gap-14">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="font-heading text-display-xs text-persian-blue-800">{value}</dd>
              <dd className="text-body-l text-shuttle-gray-700" aria-hidden="true">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto h-76 w-full sm:h-100 md:h-138 md:w-155.25">
        <div className="absolute top-0 left-1/2 h-138 w-155.25 origin-top -translate-x-1/2 scale-[0.55] sm:scale-[0.72] md:scale-100">
          <div className="w-93.25">
            <CourseCard title="Learn Figma from Basic" cover="/images/courses/cover-1.jpg" />
          </div>
          <Image
            src="/images/hero/person.png"
            alt="Smiling student with headphones holding a laptop"
            width={516}
            height={483}
            className="absolute top-3 left-0 h-135 w-144.25 max-w-none drop-shadow-photo"
          />
          <LearningProgressCard roomy className="absolute top-53.25 left-86.25" />
          <Image
            src="/images/creators/spiral-a.png"
            alt=""
            width={215}
            height={215}
            className="pointer-events-none absolute top-16.75 left-101.5 size-53.75 max-w-none"
          />
        </div>
      </div>
    </div>
  );
}

export function GrowthBackground() {
  return (
    <>
      <GradientGlow color="blue" opacity={0.24} size={1137} left={722} top={788} />
      <GradientGlow color="lime" opacity={0.4} size={1137} left={-152} top={-466} />
      <GradientGlow color="blue" opacity={0.16} size={1137} left={-508} top={183} />
      <GradientGlow color="blue" opacity={0.08} size={1137} left={811} top={-458} />
      <GradientGlow color="lime" opacity={0.6} size={672} left={-287} top={946} />
    </>
  );
}
