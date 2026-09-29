import { CourseCard } from "@/components/shared/CourseCard";
import { COURSES } from "@/lib/constants/courses";
import { CourseTabs } from "./CourseTabs";
import { SectionHeading } from "./SectionHeading";

export function Courses() {
  return (
    <section id="courses" className="px-4 pt-12 lg:pt-18.25">
      <SectionHeading
        title={
          <>
            Discover Your Passion,
            <br className="hidden sm:block" /> Build Your Skills
          </>
        }
        titleClassName="text-3xl leading-[1.2] font-semibold tracking-[-0.01em] sm:text-heading-m"
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />
      <div className="mt-10.75">
        <CourseTabs />
      </div>
      <ul className="mx-auto mt-19 grid max-w-300 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((course) => (
          <li key={course.title}>
            <CourseCard {...course} />
          </li>
        ))}
      </ul>
    </section>
  );
}
