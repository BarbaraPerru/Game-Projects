import Player from "./components/Player"  
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"  
import { useState } from "react"

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectCell(rowIndex, cellIndex) {
    setActivePlayer((curActivePlayer)=> curActivePlayer = 'X' ? 'O' : 'X');
    setGameTurn((prevTurn) =>{
      let currPlayer = 'X';
      if(prevTurn.length > 0 && prevTurn[0].player === 'X') {
        currPlayer = 'O';
      }
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
        <GameBoard onSelectCell={handleSelectCell} activePlayerSymbol={activePlayer}  turns={gameTurn}/>
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
