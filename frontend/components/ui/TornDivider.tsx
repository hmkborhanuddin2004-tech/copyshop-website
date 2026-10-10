interface TornDividerProps {
  color?: string;
  position?: "top" | "bottom";
  className?: string;
}

/**
 * Organic torn paper edge divider inspired by Brewlab artisanal coffee design.
 * Creates an authentic craft bakery/roastery transition between sections.
 */
export default function TornDivider({
  color = "#1C1917",
  position = "bottom",
  className = "",
}: TornDividerProps) {
  const isTop = position === "top";

  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none pointer-events-none z-10 ${className}`}
      aria-hidden="true"
      style={{
        transform: isTop ? "rotate(180deg)" : "none",
        marginTop: isTop ? "-1px" : "0",
        marginBottom: isTop ? "0" : "-1px",
      }}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-14 block"
        style={{ fill: color }}
      >
        <path d="M0,0 
          C40,15 80,5 120,20 
          C160,35 200,8 240,25 
          C280,42 320,12 360,28 
          C400,44 440,10 480,24 
          C520,38 560,18 600,32 
          C640,46 680,14 720,28 
          C760,42 800,16 840,30 
          C880,44 920,12 960,26 
          C1000,40 1040,18 1080,34 
          C1120,50 1160,20 1200,10 
          L1200,60 L0,60 Z" 
        />
      </svg>
    </div>
  );
}
