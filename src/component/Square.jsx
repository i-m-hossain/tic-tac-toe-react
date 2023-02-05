import React from "react";

function Square({ handleClick, value }) {
  return (
    <div className="square" onClick={handleClick}>
      {value}
    </div>
  );
}

export default Square;
