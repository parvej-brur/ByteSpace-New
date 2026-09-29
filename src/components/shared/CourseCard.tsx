import Image from "next/image";
import Link from "next/link";
import { COURSE_META } from "@/lib/constants/courses";
import { ROUTES } from "@/lib/constants/routes";
import type { Course } from "@/types/course";

type CourseCardProps = Pick<Course, "title" | "cover"> & {
  slug?: string;
};

const AVATARS = [1, 2, 3, 4];

export function CourseCard({ title, cover, slug }: CourseCardProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-shuttle-gray-200 bg-white p-3.75 pb-4.75">
      <div className="relative aspect-[341/195.145] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <ul className="absolute inset-x-3.25 bottom-3 flex flex-wrap gap-x-3 gap-y-2 text-[12px] font-medium text-black-700 lg:right-auto lg:left-3.25 lg:top-37.5 lg:bottom-auto">
          {[COURSE_META.lessons, COURSE_META.duration, COURSE_META.comments].map((label) => (
            <li
              key={label}
              className="rounded-3xl bg-[rgb(246_246_246/0.6)] px-3 py-1.5 leading-[1.2] whitespace-nowrap backdrop-blur-xs"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5.25 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 max-w-67.5">
            <h3 className="truncate font-heading text-heading-xs leading-[1.2] text-black">
              {slug ? (
                <Link
                  href={ROUTES.course(slug)}
                  className="outline-offset-4 after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-2 focus-visible:outline-persian-blue-800"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </h3>
            <p className="text-body-xs text-black-700">
              by <span className="text-persian-blue-800">{COURSE_META.author}</span>
            </p>
          </div>
          <p className="flex shrink-0 items-center gap-px text-body-l text-black-700">
            {COURSE_META.rating}
            <Image src="/icons/star-outline.svg" alt="" width={24} height={24} />
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center gap-1 rounded-3xl bg-shuttle-gray-50 px-3 py-1.5 text-[12px] leading-[1.2] font-medium text-shuttle-gray-700">
            <Image src="/icons/signal.svg" alt="" width={20} height={20} />
            {COURSE_META.level}
          </span>
          <div className="flex items-center" aria-label="26 more learners">
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
            <span className="relative grid size-8 place-items-center rounded-full bg-electric-lime-400 text-label-xs text-shuttle-gray-950">
              26+
            </span>
          </div>
        </div>

        <p className="flex items-end">
          <span className="font-heading text-heading-xs leading-[1.2] text-persian-blue-800">
            {COURSE_META.price}
          </span>
          <span className="text-body-xs text-black-700">{COURSE_META.priceUnit}</span>
        </p>
      </div>
    </article>
  );
}
