/**
 * Figma stacks eight independent drop shadows on cut-out photos. CSS `drop-shadow()` chains
 * compound (each shadow is cast by the previous result), so the shadows are merged in parallel
 * here and applied through the `drop-shadow-photo` utility.
 */
const SHADOWS = [
  { dx: 0.518, dy: 0.741, blur: 3.036, alpha: 0.04 },
  { dx: 2.233, dy: 3.19, blur: 5.723, alpha: 0.06 },
  { dx: 5.383, dy: 7.69, blur: 9.571, alpha: 0.07 },
  { dx: 10.208, dy: 14.582, blur: 16.087, alpha: 0.08 },
  { dx: 16.946, dy: 24.209, blur: 24, alpha: 0.09 },
  { dx: 25.838, dy: 36.912, blur: 36, alpha: 0.1 },
  { dx: 37.122, dy: 53.032, blur: 56, alpha: 0.11 },
  { dx: 51.038, dy: 72.912, blur: 72, alpha: 0.13 },
];

export function PhotoShadowFilter() {
  return (
    <svg aria-hidden="true" focusable="false" className="absolute size-0">
      <defs>
        <filter id="photo-shadow" x="-30%" y="-30%" width="180%" height="190%">
          {SHADOWS.map(({ dx, dy, blur, alpha }, index) => (
            <feDropShadow
              key={index}
              in="SourceGraphic"
              dx={dx}
              dy={dy}
              stdDeviation={blur / 2}
              floodColor="#000"
              floodOpacity={alpha}
              result={`shadow${index}`}
            />
          ))}
          <feMerge>
            {SHADOWS.map((_, index) => (
              <feMergeNode key={index} in={`shadow${index}`} />
            ))}
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
