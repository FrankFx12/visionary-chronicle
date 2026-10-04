import { useEffect, useState } from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    initials: "LH",
    name: "Lukas Hoffmann",
    role: "Fan Community Member",
    quote:
      "I just got my membership card and honestly, I love it. The whole experience feels premium, and I'm happy to be part of the community.",
    rating: 5,
  },
  {
    initials: "WY",
    name: "Wei Zhang",
    role: "VIP Community Member",
    quote:
      "I just upgraded to the VIP membership and the experience feels amazing. The VIP card looks really clean, and I love the premium feel of the community.",
    rating: 5,
  },
  {
    initials: "OB",
    name: "Oliver Bennett",
    role: "Space & Technology Fan",
    quote:
      "My membership was really easy to set up. I joined because of my interest in Elon Musk's work, and I love exploring everything the fan portal has to offer.",
    rating: 4,
  },
  {
    initials: "SC",
    name: "Sophie Carter",
    role: "VIP Community Member",
    quote:
      "Finally got my VIP card! 😂 The design is clean, the portal is smooth, and the whole membership experience feels properly put together.",
    rating: 5,
  },
  {
    initials: "HY",
    name: "Hannah Müller",
    role: "Fan Community Member",
    quote:
      "I really enjoyed joining the community. The membership experience is simple, the design looks great, and I love having a place dedicated to following Elon Musk's work.",
    rating: 5,
  },
  {
    initials: "JW",
    name: "James Wilson",
    role: "Technology Fan",
    quote:
      "The portal is really clean and easy to explore. I especially enjoyed reading about the different companies and projects connected to Elon Musk.",
    rating: 5,
  },
  {
    initials: "LC",
    name: "Li Chen",
    role: "Space Technology Fan",
    quote:
      "I have always been interested in space exploration and technology. This portal gives me a nice place to explore Elon Musk's work and ideas.",
    rating: 5,
  },
  {
    initials: "EM",
    name: "Emily Morgan",
    role: "Fan Community Member",
    quote:
      "Everything feels simple and well organized. I really like the modern design and the way the different projects are presented.",
    rating: 4,
  },
  {
    initials: "MK",
    name: "Maximilian Keller",
    role: "VIP Community Member",
    quote:
      "The VIP experience feels very polished. I like the clean design, smooth navigation, and the futuristic style of the entire portal.",
    rating: 5,
  },
  {
    initials: "AY",
    name: "Aya Yamamoto",
    role: "Technology Enthusiast",
    quote:
      "I joined because I follow developments in technology and space. The portal is a really interesting way to explore those topics in one place.",
    rating: 5,
  },
];

const ROTATE_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const current = TESTIMONIALS[index];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="testimonials__eyebrow">
            Fan Community Experiences
          </span>
          <h2 className="testimonials__title">
            What <span className="text-gradient">members</span> are saying
          </h2>
          <p className="testimonials__note">
            Representative fan experiences created for this website
            demonstration. Membership and VIP references are illustrative.
          </p>
        </div>

        <div
          className="testimonials__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--prev"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <article className="testimonials__card glass" key={index}>
            <div className="testimonials__avatar">
              <span>{current.initials}</span>
            </div>

            <div
              className="testimonials__stars"
              aria-label={`${current.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < current.rating
                      ? "testimonials__star is-filled"
                      : "testimonials__star"
                  }
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>

            <p className="testimonials__quote">"{current.quote}"</p>

            <div className="testimonials__author">
              <span className="testimonials__name">{current.name}</span>
              <span className="testimonials__role">{current.role}</span>
            </div>
          </article>

          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--next"
            onClick={next}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div
          className="testimonials__dots"
          role="tablist"
          aria-label="Testimonials"
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              className={
                i === index
                  ? "testimonials__dot is-active"
                  : "testimonials__dot"
              }
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}