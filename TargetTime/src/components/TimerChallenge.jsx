import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) {
    const timer=useRef();
    const dialog=useRef();
    
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const [isManuallyStopped, setIsManuallyStopped] = useState(false);
    
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;
    
    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function resetTimer(){
        setTimeRemaining(targetTime * 1000);
    }

    function handleStartGame(){
        timer.current= setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10);
        }, 10);
        setIsManuallyStopped(false);
    }

    function handleStopGame(){
        dialog.current.open();
        clearInterval(timer.current);
        setIsManuallyStopped(true);
    }

    return (
        <> 
        <ResultModal ref={dialog} targetTime={targetTime} remainTime={timeRemaining} onReset={resetTimer} isManuallyStopped={isManuallyStopped} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button type="button"  onClick={timerIsActive ? handleStopGame : handleStartGame} >{timerIsActive ? 'Stop' : 'Start'}</button>
            
            <p className={timerIsActive ? 'active' : undefined}>{timerIsActive ? 'Started' : 'Not started'}</p>
        </section>
        </>
        
    );
}