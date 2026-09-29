import Image from "next/image";
import { GradientGlow } from "./GradientGlow";
import { TESTIMONIALS } from "../utils/landingContent";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-4 pt-16 pb-14 lg:h-196 lg:pt-18.5 lg:pb-0">
      <GradientGlow color="lime" opacity={0.4} size={1137} left={842} top={-241} />
      <GradientGlow color="lime" opacity={0.6} size={672} left={395} top={-138} />
      <GradientGlow color="blue" opacity={0.24} size={1137} left={-442} top={149} />

      <div className="relative mx-auto flex max-w-301 flex-col gap-18">
        <div className="flex flex-col gap-6 lg:min-h-36.25 lg:w-300 lg:flex-row lg:items-end lg:gap-10.75">
          <h2 className="max-w-144.25 font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-heading-m">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-145 text-body-l text-black-700">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="grid items-start gap-10.25 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, quote, avatar, nameLeading, minHeight }) => (
            <li key={name} className={`flex flex-col gap-6 rounded-3xl bg-white p-6 ${minHeight}`}>
              <Image src={avatar} alt="" width={80} height={80} className="size-20 rounded-full" />
              <div>
                <p className={`font-heading text-heading-xs text-black ${nameLeading}`}>{name}</p>
                <p className="text-body-l text-persian-blue-800">{role}</p>
              </div>
              <blockquote className="text-body-l text-black-700">{quote}</blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
