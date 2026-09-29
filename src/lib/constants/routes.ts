import { FEATURED_COURSE_SLUG } from "./courses";

export const CREATOR_SLUG = "purepearl-studio";

export const ROUTES = {
  home: "/",
  courses: "/courses",
  course: (slug: string) => `/courses/${slug}`,
  courseLessons: (slug: string) => `/courses/${slug}/lessons`,
  courseReviews: (slug: string) => `/courses/${slug}/reviews`,
  featuredCourse: `/courses/${FEATURED_COURSE_SLUG}`,
  creator: `/creators/${CREATOR_SLUG}`,
  login: "/login",
  register: "/register",
};
