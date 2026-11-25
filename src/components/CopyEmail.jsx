import { useState } from 'react'
import { EMAIL } from '../data/site'
import { Copy, Check } from './Icons'

export default function CopyEmail({ className = '' }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <span className={`copy-email ${className}`.trim()}>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <button type="button" onClick={copy} aria-label="Copy email address">
        {copied ? <Check size={16} /> : <Copy size={16} />}
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </span>
  )
}
