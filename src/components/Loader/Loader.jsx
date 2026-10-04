import { useEffect, useState } from "react";
import "./Loader.css";

const SESSION_KEY = "visionary-loader-shown";

export default function Loader() {
  // If we've already shown the loader this session, skip it entirely.
  const [visible, setVisible] = useState(
    () => sessionStorage.getItem(SESSION_KEY) !== "true"
  );
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;

    // After 2.2s, start fade-out; after 2.7s, unmount completely.
    const fadeTimer = setTimeout(() => setFading(true), 2200);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, 2700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`loader ${fading ? "loader--fading" : ""}`}>
      <div className="loader__inner">
        <div className="loader__mark" aria-hidden="true">◆</div>

        <h1 className="loader__wordmark">
          <span className="loader__shimmer">
            {/* Replace "The Visionary Chronicle" with your brand name */}
            The Visionary <span className="text-gradient">Chronicle</span>
          </span>
        </h1>

        <div className="loader__bar" role="progressbar" aria-label="Loading demo">
          <div className="loader__bar-fill" />
        </div>

        <p className="loader__tag">WELCOME DEAR FANS.</p>
      </div>
    </div>
  );
}