import Player from "./components/Player"  
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"  
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combination.js"  
import GameOver from "./components/GameOver.jsx"  
const initialGameBoard = [[null,null,null],[null,null,null],[null,null,null]];
function deriveActivePlayer(gameTurn) {
  let currPlayer = 'X';
      if(gameTurn.length > 0 && gameTurn[0].player === 'X') {
        currPlayer = 'O';
      }
      return currPlayer;
}
function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = initialGameBoard;
    for(const turn of gameTurn) {
        const {square, player} = turn;
        const {row, cell} = square;
        gameBoard[row][cell] = player;
    }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].cell];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].cell];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].cell];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }
  const isDraw = gameTurn.length === 9 && !winner;
  function handleSelectCell(rowIndex, cellIndex) {
    
    setGameTurn((prevTurn) =>{
      const currPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [{square:{row:rowIndex, cell:cellIndex},player: currPlayer },...prevTurn,]
      return updatedTurn;
    });
    
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner}/>}
        <GameBoard onSelectCell={handleSelectCell} activePlayerSymbol={activePlayer}  board={gameBoard}/>
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
