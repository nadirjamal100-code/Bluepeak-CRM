import { useState } from 'react'
import { EMAIL } from '../data/site'
import { ArrowRight, Check, Copy } from './Icons'
import '../styles/contact-form.css'

/**
 * Contact form for a static site with no backend.
 * On submit it validates, then opens the visitor's email app with the message filled in.
 * Nothing is sent from the page itself, and the success view says so.
 */

const EMAIL_SUBJECT = 'Hello from the BluePeak website'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const initialValues = { name: '', email: '', company: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!values.email.trim()) errors.email = 'Enter your work email.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter an email address like name@company.com.'
  if (values.message.trim().length < 10) errors.message = 'Write a short message, at least 10 characters.'
  return errors
}

function compose(values) {
  const lines = ['Hi BluePeak team,', '', values.message.trim(), '', `Name: ${values.name.trim()}`, `Work email: ${values.email.trim()}`]
  if (values.company.trim()) lines.push(`Company: ${values.company.trim()}`)
  const body = lines.join('\r\n')
  return {
    subject: EMAIL_SUBJECT,
    body,
    href: `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(body)}`,
  }
}

function Field({ id, label, error, optional = false, wide = false, children }) {
  return (
    <div className={`ip-field${wide ? ' ip-field--wide' : ''}${error ? ' ip-field--error' : ''}`}>
      <label className="ip-field__label" htmlFor={id}>
        {label}
        {optional && <span className="ip-field__opt"> (optional)</span>}
      </label>
      {children}
      {error && <p className="ip-field__error" id={`${id}-error`}>{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const mail = compose(values)

  const update = (key) => (event) => {
    const value = event.target.value
    setValues((current) => ({ ...current, [key]: value }))
    if (errors[key]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[key]
        return next
      })
    }
  }

  const submit = (event) => {
    event.preventDefault()
    const next = validate(values)
    setErrors(next)
    const firstInvalid = ['name', 'email', 'message'].find((key) => next[key])
    if (firstInvalid) {
      document.getElementById(`cf-${firstInvalid}`)?.focus()
      return
    }
    setSent(true)
    window.location.href = mail.href
  }

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${EMAIL}\nSubject: ${mail.subject}\n\n${mail.body}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* Clipboard blocked: the visible message can still be selected by hand. */
    }
  }

  if (sent) {
    return (
      <div className="ip-form ip-sent" role="status">
        <span className="ip-sent__icon"><Check size={26} /></span>
        <h2 className="ip-form__title">Your email is ready to send.</h2>
        <p className="ip-form__intro">
          We opened your email app with this message filled in. Nothing is sent until you press send there.
        </p>
        <div className="ip-sent__preview">
          <p className="ip-sent__meta"><b>To:</b> {EMAIL}</p>
          <p className="ip-sent__meta"><b>Subject:</b> {mail.subject}</p>
          <p className="ip-sent__body">{mail.body}</p>
        </div>
        <div className="ip-form__submit">
          <a className="btn btn--primary" href={mail.href}><span>Open email again</span><ArrowRight size={18} /></a>
          <button type="button" className="ip-sent__copy" onClick={copyMessage}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied' : 'Copy message'}</span>
          </button>
          <button type="button" className="ip-textlink ip-sent__edit" onClick={() => setSent(false)}>Edit message</button>
        </div>
        <p className="ip-form__note">Nothing happened? Copy the message and send it to {EMAIL} from any email service.</p>
      </div>
    )
  }

  return (
    <form className="ip-form" onSubmit={submit} noValidate>
      <h2 className="ip-form__title">Send us a message</h2>
      <p className="ip-form__intro">Tell us what you need. We will open your email app with everything filled in.</p>

      <div className="ip-form__grid">
        <Field id="cf-name" label="Your name" error={errors.name}>
          <input id="cf-name" className="ip-input" type="text" autoComplete="name" value={values.name} onChange={update('name')} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'cf-name-error' : undefined} />
        </Field>
        <Field id="cf-email" label="Work email" error={errors.email}>
          <input id="cf-email" className="ip-input" type="email" autoComplete="email" placeholder="name@company.com" value={values.email} onChange={update('email')} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'cf-email-error' : undefined} />
        </Field>
        <Field id="cf-company" label="Company" optional wide>
          <input id="cf-company" className="ip-input" type="text" autoComplete="organization" value={values.company} onChange={update('company')} />
        </Field>
        <Field id="cf-message" label="Your message" error={errors.message} wide>
          <textarea id="cf-message" className="ip-input" rows={5} placeholder="What would you like to see in the preview?" value={values.message} onChange={update('message')} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'cf-message-error' : undefined} />
        </Field>
      </div>

      <div className="ip-form__submit">
        <button type="submit" className="btn btn--primary"><span>Prepare my email</span><ArrowRight size={18} /></button>
      </div>
      <p className="ip-form__note">This opens your email app with your message ready to send. Nothing is sent from this page.</p>
    </form>
  )
}
