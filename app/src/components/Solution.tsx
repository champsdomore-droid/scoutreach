import './Solution.css'

export default function Solution() {
  const features = [
    {
      icon: '✅',
      title: 'AI Content Generation',
      description: 'Tell us what game/event/practice you want to post about, and our AI writes the caption in your voice (professional, hype, celebratory, you pick).'
    },
    {
      icon: '✅',
      title: 'One-Tap Scheduling',
      description: 'Plan your whole week in 5 minutes. Drag, drop, done.'
    },
    {
      icon: '✅',
      title: 'Multi-Platform',
      description: 'Post to Instagram, Twitter/X, and LinkedIn from one dashboard.'
    },
    {
      icon: '✅',
      title: 'Hashtag Smart',
      description: 'We auto-suggest sports-specific hashtags that actually get seen.'
    },
    {
      icon: '✅',
      title: 'Analytics That Matter',
      description: 'See what\'s working. No fluff — just actionable insights.'
    }
  ]

  return (
    <section className="solution">
      <div className="container">
        <h2 className="section-title">CoachPost Does the Heavy Lifting</h2>
        <p className="solution-subtitle">So you can focus on what matters — coaching.</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
