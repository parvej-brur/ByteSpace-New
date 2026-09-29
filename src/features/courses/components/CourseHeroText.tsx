import { Icon, type IconName } from "@/components/ui/Icon";
import { COURSE_DETAIL } from "../utils/courseContent";

const BADGES: { icon: IconName; text: string }[] = [
  { icon: "signal", text: COURSE_DETAIL.level },
  { icon: "star", text: COURSE_DETAIL.rating },
  { icon: "group", text: COURSE_DETAIL.students },
];

export function CourseHeroText() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-6 lg:w-192.25">
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-50 sm:text-4xl lg:whitespace-nowrap">
          {COURSE_DETAIL.title}
        </h1>
        <p className="font-heading text-heading-xs text-shuttle-gray-50">{COURSE_DETAIL.subtitle}</p>
      </div>
      <p className="text-label-l text-[#f1f4fe]">by {COURSE_DETAIL.author}</p>
      <ul className="flex flex-wrap gap-4">
        {BADGES.map(({ icon, text }) => (
          <li
            key={text}
            className="flex items-center gap-2 rounded-3xl bg-white px-6 py-2 text-label-m text-shuttle-gray-950 backdrop-blur-[10px]"
          >
            <Icon name={icon} className="text-persian-blue-800" />
            {text}
          </li>
        ))}
      </ul>
      </div>
      <button
        type="button"
        className="mt-6 flex h-10 w-fit cursor-pointer items-center gap-2 min-[1400px]:mt-0 rounded-3xl bg-electric-lime-400 px-6 py-2 text-label-m leading-6 text-shuttle-gray-950 outline-offset-2 backdrop-blur-[10px] focus-visible:outline-2 focus-visible:outline-white min-[1400px]:absolute min-[1400px]:top-0 min-[1400px]:-right-21.25"
      >
        <Icon name="share" size={24} className="text-shuttle-gray-950" />
        Share
      </button>
    </div>
  );
}
