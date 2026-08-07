import { Link } from 'react-router-dom'

// Single entry point for the `.btn` pattern so the inner <span> — which the
// slide-up hover fill in App.scss depends on — is never omitted by accident.
// Renders as a router Link, a plain anchor, or a real <button> depending on
// which of `to` / `href` is supplied.
// `className` is merged rather than spread over: react-awesome-reveal clones
// its children and injects its own animation class, which would otherwise
// clobber `btn <variant>` and strip the button of all styling.
function Button({ to, href, variant = 'red', type = 'button', className = '', children, ...rest }) {
  const classes = ['btn', variant, className].filter(Boolean).join(' ')
  const label = <span>{children}</span>

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {label}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {label}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {label}
    </button>
  )
}

export default Button
