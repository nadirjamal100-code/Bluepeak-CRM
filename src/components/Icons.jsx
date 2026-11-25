const make = (paths) =>
  function Icon({ size = 20, ...props }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        {...props}
      >
        {paths}
      </svg>
    )
  }

export const ArrowRight = make(<path d="M5 12h14M13 6l6 6-6 6" />)
export const Chevron = make(<path d="m6 9 6 6 6-6" />)
export const MenuIcon = make(<path d="M4 7h16M4 12h16M4 17h16" />)
export const CloseIcon = make(<path d="M6 6l12 12M18 6 6 18" />)
export const Plus = make(<path d="M12 5v14M5 12h14" />)
export const Mail = make(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>,
)
export const MapPin = make(
  <>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </>,
)
export const Copy = make(
  <>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </>,
)
export const Check = make(<path d="m5 12.5 4.5 4.5L19 7.5" />)
export const Building = make(
  <>
    <path d="M4 21V9l8-5 8 5v12M2 21h20" />
    <path d="M9 21v-6h6v6M8 11h.01M12 11h.01M16 11h.01" />
  </>,
)
export const Umbrella = make(
  <>
    <path d="M3 12a9 9 0 0 1 18 0H3Z" />
    <path d="M12 12v6a2.5 2.5 0 0 0 5 0" />
  </>,
)
export const Heart = make(
  <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.2 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />,
)
export const Layers = make(
  <>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </>,
)
export const Wallet = make(
  <>
    <path d="M4 7a2 2 0 0 1 2-2h12v4" />
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M16 13.5h2" />
  </>,
)
export const Chart = make(
  <>
    <path d="M4 20V4M4 20h16" />
    <path d="m8 15 3-4 3 2 4-6" />
  </>,
)
export const Headset = make(
  <>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1.5" />
    <rect x="17" y="14" width="4" height="6" rx="1.5" />
    <path d="M19 20a4 4 0 0 1-4 2h-2" />
  </>,
)
export const Bot = make(
  <>
    <rect x="4" y="8" width="16" height="12" rx="3" />
    <path d="M12 8V4M9 13.5h.01M15 13.5h.01M9.5 17h5" />
  </>,
)
export const Shield = make(
  <>
    <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </>,
)

export const iconMap = {
  building: Building,
  umbrella: Umbrella,
  heart: Heart,
  mail: Mail,
  mapPin: MapPin,
  layers: Layers,
  wallet: Wallet,
  chart: Chart,
  headset: Headset,
  bot: Bot,
  shield: Shield,
}
