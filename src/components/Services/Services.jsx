import { useEffect, useRef } from 'react'
import './Services.css'

const services = [
  {
    id: 'collab',
    category: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    id: 'weight',
    category: 'The hanger US Air Force digital experimental',
    title: 'We talk about our weight',
  },
  {
    id: 'digital',
    category: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

function ArrowRight() {
  return (
    <svg
      width="48"
      height="16"
      viewBox="0 0 48 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="services__arrow-icon"
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="40" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M36 3 L44 8 L36 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.srv-reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" id="services" ref={sectionRef}>
      {/* Wavy coral decoration */}
      <svg
        className="services__wavy"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 10 30 Q 80 100 150 60 Q 200 30 260 120 Q 290 160 280 180"
          stroke="#e8524a"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="container">
        {/* Section heading */}
        <div className="services__header srv-reveal">
          <h2 className="services__title">
            What we{' '}
            <span className="highlighted-green">can</span>
            <br />
            offer you!
          </h2>
          <div className="services__title-underline" aria-hidden="true"></div>
        </div>

        {/* Service list */}
        <div className="services__list" role="list">
          {services.map((service, i) => (
            <article
              key={service.id}
              className="services__item srv-reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
              role="listitem"
            >
              <span className="services__category">{service.category}</span>
              <h3 className="services__item-title">{service.title}</h3>
              <a
                href={`#${service.id}`}
                className="services__link"
                aria-label={`Learn more about ${service.title}`}
              >
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
