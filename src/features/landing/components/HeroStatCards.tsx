import { CategoryStatCard, HappyStudentsCard, LearningProgressCard } from "./StatCards";

/** Floating glass cards around the hero photo. Positions are relative to the photo wrapper. */
export function HeroStatCards() {
  return (
    <>
      <CategoryStatCard className="absolute top-31.75 -left-6.75 hidden lg:flex" />
      <LearningProgressCard className="absolute top-34.75 left-102.75 hidden lg:flex" />
      <HappyStudentsCard className="absolute top-81.25 -left-25.75 hidden lg:flex" />
    </>
  );
}
