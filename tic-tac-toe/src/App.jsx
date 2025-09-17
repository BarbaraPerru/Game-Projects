import Player from "./components/Player"  
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"  
import { useState } from "react"


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
        <GameBoard onSelectCell={handleSelectCell} activePlayerSymbol={activePlayer}  turns={gameTurn}/>
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
