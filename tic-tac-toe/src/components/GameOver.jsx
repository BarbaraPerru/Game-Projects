export default function GameOver({ winner }) {
    return (
        <div id="game-over">
            {winner && <h2>{winner} wins!</h2>}
            {!winner && <h2>It's a draw!</h2>}
            <p>            
                <button>Remach!</button>
            </p>        
        </div>
    );
}