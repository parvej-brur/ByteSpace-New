import Image from "next/image";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-persian-blue-800 px-4 py-16 lg:min-h-122 lg:pt-21.25">
      <Image
        src="/images/hero/grid.svg"
        alt=""
        width={1440}
        height={1024}
        className="pointer-events-none absolute top-0 left-1/2 hidden h-256 w-360 max-w-none -translate-x-1/2 opacity-[0.12] sm:block"
      />
      <Image
        src="/images/cta/ornament.png"
        alt=""
        width={1718}
        height={804}
        className="pointer-events-none absolute top-[-162px] left-[calc(50%-838px)] hidden h-201 w-429.5 max-w-none lg:block"
      />
      <div className="relative mx-auto flex max-w-241 flex-col items-center gap-10 text-center">
        <h2 className="max-w-177.5 font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-50 sm:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-body-l text-shuttle-gray-50">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href="/register"
          className="rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l text-shuttle-gray-950 outline-offset-2 focus-visible:outline-2 focus-visible:outline-white"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
