// Cat and Mouse sprites - 32x32 pixel art style for 3D-like rendering

// Ginger cat colors
const CAT_ORANGE = "#e8782a";
const CAT_ORANGE_LIGHT = "#f0944a";
const CAT_ORANGE_DARK = "#c05a1a";
const CAT_WHITE = "#fff8f0";
const CAT_PINK = "#ffb8a8";
const CAT_BLACK = "#1a1a1a";
const CAT_GREEN = "#4ade80"; // eye color
const CAT_GREEN_DARK = "#22c55e";
const CAT_OUTLINE = "#2a1a0a";

// Mouse colors
const MOUSE_GRAY = "#9ca3af";
const MOUSE_GRAY_LIGHT = "#d1d5db";
const MOUSE_GRAY_DARK = "#6b7280";
const MOUSE_PINK = "#fbcfe8";
const MOUSE_BLACK = "#1a1a1a";
const MOUSE_WHITE = "#fff8f0";

// 32x32 Cat sprites (4 frames: idle, walk1, walk2, pounce)
export const catIdle = [
  "................................",
  "............OOOOOO..............",
  "...........OooooooO.............",
  "..........OooooooooO............",
  ".........OooooooooooO...........",
  ".........OooooooooooO...........",
  "........OooooooooooooO..........",
  ".......OooooooooooooooO.........",
  ".......OooGooooooGoooO.........",
  "......OooooooooooooooooO........",
  "......OooooooooooooooooO........",
  ".....OooooooooooooooooooO.......",
  ".....OooooooooooooooooooO.......",
  "....OooooooooooooooooooooO......",
  "....OooooooooooooooooooooO......",
  "...OooooooooooooooooooooooO.....",
  "...OooooooooooooooooooooooO.....",
  "..OooooooooooooooooooooooooO....",
  "..OooooooooooooooooooooooooO....",
  ".OooooooooooooooooooooooooooO...",
  ".OooooooooooooooooooooooooooO...",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  ".OooooooooooooooooooooooooooO...",
  ".OooooooooooooooooooooooooooO...",
  "..OooooooooooooooooooooooooO....",
  "..OooooooooooooooooooooooooO....",
  "...OooooooooooooooooooooooO.....",
  "...OooooooooooooooooooooooO.....",
  "....OooooooooooooooooooooO......",
];

export const catWalk1 = [
  "................................",
  "............OOOOOO..............",
  "...........OooooooO.............",
  "..........OooooooooO............",
  ".........OooooooooooO...........",
  ".........OooooooooooO...........",
  "........OooooooooooooO..........",
  ".......OooooooooooooooO.........",
  ".......OooGooooooGoooO.........",
  "......OooooooooooooooooO........",
  "......OooooooooooooooooO........",
  ".....OooooooooooooooooooO.......",
  ".....OooooooooooooooooooO.......",
  "....OooooooooooooooooooooO......",
  "....OooooooooooooooooooooO......",
  "...OooooooooooooooooooooooO.....",
  "...OooooooooooooooooooooooO.....",
  "..OooooooooooooooooooooooooO....",
  "..OooooooooooooooooooooooooO....",
  ".OooooooooooooooooooooooooooO...",
  ".OooooooooooooooooooooooooooO...",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  ".OoooooooooooooooooooooooooO....",
  ".OooooooooooooooooooooooooO.....",
  "..OoooooooooooooooooooooooO.....",
  "..OooooooooooooooooooooooO......",
  "...OoooooooooooooooooooooO......",
  "...OooooooooooooooooooooO.......",
  "....OooooooooooooooooooO........",
];

export const catWalk2 = [
  "................................",
  "............OOOOOO..............",
  "...........OooooooO.............",
  "..........OooooooooO............",
  ".........OooooooooooO...........",
  ".........OooooooooooO...........",
  "........OooooooooooooO..........",
  ".......OooooooooooooooO.........",
  ".......OooGooooooGoooO.........",
  "......OooooooooooooooooO........",
  "......OooooooooooooooooO........",
  ".....OooooooooooooooooooO.......",
  ".....OooooooooooooooooooO.......",
  "....OooooooooooooooooooooO......",
  "....OooooooooooooooooooooO......",
  "...OooooooooooooooooooooooO.....",
  "...OooooooooooooooooooooooO.....",
  "..OooooooooooooooooooooooooO....",
  "..OooooooooooooooooooooooooO....",
  ".OooooooooooooooooooooooooooO...",
  ".OooooooooooooooooooooooooooO...",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  ".OooooooooooooooooooooooooooO...",
  ".OooooooooooooooooooooooooooO...",
  "..OooooooooooooooooooooooooO....",
  "..OooooooooooooooooooooooooO....",
  "...OooooooooooooooooooooooO.....",
  "...OooooooooooooooooooooooO.....",
  "....OooooooooooooooooooooO......",
];

export const catPounce = [
  "................................",
  "............OOOOOO..............",
  "...........OooooooO.............",
  "..........OooooooooO............",
  ".........OooooooooooO...........",
  ".........OooooooooooO...........",
  "........OooooooooooooO..........",
  ".......OooooooooooooooO.........",
  ".......OooGooooooGoooO.........",
  "......OooooooooooooooooO........",
  "......OooooooooooooooooO........",
  ".....OooooooooooooooooooO.......",
  ".....OooooooooooooooooooO.......",
  "....OooooooooooooooooooooO......",
  "....OooooooooooooooooooooO......",
  "...OooooooooooooooooooooooO.....",
  "...OooooooooooooooooooooooO.....",
  "..OooooooooooooooooooooooooO....",
  "..OooooooooooooooooooooooooO....",
  ".OooooooooooooooooooooooooooO...",
  ".OooooooooooooooooooooooooooO...",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  "OooooooooooooooooooooooooooooO..",
  ".OooooooooooooooooooooooooooO...",
  "..OooooooooooooooooooooooooO....",
  "...OooooooooooooooooooooooO.....",
  "....OooooooooooooooooooooO......",
  ".....OooooooooooooooooooO.......",
  "......OooooooooooooooO..........",
  ".......OooooooooooO.............",
];

