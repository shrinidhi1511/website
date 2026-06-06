import { useEffect, useRef } from 'react'
import './About.css'

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = ref.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ref])
}

export default function About() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section className="about" id="about" ref={sectionRef}>
      {/* Pink radial gradient top */}
      <div className="about__bg-blob about__bg-blob--top" aria-hidden="true"></div>

      <div className="container">
        {/* Row 1: Tomorrow should be better */}
        <div className="about__row about__row--1">
          <div className="about__content reveal slide-left">
            <h2 className="about__heading">
              <span className="underline-yellow">Tomorrow</span> should
              <br />
              be better than{' '}
              <span className="highlighted-green">today</span>
            </h2>
            <p className="about__body">
              We are a team of strategists, designers communicators, researchers.
              Togeather, we belive that progress only happens when you refuse
              to play things safe.
            </p>
            <a href="#services" className="about__read-more">
              Read more <span className="about__line" aria-hidden="true"></span>
            </a>
          </div>

          <div className="about__image-wrap reveal slide-right">
            {/* Red triangle decoration */}
            <div className="about__triangle about__triangle--top-right" aria-hidden="true"></div>
            <div className="about__circle-img">
              <img
                src="/team_meeting.png"
                alt="Business team discussing strategy in a meeting room"
                className="about__img"
              />
            </div>
          </div>
        </div>

        {/* Row 2: See how we can help */}
        <div className="about__row about__row--2">
          <div className="about__image-wrap about__image-wrap--left reveal slide-left">
            {/* Red triangle decoration */}
            <div className="about__triangle about__triangle--bottom-left" aria-hidden="true"></div>
            <div className="about__circle-img">
              <img
                src="/team_working.png"
                alt="Two creative professionals collaborating on laptops"
                className="about__img"
              />
            </div>
          </div>

          <div className="about__content about__content--right reveal slide-right">
            <h2 className="about__heading">
              <span className="about__mono">See</span> how we can
              <br />
              help you progress
            </h2>
            <div className="about__underline" aria-hidden="true"></div>
            <p className="about__body">
              We are a driver of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital media and social research.
            </p>
            <a href="#services" className="about__read-more">
              Read more <span className="about__line" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Wavy coral path between sections */}
      <svg
        className="about__wave"
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 0 180 Q 100 60 200 120 Q 300 180 400 80 Q 500 20 600 100"
          stroke="#e8524a"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </section>
  )
}
