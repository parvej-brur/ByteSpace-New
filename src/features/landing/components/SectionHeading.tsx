import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description: string;
  titleClassName?: string;
};

export function SectionHeading({ title, description, titleClassName = "" }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-229.25 flex-col items-center gap-4 text-center">
      <h2 className={`font-heading text-navy-950 ${titleClassName}`}>{title}</h2>
      <p className="text-body-l text-shuttle-gray-400">{description}</p>
    </div>
  );
}
