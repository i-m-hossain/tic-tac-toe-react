import React, { useEffect, useState } from "react";
import calculateWinner from "../helper/calculateWinner";
import Square from "./Square";

function Board() {
  const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [history, setHistory] = useState([]);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;
    const newArr = [...squares];
    newArr[i] = xIsNext ? "X" : "O";
    setSquares(newArr);
    setXisNext((prev) => !prev);
    setHistory([...history, newArr]);
  }
  function handleHistory(index){
    setSquares(history[index])
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  } 
 

  return (
    <>
      <div className="container">
        <div className="board">
          {squares.map((item, i) => (
            <Square key={i} value={item} handleClick={() => handleClick(i)} />
          ))}
        </div>
        <div className="history">
          {history.map((h, i) => (
            <button className="step" key={i} onClick={()=>handleHistory(i)}>Goto step #{i+1}</button>
          ))}
        </div>
      </div>
      <div>{status}</div>
    </>
  );
}

export default Board;
