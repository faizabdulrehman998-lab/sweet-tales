import React from "react";

export function Diamond({ size = 14, color = "#ffe06a", className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 8 8" shapeRendering="crispEdges">
      <rect x="3" y="0" width="2" height="1" fill={color} />
      <rect x="2" y="1" width="4" height="1" fill={color} />
      <rect x="1" y="2" width="6" height="2" fill={color} />
      <rect x="2" y="4" width="4" height="1" fill={color} />
      <rect x="3" y="5" width="2" height="1" fill={color} />
    </svg>
  );
}

export function Heart({ size = 16, color = "#ff6fa3", className, style }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 8 8" shapeRendering="crispEdges">
      <rect x="1" y="1" width="2" height="1" fill={color} />
      <rect x="5" y="1" width="2" height="1" fill={color} />
      <rect x="0" y="2" width="8" height="1" fill={color} />
      <rect x="0" y="3" width="8" height="1" fill={color} />
      <rect x="1" y="4" width="6" height="1" fill={color} />
      <rect x="2" y="5" width="4" height="1" fill={color} />
      <rect x="3" y="6" width="2" height="1" fill={color} />
    </svg>
  );
}
