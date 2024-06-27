import React from "react";

function HeroGraphicsV2() {
  const maxDimension = 32; // Define the grid size
  const imgSrc = "https://avatars.githubusercontent.com/u/36671850?v=4"; // Image source
  const squareSize = 16; // Size of each square
  const gapSize = 8; // Gap between squares

  // Generate an array for grid dimensions
  const grid = Array.from({ length: maxDimension }, (_, i) => i);

  return (
    <div
      className="absolute right-0"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${maxDimension}, ${squareSize}px)`, // Corrected to match square size
        gap: `${gapSize}px`,
      }}
    >
      {grid.map((row) =>
        grid.map((col) => (
          <div
            key={`${row}-${col}`}
            style={{
              overflow: "clip",
              position: "relative",
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: `${
                maxDimension * (squareSize + gapSize) - gapSize
              }px ${maxDimension * (squareSize + gapSize) - gapSize}px`, // Adjusted to account for the gap
              backgroundPosition: `${-col * (squareSize + gapSize)}px ${
                -row * (squareSize + gapSize)
              }px`,
              animation: `fadeInOut ${Math.random() * 2 + 1}s infinite ${
                Math.random() * 2
              }s`,
            }}
          ></div>
        ))
      )}
    </div>
  );
}

export default HeroGraphicsV2;
