import { useState, useRef } from 'react';

export default function Player() {
  const input=useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick(){
    setEnteredPlayerName(input.current.value);
    input.current.value='';
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
