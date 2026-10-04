import { Link } from "react-router-dom";
import "./Hero.css";

const HERO_IMAGE = "https://i.postimg.cc/x8MWw1FC/Elon-Musk-Royal-Society.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* ---------- Animated background: orbs + grid ---------- */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="container hero__inner">
        {/* ---------- LEFT: Big Elon Musk image ---------- */}
        <div className="hero__media">
          <div className="hero__image-wrap">
            {/* glowing gradient ring behind the image */}
            <div className="hero__ring" aria-hidden="true" />

            {/* the tilted glass card */}
            <div className="hero__image-card">
              <span className="hero__ribbon">ELON MUSK</span>
              <img
                src={HERO_IMAGE}
                alt="Elon Musk"
                className="hero__image"
                loading="eager"
              />
              <div className="hero__image-fade" aria-hidden="true" />
            </div>
          </div>

          <p className="hero__caption">
            <strong>Elon Musk</strong> — “You want to wake up in the morning
            and think the future is going to be great — and that's what being
            a spacefaring civilization is all about.”
          </p>
        </div>

        {/* ---------- RIGHT: Text ---------- */}
        <div className="hero__text">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-star" aria-hidden="true">✦</span>
            The vision of Elon Musk
          </span>

          <h1 className="hero__title">
            Making life{" "}
            <span className="hero__title-highlight">multiplanetary</span>.
            <br />
            <span className="hero__title-line2">The future starts here.</span>
          </h1>

          <p className="hero__subtitle">
            “SpaceX was founded under the belief that a future where humanity
            is out exploring the stars is fundamentally more exciting than one
            where we are not.”
            <br />
            <strong>— Elon Musk</strong>
          </p>
<div className="hero__actions">
  <Link to="/plans" className="btn btn--primary">
    View Elon Musk Fan Plans
    <span className="btn__arrow" aria-hidden="true">→</span>
  </Link>
  <a href="#about" className="btn btn--ghost">
    Learn More
  </a>
</div>

          <ul className="hero__flags">
            <li><span className="hero__flag-dot" /> Space exploration</li>
            <li><span className="hero__flag-dot" /> Human innovation</li>
            <li><span className="hero__flag-dot" /> Independent fan portal</li>
          </ul>
        </div>
      </div>
    </section>
  );
}