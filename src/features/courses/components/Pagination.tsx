import { Icon } from "@/components/ui/Icon";

const PAGES = [1, 2, 3, 4, 5];

const arrowClass =
  "grid h-12 w-14 cursor-pointer place-items-center rounded-3xl border border-shuttle-gray-200 bg-white text-shuttle-gray-950 outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800";

/** Static pagination, as designed: page 1 is the current (muted) page. */
export function Pagination() {
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-6 lg:pl-12.5">
      <button type="button" aria-label="Previous page" className={arrowClass}>
        <Icon name="chevronLeft" />
      </button>
      <ol className="flex items-center gap-6">
        {PAGES.map((page) => (
          <li key={page}>
            <button
              type="button"
              aria-current={page === 1 ? "page" : undefined}
              className={`cursor-pointer font-heading text-heading-xs outline-offset-4 focus-visible:outline-2 focus-visible:outline-persian-blue-800 ${
                page === 1 ? "text-shuttle-gray-200" : "text-shuttle-gray-950"
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ol>
      <button type="button" aria-label="Next page" className={arrowClass}>
        <Icon name="chevronRight" />
      </button>
    </nav>
  );
}
