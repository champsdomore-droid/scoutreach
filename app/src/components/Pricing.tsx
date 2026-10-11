import './Pricing.css'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      features: [
        '1 platform (your choice)',
        '50 AI posts/month',
        'Basic scheduling',
        'Hashtag suggestions'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$19',
      period: '/month',
      features: [
        'All 3 platforms (IG, Twitter, LinkedIn)',
        'Unlimited AI posts',
        'Advanced scheduling + calendar',
        'Analytics dashboard',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Team',
      price: '$49',
      period: '/month',
      features: [
        'Everything in Professional',
        'White-label options',
        'Team access (up to 5 coaches)',
        'Custom AI tone training',
        'Dedicated account manager'
      ],
      highlighted: false
    }
  ]

  return (
    <section className="pricing">
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          {tiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.highlighted ? 'highlighted' : ''}`}>
              {tier.highlighted && <div className="popular-badge">Most Popular</div>}
              <h3 className="tier-name">{tier.name}</h3>
              <div className="price-container">
                <span className="price">{tier.price}</span>
                <span className="period">{tier.period}</span>
              </div>
              <ul className="features-list">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`pricing-cta ${tier.highlighted ? 'highlighted' : ''}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
