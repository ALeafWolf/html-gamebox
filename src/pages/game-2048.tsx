import React from "react";

const Game2048: React.FC = () => {
  return (
    <div className="game-container">
      {Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="game-cell">{index}</div>
      ))}
    </div>
  );
};

export default Game2048;
