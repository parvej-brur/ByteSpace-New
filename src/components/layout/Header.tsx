import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "Courses", href: ROUTES.courses },
  { label: "Creators", href: ROUTES.creator },
];

const AUTH_LINKS = [
  { label: "Sign In", href: ROUTES.login },
  { label: "Join Us", href: ROUTES.register },
];

const linkClass =
  "rounded-sm text-shuttle-gray-50 outline-offset-4 focus-visible:outline-2 focus-visible:outline-electric-lime-400";

function Logo() {
  return (
    <Link
      href={ROUTES.home}
      className={`flex items-center gap-2 ${linkClass}`}
      aria-label="ByteSpace home"
    >
      <Image src="/icons/logo.svg" alt="" width={29} height={32} priority />
      <span className="font-brand text-[24px] font-bold text-shuttle-gray-50">
        ByteSpace
      </span>
    </Link>
  );
}

function CartLink() {
  return (
    <Link
      href={ROUTES.courses}
      className={`${linkClass} grid size-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white`}
      aria-label="Shopping bag"
    >
      <Image src="/icons/bag.svg" alt="" width={24} height={24} />
    </Link>
  );
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-persian-blue-800/70 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-360 items-center justify-between px-4 sm:px-8 lg:px-30">
        <Logo />

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex"
        >
          {NAV_LINKS.map(({ label, href }, index) => (
            <Link
              key={label}
              href={href}
              className={`${linkClass} group relative py-2 text-label-m transition-colors ${
                index === 0 ? "text-white" : "text-white/70 hover:text-white"
              }`}
              aria-current={index === 0 ? "page" : undefined}
            >
              {label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 rounded-full bg-electric-lime-400 transition-all duration-300 ${
                  index === 0 ? "w-5" : "w-0 group-hover:w-5"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={ROUTES.login}
            className={`${linkClass} rounded-full px-4 py-2.5 text-label-m text-white/80 transition-colors hover:text-white`}
          >
            Sign In
          </Link>
          <Link
            href={ROUTES.register}
            className={`${linkClass} rounded-full bg-electric-lime-400 px-6 py-2.5 text-label-m text-shuttle-gray-950 transition-all hover:bg-white hover:shadow-[0_6px_20px_rgba(212,251,32,0.35)]`}
          >
            Join Us
          </Link>
          <span className="mx-2 h-6 w-px bg-white/20" aria-hidden="true" />
          <CartLink />
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <CartLink />
          <details className="group">
            <summary
              className={`flex size-10 cursor-pointer list-none items-center justify-center marker:hidden ${linkClass}`}
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="group-open:hidden"
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  className="hidden group-open:block"
                  d="M5 5l14 14M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute inset-x-4 top-full flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg sm:inset-x-8"
            >
              {[...NAV_LINKS, ...AUTH_LINKS].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-label-m text-shuttle-gray-950 focus-visible:outline-2"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
