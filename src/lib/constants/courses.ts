import type { Course } from "@/types/course";

/** Slug of the one course that has detail, lesson and review pages in the design. */
export const FEATURED_COURSE_SLUG = "build-digital-asset";

export const COURSES: Course[] = [
  { slug: "learn-figma-from-basic", title: "Learn Figma from Basic", cover: "/images/courses/cover-1.jpg" },
  { slug: FEATURED_COURSE_SLUG, title: "Build Digital Asset", cover: "/images/courses/cover-2.jpg" },
  { slug: "the-power-of-big-data", title: "the Power of Big Data", cover: "/images/courses/cover-3.jpg" },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    cover: "/images/courses/cover-4.jpg",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    cover: "/images/courses/cover-5.jpg",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    cover: "/images/courses/cover-6.jpg",
  },
];

export const COURSE_META = {
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  author: "purepearl studio",
  level: "Beginner",
  rating: "4.5",
  price: "$25",
  priceUnit: "/lifetime",
};
