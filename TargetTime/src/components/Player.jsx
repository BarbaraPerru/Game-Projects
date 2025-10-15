import { useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [submittedPlayerName, setSubmittedPlayerName] = useState('');
  function handleSetPlayerName(event) {
    setEnteredPlayerName(event.target.value);
  }
  function handleClick(){
    setSubmittedPlayerName(true);
   }
  return (
    <section id="player">
      <h2>Welcome {submittedPlayerName ? enteredPlayerName : 'Unknown'} </h2>
      <p>
        <input type="text" onChange={handleSetPlayerName} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
