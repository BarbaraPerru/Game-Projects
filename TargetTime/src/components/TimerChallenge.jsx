import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) {
    const timer=useRef();
    const dialog=useRef();
    const [timeStarted, setTimeStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    function handleStartGame(){
        timer.current= setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        setTimeStarted(true);
    }
    function handleStopGame(){
        clearTimeout(timer.current);
    }
    return (
        <> 
        <ResultModal ref={dialog} targetTime={targetTime} result="Time's ran out" />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={timeStarted ? handleStopGame : handleStartGame}>{timeStarted ? 'Stop' : 'Start'}</button>
            
            <p className={timeStarted ? 'active' : undefined}>{timeStarted ? 'Started' : 'Not started'}</p>
        </section>
        </>
        
    );
}