import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { markets, deployment } from '../data/site'
import '../styles/presence-map.css'

const sampleMapLocations = [
  { name: 'United States', x: 212, y: 158, dx: 12, dy: -12, anchor: 'start' },
  { name: 'Germany', x: 485, y: 156, dx: -12, dy: -12, anchor: 'end' },
  { name: 'Russia', x: 573, y: 133, dx: 12, dy: -8, anchor: 'start' },
  { name: 'Japan', x: 778, y: 175, dx: 12, dy: -8, anchor: 'start' },
  { name: 'South Africa', x: 520, y: 285, dx: 12, dy: 18, anchor: 'start' },
  { name: 'Brazil', x: 307, y: 305, dx: 12, dy: -8, anchor: 'start' },
  { name: 'Australia', x: 837, y: 326, dx: -12, dy: 18, anchor: 'end' },
]

const hub = sampleMapLocations[0]

/* Simplified continent outlines. They are only used as a mask for the dot-matrix fill. */
const landPaths = [
  'M101 121C104 106 117 99 129 93L148 78C163 71 179 68 193 76L212 86C227 79 242 82 254 91L276 94C291 98 302 109 317 115L331 128C339 139 334 151 325 157L309 161C300 169 292 181 281 189L267 194C257 205 252 217 240 220L225 231 211 228 200 214 189 205 175 206 165 193 150 188 143 171 130 163 125 148 110 140Z',
  'M345 88C357 76 372 70 386 73L399 83 395 99 382 111 368 108 357 101Z',
  'M282 243C297 239 312 246 322 257L337 272C342 282 335 294 339 303L330 324C326 341 322 356 313 369L307 389 297 400 288 390 284 371 276 354 274 336 264 322 261 301 252 288 255 269 267 254Z',
  'M436 128C445 115 459 108 473 111L488 118 500 114 516 121 523 132 513 141 497 143 486 151 471 147 460 154 447 145Z',
  'M463 159C476 150 492 149 505 157L522 166 533 184 537 201 529 219 521 239 517 260 508 280 497 298 485 305 477 290 470 271 463 252 456 235 453 218 447 202 450 183Z',
  'M514 119C526 108 541 105 555 109L574 103 592 108 607 98 627 103 645 97 665 104 686 101 704 108 724 105 743 114 763 116 780 124 798 127 815 138 837 141 849 153 842 165 824 169 810 178 792 180 776 188 756 185 741 194 723 191 708 201 690 196 675 207 658 203 645 193 627 193 611 185 594 183 580 173 563 172 548 162 531 160 519 149Z',
  'M627 190 643 194 651 207 648 222 641 233 635 220 630 207Z',
  'M803 189 810 194 808 205 802 210 798 201Z',
  'M679 232 694 238 708 243 721 241 735 250 730 261 716 266 700 261 687 255 678 245Z',
  'M791 319C801 310 815 307 828 311L846 307 863 315 876 327 869 341 854 349 837 345 822 348 808 339 797 333Z',
  'M563 207 568 210 567 217 562 219Z',
  'M658 198 662 201 661 207 657 205Z',
]

/* A curved route from the hub to a location, bulging upwards. */
function routePath(from, to) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const dist = Math.hypot(dx, dy)
  let nx = dy / dist
  let ny = -dx / dist
  if (ny > 0) {
    nx = -nx
    ny = -ny
  }
  const lift = dist * 0.32
  const cx = (from.x + to.x) / 2 + nx * lift
  const cy = (from.y + to.y) / 2 + ny * lift
  return `M${from.x} ${from.y}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x} ${to.y}`
}

const routes = sampleMapLocations.slice(1).map((location) => ({ name: location.name, d: routePath(hub, location) }))