// Mouse sprites (16x16 for smaller size)
export const mouseIdle = [
  "........OO........",
  "......OoooooO.....",
  ".....OoooooooO....",
  "....OoooooooooO...",
  "...OoooooooooooO..",
  "..OoooooooooooooO.",
  ".OooooooooooooooO.",
  "OoooooooooooooooO.",
  "OooGooooooGoooooO.",
  "OoooooooooooooooO.",
  "OoooooooooooooooO.",
  ".OooooooooooooooO.",
  ".OoooooooooooooO..",
  "..OoooooooooooO...",
  "...OooooooooO.....",
  "....OOOOOOO.......",
];

export const mouseRun1 = [
  "........OO........",
  "......OoooooO.....",
  ".....OoooooooO....",
  "....OoooooooooO...",
  "...OoooooooooooO..",
  "..OoooooooooooooO.",
  ".OooooooooooooooO.",
  "OoooooooooooooooO.",
  "OooGooooooGoooooO.",
  "OoooooooooooooooO.",
  "OoooooooooooooooO.",
  ".OooooooooooooooO.",
  "..OooooooooooooO..",
  "...OooooooooooO...",
  "....OooooooooO....",
  ".....OOOOOOO......",
];

export const mouseRun2 = [
  "........OO........",
  "......OoooooO.....",
  ".....OoooooooO....",
  "....OoooooooooO...",
  "...OoooooooooooO..",
  "..OoooooooooooooO.",
  ".OooooooooooooooO.",
  "OoooooooooooooooO.",
  "OooGooooooGoooooO.",
  "OoooooooooooooooO.",
  "OoooooooooooooooO.",
  ".OooooooooooooooO.",
  "...OooooooooooO...",
  "....OooooooooO....",
  ".....OooooooO.....",
  "......OOOOOO......",
];

// Cheese sprite (collectible)
export const cheese = [
  "......OOOO......",
  "....OyyyyyyO....",
  "...OyyyyyyyyyO..",
  "..OyyyyyyyyyyO..",
  ".OyyyyyyyyyyyO..",
  "OyyyyyyyyyyyyyO.",
  "OyyyyyyyyyyyyyO.",
  "OyyyyyyyyyyyyyO.",
  "OyyyyyyyyyyyyyO.",
  "OyyyyyyyyyyyyyO.",
  ".OyyyyyyyyyyyO..",
  "..OyyyyyyyyyyO..",
  "...OyyyyyyyyyO..",
  "....OyyyyyyO....",
  "......OOOO......",
  "................",
];

// Platform/ground tiles
export const platformTop = [
  "OOOOOOOOOOOOOOOO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OOOOOOOOOOOOOOOO",
];

export const platformSide = [
  "OOOO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OvvO",
  "OOOO",
];

export const platformFront = [
  "OOOOOOOOOOOOOOOO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OvvvvvvvvvvvvvvO",
  "OOOOOOOOOOOOOOOO",
];

// Background elements
export const cloud = [
  "....OOOOOO......",
  "..OooooooooooO..",
  ".OooooooooooooO.",
  "OooooooooooooooO",
  "OooooooooooooooO",
  ".OooooooooooooO.",
  "..OooooooooooO..",
  "....OOOOOO......",
];

export const tree = [
  "........OO........",
  ".......OkkkkO.....",
  "......OkkkkkkO....",
  ".....OkkkkkkkkO...",
  "....OkkkkkkkkkkO..",
  "...OkkkkkkkkkkkkO.",
  "..OkkkkkkkkkkkkkkO",
  "..OkkkkkkkkkkkkkkO",
  "...OkkkkkkkkkkkkO.",
  "....OkkkkkkkkkkO..",
  ".....OkkkkkkkkO...",
  "......OkkkkkkO....",
  ".......OkkkkO.....",
  "........OO........",
  "........vv........",
  "........vv........",
];

// PALETTE for cat/mouse sprites
export const CAT_MOUSE_PALETTE = {
  O: CAT_OUTLINE,
  o: CAT_ORANGE,
  l: CAT_ORANGE_LIGHT,
  d: CAT_ORANGE_DARK,
  w: CAT_WHITE,
  p: CAT_PINK,
  k: CAT_BLACK,
  G: CAT_GREEN,
  g: CAT_GREEN_DARK,
  // Mouse
  m: MOUSE_GRAY,
  M: MOUSE_GRAY_LIGHT,
  n: MOUSE_GRAY_DARK,
  q: MOUSE_PINK,
  b: MOUSE_BLACK,
  W: MOUSE_WHITE,
  // Cheese
  y: "#f5d94a",
  Y: "#e0b83a",
  // Platform
  v: "#5a4a3a",
  V: "#3a2a1a",
  // Tree
  k: "#2d5a27",
  K: "#1a3a14",
};

export function resolveCatMouse(ch) {
  if (ch === "." || ch === " ") return null;
  return CAT_MOUSE_PALETTE[ch] || (/^#|rgb/.test(ch) ? ch : null);
}