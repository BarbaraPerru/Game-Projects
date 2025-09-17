import { useState } from "react";

const initialGameBoard = [[null,null,null],[null,null,null],[null,null,null]];

export default function GameBoard({onSelectCell, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectCell(rowIndex, cellIndex) {
        setGameBoard((preGameBoard) => {
            const updatedGameBoard = [...preGameBoard.map(innerArray=>[...innerArray])];
            updatedGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
            return updatedGameBoard;
        });
        onSelectCell(rowIndex, cellIndex);
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=><li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, cellIndex)=><li key={cellIndex}><button onClick={() => handleSelectCell(rowIndex, cellIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}