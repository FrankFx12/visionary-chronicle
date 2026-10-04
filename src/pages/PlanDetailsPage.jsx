import { Link, useParams, Navigate } from "react-router-dom";
import { getPlanById, PLANS } from "../data/plans";
import "./PlanDetailsPage.css";

export default function PlanDetailsPage() {
  const { planId } = useParams();
  const plan = getPlanById(planId);

  // If URL doesn't match a real plan (e.g. /plans/xyz), send back to /plans
  if (!plan) return <Navigate to="/plans" replace />;

  return (
    <div className="plan-details">
      <section className="plan-details__hero">
        <div className="container">
          <Link to="/plans" className="plan-details__back">
            <span aria-hidden="true">←</span> Back to All Plans
          </Link>

          <span className="plan-details__eyebrow">
            Elon Musk Fan Portal — Membership
          </span>

          <h1 className="plan-details__title">{plan.name}</h1>

          <p className="plan-details__tagline">{plan.tagline}</p>

          <div className="plan-details__price">
            <span className="plan-details__currency">$</span>
            <span className="plan-details__amount">
              {plan.amount.toLocaleString()}
            </span>
            <span className="plan-details__period">membership</span>
          </div>
        </div>
      </section>

      <section className="plan-details__body">
        <div className="container plan-details__grid">
          {/* ---------- Left: Benefits ---------- */}
          <div className="plan-details__panel glass">
            <h2 className="plan-details__panel-title">Membership benefits</h2>
            <ul className="plan-details__benefits">
              {plan.benefits.map((benefit) => (
                <li key={benefit} className="plan-details__benefit">
                  <span className="plan-details__check" aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Right: Info + CTA ---------- */}
          <aside className="plan-details__side">
            <div className="plan-details__info">
              <h3 className="plan-details__info-title">Membership information</h3>
              <dl className="plan-details__dl">
                <div>
                  <dt>Membership</dt>
                  <dd>{plan.id}</dd>
                </div>
                <div>
                  <dt>Membership amount</dt>
                  <dd>${plan.amount.toLocaleString()}</dd>
                </div>
                <div>
                  <dt>Access</dt>
                  <dd>Fan Community</dd>
                </div>
                <div>
                  <dt>Support</dt>
                  <dd>Membership Management</dd>
                </div>
              </dl>
            </div>

            <Link
              to={`/checkout?plan=${plan.id}`}
              className="btn btn--primary plan-details__cta"
            >
              Continue to Payment
              <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>

            <Link to="/plans" className="btn btn--ghost plan-details__cta">
              Back to Plans
            </Link>
          </aside>
        </div>

        {/* ---------- Disclaimer ---------- */}
        <div className="container">
          <p className="plan-details__disclaimer">
            <strong>Important:</strong> This is an independent Elon Musk fan
            website and membership community. It is not operated, endorsed, or
            officially affiliated with Elon Musk, Tesla, SpaceX, X, xAI,
            Neuralink, or The Boring Company. Membership benefits and pricing
            shown here are provided by this website's management.
          </p>
        </div>
      </section>

      {/* ---------- Other plans quick links ---------- */}
      <section className="plan-details__others">
        <div className="container">
          <h3 className="plan-details__others-title">Explore other memberships</h3>
          <ul className="plan-details__others-list">
            {PLANS.filter((p) => p.id !== plan.id).map((p) => (
              <li key={p.id}>
                <Link to={`/plans/${p.id}`} className="plan-details__other-card">
                  <span className="plan-details__other-name">{p.name}</span>
                  <span className="plan-details__other-price">
                    ${p.amount.toLocaleString()}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}