import Image from "next/image";

const PROVIDERS = [
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "Google", icon: "/icons/google.svg" },
];

/** Provider sign-in is visual only; no authentication backend is connected. */
export function SocialButtons() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full items-center justify-center gap-2.75" role="separator">
        <span className="h-px min-w-0 flex-1 bg-divider sm:w-50 sm:flex-none" />
        <span className="text-body-l text-muted">or</span>
        <span className="h-px min-w-0 flex-1 bg-divider sm:w-50 sm:flex-none" />
      </div>
      <div className="flex gap-4">
        {PROVIDERS.map(({ name, icon }) => (
          <button
            key={name}
            type="button"
            aria-label={`Continue with ${name}`}
            className="grid size-18 cursor-pointer place-items-center rounded-3xl border border-divider bg-white outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800"
          >
            <Image src={icon} alt="" width={40} height={40} />
          </button>
        ))}
      </div>
    </div>
  );
}
