import { useState, useRef, useEffect } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('n-revealed')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.n-reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="newsletter" id="contact" ref={sectionRef}>
      {/* Purple blob */}
      <div className="newsletter__purple-blob" aria-hidden="true"></div>

      {/* Decorative arrows pointing down */}
      <svg
        className="newsletter__arrows"
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M 20 10 Q 30 40 20 70 L 10 60 M 20 70 L 30 60" stroke="#e8524a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M 50 10 Q 60 40 50 70 L 40 60 M 50 70 L 60 60" stroke="#e8524a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      <div className="container">
        <div className="newsletter__inner n-reveal">
          <h2 className="newsletter__title">
            <span className="underline-blue">Subscribe to</span>
            <br />
            <span className="underline-blue">our newsletter</span>
          </h2>
          <p className="newsletter__subtitle">
            To make your stay special and even more memorable
          </p>

          {!submitted ? (
            <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
              <button
                type="submit"
                className="newsletter__btn"
                id="newsletter-subscribe-btn"
                aria-label="Subscribe to newsletter"
              >
                Subscribe Now
              </button>
            </form>
          ) : (
            <p className="newsletter__success" role="status">
              🎉 Thanks for subscribing! Stay tuned.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
