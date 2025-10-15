import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ref, targetTime, remainTime, onReset}) {
    const dialog=useRef();
    const userLost = remainTime > 0;
    const formattedRemainTime=(remainTime/1000).toFixed(2);
    const score=Math.round((1 - remainTime/(targetTime*1000))*100);
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });
    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>TIME RAN OUT</h2>}
            {!userLost && <h2>Well Done!</h2>}
            <p>
                Your score is 
                <strong> {score}</strong>
            </p>
            <p>
                You targed time with 
                <strong> {targetTime} seconds.</strong>
            </p>
            <p>
                You stopped at 
                <strong> {formattedRemainTime} seconds</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
}