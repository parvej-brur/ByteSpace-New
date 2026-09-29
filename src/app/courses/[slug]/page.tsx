import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseAbout, CourseDetailLayout } from "@/features/courses";
import { FEATURED_COURSE_SLUG } from "@/lib/constants/courses";

type CoursePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: FEATURED_COURSE_SLUG }];
}

export const metadata: Metadata = {
  title: "Build Digital Asset: A Comprehensive Guide | ByteSpace",
  description: "Unlock the power of digital creation with expert guidance from purepearl studio.",
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  if (slug !== FEATURED_COURSE_SLUG) notFound();

  return (
    <CourseDetailLayout slug={slug} active="about">
      <CourseAbout />
    </CourseDetailLayout>
  );
}
