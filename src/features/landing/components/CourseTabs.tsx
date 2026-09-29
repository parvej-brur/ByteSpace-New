import { Fragment } from "react";
import { COURSE_TABS } from "../utils/landingContent";

/** Tabs after which the desktop layout starts a new row. */
const ROW_ENDS = new Set(["Creative Marketing", "Photography"]);

const focusClass =
  "cursor-pointer outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800";

export function CourseTabs() {
  return (
    <ul className="mx-auto flex -my-[10.4px] max-w-271.5 flex-wrap justify-center gap-x-4">
      {COURSE_TABS.map((tab, index) => (
        <Fragment key={tab}>
          <li className="flex items-center py-[10.4px]">
            <button
              type="button"
              aria-pressed={index === 0}
              className={`${focusClass} rounded-3xl px-4 py-3 text-label-m ${
                index === 0
                  ? "bg-electric-lime-400 text-shuttle-gray-950"
                  : "bg-shuttle-gray-50 text-shuttle-gray-700"
              }`}
            >
              {tab}
            </button>
          </li>
          {ROW_ENDS.has(tab) && <li aria-hidden="true" className="hidden basis-full lg:block" />}
        </Fragment>
      ))}
      <li className="flex items-center py-[10.4px]">
        <button type="button" className={`${focusClass} text-label-m text-persian-blue-800`}>
          + More
        </button>
      </li>
    </ul>
  );
}
