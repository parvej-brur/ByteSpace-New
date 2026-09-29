import { SEARCH_TABS } from "../utils/courseContent";

export function CategoryTabs() {
  return (
    <ul className="flex flex-wrap justify-center gap-x-4 gap-y-3 lg:justify-between">
      {SEARCH_TABS.map((tab, index) => (
        <li key={tab}>
          <button
            type="button"
            aria-pressed={index === 0}
            className={`cursor-pointer rounded-3xl px-4 py-3 text-label-m outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800 ${
              index === 0
                ? "bg-electric-lime-400 text-shuttle-gray-950"
                : "bg-shuttle-gray-50 text-shuttle-gray-700"
            }`}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
}
