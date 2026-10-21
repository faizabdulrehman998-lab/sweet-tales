import React from "react";
import Grid from "../sprites/Grid.jsx";
import { bakerIdle, bakerHappy } from "../sprites/baker.js";

export default function Baker({ happy, className, style, px = 7 }) {
  const grid = happy ? bakerHappy : bakerIdle;
  return <Grid grid={grid} px={px} className={`baker ${className || ""}`} style={style} />;
}