export default function Presence() {
  const [hovered, setHovered] = useState(null)
  const [pinned, setPinned] = useState(null)
  const active = hovered ?? pinned
  /* The hub is the route origin, so hovering it must not dim every route. */
  const hubActive = active === hub.name
  const dimOthers = Boolean(active) && !hubActive

  return (
    <>
      <section className="section" aria-labelledby="presence-title">
        <div className="container split">
          <Reveal>
            <SectionHeading
              id="presence-title"
              eyebrow="Distributed teams"
              title="Keep customer work connected across regions."
              intro="This illustrative map shows sample regions and locations. Its markers do not represent real customers or service availability."
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="prose__label">Example CRM regions</p>
            <ul className="chips">
              {markets.map((m) => (
                <li key={m} className="chip">
                  {m}
                </li>
              ))}
            </ul>
            <p className="prose__label">Illustrative deployment choices</p>
            <ul className="chips">
              {deployment.map((d) => (
                <li key={d} className="chip chip--accent">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="container">
          <figure className="pm" data-dim={dimOthers ? '' : undefined} aria-labelledby="presence-map-title">
            <figcaption className="pm__head">
              <div>
                <h3 className="pm__title" id="presence-map-title">A connected view of sample markets</h3>
                <p className="pm__desc">Illustrative CRM locations and activity routes. Select a location to follow its route.</p>
              </div>
              <span className="pm__badge"><i aria-hidden="true" />Sample data</span>
            </figcaption>

            <div className="pm__body">
              <svg
                className="pm__art"
                viewBox="0 0 960 420"
                role="img"
                aria-labelledby="presence-map-svg-title presence-map-svg-desc"
              >
                <title id="presence-map-svg-title">Illustrative CRM market activity map</title>
                <desc id="presence-map-svg-desc">
                  A dark dot-matrix world map with seven labeled sample locations connected to a United States hub by
                  glowing routes. It does not show real customers, offices, or service availability.
                </desc>
                <defs>
                  <pattern id="pm-dots" width="9" height="9" patternUnits="userSpaceOnUse">
                    <circle cx="4.5" cy="4.5" r="1.9" style={{ fill: 'rgba(205, 190, 255, 0.6)' }} />
                  </pattern>
                  <linearGradient id="pm-route" gradientUnits="userSpaceOnUse" x1="200" y1="0" x2="860" y2="0">
                    <stop offset="0" stopColor="#B79CFF" />
                    <stop offset="1" stopColor="#8BC7FB" />
                  </linearGradient>
                  <radialGradient id="pm-glow">
                    <stop offset="0" stopColor="#926CF3" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#926CF3" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <path className="pm__grat" aria-hidden="true" d="M0 105H960M0 210H960M0 315H960M160 0V420M320 0V420M480 0V420M640 0V420M800 0V420" />
                <circle cx={hub.x} cy={hub.y} r="110" fill="url(#pm-glow)" aria-hidden="true" />

                <g className="pm__land-base" aria-hidden="true">
                  {landPaths.map((d) => <path key={d} d={d} />)}
                </g>
                <g fill="url(#pm-dots)" aria-hidden="true">
                  {landPaths.map((d) => <path key={d} d={d} />)}
                </g>

                <g aria-hidden="true">
                  {routes.map((route) => (
                    <g key={route.name} className={`pm__route-group${active === route.name || hubActive ? ' is-active' : ''}`}>
                      <path className="pm__route-base" d={route.d} />
                      <path className="pm__route" d={route.d} />
                    </g>
                  ))}
                </g>

                <g>
                  {sampleMapLocations.map((location, index) => (
                    <g
                      key={location.name}
                      className={`pm__marker${index === 0 ? ' pm__marker--hub' : ''}${active === location.name ? ' is-active' : ''}`}
                      transform={`translate(${location.x} ${location.y})`}
                      onClick={() => setPinned((current) => (current === location.name ? null : location.name))}
                      onMouseEnter={() => setHovered(location.name)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <title>{location.name} sample location</title>
                      <circle className="pm__hit" r={index === 0 ? 24 : 18} />
                      <circle className="pm__halo" r={index === 0 ? 16 : 11} style={{ animationDelay: `${index * -0.4}s` }} />
                      <circle className="pm__dot" r={index === 0 ? 6 : 4.5} />
                      <text className="pm__label" x={location.dx} y={location.dy} textAnchor={location.anchor}>{location.name}</text>
                    </g>
                  ))}
                </g>
              </svg>

              <ul className="pm__list">
                {sampleMapLocations.map((location, index) => (
                  <li key={location.name}>
                    <button
                      type="button"
                      className={`pm__loc${active === location.name ? ' is-active' : ''}`}
                      aria-pressed={pinned === location.name}
                      onMouseEnter={() => setHovered(location.name)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(location.name)}
                      onBlur={() => setHovered(null)}
                      onClick={() => setPinned((current) => (current === location.name ? null : location.name))}
                    >
                      <span className="pm__loc-dot" aria-hidden="true" />
                      <span className="pm__loc-name">{location.name}</span>
                      <span className="pm__loc-tag">{index === 0 ? 'Route origin' : 'Sample route'}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pm__foot">
              <span><strong>{markets.length}</strong> sample markets</span>
              <span><strong>{sampleMapLocations.length}</strong> map locations</span>
              <span>Illustrative data only</span>
            </div>
          </figure>
        </div>
      </section>
    </>
  )
}
