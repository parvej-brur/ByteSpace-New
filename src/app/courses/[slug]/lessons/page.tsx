import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseLessons, CourseDetailLayout } from "@/features/courses";
import { FEATURED_COURSE_SLUG } from "@/lib/constants/courses";

type CourseLessonsPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: FEATURED_COURSE_SLUG }];
}

export const metadata: Metadata = {
  title: "Lessons | Build Digital Asset | ByteSpace",
  description: "Explore the modules and lesson list of Build Digital Asset: A Comprehensive Guide.",
};

export default async function CourseLessonsPage({ params }: CourseLessonsPageProps) {
  const { slug } = await params;
  if (slug !== FEATURED_COURSE_SLUG) notFound();

  return (
    <CourseDetailLayout slug={slug} active="lessons">
      <CourseLessons />
    </CourseDetailLayout>
  );
}
