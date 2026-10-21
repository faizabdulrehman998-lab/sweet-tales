import React from "react";
import { resolve } from "./palette.js";

function Grid({ grid, px = 4, className, style, flip }) {
  const rows = grid.length;
  const cols = grid[0].length;
  const w = cols * px;
  const h = rows * px;
  return (
    <div
      className={`pixel-sprite ${className || ""}`}
      style={{
        width: w || undefined,
        height: h || undefined,
        transform: flip ? "scaleX(-1)" : undefined,
        ...style,
      }}
    >
      <svg
        width={w || undefined}
        height={h || undefined}
        viewBox={`0 0 ${cols} ${rows}`}
        shapeRendering="crispEdges"
        style={{ display: "block", imageRendering: "pixelated" }}
      >
        {grid.map((row, y) =>
          row
            .split("")
            .map((ch, x) => {
              const fill = resolve(ch);
              return fill ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} /> : null;
            })
        )}
      </svg>
    </div>
  );
}

export default Grid;
