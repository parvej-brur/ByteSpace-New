import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageBanner } from "@/components/shared/PageBanner";
import { ROUTES } from "@/lib/constants/routes";

export function NotFoundView() {
  return (
    <>
      <Header />
      <main>
        <PageBanner className="flex items-center justify-center px-4 py-32 lg:mb-0.75 lg:block lg:h-239.25 lg:py-0">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 bg-linear-to-b from-electric-lime-400 from-0% via-electric-lime-400/95 via-25% to-white/0 to-100% bg-clip-text font-heading text-[40vw] leading-none font-semibold tracking-[-0.01em] whitespace-nowrap text-transparent select-none lg:top-40 lg:text-[480px]"
          >
            404
          </p>
          <div className="relative mx-auto flex max-w-233.75 flex-col items-center gap-8 text-center lg:pt-130.25">
            <h1 className="font-heading text-4xl leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-6xl lg:text-heading-l">
              The page you are looking for doesn’t exist
            </h1>
            <p className="max-w-121.5 text-body-l text-shuttle-gray-100">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Link
              href={ROUTES.home}
              className="rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l text-shuttle-gray-950 outline-offset-2 focus-visible:outline-2 focus-visible:outline-white"
            >
              Back to Home
            </Link>
          </div>
        </PageBanner>
      </main>
      <Footer />
    </>
  );
}
