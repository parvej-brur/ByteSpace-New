import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export type CourseTab = "about" | "lessons" | "reviews";

const base =
  "rounded-3xl px-4 py-3 text-label-m outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800";

type CourseTabsNavProps = {
  slug: string;
  active: CourseTab;
};

export function CourseTabsNav({ slug, active }: CourseTabsNavProps) {
  // The design labels the middle tab "Lessons" on the About screen and "Lesson" on the others.
  const tabs = [
    { id: "about", label: "About", href: ROUTES.course(slug) },
    {
      id: "lessons",
      label: active === "about" ? "Lessons" : "Lesson",
      href: ROUTES.courseLessons(slug),
    },
    { id: "reviews", label: "Reviews", href: ROUTES.courseReviews(slug) },
  ] as const;

  return (
    <nav aria-label="Course sections">
      <ul className="flex flex-wrap gap-4">
        {tabs.map(({ id, label, href }) => (
          <li key={id}>
            <Link
              href={href}
              aria-current={id === active ? "page" : undefined}
              className={`${base} block ${
                id === active
                  ? "bg-electric-lime-400 text-shuttle-gray-950"
                  : "bg-shuttle-gray-50 text-shuttle-gray-700"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
