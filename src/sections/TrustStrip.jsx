import { organizationWordmarks } from '../data/site'

const organizationColumns = Array.from({ length: 3 }, (_, columnIndex) =>
  organizationWordmarks.filter((_, index) => index % 3 === columnIndex),
)

function OrganizationMark({ organization }) {
  return (
    <img
      className="trust__logo-mark"
      src={organization.logo}
      alt={organization.name}
      loading="lazy"
      decoding="async"
    />
  )
}

function OrganizationWordmarks({ organizations, decorative = false }) {
  return (
    <div className="trust__logo-group" aria-hidden={decorative || undefined}>
      {organizations.map((organization, index) => (
        <div
          className="trust__logo trust__bank"
          key={`${decorative ? 'copy-' : ''}${organization.id}`}
        >
          <OrganizationMark organization={organization} />
        </div>
      ))}
    </div>
  )
}

export function OrganizationLogoSlider() {
  return (
    <div className="trust__logo-viewport" role="region" aria-label="World Bank logo">
      {organizationColumns.map((organizations, index) => (
        <div className="trust__logo-column" key={`column-${index + 1}`}>
          <div className={`trust__logo-track trust__logo-track--column-${index + 1}`}>
            <OrganizationWordmarks organizations={organizations} />
            <OrganizationWordmarks organizations={organizations} decorative />
          </div>
        </div>
      ))}
    </div>
  )
}
