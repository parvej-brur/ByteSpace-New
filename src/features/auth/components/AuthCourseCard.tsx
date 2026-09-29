import Image from "next/image";

type AuthCourseCardProps = {
  title: string;
  cover: string;
  className?: string;
};

const AVATARS = [1, 2, 3, 4];

/** Static course preview used in the auth illustration (dark learner counter, violet price). */
export function AuthCourseCard({ title, cover, className = "" }: AuthCourseCardProps) {
  return (
    <div
      className={`h-96 w-93.25 overflow-hidden rounded-3xl border border-shuttle-gray-200 bg-white p-3.75 ${className}`}
    >
      <div className="relative h-48.75 overflow-hidden rounded-xl bg-[#443131]">
        <Image src={cover} alt="" fill sizes="341px" className="object-cover" />
        <ul className="absolute top-37.5 left-3 flex gap-3 text-label-xs text-black-700">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((label) => (
            <li
              key={label}
              className="rounded-3xl bg-[rgb(246_246_246/0.6)] px-3 py-1.5 whitespace-nowrap backdrop-blur-xs"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-5.25 flex flex-col gap-4">
        <div>
          <p className="truncate font-heading text-heading-xs text-black">{title}</p>
          <p className="text-[12px] leading-5 text-black-700">
            by <span className="text-persian-blue-800">purepearl studio</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-shuttle-gray-50 px-3 py-1.5 text-label-xs text-shuttle-gray-700">
            <Image src="/icons/signal.svg" alt="" width={20} height={20} />
            Beginner
          </span>
          <div className="flex items-center">
            {AVATARS.map((n) => (
              <Image
                key={n}
                src={`/images/courses/avatar-${n}.png`}
                alt=""
                width={32}
                height={32}
                className="-mr-2 size-8 rounded-full"
              />
            ))}
            <span className="grid size-8 place-items-center rounded-full bg-black text-label-xs text-white">
              26+
            </span>
          </div>
        </div>
        <p className="flex h-6 items-end">
          <span className="font-heading text-heading-xs text-persian-blue-800">$25</span>
          <span className="pb-px text-[12px] leading-5 text-black-700">/lifetime</span>
        </p>
        <p className="absolute top-0 right-0 flex items-center text-body-l leading-7 font-medium text-black-700">
          4.5&nbsp;
          <Image src="/icons/star-outline-lime.svg" alt="" width={24} height={24} />
        </p>
      </div>
    </div>
  );
}
