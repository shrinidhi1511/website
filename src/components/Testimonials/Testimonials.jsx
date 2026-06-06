import { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    quote:
      "Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable",
    avatar: '/avatar2.png',
    name: 'James K.',
  },
  {
    id: 2,
    quote:
      "Working with Elementum transformed the way we approach digital. Their team brought creativity and precision that we hadn't seen before. The results speak for themselves.",
    avatar: '/avatar5.png',
    name: 'Arjun M.',
  },
  {
    id: 3,
    quote:
      "The level of professionalism and strategic insight that Elementum brought to our brand launch was incredible. We hit our first-month goals in just two weeks.",
    avatar: '/avatar3.png',
    name: 'David R.',
  },
]

const sideAvatars = [
  { src: '/avatar3.png', size: 100, className: 'testi__side-avatar testi__side-avatar--tl', alt: 'Client' },
  { src: '/avatar2.png', size: 130, className: 'testi__side-avatar testi__side-avatar--ml', alt: 'Client' },
  { src: '/avatar4.png', size: 90, className: 'testi__side-avatar testi__side-avatar--bl', alt: 'Client' },

  { src: '/avatar6.png', size: 110, className: 'testi__side-avatar testi__side-avatar--tr', alt: 'Client' },
  { src: '/avatar1.png', size: 160, className: 'testi__side-avatar testi__side-avatar--mr', alt: 'Client' },
  { src: '/avatar5.png', size: 120, className: 'testi__side-avatar testi__side-avatar--br', alt: 'Client' },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('t-revealed')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.t-reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">
        {/* Heading */}
        <div className="testimonials__header t-reveal">
          <h2 className="testimonials__title">
            <span className="highlighted-green">What</span> our customer
            <br />
            says{' '}
            <span className="underline-yellow">About Us</span>
          </h2>
        </div>

        {/* Content area */}
        <div className="testimonials__body">
          {/* Left side avatars */}
          <div className="testimonials__side testimonials__side--left" aria-hidden="true">
            {sideAvatars.slice(0, 3).map((av, i) => (
              <img
                key={i}
                src={av.src}
                alt={av.alt}
                className={av.className}
                style={{ width: av.size, height: av.size }}
              />
            ))}
          </div>

          {/* Quote card */}
          <div className="testimonials__card t-reveal">
            <div className="testimonials__quote-mark" aria-hidden="true">"</div>
            <p className="testimonials__quote" key={active}>
              {testimonials[active].quote}
            </p>
            <div className="testimonials__quote-mark testimonials__quote-mark--end" aria-hidden="true">"</div>

            {/* Dots navigation */}
            <div className="testimonials__dots" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot${i === active ? ' testimonials__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  id={`testi-dot-${i}`}
                />
              ))}
            </div>
          </div>

          {/* Right side avatars */}
          <div className="testimonials__side testimonials__side--right" aria-hidden="true">
            {sideAvatars.slice(3).map((av, i) => (
              <img
                key={i}
                src={av.src}
                alt={av.alt}
                className={av.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
