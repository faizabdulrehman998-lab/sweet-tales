export const PALETTE = {
  k: "#1b0f0a", // outline / dark
  K: "#2e1c12", // dark brown
  w: "#7a4a28", // wood mid
  W: "#a8703f", // wood light
  v: "#5e3419", // wood shadow
  d: "#6a3f22", // apron

  c: "#fff4e0", // cream / frosting
  C: "#ffe0b8", // cream shade
  f: "#f5d9a8", // sponge
  F: "#e0b878", // sponge shade

  r: "#d94b6b", // cherry / red
  R: "#a82f4d", // red shade
  p: "#f7a8c4", // pink
  n: "#ff6fa3", // neon pink

  b: "#7b4a2a", // choco frosting
  B: "#4a2a16", // choco dark
  t: "#c98a52", // caramel

  g: "#8ed17a", // mint
  G: "#5aa84f", // green shade
  y: "#ffe06a", // yellow
  Y: "#e0a83a", // amber

  o: "#f08a3c", // orange
  O: "#c4631f", // orange shade

  u: "#7fd6ef", // blue
  U: "#3f9fc4", // blue shade

  s: "#ffd9a0", // skin
  S: "#e0a86f", // skin shade
  h: "#6b3f22", // hair
  H: "#4a2a14", // hair dark
  a: "#f6f0e6", // apron white
  A: "#d8cdbd", // apron shade
  e: "#2a1a12", // eye
};

export function resolve(ch) {
  if (ch === "." || ch === " ") return null;
  return PALETTE[ch] || (/^#|rgb/.test(ch) ? ch : null);
}

export default PALETTE;
