import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageBanner } from "@/components/shared/PageBanner";
import { CourseHeroText } from "./CourseHeroText";
import { CoursePreview } from "./CoursePreview";
import { CourseTabsNav, type CourseTab } from "./CourseTabsNav";
import { EnrollCard } from "./EnrollCard";

// Bottom space before the footer differs per screen in the design (fixed-height frames).
const BOTTOM_SPACING: Record<CourseTab, string> = {
  about: "lg:pb-16",
  lessons: "lg:pb-20.75",
  reviews: "lg:pb-22.75",
};

type CourseDetailLayoutProps = {
  slug: string;
  active: CourseTab;
  children: ReactNode;
};

/** Shared frame of the About, Lesson and Reviews screens: banner, preview, enroll card, tabs. */
export function CourseDetailLayout({ slug, active, children }: CourseDetailLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <PageBanner className="px-4 pt-28 pb-10 lg:h-239.25 lg:pt-43 lg:pb-0">
          <div className="relative mx-auto flex max-w-300 flex-col gap-10 lg:gap-14.75">
            <CourseHeroText />
            <CoursePreview />
          </div>
        </PageBanner>

        <div
          className={`relative mx-auto flex max-w-300 flex-col gap-10 px-4 pt-10 pb-16 lg:block lg:px-0 ${
            active === "about" ? "lg:pt-15.75" : "lg:pt-19.5"
          } ${BOTTOM_SPACING[active]}`}
        >
          <div className="lg:absolute lg:-top-135.25 lg:right-0 lg:w-103">
            <EnrollCard />
          </div>
          <div className="flex flex-col gap-10 lg:w-181.25">
            <CourseTabsNav slug={slug} active={active} />
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
