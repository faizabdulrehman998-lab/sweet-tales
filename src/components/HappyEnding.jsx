import React from "react";
import Grid from "../sprites/Grid.jsx";
import { Heart } from "../sprites/ui.jsx";

const hearts = [
  { left: "22%", delay: "0s", size: 22 },
  { left: "30%", delay: ".35s", size: 16 },
  { left: "18%", delay: ".7s", size: 18 },
  { left: "34%", delay: "1s", size: 14 },
  { left: "26%", delay: "1.3s", size: 20 },
];

export default function HappyEnding({ cake }) {
  return (
    <div className="happy-layer">
      <div className="hearts">
        {hearts.map((h, i) => (
          <Heart key={i} className="heart-float" size={h.size} style={{ left: h.left, animationDelay: h.delay }} />
        ))}
      </div>
      <p className="happy-line">
        {cake ? `${cake.name} COMING RIGHT UP!` : "COMING RIGHT UP!"}
      </p>
      {cake && (
        <div className="happy-sub">
          <Grid grid={cake.sprite} px={4} />
        </div>
      )}
    </div>
  );
}
