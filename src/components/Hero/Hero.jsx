import { useEffect, useRef } from 'react'
import './Hero.css'

function WavyPath({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 10 160 Q 60 60 120 100 Q 180 140 240 40 Q 280 10 290 50"
        stroke="#e8524a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        className="hero__wave-path"
      />
    </svg>
  )
}

function BlackWavy({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 40 10 Q 5 60 40 110 Q 75 160 40 210 Q 10 255 40 285"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 55 20 Q 20 70 55 120 Q 90 170 55 220 Q 25 265 55 290"
        stroke="#e8524a"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )
}

// Avatar positions: two rows across the full width
const avatarData = [
  { src: '/avatar1.png', size: 130, delay: '0s'   },
  { src: '/avatar2.png', size: 155, delay: '0.4s' },
  { src: '/avatar3.png', size: 125, delay: '0.8s' },
  { src: '/avatar4.png', size: 120, delay: '0.2s' },
  { src: '/avatar5.png', size: 140, delay: '0.6s' },
  { src: '/avatar6.png', size: 115, delay: '0.3s' },
  { src: '/avatar1.png', size: 130, delay: '1s'   },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Immediately make elements visible (they animate in via CSS)
    const elements = heroRef.current?.querySelectorAll('.hero__animate')
    const timers = []
    elements?.forEach((el, i) => {
      const t = setTimeout(() => el.classList.add('visible'), i * 150)
      timers.push(t)
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Decorative background elements */}
      <WavyPath className="hero__wavy-coral" />
      <BlackWavy className="hero__wavy-black" />
      <div className="hero__purple-shape" aria-hidden="true" />

      <div className="container hero__container">
        {/* Centred Headline */}
        <div className="hero__text-block">
          <h1 className="hero__title hero__animate">
            The thinkers{' '}
            <span className="highlighted-pink">and</span>
            <br />
            doers were changing
            <br />
            the{' '}
            <span className="highlighted-green">status</span>{' '}Quo with
          </h1>

          {/* Yellow underline strokes like Figma */}
          <div className="hero__underlines hero__animate" aria-hidden="true">
            <span className="hero__stroke hero__stroke--1" />
            <span className="hero__stroke hero__stroke--2" />
          </div>

          {/* Subtitle */}
          <p className="hero__subtitle hero__animate">
            We are a team of strategists, designers communicators, researchers. Togeather,{' '}
            we belive that progress only happens when you refuse to play things safe.
          </p>
        </div>
      </div>

      {/* Full-width avatar row — outside container so it bleeds edge-to-edge */}
      <div className="hero__avatars-row" aria-label="Our team members">
        {avatarData.map((av, i) => (
          <div
            key={i}
            className="hero__avatar-slot"
            style={{ animationDelay: av.delay }}
          >
            <img
              src={av.src}
              alt="Team member"
              className="hero__avatar-img"
              style={{ width: av.size, height: av.size }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
