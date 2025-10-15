import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) {
    const timer=useRef();
    const dialog=useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    const timerIsActive=timeRemaining > 0 &&timeRemaining < targetTime*1000;
    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime*1000);
        dialog.current.open();
    }
    const timeStarted = timerIsActive;
    function handleStartGame(){
        timer.current= setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10);
        }, 10);
    }
    function handleStopGame(){
        dialog.current.open();
        clearInterval(timer.current);
    }
    return (
        <> 
        <ResultModal ref={dialog} targetTime={targetTime} result="Time's ran out" />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={timerIsActive ? handleStopGame : handleStartGame}>{timerIsActive ? 'Stop' : 'Start'}</button>
            
            <p className={timerIsActive ? 'active' : undefined}>{timerIsActive ? 'Started' : 'Not started'}</p>
        </section>
        </>
        
    );
}