

export default function ResultModal({ref,result, targetTime}) {
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