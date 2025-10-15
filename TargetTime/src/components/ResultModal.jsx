import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ref, targetTime, remainTime, onReset, isManuallyStopped}) {
    const dialog=useRef();
    const formattedRemainTime=(remainTime/1000).toFixed(2);
    const score=Math.round((1 - remainTime/(targetTime*1000))*100);
    const userWin = isManuallyStopped && remainTime === 0.0;
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });
    return (
        <dialog ref={dialog} className="result-modal">
            <h2>{userWin ? "You are a Time Master" : "Time ran out"}</h2>
            {isManuallyStopped && (
                <>
                    <p>
                        Your score is 
                        <strong> {score}</strong>
                    </p>
                    <p>
                        You targeted time with 
                        <strong> {targetTime} seconds.</strong>
                    </p>
                    <p>
                        You stopped at 
                        <strong> {formattedRemainTime} seconds</strong>
                    </p>
                </>
            )}

            {!isManuallyStopped && <p>You didn't stop the timer</p>}

            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
}