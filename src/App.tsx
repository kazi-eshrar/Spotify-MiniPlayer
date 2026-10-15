import "./App.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useWindowSize } from "./useWindowSize";

const ADD_MIN_WIDTH = 280;
// const LYRICS_MIN_WIDTH = 560;
// const CONTROLS_MIN_HEIGHT = 200;
// const SETTINGS_MIN_HEIGHT = 140;

const fakeTrack = {
  title: "Heartless",
  artist: "Kanye West",
  durationMs: 213000,
  progressMs: 90000,
};

function App() {

  // const showLyrics = width >= LYRICS_MIN_WIDTH;
  // const showExtraControls = height >= CONTROLS_MIN_HEIGHT;
  // const showSettings = height >= SETTINGS_MIN_HEIGHT;

  const { width } = useWindowSize();
  const showAdd = width >= ADD_MIN_WIDTH;
  const [isPlaying, setIsPlaying] = useState(true);
  const progressPct = (fakeTrack.progressMs / fakeTrack.durationMs) * 100;

  return (
    <div className="player" data-tauri-drag-region>
      <Sidebar />
      <div className="art" />

 <div className="track-info">
        <div className="title">{fakeTrack.title}</div>
        <div className="artist">{fakeTrack.artist}</div>
      </div>
    {showAdd && (
      <button className="icon-btn" aria-label="Add to library">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7v10M7 12h10" strokeLinecap="round" />
        </svg>
      </button>
    )}
      <button
        className="play-btn"
        aria-label={isPlaying ? "Pause" : "Play"}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 4l13 8-13 8z" />
          </svg>
        )}
      </button>

      <button className="icon-btn" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 5l10 7-10 7z" />
          <rect x="17" y="5" width="3" height="14" rx="1" />
        </svg>
      </button>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>
    </div>
  );
}

export default App;