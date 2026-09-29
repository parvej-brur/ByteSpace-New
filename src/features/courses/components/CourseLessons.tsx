import { Icon } from "@/components/ui/Icon";
import { MODULES } from "../utils/courseContent";

const headingClass = "font-heading text-heading-xs leading-6 text-shuttle-gray-950";
const bodyClass = "text-body-m leading-6.5 text-shuttle-gray-700";

export function CourseLessons() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={headingClass}>Explore the Modules</h2>
      <p className={bodyClass}>
        Immerse yourself in the course content as we break down each module into comprehensive
        lessons, providing practical insights and hands-on experiences.
      </p>

      <h2 className={headingClass}>Lesson List</h2>
      <ol className="flex flex-col gap-6">
        {MODULES.map(({ title, text }) => (
          <li key={title} className="flex items-center gap-3.25">
            <span className="grid size-18 shrink-0 place-items-center rounded-3xl bg-electric-lime-400 text-shuttle-gray-950">
              <Icon name="book" size={40} />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-label-m text-shuttle-gray-950">{title}</h3>
              <p className={bodyClass}>{text}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className={headingClass}>Lesson Content</h2>
      <p className={bodyClass}>
        Engage with each lesson through captivating video content, detailed textual explanations,
        and interactive elements. Download resources, complete assignments, and test your
        understanding with quizzes.
      </p>

      <h2 className={headingClass}>Lesson Progress Tracking</h2>
      <p className={bodyClass}>
        Witness your growth as you complete lessons, with an intuitive progress tracking feature
        guiding you through your learning journey.
      </p>

      <div className="flex flex-col gap-2 rounded-2xl ring-1 ring-inset ring-shuttle-gray-200 bg-white p-4 backdrop-blur-[10px]">
        <p className="text-label-s text-shuttle-gray-950">Learning Progress</p>
        <p className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-950">
          55%
        </p>
        <div
          className="h-2 rounded-3xl bg-shuttle-gray-100"
          role="progressbar"
          aria-label="Learning progress"
          aria-valuenow={55}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-full w-[56%] rounded-3xl bg-electric-lime-400" />
        </div>
      </div>
    </div>
  );
}
