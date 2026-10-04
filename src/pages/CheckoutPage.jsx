import { useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { getPlanById } from "../data/plans";
import "./CheckoutPage.css";

const PAYMENT_METHODS = [
  {
    id: "card",
    name: "Card Payment",
    description: "Pay securely using an eligible debit or credit card.",
    icon: "💳",
  },
  {
    id: "bank",
    name: "Bank Transfer",
    description: "Receive bank transfer instructions from membership management.",
    icon: "🏦",
  },
  {
    id: "crypto",
    name: "Bitcoin",
    description: "Request cryptocurrency payment instructions from management.",
    icon: "₿",
  },
  {
    id: "gift",
    name: "Gift Card",
    description: "Contact management to confirm supported gift card options.",
    icon: "🎁",
  },
  {
    id: "wallet",
    name: "Digital Wallet",
    description: "Ask management about available digital wallet options.",
    icon: "📱",
  },
  {
    id: "transfer",
    name: "Online Transfer",
    description: "Contact membership management for available transfer options.",
    icon: "↗",
  },
];

/**
 * Generates a membership reference like: VC-8X3K2M
 */
function makeReference() {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let code = "";

  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }

  return `VC-${code}`;
}

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get("plan");
  const plan = getPlanById(planId);

  const [selectedMethod, setSelectedMethod] = useState(null);
  const [reference] = useState(makeReference);

  if (!plan) return <Navigate to="/plans" replace />;

  const selectedPayment = PAYMENT_METHODS.find(
    (method) => method.id === selectedMethod
  );

  const handleContinue = () => {
    if (!selectedMethod) return;

    const message = `Hello Membership Management,

I would like to continue with my membership application.

Membership: ${plan.name}
Amount: $${plan.amount.toLocaleString()}
Payment option: ${selectedPayment.name}
Reference: ${reference}

Please send me the next steps for completing my membership.

Thank you.`;

    const telegramUrl = `https://t.me/private_account4131?text=${encodeURIComponent(
      message
    )}`;

    window.open(telegramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="checkout">
      {/* ---------- Information banner ---------- */}
      <div className="checkout__banner">
        <span className="checkout__banner-icon" aria-hidden="true">✦</span>
        MEMBERSHIP MANAGEMENT & SUPPORT
      </div>

      <section className="checkout__hero">
        <div className="container">
          <Link to={`/plans/${plan.id}`} className="checkout__back">
            <span aria-hidden="true">←</span> Back to Plan
          </Link>

          <span className="checkout__eyebrow">Membership Checkout</span>

          <h1 className="checkout__title">
            Complete your <span className="text-gradient">membership</span>
          </h1>

          <p className="checkout__lead">
            Review your selected membership, choose your preferred payment
            option, and contact membership management for the next steps.
          </p>
        </div>
      </section>

      <section className="checkout__body">
        <div className="container checkout__grid">
          {/* ---------- Left: order summary ---------- */}
          <aside className="checkout__summary glass">
            <h2 className="checkout__summary-title">Membership summary</h2>

            <dl className="checkout__dl">
              <div>
                <dt>Selected membership</dt>
                <dd>{plan.name}</dd>
              </div>

              <div>
                <dt>Membership amount</dt>
                <dd>${plan.amount.toLocaleString()}</dd>
              </div>

              <div>
                <dt>Membership reference</dt>
                <dd className="checkout__ref">{reference}</dd>
              </div>

              <div>
                <dt>Status</dt>
                <dd>Awaiting confirmation</dd>
              </div>
            </dl>

            <div className="checkout__customer">
              <h3 className="checkout__customer-title">
                Membership support
              </h3>

              <p className="checkout__customer-line">
                <strong>Contact:</strong> Membership Management
              </p>

              <p className="checkout__customer-line">
                <strong>Telegram:</strong> @private_account4131
              </p>

              <p className="checkout__customer-note">
                Your selected membership and payment preference will be
                included automatically in your Telegram message.
              </p>
            </div>
          </aside>

          {/* ---------- Right: payment methods ---------- */}
          <div className="checkout__methods">
            <h2 className="checkout__methods-title">
              Choose a payment option
            </h2>

            <p className="checkout__methods-sub">
              Select your preferred payment option below. Membership
              management will provide the appropriate next steps after you
              contact them.
            </p>

            <ul className="checkout__methods-grid">
              {PAYMENT_METHODS.map((method) => (
                <li key={method.id}>
                  <button
                    type="button"
                    className={`checkout__method ${
                      selectedMethod === method.id ? "is-selected" : ""
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <span
                      className="checkout__method-icon"
                      aria-hidden="true"
                    >
                      {method.icon}
                    </span>

                    <span className="checkout__method-body">
                      <span className="checkout__method-name">
                        {method.name}
                      </span>

                      <span className="checkout__method-desc">
                        {method.description}
                      </span>
                    </span>

                    <span
                      className="checkout__method-radio"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>

            <div className="checkout__actions">
              <button
                type="button"
                className="btn btn--primary checkout__continue"
                disabled={!selectedMethod}
                onClick={handleContinue}
              >
                Continue to Payment
                <span className="btn__arrow" aria-hidden="true">→</span>
              </button>

              <p className="checkout__actions-note">
                {selectedMethod
                  ? `Continue with ${selectedPayment.name}. Your membership details will be prepared in Telegram.`
                  : "Choose a payment option above to continue."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}