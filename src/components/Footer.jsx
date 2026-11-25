import { Link } from 'react-router-dom'
import Logo from './Logo'
import { footerColumns } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo onDark />
          <p className="footer__tagline">
            BluePeak is a fictional CRM concept. All accounts, workflows, features, locations, and metrics are
            illustrative placeholders.
          </p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="footer__col">
            <h2 className="footer__heading">{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer__notice">
        <p className="footer__label">Sample data notice</p>
        <p className="footer__disclaimer">
          This preview is not connected to a live CRM. Verify all product details and claims before launch.
        </p>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>
            BluePeak CRM preview · © {new Date().getFullYear()} · Fictional sample content. | Website Developed By Nadir Jamal
          </p>
        </div>
      </div>
    </footer>
  )
}
