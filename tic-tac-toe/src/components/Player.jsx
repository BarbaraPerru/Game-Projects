import { useState } from "react"
export default function Player({ initialName, symbol, isActive, onEditPlayerName }) {
    const [playerName,setPlayerName] =useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleEdit() {
        setIsEditing((editing) => !editing);
        if(isEditing) {
            onEditPlayerName(symbol, playerName);
        }
    }

    function handleSave(event) {
        setPlayerName(event.target.value);
        // setIsEditing(false);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;


    if (isEditing) {
        editablePlayerName = (<input type="text" required value={playerName} onChange={handleSave} />);
    }
    return (
        <li className={isActive ? 'active' : undefined}>
           <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}
                </span>
            </span> 
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>  
    )
}