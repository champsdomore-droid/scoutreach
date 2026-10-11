import './WhoItsFor.css'

export default function WhoItsFor() {
  const audiences = [
    'Youth sports coaches',
    'Club & travel team directors',
    'Athletic trainers & specialists',
    'Sports influencers & content creators',
    'Anyone building a sports brand'
  ]

  return (
    <section className="who-its-for">
      <div className="container">
        <h2 className="section-title">Built For Coaches Like You</h2>
        <ul className="audience-list">
          {audiences.map((audience, index) => (
            <li key={index} className="audience-item">
              <span className="checkmark">✓</span>
              <span>{audience}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
