import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseGrid } from "@/components/shared/CourseGrid";
import { FilterBar } from "@/components/shared/FilterBar";
import { PageBanner } from "@/components/shared/PageBanner";
import { Icon } from "@/components/ui/Icon";
import { COURSES } from "@/lib/constants/courses";
import { CategoryTabs } from "./CategoryTabs";
import { Pagination } from "./Pagination";

export function CourseSearch() {
  return (
    <>
      <Header />
      <main>
        <PageBanner className="px-4 pt-32 pb-16 lg:h-90 lg:pt-41 lg:pb-0">
          <div className="relative mx-auto flex max-w-156 flex-col items-center gap-8">
            <h1 className="text-center font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-50 sm:text-4xl">
              Find Your Next Course
            </h1>
            <form role="search" className="flex w-full flex-col gap-4 sm:flex-row sm:items-start">
              <label className="flex h-13 flex-1 items-center gap-2 rounded-3xl bg-white px-6 py-3">
                <Image src="/icons/search.svg" alt="" width={24} height={24} />
                <input
                  type="search"
                  name="q"
                  placeholder="Search"
                  aria-label="Search courses"
                  className="w-full bg-transparent text-body-l text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400"
                />
              </label>
              <button
                type="button"
                className="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l text-shuttle-gray-950 outline-offset-2 focus-visible:outline-2 focus-visible:outline-white"
              >
                Courses
                <Icon name="chevronDown" className="text-shuttle-gray-950" />
              </button>
            </form>
          </div>
        </PageBanner>

        <div className="mx-auto max-w-300 px-4 pt-12 lg:px-0 lg:pt-18">
          <FilterBar />
          <div className="mt-8">
            <CategoryTabs />
          </div>
          <div className="mt-12 lg:mt-19.25">
            <CourseGrid courses={COURSES} repeat={3} />
          </div>
          <div className="mt-12 pb-16 lg:mt-18 lg:pb-18">
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
