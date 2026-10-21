import React from "react";
import Grid from "../sprites/Grid.jsx";
import { CAKE_META } from "../sprites/cakes.js";

export default function CakeMenu({ onSelect }) {
  return (
    <div className="menu">
      <h2 className="menu-title">CHOOSE YOUR CAKE</h2>
      <div className="menu-grid">
        {CAKE_META.map((cake) => (
          <button key={cake.id} className="menu-item" onClick={() => onSelect(cake)}>
            <span className="menu-cursor">&#9654;</span>
            <Grid grid={cake.sprite} px={5} className="menu-cake" />
            <span className="menu-name">{cake.name}</span>
            <span className="menu-price">{cake.price}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
