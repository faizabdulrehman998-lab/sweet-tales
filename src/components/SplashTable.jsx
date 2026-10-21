import React from "react";
import Grid from "../sprites/Grid.jsx";
import { CAKE_META } from "../sprites/cakes.js";
import { table } from "../sprites/table.js";

// Splash table: cakes placed big at the two corners, small toward the middle.
// `left` is a % across the table; `px` scales each cake independently.
const layout = [
  { cake: "redvelvet", left: 6, px: 8 },
  { cake: "chocolate", left: 21, px: 7 },
  { cake: "vanilla", left: 36, px: 5 },
  { cake: "blueberry", left: 50, px: 5 },
  { cake: "strawberry", left: 64, px: 7 },
  { cake: "carrot", left: 81, px: 8 },
];

export default function SplashTable({ showCakes }) {
  return (
    <div className="splash-scene">
      <div className="table-wrap">
        <div className="cakes-row">
          {layout.map((item, i) => {
            const meta = CAKE_META.find((c) => c.id === item.cake);
            return (
              <div
                key={item.cake}
                className={`splash-cake ${showCakes ? "in" : ""}`}
                style={{ left: `${item.left}%`, animationDelay: `${0.15 + i * 0.12}s` }}
              >
                <Grid grid={meta.sprite} px={item.px} />
              </div>
            );
          })}
        </div>
        <div className="table-board">
          <Grid grid={table} px={9} />
        </div>
      </div>
    </div>
  );
}
