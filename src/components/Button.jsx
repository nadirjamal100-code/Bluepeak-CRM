import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

/**
 * variant: primary | light | ghost | outline
 * Pass `to` for internal routes, `href` for external/mailto links.
 */
export default function Button({
  variant = 'primary',
  to,
  href,
  icon = true,
  className = '',
  children,
  ...rest
}) {
  const cls = `btn btn--${variant} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={18} />}
    </>
  )
  if (to) {
    return (
      <Link className={cls} to={to} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  )
}
