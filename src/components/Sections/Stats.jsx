import { useEffect, useRef, useState } from "react";
import "./Stats.css";

const STATS = [
  { label: "Members", value: 12480, suffix: "+", prefix: "" },
  { label: "Transactions", value: 84220, suffix: "+", prefix: "" },
  { label: "Portfolio", value: 4.2, suffix: "M", prefix: "$", decimals: 1 },
  { label: "Activity", value: 98.6, suffix: "%", prefix: "", decimals: 1 },
];

/* Counts up from 0 to `target` when `start` becomes true. */
function useCountUp(target, start, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, start, duration]);

  return decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString();
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Observe when the section enters the viewport.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef} id="stats">
      <div className="container">
        <div className="stats__header">
          <span className="stats__eyebrow">Elon Musk — Vision & Innovation</span>
          <h2 className="stats__title">
            Numbers that <span className="text-gradient">shape</span> the experience
          </h2>
          <p className="stats__note">
            Explore the platform and discover the ideas, projects, and vision
            associated with Elon Musk.
          </p>
        </div>

        <ul className="stats__grid">
          {STATS.map((s) => (
            <li key={s.label} className="stats__card glass">
              <span className="stats__value">
                <StatValue stat={s} start={visible} />
              </span>
              <span className="stats__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatValue({ stat, start }) {
  const formatted = useCountUp(
    stat.value,
    start,
    1600,
    stat.decimals ?? 0
  );
  return (
    <>
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </>
  );
}