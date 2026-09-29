import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import {
  RATING_SUMMARY,
  REVIEWS,
  REVIEW_FILTERS,
} from "../utils/courseContent";

const headingClass = "font-heading text-heading-xs leading-6 text-shuttle-gray-950";
const bodyClass = "text-body-m leading-6.5 text-shuttle-gray-700";
// The first review in the design uses a tighter 24px line height.
const compactBodyClass = "text-body-m text-shuttle-gray-700";
const BAR_TRACK = 282;

function Stars() {
  return (
    <span className="flex gap-1 text-shuttle-gray-700" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <Icon key={index} name="star" />
      ))}
    </span>
  );
}

export function CourseReviews() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={headingClass}>What Learners Are Saying</h2>
      <p className={bodyClass}>
        Discover what our learners have to say about their experience with &apos;Build Digital
        Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have
        embarked on the transformative journey of mastering digital asset creation.
      </p>

      <div className="flex flex-col items-center gap-6 rounded-2xl ring-1 ring-inset ring-shuttle-gray-200 bg-white p-6 backdrop-blur-[10px] sm:flex-row sm:p-10">
        <div className="flex h-35 w-32.25 shrink-0 flex-col items-center justify-center rounded-lg bg-electric-lime-400 text-shuttle-gray-950">
          <p className="text-label-s">Ratings</p>
          <p className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.01em]">
            {RATING_SUMMARY.average}
          </p>
        </div>
        <ul className="flex w-full flex-col gap-1">
          {RATING_SUMMARY.breakdown.map(({ count, fill }) => (
            <li key={count} className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <div className="h-2 w-full shrink-0 rounded-3xl bg-shuttle-gray-100 sm:w-70.5">
                <div
                  className="h-full rounded-3xl bg-electric-lime-400"
                  style={{ width: `${(fill / BAR_TRACK) * 100}%` }}
                />
              </div>
              <Stars />
              <span className={`w-10 text-right ${bodyClass}`}>{count}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className={headingClass}>Individual Reviews:</h2>
      <ul className="flex flex-wrap gap-4">
        {REVIEW_FILTERS.map((filter, index) => (
          <li key={filter}>
            <button
              type="button"
              aria-pressed={index === 0}
              className={`flex cursor-pointer items-center gap-1 rounded-3xl px-4 py-3 text-label-m outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800 ${
                index === 0
                  ? "bg-electric-lime-400 text-shuttle-gray-950"
                  : "bg-shuttle-gray-50 text-shuttle-gray-700"
              }`}
            >
              {index > 0 && <Icon name="star" />}
              {filter}
            </button>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-6">
        {REVIEWS.map(({ name, avatar, text }, index) => (
          <li
            key={name}
            className="flex flex-col gap-6 rounded-3xl ring-1 ring-inset ring-shuttle-gray-200 p-6 sm:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <Image
                    src={avatar}
                    alt=""
                    width={52}
                    height={52}
                    className="size-13 rounded-full"
                  />
                  <div>
                    <p className="text-label-l text-shuttle-gray-950">{name}</p>
                    <p className={index === 0 ? compactBodyClass : bodyClass}>UI/UX Designer</p>
                  </div>
                </div>
                <Stars />
              </div>
              <p className={index === 0 ? compactBodyClass : bodyClass}>a year ago</p>
            </div>
            <p className={index === 0 ? compactBodyClass : bodyClass}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
