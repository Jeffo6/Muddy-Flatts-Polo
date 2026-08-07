// Full-bleed hero. The Home variant carries the two-line brand lockup split by
// a rule; interior pages pass a single `title` and get the shorter 600px band
// Figma uses at the top of each sub-page.
//
// The rule is a <span> rather than an <hr> — <hr> is flow content and would be
// invalid inside a heading — which also lets it animate independently.
function Hero({ image, title, secondTitle, variant = 'full' }) {
  const isSplit = Boolean(secondTitle)

  return (
    <section
      className={`hero ${variant === 'page' ? 'hero--page' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`hero-lockup ${isSplit ? 'hero-lockup--split' : ''}`}>
        <h1>
          <span className="hero-line hero-line--up">{title}</span>
          {isSplit && (
            <>
              <span className="hero-rule" aria-hidden="true" />
              <span className="hero-line hero-line--down">{secondTitle}</span>
            </>
          )}
        </h1>
      </div>
    </section>
  )
}

export default Hero
