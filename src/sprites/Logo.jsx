import React from "react";

// "Sweet Tales" hand-pixelled script logo.
const glyph = {
  S: ["01110", "10001", "10000", "01110", "00001", "10001", "01110", "00000", "00100"],
  w: ["10001", "10001", "10101", "10101", "11011", "00000", "00000", "00000", "00000"],
  e: ["01110", "10001", "11111", "10000", "01110", "00000", "00100", "00100", "00000"],
  t: ["01000", "11100", "01000", "01000", "00110", "00000", "00000", "00000", "00000"],
  T: ["11111", "00100", "00100", "00100", "00100", "00000", "00100", "00100", "00000"],
  a: ["01110", "00001", "01111", "10001", "01111", "00000", "00100", "00100", "00000"],
  l: ["11000", "01000", "01000", "01000", "01110", "00000", "00000", "00000", "00000"],
  s: ["01111", "10000", "01110", "00001", "11110", "00000", "00100", "00100", "00000"],
};

function wordFrom(str) {
  const H = 9;
  const width = 200;
  const grid = Array.from({ length: H }, () => Array(width).fill(0));
  let x = 1;
  str.split("").forEach((ch) => {
    if (ch === " ") {
      x += 5;
      return;
    }
    const g = glyph[ch];
    if (!g) return;
    g.forEach((row, y) => {
      row.split("").forEach((c, cx) => {
        if (c === "1") grid[y][x + cx] |= 1;
      });
    });
    // cursive ligature to the next letter
    if (x + 6 < width) {
      grid[7][x + 5] = 1;
      grid[6][x + 6] = 1;
    }
    x += 6;
  });
  return grid.map((r) => r.slice(0, Math.min(width, x + 1)));
}

const GRID = wordFrom("Sweet Tales");

export default function Logo({ scale = 6, color = "#ffe9c4", shade = "#8a4a20", className, style }) {
  const rows = GRID.length;
  const cols = GRID[0].length;
  return (
    <svg
      className={className}
      style={style}
      width={cols * scale}
      height={rows * scale}
      viewBox={`0 0 ${cols} ${rows}`}
      shapeRendering="crispEdges"
    >
      {GRID.map((r, y) =>
        r.map((v, x) => {
          if (!v) return null;
          const lower = y + 1 < rows && GRID[y + 1][x];
          return <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={lower ? color : shade} />;
        })
      )}
    </svg>
  );
}
