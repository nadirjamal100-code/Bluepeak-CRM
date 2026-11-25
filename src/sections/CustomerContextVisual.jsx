export default function CustomerContextVisual() {
  return (
    <svg
      className="customer-context-visual"
      viewBox="0 0 620 440"
      role="img"
      aria-labelledby="customer-context-title customer-context-description"
    >
      <title id="customer-context-title">Customer relationship details connected in one CRM</title>
      <desc id="customer-context-description">
        A customer profile connects to notes, pipeline progress, recent activity, and a follow-up task.
      </desc>
      <defs>
        <linearGradient id="customer-context-avatar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#926CF3" />
          <stop offset="100%" stopColor="#0F5FDC" />
        </linearGradient>
        <linearGradient id="customer-context-flow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#926CF3" stopOpacity="0.14" />
          <stop offset="50%" stopColor="#6901AC" stopOpacity="0.58" />
          <stop offset="100%" stopColor="#0F5FDC" stopOpacity="0.2" />
        </linearGradient>
        <filter id="customer-context-shadow" x="-35%" y="-35%" width="170%" height="170%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#6901AC" floodOpacity="0.14" />
        </filter>
      </defs>

      <path className="customer-context-visual__flow" d="M91 125C166 37 237 55 269 145" />
      <path className="customer-context-visual__flow" d="M529 125C454 37 383 55 351 145" />
      <path className="customer-context-visual__flow" d="M91 315c75 88 146 70 178-20" />
      <path className="customer-context-visual__flow" d="M529 315c-75 88-146 70-178-20" />

      <g className="customer-context-visual__node customer-context-visual__node--notes">
        <circle className="customer-context-visual__node-bg" cx="104" cy="112" r="36" filter="url(#customer-context-shadow)" />
        <path className="customer-context-visual__icon" d="M91 98h20l8 8v22H91zM111 98v9h8m-22 5h14m-14 6h14" />
        <text className="customer-context-visual__label" x="104" y="169">NOTES</text>
      </g>

      <g className="customer-context-visual__node customer-context-visual__node--pipeline">
        <circle className="customer-context-visual__node-bg" cx="516" cy="112" r="36" filter="url(#customer-context-shadow)" />
        <path className="customer-context-visual__icon" d="M500 128v-12h8v12m5 0V99h8v29m5 0v-19h8v19" />
        <text className="customer-context-visual__label" x="516" y="169">PIPELINE</text>
      </g>

      <g className="customer-context-visual__node customer-context-visual__node--activity">
        <circle className="customer-context-visual__node-bg" cx="104" cy="328" r="36" filter="url(#customer-context-shadow)" />
        <path className="customer-context-visual__icon" d="M87 328h9l6-14 10 29 7-17 5 2h7" />
        <text className="customer-context-visual__label" x="104" y="385">ACTIVITY</text>
      </g>

      <g className="customer-context-visual__node customer-context-visual__node--task">
        <circle className="customer-context-visual__node-bg" cx="516" cy="328" r="36" filter="url(#customer-context-shadow)" />
        <rect className="customer-context-visual__icon" x="502" y="311" width="28" height="28" rx="5" />
        <path className="customer-context-visual__icon" d="m508 325 5 5 11-12m-16-13v8m16-8v8" />
        <text className="customer-context-visual__label" x="516" y="385">NEXT STEP</text>
      </g>

      <circle className="customer-context-visual__halo" cx="310" cy="220" r="110" />
      <circle className="customer-context-visual__hub-ring" cx="310" cy="220" r="92" />
      <circle className="customer-context-visual__avatar" cx="310" cy="191" r="51" />
      <circle className="customer-context-visual__person-head" cx="310" cy="177" r="14" />
      <path className="customer-context-visual__person-body" d="M281 216c3-23 55-23 58 0" />
      <text className="customer-context-visual__hub-label" x="310" y="258">CUSTOMER 360</text>
      <text className="customer-context-visual__hub-detail" x="310" y="278">ALEX MORGAN</text>
    </svg>
  )
}
