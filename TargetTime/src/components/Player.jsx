import { useState, useRef } from 'react';

export default function Player() {
  const input=useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [submittedPlayerName, setSubmittedPlayerName] = useState('');
  function handleSetPlayerName(event) {
    setSubmittedPlayerName(false);
    setEnteredPlayerName(event.target.value);
  }
  function handleClick(){
    setEnteredPlayerName(input.current.value);
   }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'Unknown'} </h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
