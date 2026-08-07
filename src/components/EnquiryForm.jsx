import { useState } from 'react'
import Button from './Button'
import { CONTACT } from '../data/site'

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: false },
]

const EMPTY = { name: '', email: '', phone: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please tell us a little about your enquiry.'
  return errors
}

// Interim transport: composes a prefilled email to Toby. There is no backend in
// this project yet and Acuity Scheduling is not integrated, so this hands the
// enquiry to the visitor's mail client rather than silently dropping it. Swap
// the `onSubmit` prop for a real endpoint when one exists.
function mailtoTransport(values) {
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || '—'}`,
    '',
    values.message,
  ].join('\n')

  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Website enquiry from ${values.name}`,
  )}&body=${encodeURIComponent(body)}`
}

function EnquiryForm({ onSubmit = mailtoTransport }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    // Clear a field's error as soon as the visitor starts correcting it
    setErrors((current) => (current[name] ? { ...current, [name]: undefined } : current))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      await onSubmit(values)
      setValues(EMPTY)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      {FIELDS.map(({ name, label, type, required }) => (
        <div className="field" key={name}>
          <label htmlFor={`enquiry-${name}`}>
            {label}
            {required ? ' (required)' : ' (optional)'}
          </label>
          <input
            id={`enquiry-${name}`}
            name={name}
            type={type}
            placeholder={label}
            value={values[name]}
            onChange={handleChange}
            aria-invalid={errors[name] ? 'true' : undefined}
            aria-describedby={errors[name] ? `enquiry-${name}-error` : undefined}
          />
          {errors[name] && (
            <span className="field-error" id={`enquiry-${name}-error`}>
              {errors[name]}
            </span>
          )}
        </div>
      ))}

      <div className="field">
        <label htmlFor="enquiry-message">Message (required)</label>
        <textarea
          id="enquiry-message"
          name="message"
          placeholder="Message"
          rows={3}
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
        />
        {errors.message && (
          <span className="field-error" id="enquiry-message-error">
            {errors.message}
          </span>
        )}
      </div>

      <Button type="submit" variant="green" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Submit'}
      </Button>

      {/* aria-live so the outcome is announced without moving focus */}
      <p className={`form-status ${status === 'error' ? 'error' : ''}`} role="status" aria-live="polite">
        {status === 'success' &&
          'Thanks — your email client should now be open with your enquiry ready to send.'}
        {status === 'error' &&
          Object.keys(errors).length > 0 &&
          'Please check the highlighted fields and try again.'}
      </p>
    </form>
  )
}

export default EnquiryForm
