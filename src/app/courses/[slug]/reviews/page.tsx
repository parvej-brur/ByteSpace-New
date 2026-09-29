import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseReviews, CourseDetailLayout } from "@/features/courses";
import { FEATURED_COURSE_SLUG } from "@/lib/constants/courses";

type CourseReviewsPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: FEATURED_COURSE_SLUG }];
}

export const metadata: Metadata = {
  title: "Reviews | Build Digital Asset | ByteSpace",
  description: "What learners are saying about Build Digital Asset: A Comprehensive Guide.",
};

export default async function CourseReviewsPage({ params }: CourseReviewsPageProps) {
  const { slug } = await params;
  if (slug !== FEATURED_COURSE_SLUG) notFound();

  return (
    <CourseDetailLayout slug={slug} active="reviews">
      <CourseReviews />
    </CourseDetailLayout>
  );
}
