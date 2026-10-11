import './PainPoints.css'

export default function PainPoints() {
  const painPoints = [
    {
      icon: '⏱️',
      title: 'I don\'t have time to post',
      description: 'Game days, practice, paperwork… social media falls last'
    },
    {
      icon: '😤',
      title: 'Posting feels like a second job',
      description: 'Writing captions, finding hashtags, scheduling = exhausting'
    },
    {
      icon: '📱',
      title: 'Other coaches make it look easy',
      description: 'They\'ve got systems. You just need a simpler way'
    },
    {
      icon: '💸',
      title: 'I hate asking for help',
      description: 'Pay a social manager? Expensive. Do it yourself? Time-consuming'
    }
  ]

  return (
    <section className="pain-points">
      <div className="container">
        <h2 className="section-title">Sound Familiar?</h2>
        <div className="pain-grid">
          {painPoints.map((point, index) => (
            <div key={index} className="pain-card">
              <div className="pain-icon">{point.icon}</div>
              <h3 className="pain-title">{point.title}</h3>
              <p className="pain-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
