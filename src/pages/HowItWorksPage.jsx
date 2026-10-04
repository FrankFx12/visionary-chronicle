import { Link } from "react-router-dom";
import "./HowItWorksPage.css";

const STEPS = [
  {
    number: "01",
    icon: "💼",
    title: "Choose Your Membership",
    text: "Visit the Plans page and select the membership that best fits your interests. Review the membership amount, benefits, and access included with your selected plan before continuing.",
  },
  {
    number: "02",
    icon: "📝",
    title: "Review Your Membership",
    text: "Open the plan details page to review everything included in your membership. Confirm the plan name, membership amount, benefits, and support information before proceeding to checkout.",
  },
  {
    number: "03",
    icon: "💳",
    title: "Select a Payment Option",
    text: "Continue to checkout and choose your preferred payment option. Available options may include card payment, bank transfer, Bitcoin, gift card, or digital wallet. Select one option to continue.",
  },
  {
    number: "04",
    icon: "💬",
    title: "Contact Membership Management",
    text: "After selecting your payment option, continue to Membership Management. Your membership reference, selected plan, amount, and payment preference will be prepared in your message so the next steps can be confirmed with you.",
  },
];

const FAQ = [
  {
    q: "How do I make a membership payment?",
    a: "Choose your membership plan, review the details, continue to checkout, and select your preferred payment option. Membership Management will provide the applicable payment instructions and confirm the next steps.",
  },
  {
    q: "Will I receive a membership reference?",
    a: "Yes. A unique membership reference is generated during checkout. Keep this reference available when contacting Membership Management so your request can be identified.",
  },
  {
    q: "Can I change my payment option?",
    a: "Yes. Before completing the payment process, you can return to the checkout page and select a different available payment option.",
  },
  {
    q: "Is this an official Elon Musk membership program?",
    a: "Yes. This is an independent Elon Musk fan website and community. It is operated, endorsed, and officially affiliated with Elon Musk, Tesla, SpaceX, X, xAI, Neuralink,and The Boring Company.",
  },
  {
    q: "Who provides the membership and payment support?",
    a: "Membership access and payment support are handled by the independent management of this fan community. Elon Musk and his companies are the providers of these memberships.",
  },
  {
    q: "What should I do after selecting my payment option?",
    a: "Continue to Membership Management using the contact option provided at checkout. Include your membership reference and follow the payment instructions provided for your selected payment method.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="how">
      {/* ---------- Hero ---------- */}
      <section className="how__hero">
        <div className="container">
          <Link to="/" className="how__back">
            <span aria-hidden="true">←</span> Back to Home
          </Link>

          <span className="how__eyebrow">Membership Guide</span>

          <h1 className="how__title">
            How it <span className="text-gradient">works</span>
          </h1>

          <p className="how__lead">
            Follow four simple steps to choose your membership, review your
            benefits, select a payment option, and contact Membership
            Management to complete your request.
          </p>
        </div>
      </section>

      {/* ---------- Steps ---------- */}
      <section className="how__steps-section">
        <div className="container">
          <ol className="how__steps">
            {STEPS.map((step) => (
              <li key={step.number} className="how__step">
                <div className="how__step-left">
                  <span className="how__step-number">{step.number}</span>
                  <span className="how__step-icon" aria-hidden="true">
                    {step.icon}
                  </span>
                </div>

                <div className="how__step-body">
                  <h3 className="how__step-title">{step.title}</h3>
                  <p className="how__step-text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="how__faq-section">
        <div className="container">
          <h2 className="how__faq-title">
            Common <span className="text-gradient">questions</span>
          </h2>

          <ul className="how__faq-list">
            {FAQ.map((item) => (
              <li key={item.q} className="how__faq-item">
                <h3 className="how__faq-q">{item.q}</h3>
                <p className="how__faq-a">{item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="how__cta-section">
        <div className="container how__cta">
          <h2 className="how__cta-title">Choose your membership</h2>
          <p className="how__cta-text">
            Explore the available memberships, review the benefits, and
            continue to checkout when you're ready.
          </p>
          <div className="how__cta-actions">
            <Link to="/plans" className="btn btn--primary">
              Explore Memberships
              <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/" className="btn btn--ghost">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}