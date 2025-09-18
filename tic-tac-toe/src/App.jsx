import Player from "./components/Player"  
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"  
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combination.js"  
import GameOver from "./components/GameOver.jsx"  
const PLAYERS={'X': 'Player 1', 'O': 'Player 2'}
const INITIAL_GAME_BOARD = [[null,null,null],[null,null,null],[null,null,null]];

function deriveActivePlayer(gameTurn) {
  let currPlayer = 'X';
      if(gameTurn.length > 0 && gameTurn[0].player === 'X') {
        currPlayer = 'O';
      }
      return currPlayer;
}
function deriveGameBoard(gameTurn) {
   let gameBoard = [...INITIAL_GAME_BOARD.map(array=>[...array])];
    for(const turn of gameTurn) {
        const {square, player} = turn;
        const {row, cell} = square;
        gameBoard[row][cell] = player;
    }
    return gameBoard;
}
function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].cell];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].cell];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].cell];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}
function App() {
  const [players, setPlayers]= useState(PLAYERS);
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurn);
  const gameBoard = deriveGameBoard(gameTurn);
  const winner = deriveWinner(gameBoard, players);
  const isDraw = gameTurn.length === 9 && !winner;
  function handleSelectCell(rowIndex, cellIndex) {
    
    setGameTurn((prevTurn) =>{
      const currPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [{square:{row:rowIndex, cell:cellIndex},player: currPlayer },...prevTurn,]
      return updatedTurn;
    });
    
  }
  function handleRemach() {
    setGameTurn([]);
  }
  function handleEditPlayerName(symbol, newName) {
    setPlayers(prevPlayers => {
      return {...prevPlayers, [symbol]: newName};
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'}
          onEditPlayerName={handleEditPlayerName}/>
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'}
          onEditPlayerName={handleEditPlayerName} />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRematch={handleRemach}/>}
        <GameBoard onSelectCell={handleSelectCell} activePlayerSymbol={activePlayer}  board={gameBoard}/>
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
