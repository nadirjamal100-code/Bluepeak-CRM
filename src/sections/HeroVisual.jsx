export default function HeroVisual() {
  return (
    <svg className="hero-visual" viewBox="0 0 520 420" role="img" aria-labelledby="hero-crm-title hero-crm-desc">
      <title id="hero-crm-title">BluePeak CRM customer relationship hub</title>
      <desc id="hero-crm-desc">
        A floating customer profile connects a sample lead, sales opportunity, and follow-up reminder.
      </desc>

      <defs>
        <linearGradient id="hero-crm-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6901AC" />
          <stop offset="52%" stopColor="#464EDF" />
          <stop offset="100%" stopColor="#0F5FDC" />
        </linearGradient>
        <linearGradient id="hero-crm-chart" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#926CF3" />
          <stop offset="100%" stopColor="#8BC7FB" />
        </linearGradient>
        <filter id="hero-crm-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#6901AC" floodOpacity="0.24" />
        </filter>
      </defs>

      <circle className="hv-glow" cx="263" cy="212" r="178" />
      <ellipse className="hv-orbit" cx="260" cy="210" rx="228" ry="145" transform="rotate(-16 260 210)" />
      <path className="hv-route" d="M92 168C127 111 172 82 231 102s119 41 176 7M356 107c50 47 62 107 36 160" />
      <circle className="hv-node" cx="92" cy="168" r="5" />
      <circle className="hv-node hv-node--delay" cx="407" cy="109" r="5" />
      <circle className="hv-node hv-node--delay" cx="392" cy="267" r="5" />

      <g className="hv-main">
        <rect
          className="hv-panel"
          x="105"
          y="88"
          width="310"
          height="265"
          rx="24"
          filter="url(#hero-crm-shadow)"
        />
        <path
          className="hv-panel-head"
          d="M129 88h262a24 24 0 0 1 24 24v34H105v-34a24 24 0 0 1 24-24Z"
        />
        <circle className="hv-brand-mark" cx="131" cy="116" r="11" />
        <path className="hv-brand-path" d="m125 120 5-9 4 6 3-4 5 7h-17Z" />
        <text className="hv-kicker" x="151" y="119">CUSTOMER 360</text>
        <circle className="hv-header-dot" cx="389" cy="116" r="3" />

        <circle className="hv-profile-avatar" cx="151" cy="184" r="27" />
        <text className="hv-avatar-initials" x="151" y="188" textAnchor="middle">AM</text>
        <text className="hv-name" x="190" y="178">Alex Morgan</text>
        <text className="hv-muted" x="190" y="194">Northstar &amp; Co.</text>
        <rect className="hv-status-pill" x="190" y="202" width="89" height="18" rx="9" />
        <circle className="hv-status-dot" cx="201" cy="211" r="3" />
        <text className="hv-status-text" x="209" y="214">ACTIVE CUSTOMER</text>

        <path className="hv-divider" d="M128 235h264" />
        <text className="hv-section-label" x="130" y="254">OPEN OPPORTUNITY</text>
        <text className="hv-metric" x="130" y="276">$24,800</text>
        <text className="hv-muted hv-close-rate" x="389" y="273" textAnchor="end">68% to goal</text>
        <rect className="hv-meter-track" x="130" y="286" width="260" height="7" rx="3.5" />
        <rect
          className="hv-meter-fill"
          x="130"
          y="286"
          width="177"
          height="7"
          rx="3.5"
        />

        <path className="hv-divider" d="M128 307h264" />
        <text className="hv-section-label" x="130" y="326">NEXT STEP</text>
        <text className="hv-next-step" x="130" y="341">Send proposal</text>
      </g>

      <g className="hv-float hv-float--lead">
        <rect className="hv-mini-panel" x="4" y="129" width="164" height="91" rx="17" />
        <circle className="hv-mini-avatar" cx="31" cy="158" r="15" />
        <text className="hv-mini-avatar-text" x="31" y="161" textAnchor="middle">JP</text>
        <text className="hv-mini-title" x="54" y="155">NEW LEAD</text>
        <text className="hv-mini-text" x="54" y="170">Jamie Patel</text>
        <path className="hv-divider" d="M20 183h132" />
        <circle className="hv-status-dot" cx="24" cy="199" r="3" />
        <text className="hv-mini-note" x="33" y="202">Website inquiry · just now</text>
      </g>

      <g className="hv-float hv-float--deal">
        <rect className="hv-mini-panel" x="352" y="24" width="160" height="88" rx="17" />
        <circle className="hv-mini-icon-bg" cx="378" cy="51" r="14" />
        <path className="hv-mini-icon" d="M372 56v-9m6 9v-14m6 14v-5" />
        <text className="hv-mini-title" x="401" y="49">DEAL UPDATED</text>
        <text className="hv-mini-text" x="372" y="78">$24.8k pipeline</text>
        <rect className="hv-mini-meter" x="372" y="88" width="119" height="5" rx="2.5" />
        <rect
          className="hv-mini-meter-fill"
          x="372"
          y="88"
          width="81"
          height="5"
          rx="2.5"
        />
      </g>

      <g className="hv-float hv-float--followup">
        <rect className="hv-mini-panel" x="357" y="294" width="158" height="91" rx="17" />
        <circle className="hv-mini-icon-bg" cx="383" cy="322" r="14" />
        <rect className="hv-calendar" x="377" y="316" width="12" height="12" rx="2" />
        <path className="hv-calendar-line" d="M380 314v4m6-4v4m-9 2h12" />
        <text className="hv-mini-title" x="406" y="320">FOLLOW-UP</text>
        <text className="hv-mini-text" x="377" y="348">Today · 2:30 PM</text>
        <text className="hv-mini-note" x="377" y="366">Proposal review</text>
      </g>

      <circle className="hv-node-ring" cx="280" cy="66" r="9" />
      <circle className="hv-node hv-node--delay" cx="280" cy="66" r="4" />
      <circle className="hv-node-ring hv-node-ring--delay" cx="468" cy="160" r="9" />
      <circle className="hv-node" cx="468" cy="160" r="4" />
      <circle className="hv-node-ring hv-node-ring--delay" cx="57" cy="294" r="9" />
      <circle className="hv-node" cx="57" cy="294" r="4" />
    </svg>
  )
}
