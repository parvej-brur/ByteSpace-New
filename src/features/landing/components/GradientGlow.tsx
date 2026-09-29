type GradientGlowProps = {
  color: "blue" | "lime";
  /** Paint opacity from Figma (0-1). */
  opacity: number;
  size: number;
  /** Offsets from the section's top-left corner, in px. */
  left: number;
  top: number;
};

const RGB = { blue: "0 59 226", lime: "203 252 1" } as const;

/** Soft blurred radial blob used as a decorative section background. */
export function GradientGlow({ color, opacity, size, left, top }: GradientGlowProps) {
  const rgb = RGB[color];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute rounded-full blur-[20px]"
      style={{
        width: size,
        height: size,
        left,
        top,
        opacity,
        background: `radial-gradient(closest-side, rgb(${rgb} / 1) 0%, rgb(${rgb} / 0.23) 53%, rgb(${rgb} / 0.06) 75%, rgb(${rgb} / 0) 100%)`,
      }}
    />
  );
}
