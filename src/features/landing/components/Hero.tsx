import Image from "next/image";
import { HeroStatCards } from "./HeroStatCards";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-persian-blue-800 pt-32 pb-16 lg:h-256 lg:pt-42.25 lg:pb-0">
      <Image
        src="/images/hero/grid.svg"
        alt=""
        width={1440}
        height={1024}
        priority
        className="pointer-events-none absolute top-0 left-1/2 hidden h-256 w-360 max-w-none -translate-x-1/2 sm:block"
      />

      <div className="relative flex w-full max-w-300 flex-col items-center gap-10 px-4 text-center lg:gap-15">
        <div className="flex flex-col items-center gap-4 lg:gap-[31px]">
          <h1 className="max-w-233.75 font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-6xl lg:text-heading-l">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-base text-shuttle-gray-100 lg:text-body-l">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
        </div>

        <form
          role="search"
          action="/#courses"
          className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center"
        >
          <label className="flex h-13 flex-1 items-center gap-2 rounded-3xl bg-white px-6 py-3 sm:w-115.25 sm:flex-none">
            <Image src="/icons/search.svg" alt="" width={24} height={24} />
            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              aria-label="Search courses, topics or creators"
              className="w-full bg-transparent text-body-l text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400"
            />
          </label>
          <button
            type="submit"
            className="h-13 cursor-pointer rounded-3xl bg-electric-lime-400 px-6 text-label-l text-shuttle-gray-950 outline-offset-2 focus-visible:outline-2 focus-visible:outline-white"
          >
            Search
          </button>
        </form>
      </div>

      <div className="relative mt-12 w-full max-w-144.5 px-4 lg:-mt-0.5 lg:w-144.5 lg:max-w-none lg:px-0">
        <div className="pointer-events-none absolute top-17.5 left-1/2 size-287.25 -translate-x-1/2">
          <Image src="/images/hero/ellipse.svg" alt="" width={1149} height={1149} />
        </div>
        <Image
          src="/images/hero/person.png"
          alt="Smiling student wearing headphones and holding a laptop"
          width={516}
          height={483}
          priority
          loading="eager"
          className="relative h-auto w-full drop-shadow-photo lg:h-135.25"
        />
        <HeroStatCards />
      </div>
      <Image
        src="/images/hero/ornament.png"
        alt=""
        width={1440}
        height={1024}
        loading="eager"
        className="pointer-events-none absolute top-0 left-1/2 hidden h-256 w-360 max-w-none -translate-x-1/2 lg:block"
      />
    </section>
  );
}
