import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="First Challenge" targetTime={1} />
        <TimerChallenge title="Second Challenge" targetTime={10} />
        <TimerChallenge title="Third Challenge" targetTime={8} />
        <TimerChallenge title="Fourth Challenge" targetTime={15} />
        <TimerChallenge title="Fifth Challenge" targetTime={12} />
      </div>
    </>
  );
}

export default App;
