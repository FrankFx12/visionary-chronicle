import { useEffect, useRef, useState } from "react";
import "./About.css";

const ABOUT_IMAGE =
  "https://i.postimg.cc/DyKr5J5x/Elon-Musk.jpg";

const TIMELINE = [
  { year: "1971", text: "Born in Pretoria, South Africa." },
  { year: "1995", text: "Co-founded Zip2, an early internet software company." },
  { year: "1999", text: "Co-founded X.com, an online financial services company that later became part of PayPal." },
  { year: "2002", text: "Founded SpaceX with the goal of advancing space technology and making humanity multiplanetary." },
  { year: "2004", text: "Joined Tesla as an early investor and became a member of its board of directors." },
  { year: "2015", text: "Co-founded OpenAI, an artificial intelligence research organization." },
  { year: "2016", text: "Founded Neuralink and The Boring Company, expanding his work into neurotechnology and infrastructure." },
  { year: "2022", text: "Acquired Twitter, which was later rebranded as X." },
  { year: "2023", text: "Founded xAI, an artificial intelligence company focused on understanding the universe." },
  { year: "2024", text: "Continued leading major projects spanning spaceflight, electric vehicles, artificial intelligence, and neurotechnology." },
  { year: "2025", text: "Continued work across space exploration, AI, transportation, energy, and emerging technologies." },
  { year: "2026", text: "Continues pursuing long-term technology and infrastructure projects across his companies." },
];

const FOCUS_AREAS = [
  { label: "Space exploration", icon: "🚀" },
  { label: "Electric vehicles", icon: "⚡" },
  { label: "Sustainable energy", icon: "🌍" },
  { label: "Brain–computer interfaces", icon: "🧠" },
  { label: "Artificial intelligence", icon: "🤖" },
  { label: "Tunnel infrastructure", icon: "🛣️" },
];

export default function About() {
  const timelineRef = useRef(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Split: first 3 stay vertical, the rest become a 2-col grid.
  const verticalItems = TIMELINE.slice(0, 3);
  const gridItems = TIMELINE.slice(3);

  return (
    <section className="about" id="about">
      <div className="container about__inner">
        {/* ---------- Left: portrait + timeline ---------- */}
        <div className="about__media">
          <div className="about__portrait">
            <img
              src={ABOUT_IMAGE}
              alt="Elon Musk"
              className="about__portrait-img"
              loading="lazy"
            />
            <div className="about__portrait-frame" aria-hidden="true" />
            <span className="about__portrait-tag">ELON MUSK</span>
          </div>

          <div
            ref={timelineRef}
            className={`about__timeline ${
              timelineVisible ? "is-visible" : ""
            }`}
          >
            {/* Vertical list — early years */}
            <ol className="about__timeline-list">
              {verticalItems.map((item, i) => (
                <li
                  key={item.year}
                  className="about__timeline-item"
                  style={{ "--i": i }}
                >
                  <span className="about__timeline-year">{item.year}</span>
                  <span className="about__timeline-text">{item.text}</span>
                </li>
              ))}
            </ol>

            {/* Horizontal 2-col grid — recent years */}
            <ul className="about__timeline-grid">
              {gridItems.map((item, i) => (
                <li
                  key={item.year}
                  className="about__timeline-card"
                  style={{ "--i": i }}
                >
                  <span className="about__timeline-year">{item.year}</span>
                  <span className="about__timeline-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Right: bio + focus areas ---------- */}
        <div className="about__content">
          <span className="about__eyebrow">About Elon Musk</span>

          <h2 className="about__title">
            The <span className="text-gradient">vision</span> behind the work
          </h2>

          <p className="about__lead">
            Elon Musk is an entrepreneur and technology leader whose work
            spans space exploration, electric vehicles, sustainable energy,
            artificial intelligence, neurotechnology, and transportation
            infrastructure. Through companies including SpaceX, Tesla,
            Neuralink, xAI, and The Boring Company, his work has focused on
            ambitious engineering problems and long-term technological goals.
          </p>

          <p className="about__text">
            From building reusable rockets and advancing electric
            transportation to developing artificial intelligence and
            brain–computer interfaces, Musk has consistently focused on
            technologies intended to influence the future. This independent
            fan website brings together key milestones, companies, ideas, and
            areas of technology associated with his career.
          </p>

          <div className="about__focus">
            <h3 className="about__focus-title">Areas of focus</h3>
            <ul className="about__focus-grid">
              {FOCUS_AREAS.map((area) => (
                <li key={area.label} className="about__focus-chip">
                  <span className="about__focus-icon" aria-hidden="true">
                    {area.icon}
                  </span>
                  {area.label}
                </li>
              ))}
            </ul>
          </div>

          <p className="about__disclaimer">
            <strong>Independent Fan Website:</strong> This website is
            independently operated and is <strong>affiliated with,
            endorsed by, and officially connected to Elon Musk</strong>,
            Tesla, SpaceX, X, xAI, Neuralink, or The Boring Company.
          </p>
        </div>
      </div>
    </section>
  );
}