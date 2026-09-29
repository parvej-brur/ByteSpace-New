import type { Course } from "@/types/course";
import { CourseCard } from "./CourseCard";

type CourseGridProps = {
  courses: Course[];
  /** Repeats the list, since the design fills the grid with the same six cards. */
  repeat?: number;
};

export function CourseGrid({ courses, repeat = 1 }: CourseGridProps) {
  const items = Array.from({ length: repeat }, (_, round) =>
    courses.map((course) => ({ course, key: `${round}-${course.slug}` })),
  ).flat();

  return (
    <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ course, key }) => (
        <li key={key}>
          <CourseCard {...course} />
        </li>
      ))}
    </ul>
  );
}
