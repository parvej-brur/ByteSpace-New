import Image from "next/image";

const AVATARS = [1, 2, 3, 4, 5, 6, 7];

const cardClass = "rounded-2xl bg-white p-4 backdrop-blur-[10px]";

type StatCardProps = {
  className?: string;
  /** Frame 15 uses looser line heights than the hero copy of the same card. */
  roomy?: boolean;
};

export function CategoryStatCard({ className = "" }: StatCardProps) {
  return (
    <div className={`${cardClass} flex flex-col ${className}`}>
      <p className="text-label-m text-shuttle-gray-950">UI/UX Design</p>
      <p className="flex items-start gap-2 text-body-xs whitespace-nowrap text-shuttle-gray-400">
        <span>200 Courses</span>
        <span className="text-[10px] leading-normal" aria-hidden="true">
          •
        </span>
        <span>1000+ Students</span>
      </p>
    </div>
  );
}

export function LearningProgressCard({ className = "", roomy = false }: StatCardProps) {
  return (
    <div className={`${cardClass} flex flex-col gap-2 ${className}`}>
      <p className={`text-label-s whitespace-nowrap text-shuttle-gray-950 ${roomy ? "leading-6" : ""}`}>
        Learning Progress
      </p>
      <p className="w-50 font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-950">
        55%
      </p>
      <div
        className="h-2 w-50 rounded-3xl bg-[#f6f6f6]"
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full w-28 rounded-3xl bg-electric-lime-400" />
      </div>
    </div>
  );
}

export function HappyStudentsCard({ className = "", roomy = false }: StatCardProps) {
  return (
    <div className={`${cardClass} flex w-64.5 flex-col justify-center gap-2 ${className}`}>
      <div>
        <p className={`text-label-m text-shuttle-gray-950 ${roomy ? "leading-6" : ""}`}>Happy Students</p>
        <p
          className={`flex items-center text-shuttle-gray-400 ${roomy ? "text-[10px] leading-[15px]" : "text-body-xs"}`}
        >
          <span className="text-shuttle-gray-950">4.5&nbsp;</span>
          <span>(240)</span>
          <Image src="/icons/star.svg" alt="" width={16} height={16} className="h-4 w-4" />
        </p>
      </div>
      <div className="flex items-start" aria-label="More than 2000 happy students">
        {AVATARS.map((n) => (
          <Image
            key={n}
            src={`/images/hero/avatar-${n}.png`}
            alt=""
            width={43}
            height={43}
            className="-mr-4 size-10.75 rounded-full"
          />
        ))}
        <span className="grid size-10.75 place-items-center rounded-full bg-electric-lime-400 text-[12px] leading-normal font-bold text-shuttle-gray-950">
          2K+
        </span>
      </div>
    </div>
  );
}
