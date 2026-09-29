import Image from "next/image";
import { LEARNING_PATHS } from "../utils/landingContent";
import { SectionHeading } from "./SectionHeading";

export function LearningPaths() {
  return (
    <section className="px-4 pt-12 pb-16 lg:pt-18.25 lg:pb-30">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        titleClassName="text-2xl leading-[1.2] font-semibold tracking-[-0.01em] sm:text-4xl"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />
      <ul className="mx-auto mt-17 flex max-w-300.5 flex-wrap justify-center gap-10">
        {LEARNING_PATHS.map(({ label, icon }) => (
          <li
            key={label}
            className="flex size-41.75 flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-gray-200"
          >
            <span className="grid size-15 place-items-center rounded-full bg-electric-lime-400">
              <Image src={icon} alt="" width={36} height={36} />
            </span>
            <span className="text-label-xl whitespace-nowrap text-shuttle-gray-950">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
