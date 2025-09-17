export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map(turn => <li key={`${turn.square.row}-${turn.square.cell}`}> {turn.player} chose {turn.square.row},{turn.square.cell}</li>)}
        </ol>
    )
}