import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function CoursePreview() {
  return (
    <div className="relative aspect-[720/479] w-full overflow-hidden rounded-3xl bg-[#443131] lg:ml-1.25 lg:w-180">
      <Image
        src="/images/course-details/cover.jpg"
        alt="Course preview"
        fill
        priority
        sizes="(min-width: 1024px) 720px, 100vw"
        className="object-cover"
      />
      <button
        type="button"
        aria-label="Play course preview"
        className="absolute top-1/2 left-1/2 grid size-26 -translate-x-1/2 -translate-y-[43%] cursor-pointer place-items-center rounded-3xl border border-black-700 bg-[rgb(61_61_61/0.24)] text-electric-violet-50 backdrop-blur-[10px] outline-offset-2 focus-visible:outline-2 focus-visible:outline-white"
      >
        <Icon name="play" size={60} />
      </button>
    </div>
  );
}
