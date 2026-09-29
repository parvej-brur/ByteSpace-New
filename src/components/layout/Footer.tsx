import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/lib/constants/footer-links";
import { ROUTES } from "@/lib/constants/routes";

const linkClass =
  "rounded-sm outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800";

export function Footer() {
  return (
    <footer className="border-t border-shuttle-gray-200 bg-white px-4 pt-17.5 pb-12">
      <div className="mx-auto flex max-w-300 flex-col gap-16 lg:gap-32.5">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-23">
          <div className="flex flex-col gap-11.25 lg:w-132">
            <div className="flex flex-col gap-4">
              <Link href={ROUTES.home} className={`flex h-9.25 w-fit items-start gap-2 ${linkClass}`}>
                <Image src="/icons/logo.svg" alt="" width={29} height={32} />
                <span className="mt-1.75 font-brand text-[24px] leading-[29.5px] font-bold text-shuttle-gray-950">
                  ByteSpace
                </span>
              </Link>
              <p className="text-body-s leading-[22.4px] text-shuttle-gray-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <form className="flex flex-col gap-6 lg:max-w-126" action="#">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="h-13 w-full rounded-full border border-shuttle-gray-200 bg-white px-6 text-body-m leading-[25.6px] text-shuttle-gray-950 outline-offset-2 placeholder:text-shuttle-gray-950 focus-visible:outline-2 focus-visible:outline-persian-blue-800 sm:w-94"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l text-shuttle-gray-950 outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800"
                >
                  Search
                </button>
              </div>
              <p className="text-body-xs text-shuttle-gray-950">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from
                our company.
              </p>
            </form>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:w-145">
            {FOOTER_COLUMNS.map((links) => (
              <div key={links[0]} className="flex flex-col gap-6 lg:pt-12">
                <ul className="flex flex-col gap-4">
                  {links.map((label) => (
                    <li key={label}>
                      <Link href="#" className={`block text-body-s leading-[22.4px] text-shuttle-gray-950 ${linkClass}`}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-[22px]">
          <hr className="border-shuttle-gray-200" />
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <p className="text-body-xs text-shuttle-gray-950">
              @ 2023 ByteSpace. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-6 text-body-xs text-shuttle-gray-950">
              {LEGAL_LINKS.map((label) => (
                <li key={label}>
                  <Link href="#" className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
