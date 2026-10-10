export function TornDivider({ color = "var(--color-cream)" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      className="block w-full h-8 md:h-12"
      aria-hidden
    >
      <path
        fill={color}
        d="M0,20 C80,8 160,32 240,18 C320,4 400,28 480,14 C560,2 640,30 720,16 C800,4 880,26 960,12 C1040,2 1120,28 1200,14 C1280,4 1360,24 1440,12 L1440,40 L0,40 Z"
      />
    </svg>
  );
}
