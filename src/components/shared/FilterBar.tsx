import { Icon, type IconName } from "@/components/ui/Icon";

const FILTERS: { label: string; icon: IconName }[] = [
  { label: "Filter", icon: "filter" },
  { label: "Level", icon: "signal" },
  { label: "Category", icon: "category" },
];

const pillClass =
  "flex h-12 cursor-pointer items-center justify-center gap-1 rounded-3xl bg-white ring-1 ring-inset ring-shuttle-gray-200 px-4 py-3 text-label-m text-shuttle-gray-700 outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800";

/** Filter, level, category and sort controls. Presentational only, as in the design. */
export function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-4">
        {FILTERS.map(({ label, icon }) => (
          <button key={label} type="button" className={pillClass}>
            <Icon name={icon} className="text-shuttle-gray-950" />
            {label}
          </button>
        ))}
      </div>
      <button type="button" className={pillClass}>
        <Icon name="sort" className="text-shuttle-gray-950" />
        Most relevant
      </button>
    </div>
  );
}
