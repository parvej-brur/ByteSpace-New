import Image from "next/image";
import { AuthCourseCard } from "./AuthCourseCard";

const AVATARS = [1, 2, 3, 4, 5, 6, 7];

/** Decorative course collage shown beside the auth forms (desktop only). */
type AuthIllustrationProps = {
  /** The register frame renders the rating caption in a darker grey than the login frame. */
  darkCaption?: boolean;
};

export function AuthIllustration({ darkCaption = false }: AuthIllustrationProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none relative hidden h-146.25 w-137 lg:block">
      <AuthCourseCard
        title="Build Digital Asset"
        cover="/images/courses/cover-2.jpg"
        className="absolute top-22.25 left-6.25"
      />
      <AuthCourseCard
        title="the Power of Big Data"
        cover="/images/courses/cover-3.jpg"
        className="absolute top-0 left-34"
      />

      <div className="absolute top-108.75 left-62.75 flex w-64.5 flex-col justify-center gap-2 rounded-2xl bg-electric-lime-400 p-4 backdrop-blur-[10px]">
        <div>
          <p className="text-label-m leading-6 text-shuttle-gray-950">Happy Students</p>
          <p
            className={`flex items-center text-[10px] leading-[15px] ${darkCaption ? "text-[#424348]" : "text-shuttle-gray-400"}`}
          >
            <span className="font-medium text-shuttle-gray-950">4.5&nbsp;</span>
            (240)
            <Image src="/icons/star-blue.svg" alt="" width={16} height={16} className="h-4 w-4" />
          </p>
        </div>
        <div className="flex items-start">
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
          <span className="grid size-10.75 place-items-center rounded-full bg-shuttle-gray-950 text-[12px] leading-[18px] font-bold text-shuttle-gray-50">
            2K+
          </span>
        </div>
      </div>

      <Image
        src="/images/auth/spiral.png"
        alt=""
        width={177}
        height={177}
        className="absolute top-80.25 left-93.25 max-w-none"
      />
      <Image
        src="/images/auth/donut.png"
        alt=""
        width={148}
        height={148}
        className="absolute top-3.75 left-13 max-w-none"
      />
      <Image
        src="/images/auth/cone.png"
        alt=""
        width={190}
        height={190}
        className="absolute top-99.25 -left-0.5 max-w-none"
      />
    </div>
  );
}
