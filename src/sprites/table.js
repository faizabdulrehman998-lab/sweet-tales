// Table sprite. Grid strings use SINGLE-CHAR palette keys (see palette.js / Grid).

const COLS = 120;

const rows = [];

function row(str) {
  if (str.length !== COLS) throw new Error(`table row width ${str.length} != ${COLS}`);
  rows.push(str);
}

// keys: k=outline, K=dark, w=wood mid, W=wood light, v=wood shadow, d=apron dark
const TOP = "k".repeat(COLS);

function plank(fill, grain, every = 14) {
  let s = "k";
  for (let i = 0; i < COLS - 2; i++) {
    s += i % every === 6 ? grain : fill;
  }
  return s + "k";
}

row(TOP);
row(plank("W", "W")); // tabletop highlight
row(plank("W", "w"));
row(plank("w", "W"));
row(plank("w", "v"));
row("k" + "v".repeat(COLS - 2) + "k");
// front apron
for (let i = 0; i < 10; i++) {
  row(plank(i % 2 === 0 ? "d" : "K", "K"));
}
row("k" + "K".repeat(COLS - 2) + "k");

export const table = rows;
export const TABLE_COLS = COLS;
