import "./App.css";
import { useWindowSize } from "./useWindowSize";

// Tweak these later once you see what feels right.
const LYRICS_MIN_WIDTH = 560;
const CONTROLS_MIN_HEIGHT = 200;
const SETTINGS_MIN_HEIGHT = 140;

function App() {
  const { width, height } = useWindowSize();

  const showLyrics = width >= LYRICS_MIN_WIDTH;
  const showExtraControls = height >= CONTROLS_MIN_HEIGHT;
  const showSettings = height >= SETTINGS_MIN_HEIGHT;

  return (
    <div className="player">
      <div className="header" data-tauri-drag-region>
        Drag me
      </div>
      <div className="debug">
        {width} x {height}
        <br />
        lyrics: {String(showLyrics)} | extra controls: {String(showExtraControls)} | settings: {String(showSettings)}
      </div>
    </div>
  );
}

export default App;