import { Link } from "react-router-dom";
import PlanCard from "../components/PlanCard/PlanCard";
import { PLANS } from "../data/plans";
import "./PlansPage.css";

export default function PlansPage() {
  return (
    <div className="plans-page">
      <section className="plans-page__hero">
        <div className="container">
          <Link to="/" className="plans-page__back">
            <span aria-hidden="true">←</span> Back to Home
          </Link>

          <span className="plans-page__eyebrow">
            Elon Musk — Technology, Innovation & Vision
          </span>

          <h1 className="plans-page__title">
            Explore the <span className="text-gradient">vision</span>
          </h1>

          <p className="plans-page__lead">
            Explore the ideas, companies, and technologies shaping Elon Musk's
            work — from electric vehicles and sustainable energy to reusable
            rockets, artificial intelligence, and the long-term goal of making
            humanity multiplanetary. Choose a membership and explore the fan
            community.
          </p>
        </div>
      </section>

      <section className="plans-page__grid-section">
        <div className="container">
          <div className="plans-page__grid">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="plans-page__footer">
        <div className="container">
          <p className="plans-page__footer-note">
            <strong>Important:</strong> This is an independent Elon Musk fan
            website and community. Membership plans, pricing, and benefits are
            provided by Elon  website's management and are endorsed by
            Elon Musk, Tesla, SpaceX.
          </p>
        </div>
      </section>
    </div>
  );
}