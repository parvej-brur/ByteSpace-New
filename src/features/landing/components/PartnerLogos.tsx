import Image from "next/image";
import { PARTNER_LOGOS } from "../utils/landingContent";

export function PartnerLogos() {
  return (
    <section aria-label="Our partners" className="bg-shuttle-gray-50 px-4 py-10 lg:py-20">
      <ul className="mx-auto flex max-w-360 flex-wrap items-end justify-center gap-x-10 gap-y-8 lg:gap-x-18">
        {PARTNER_LOGOS.map(({ src, width, height }) => (
          <li key={src}>
            <Image src={src} alt="Logoipsum" width={width} height={height} />
          </li>
        ))}
      </ul>
    </section>
  );
}
