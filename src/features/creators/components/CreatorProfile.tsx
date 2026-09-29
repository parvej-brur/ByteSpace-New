import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CourseGrid } from "@/components/shared/CourseGrid";
import { FilterBar } from "@/components/shared/FilterBar";
import { PageBanner } from "@/components/shared/PageBanner";
import { COURSES } from "@/lib/constants/courses";

const STATS = [
  { value: "3", label: "Products" },
  { value: "12", label: "Followers" },
];

const INTRO = [
  "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
  "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
];

export function CreatorProfile() {
  return (
    <>
      <Header />
      <main>
        <PageBanner className="px-4 pt-28 pb-12 lg:h-148 lg:pt-43 lg:pb-0">
          <div className="relative mx-auto flex max-w-300 flex-col gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-wrap items-center gap-6">
                <Image
                  src="/images/creators/purepearl-avatar.png"
                  alt="PurePearl Studio"
                  width={96}
                  height={96}
                  priority
                  className="size-24 rounded-3xl object-cover"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-start gap-2">
                    <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-50 sm:text-4xl">
                      PurePearl Studio
                    </h1>
                    <span className="rounded-3xl bg-electric-lime-400 px-6 py-2 text-label-m leading-[19px] text-shuttle-gray-950 backdrop-blur-[10px]">
                      Creator
                    </span>
                  </div>
                  <p className="text-body-l text-shuttle-gray-50">Passionate UI/UX, Web designer</p>
                </div>
              </div>
              <div className="flex flex-col text-body-l text-shuttle-gray-50">
                {INTRO.map((paragraph) => (
                  <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <dl className="flex flex-wrap gap-4">
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-3xl bg-white px-6 py-3 text-label-l backdrop-blur-[10px]"
                  >
                    <dt className="order-2 text-shuttle-gray-950">{label}</dt>
                    <dd className="text-persian-blue-800">{value}</dd>
                  </div>
                ))}
              </dl>
              <button
                type="button"
                className="cursor-pointer rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l text-navy-950 outline-offset-2 focus-visible:outline-2 focus-visible:outline-white"
              >
                Follow
              </button>
            </div>
          </div>
        </PageBanner>

        <section
          aria-label="Courses by PurePearl Studio"
          className="mx-auto flex max-w-300 flex-col gap-10 px-4 pt-12 pb-16 lg:px-0 lg:pt-15.5 lg:pb-15.25"
        >
          <FilterBar />
          <CourseGrid courses={COURSES} />
        </section>
      </main>
      <Footer />
    </>
  );
}
