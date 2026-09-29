import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { COURSE_DESCRIPTION, KEY_POINTS, SNEAK_PEEKS } from "../utils/courseContent";

const headingClass = "font-heading text-heading-xs leading-6 text-shuttle-gray-950";

export function CourseAbout() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={headingClass}>Description</h2>
      <div className="flex flex-col gap-6.5 text-body-m leading-6.5 text-shuttle-gray-700">
        {COURSE_DESCRIPTION.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <h2 className={headingClass}>Sneak Peak</h2>
      <ul className="flex flex-wrap justify-between gap-4">
        {SNEAK_PEEKS.map((src, index) => (
          <li
            key={src}
            className="relative h-31.25 w-[calc(50%-8px)] overflow-hidden rounded-2xl bg-[#d9d9d9] sm:w-41.75"
          >
            <Image
              src={src}
              alt={`Course preview ${index + 1}`}
              fill
              sizes="(min-width: 640px) 167px, 50vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <h2 className={headingClass}>Key Points</h2>
      <ul className="flex flex-col gap-3">
        {KEY_POINTS.map((point) => (
          <li key={point} className="flex items-start gap-2 text-body-m leading-6.5 text-shuttle-gray-700">
            <Icon name="checkCircle" className="text-persian-blue-800" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
