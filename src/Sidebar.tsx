import { getCurrentWindow } from "@tauri-apps/api/window";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar" data-tauri-drag-region>
      <button
        className="close"
        onClick={() => getCurrentWindow().close()}
        aria-label="Close"
      >
        <span>×</span>
      </button>
      <div className="grip" data-tauri-drag-region>
        {Array.from({ length: 8 }).map((_, i) => (
          <i key={i} data-tauri-drag-region />
        ))}
      </div>
    </div>
  );
}