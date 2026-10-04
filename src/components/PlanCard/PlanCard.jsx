import { Link } from "react-router-dom";
import "./PlanCard.css";

export default function PlanCard({ plan }) {
  const { id, name, amount, tagline, benefits, featured } = plan;

  return (
    <article className={`plan-card ${featured ? "plan-card--featured" : ""}`}>
      {featured && <span className="plan-card__badge">FEATURED PLAN</span>}

      <header className="plan-card__header">
        <h3 className="plan-card__name">{name}</h3>
        <p className="plan-card__tagline">{tagline}</p>
      </header>

      <div className="plan-card__price">
        <span className="plan-card__currency">$</span>
        <span className="plan-card__amount">{amount.toLocaleString()}</span>
        <span className="plan-card__period">membership</span>
      </div>

      <ul className="plan-card__benefits">
        {benefits.map((benefit) => (
          <li key={benefit} className="plan-card__benefit">
            <span className="plan-card__check" aria-hidden="true">✓</span>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="plan-card__actions">
        <Link to={`/plans/${id}`} className="btn btn--ghost plan-card__btn">
          Explore Plan
        </Link>
        <Link
          to={`/checkout?plan=${id}`}
          className="btn btn--primary plan-card__btn"
        >
          Continue to Payment
          <span className="btn__arrow" aria-hidden="true">→</span>
        </Link>
      </div>

      <p className="plan-card__note">
        Independent fan portal membership — review the plan details before payment.
      </p>
    </article>
  );
}