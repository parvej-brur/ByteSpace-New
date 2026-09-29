import { CreatorTools } from "./CreatorTools";
import { GrowthBackground, GrowthSection } from "./GrowthSection";

export function PlatformShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-4 py-16 lg:py-30">
      <GrowthBackground />
      <div className="relative flex flex-col gap-18">
        <GrowthSection />
        <CreatorTools />
      </div>
    </section>
  );
}
