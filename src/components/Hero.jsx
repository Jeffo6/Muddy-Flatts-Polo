// Full-bleed hero. The Home variant carries the two-line brand lockup split by
// a rule; interior pages pass a single `title` and get the shorter 600px band
// Figma uses at the top of each sub-page.
//
// The rule is a border on the second line rather than an <hr>, which would be
// invalid flow content inside a heading.
function Hero({ image, title, secondTitle, variant = 'full' }) {
  return (
    <section
      className={`hero ${variant === 'page' ? 'hero--page' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-lockup">
        <h1>
          <span className="hero-line">{title}</span>
          {secondTitle && <span className="hero-line">{secondTitle}</span>}
        </h1>
      </div>
    </section>
  )
}

export default Hero
