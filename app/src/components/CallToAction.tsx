import './CallToAction.css'

export default function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-headline">Get back to what you love — coaching.</h2>
          <p className="cta-subheadline">Let CoachPost handle the posts.</p>
          <button className="cta-button-large">Start Free Trial — No Credit Card Required</button>
          <div className="testimonial">
            <p className="testimonial-text">
              "What used to take me 2 hours a week now takes 10 minutes. CoachPost is a game-changer."
            </p>
            <p className="testimonial-author">— Coach Mike, Youth Soccer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
