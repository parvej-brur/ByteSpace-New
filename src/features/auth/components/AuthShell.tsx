import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AuthIllustration } from "./AuthIllustration";

type AuthShellProps = {
  heading: string;
  description: string;
  darkCaption?: boolean;
  children: ReactNode;
};

/** Blue grid backdrop with intro copy on the left and the white form card on the right. */
export function AuthShell({ heading, description, darkCaption, children }: AuthShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-persian-blue-800">
      <Image
        src="/images/hero/grid.svg"
        alt=""
        width={1440}
        height={1024}
        priority
        className="pointer-events-none absolute top-0 left-1/2 hidden h-256 w-360 max-w-none -translate-x-1/2 opacity-[0.12] sm:block"
      />
      <div className="relative mx-auto max-w-360 px-4 sm:px-8 lg:px-30">
        <header className="flex h-20 items-start pt-6 lg:h-30 lg:pt-8.75 lg:pl-0.5">
          <Link
            href="/"
            aria-label="ByteSpace home"
            className="rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-electric-lime-400"
          >
            <Image src="/icons/logo.svg" alt="" width={29} height={32} priority />
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-10 pb-12 lg:grid-cols-[1fr_579px] lg:pb-30">
          <div className="relative flex flex-col gap-4 text-shuttle-gray-50 lg:pl-0.5">
            <div className="flex max-w-118.75 flex-col gap-4">
              <p className="font-heading text-heading-xs leading-6">{heading}</p>
              <p className="text-body-l">{description}</p>
            </div>
            <div className="absolute top-46.25 -left-5.75">
              <AuthIllustration darkCaption={darkCaption} />
            </div>
          </div>

          <main className="rounded-3xl bg-white px-6 py-10 sm:px-15.75 lg:min-h-196 lg:pt-15.5 lg:pb-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
