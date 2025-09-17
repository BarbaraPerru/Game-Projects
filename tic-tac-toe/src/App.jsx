import Player from "./components/Player"  
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"  
import { useState } from "react"

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectCell() {
    setActivePlayer((curActivePlayer)=> curActivePlayer=== 'X' ? 'O' : 'X');
    setGameTurn((curGameTurn) => [...curGameTurn, 'X']);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectCell={handleSelectCell} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App
