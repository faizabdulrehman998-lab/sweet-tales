// every cake is 16 wide so they line up on the table.
// rows are top -> bottom. "." is transparent. Chars are palette keys (see palette.js).

export const chocolate = [
  "................",
  ".......O........",
  "......O.O.......",
  "......OrO.......", // candle flame
  "......OcO.......", // candle
  "....OOOOOOO.....",
  "...ObbbbbbbO....",
  "..ObbbbbbbbbO...",
  ".ObbBBBBBBBbbO..",
  ".ObbbbbbbbbbbO..",
  "OfFfFfFfFfFfFfO.",
  "OfFfFfFfFfFfFfO.",
  "OfFfFfFfFfFfFfO.",
  "OOOOfFfFfFOOOOO.",
  "..OOOOOOOOOOO...",
];

export const vanilla = [
  "................",
  ".......O........",
  "......OyO.......",
  "......OcO.......",
  "....OOOOOOO.....",
  "...OcCcccCcO....",
  "..OcCcccCcccO...",
  ".OcrCccccrCcO...",
  ".OcccccccccO....",
  "OfFfFfFfFfFfFO..",
  "OffFfFfFfFfFO...",
  "OOOOOOOOOOOOO...",
  "...OOOOOOOO.....",
];

export const strawberry = [
  "................",
  "......OOOO......",
  "....OOppppOO....",
  "...OppnnnpppO...",
  "..OpppnnnppppO..",
  ".OppppppppppppO.",
  ".OcccCcccCcccO..",
  ".OcCrCcccCrCcO..",
  "OfFfFfFfFfFfFO..",
  "OffFfFfFfFfFfO..",
  "OfFfFfFfFfFfFO..",
  "OOOOOOOOOOOOO...",
  "..OOOOOOOOOO....",
];

export const redvelvet = [
  "................",
  "......OOOO......",
  ".....OaAAAaO....",
  "....OaAaaaAaO...",
  "...OaAaaaaaaO...",
  "..OaAaaaAaaaO...",
  ".OrAaaaaaaaArO..",
  "OrRaaaaAaaaaRrO.",
  "OaaaaaaaaaaaaaO.",
  "OaAaaaAaaaAaaAO.",
  "OOOOOOOOOOOOOO..",
  "..OOOOOOOOOO....",
];

export const carrot = [
  "................",
  ".....OOOOOO.....",
  "....OoOoOoO.....",
  "....OOOOOOO.....",
  "...OooooooooO...",
  "..OooooooooooO..",
  ".OooooooooooooO.",
  ".OoOoOoOoOoOooO.",
  ".OooooooooooooO.",
  ".OcCcccCcccCccO.",
  ".OcCcccCcccCccO.",
  "OOOOOOOOOOOOOO..",
  "..OOOOOOOOOO....",
];

export const blueberry = [
  "................",
  ".......O........",
  "......OyO.......",
  "....OOOOOOO.....",
  "...OuuuuuuuO....",
  "..OuUuUuUuUuO...",
  ".OuUuUuUuUuUuO..",
  ".OuuuuuuuuuuuO..",
  ".OcCcccCcccCcO..",
  ".OcCcccCcccCcO..",
  ".OcCcccCcccCcO..",
  "OOOOOOOOOOOOOO..",
  "..OOOOOOOOOO....",
];

export const CAKES = {
  chocolate,
  vanilla,
  strawberry,
  redvelvet,
  carrot,
  blueberry,
};

export const CAKE_META = [
  { id: "chocolate", name: "CHOCOLATE", price: "5", sprite: chocolate },
  { id: "vanilla", name: "VANILLA", price: "4", sprite: vanilla },
  { id: "strawberry", name: "STRAWBERRY", price: "5", sprite: strawberry },
  { id: "redvelvet", name: "RED VELVET", price: "6", sprite: redvelvet },
  { id: "carrot", name: "CARROT", price: "4", sprite: carrot },
  { id: "blueberry", name: "BLUEBERRY", price: "6", sprite: blueberry },
];
