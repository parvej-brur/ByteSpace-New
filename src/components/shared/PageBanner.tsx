import Image from "next/image";
import type { ReactNode } from "react";

type PageBannerProps = {
  className?: string;
  children?: ReactNode;
};

/** Blue page banner with the faint white grid used on every inner screen. */
export function PageBanner({ className = "", children }: PageBannerProps) {
  return (
    <div className={`relative overflow-hidden bg-persian-blue-800 ${className}`}>
      <Image
        src="/images/hero/grid.svg"
        alt=""
        width={1440}
        height={1024}
        priority
        className="pointer-events-none absolute top-0 left-1/2 hidden h-256 w-360 max-w-none -translate-x-1/2 opacity-[0.12] sm:block"
      />
      {children}
    </div>
  );
}
