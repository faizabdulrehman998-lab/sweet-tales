// Baker, 20 wide. Two frames: idle (eyes open) and happy (eyes closed + smile).
// Bottom row (row 30) sits at the table line so he looks like he's behind it.

const O = "#1b0f0a";
const s = "#ffd9a0"; // skin
const S = "#e0a86f"; // skin shade
const h = "#6b3f22"; // hair
const H = "#4a2a14"; // hair dark
const a = "#f6f0e6"; // apron
const A = "#d8cdbd"; // apron shade
const e = "#2a1a12"; // eye
const r = "#d94b6b"; // blush/hat band
const R = "#a82f4d";

// helper to build a 20-wide frame
function build(face) {
  // face: "idle" | "happy"
  const eyes = face === "happy"
    ? ["....................", "...................."]
    : [];

  const f = [
    "......OOOOOO........",
    ".....OHhhhhHO.......",
    "....OhhhhhhhhO......",
    "....OhhhhhhhhO......",
    "....OsssssssO.......",
  ];

  // face rows differ
  if (face === "happy") {
    f.push("....OsOOsOOsO......."); // closed eyes (dashes)
    f.push("....OsssssssO.......");
    f.push("....OrOsssOrO......."); // blush
    f.push("....OssOOssO........"); // smile
  } else {
    f.push("....OeOsOseO........"); // open eyes
    f.push("....OsssssssO.......");
    f.push("....OrOsssOrO.......");
    f.push("....OssssssO........");
  }

  f.push("....OOOOOOO........."); // chin/neck
  f.push("...OaaAAaaaO........"); // collar
  f.push("...OaaaaaaaO........"); // body
  f.push("...OaaAAAaaO........");
  f.push("...OaaaaaaaO........");
  f.push("...OaaAAAaaO........");
  f.push("...OaaaaaaaO........");
  f.push("...OaaaaaaaO........");
  f.push("..OaaAAAAAaaO......."); // arms out slightly
  f.push("..OaaAAAAAaaO.......");
  f.push("..OaaaaaaaaaO.......");
  f.push("..OaaaaaaaaaO.......");
  f.push("..OaaaaaaaaaO.......");
  f.push("..OaaaaaaaaaO.......");
  f.push("..OAAAAAAAAAO.......");
  f.push("..OaaaaaaaaaO.......");
  f.push("..OaaaaaaaaaO.......");

  // uniform 20 wide
  return f.map((line) => (line.length >= 20 ? line.slice(0, 20) : line + ".".repeat(20 - line.length)));
}

export const bakerIdle = build("idle");
export const bakerHappy = build("happy");
