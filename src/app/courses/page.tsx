import type { Metadata } from "next";
import { CourseSearch } from "@/features/courses";

export const metadata: Metadata = {
  title: "Find Your Next Course | ByteSpace",
  description: "Search and filter ByteSpace courses by topic, level and category.",
};

export default function CoursesPage() {
  return <CourseSearch />;
}
