const initialGameBoard = [[null,null,null],[null,null,null],[null,null,null]];

export default function GameBoard({onSelectCell, turns}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectCell(rowIndex, cellIndex) {
    //     setGameBoard((preGameBoard) => {
    //         const updatedGameBoard = [...preGameBoard.map(innerArray=>[...innerArray])];
    //         updatedGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelectCell(rowIndex, cellIndex);
    // }
    let gameBoard = initialGameBoard;
    for(const turn of turns) {
        const {square, player} = turn;
        const {row, cell} = square;
        gameBoard[row][cell] = player;
    }
   
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=><li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, cellIndex)=><li key={cellIndex}><button onClick={()=> onSelectCell(rowIndex, cellIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}