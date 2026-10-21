import React from "react";
import { blueberry, strawberry, chocolate, vanilla, redvelvet, carrot } from "./cakes.js";
import { resolve } from "./palette.js";

const O = "#1b0f0a";
const L = "#7a4a28";
const D = "#2e1c12";

// A small cupcake sprite used as a decorative shelf item.
const cupcake = [
  "....O....",
  "...OpO...",
  "..OpppO..",
  ".OppOppO.",
  ".OpppppO.",
  ".OOOOOOO.",
  ".OfFFfFO.",
  ".OOFFOOO.",
  "..OOOOO..",
];

function arrange(list, rows, cols) {
  const art = [];
  let i = 0;
  for (let r = 0; r < rows; r++) {
    const line = [];
    for (let c = 0; c < cols; c++) {
      line.push(list[i % list.length]);
      i++;
    }
    art.push(line);
  }
  return art;
}

export default function Bakery() {
  const topItems = arrange([chocolate, vanilla, blueberry, strawberry, redvelvet, carrot, cupcake], 1, 7);
  return (
    <div className="bakery" aria-hidden="true">
      <svg className="bakery-svg" viewBox="0 0 160 100" preserveAspectRatio="none" shapeRendering="crispEdges">
        <defs>
          <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6e4530" />
            <stop offset="100%" stopColor="#4a2c1d" />
          </linearGradient>
        </defs>

        {/* wall */}
        <rect x="0" y="0" width="160" height="72" fill="url(#wallGrad)" />
        {/* wall stripes */}
        {Array.from({ length: 16 }).map((_, i) => (
          <rect key={`stripe-${i}`} x={i * 10} y="0" width="1" height="72" fill="#00000022" />
        ))}

        {/* hanging sign */}
        <rect x="8" y="6" width="34" height="16" fill={D} />
        <rect x="9" y="7" width="32" height="14" fill="#ffdca8" />
        <rect x="10" y="8" width="30" height="12" fill="none" stroke={O} strokeWidth="1" />
        <text x="25" y="16" textAnchor="middle" fontSize="6" fill="#3a2318" fontFamily="'Press Start 2P', monospace">
          OPEN
        </text>
        <rect x="24" y="0" width="1" height="6" fill={O} />
        <rect x="23" y="2" width="3" height="1" fill={O} />

        {/* shelf with baked goods */}
        <rect x="8" y="30" width="144" height="3" fill={O} />
        <rect x="8" y="33" width="144" height="2" fill={L} />
        {topItems[0].map((art, i) => (
          <g key={`top-${i}`} transform={`translate(${12 + i * 18} 12) scale(0.9)`}>
            {art.map((row, y) =>
              row.split("").map((ch, x) => {
                const fill = resolve(ch);
                return fill ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} /> : null;
              })
            )}
          </g>
        ))}
        {/* shelf supports */}
        <rect x="10" y="35" width="3" height="8" fill={O} />
        <rect x="147" y="35" width="3" height="8" fill={O} />

        {/* lower counter backsplash */}
        <rect x="0" y="43" width="160" height="3" fill={O} />
        <rect x="0" y="46" width="160" height="26" fill={D} />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={`brk-${i}`} x={i * 20} y="46" width="19" height="1" fill="#00000055" />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <rect key={`brk2-${i}`} x={i * 20} y="46" width="1" height="26" fill="#00000022" />
        ))}

        {/* window with night sky */}
        <rect x="112" y="8" width="34" height="24" fill={O} />
        <rect x="114" y="10" width="30" height="20" fill="#1c2a4a" />
        <rect x="116" y="12" width="2" height="2" fill="#fff7c0" />
        <rect x="130" y="14" width="2" height="2" fill="#fff7c0" />
        <rect x="138" y="20" width="1" height="1" fill="#fff7c0" />
        <rect x="124" y="24" width="10" height="1" fill="#5a7a3a" />
        <rect x="113" y="19" width="32" height="1" fill={O} />
        <rect x="128" y="10" width="1" height="20" fill={O} />

        {/* oven */}
        <rect x="128" y="50" width="28" height="22" fill={O} />
        <rect x="130" y="52" width="24" height="18" fill="#3a2318" />
        <rect x="133" y="57" width="18" height="11" fill="#b56a2a" />
        <rect x="134" y="58" width="16" height="9" fill="#ff9a3c" />
        <rect x="134" y="58" width="16" height="3" fill="#ffd06a" />
        <rect x="130" y="52" width="24" height="2" fill="#5a3722" />

        {/* floor */}
        <rect x="0" y="72" width="160" height="28" fill="#3a2417" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={`fl-${i}`} x="0" y={72 + i * 4} width="160" height="1" fill="#00000044" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <rect key={`flv-${i}`} x={i * 20 + (i % 2 ? 10 : 0)} y="72" width="1" height="28" fill="#00000033" />
        ))}
      </svg>
    </div>
  );
}
