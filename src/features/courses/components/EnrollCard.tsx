import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { ROUTES } from "@/lib/constants/routes";
import {
  COURSE_DETAIL,
  COURSE_INCLUDES,
  SIDEBAR_LESSONS,
} from "../utils/courseContent";

export function EnrollCard() {
  return (
    <aside
      aria-label="Enroll in this course"
      className="flex flex-col gap-6 rounded-3xl ring-1 ring-inset ring-shuttle-gray-200 bg-white p-6 sm:p-10"
    >
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-heading-xs leading-6 text-shuttle-gray-950">
          {COURSE_DETAIL.totalLessons}
        </h2>
        <div className="flex flex-col gap-3">
          <ol className="flex flex-col gap-3">
            {SIDEBAR_LESSONS.map(({ number, title, duration }) => (
              <li key={number} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 sm:grid-cols-[271px_auto] sm:justify-start sm:gap-x-0">
                <div className="flex max-w-56.25 gap-2 text-label-m text-shuttle-gray-950">
                  <span className="w-6 shrink-0">{number}</span>
                  <span>{title}</span>
                </div>
                <span className="text-body-m leading-6.5 text-persian-blue-800">{duration}</span>
              </li>
            ))}
          </ol>
          <p className="text-body-m leading-6.5 text-shuttle-gray-700">
            {COURSE_DETAIL.moreVideos}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-body-m leading-6.5 text-shuttle-gray-700">
          {COURSE_DETAIL.enrollPitch}
        </p>
        <p className="flex items-end">
          <span className="font-heading text-heading-xs text-[36px] leading-[1.2] tracking-[-0.01em] text-persian-blue-800">
            {COURSE_DETAIL.price}
          </span>
          <span className="pb-1 text-body-m leading-6.5 text-shuttle-gray-700">
            {COURSE_DETAIL.priceUnit}
          </span>
        </p>
        <button
          type="button"
          className="-mt-1.5 w-full cursor-pointer rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l text-shuttle-gray-950 outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800"
        >
          Enroll Now
        </button>
      </div>

      <h2 className="font-heading text-heading-xs leading-6 text-shuttle-gray-950">This course include</h2>
      <ul className="flex flex-col gap-3">
        {COURSE_INCLUDES.map(({ label, icon }) => (
          <li key={label} className="flex items-start gap-2 text-body-m leading-6.5 text-shuttle-gray-700">
            <Icon name={icon} className="text-persian-blue-800" />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-6">
        <div className="flex items-start gap-3">
          <Image
            src="/images/creators/purepearl-studio-photo.jpg"
            alt=""
            width={52}
            height={52}
            className="size-13 rounded-full bg-[#d9d9d9] object-cover"
          />
          <div>
            <p className="text-label-l text-shuttle-gray-950">PurePearl Studio</p>
            <p className="text-body-m leading-6.5 text-shuttle-gray-700">Professional Creator</p>
          </div>
        </div>
        <p className="text-body-m leading-6.5 text-shuttle-gray-700">
          {COURSE_DETAIL.enrollPitch}
        </p>
        <Link
          href={ROUTES.creator}
          className="w-fit rounded-3xl ring-1 ring-inset ring-shuttle-gray-200 px-4 py-2 text-label-m text-shuttle-gray-700 outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
