import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ref,result, targetTime}) {
    const dialog=useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });
    return (
        <dialog ref={ref} className="result-modal">
            <h2>{result}</h2>
            <p>
                You targed time with 
                <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped at 
                <strong>Score</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}