import { useState } from 'react';
let timer;
export default function TimerChallenge({title, targetTime}) {
    const [timeStarted, setTimeStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    function handleStartGame(){
        timer= setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimeStarted(true);
    }
    function handleStopGame(){
        clearTimeout(timer);
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p className="challenge-time">Time's ran out</p>}
            <p className="challenge-time">
                {targetTime} second'{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={timeStarted ? handleStopGame : handleStartGame}>{timeStarted ? 'Stop' : 'Start'}</button>
            <p className={timeStarted ? 'active' : undefined}>{timeStarted ? 'Started' : 'Not started'}</p>
        </section>
    );
}