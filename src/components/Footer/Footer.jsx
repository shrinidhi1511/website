import './Footer.css'

const footerColumns = [
  {
    id: 'company',
    heading: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    id: 'terms',
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    id: 'social',
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
]

export default function Footer() {
  return (
    <footer className="footer" id="faqs">
      <div className="footer__newsletter-divider">
        <hr className="footer__hr" />
      </div>

      <div className="container">
        <div className="footer__grid">
          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.id} className="footer__col">
              <h3 className="footer__col-heading">{col.heading}</h3>
              <ul className="footer__link-list" role="list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="footer__col footer__col--contact">
            <h3 className="footer__col-heading">Terms &amp; Policies</h3>
            <address className="footer__address">
              <p>1498w Fluton ste, STE</p>
              <p>2D Chicago, IL 63867.</p>
            </address>
            <a href="tel:+11234567890" className="footer__contact-item">
              (123) 4567890000
            </a>
            <a href="mailto:info@elementum.com" className="footer__contact-item">
              info@elementum.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            ©2023 Elementum. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
