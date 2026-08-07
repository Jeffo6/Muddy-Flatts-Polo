import Button from '../components/Button'

// Not in Figma — added because client-side routing makes unknown URLs
// reachable. Uses the established type scale and button pattern only.
function NotFound() {
  return (
    <section className="container ptxxl pbxxl tac">
      <h2 className="pbs">Page not found</h2>
      <p className="pbl">
        That page doesn&apos;t exist. Head back to the homepage, or get in touch and we&apos;ll point
        you the right way.
      </p>
      <Button to="/" variant="red">
        Back to Home
      </Button>
    </section>
  )
}

export default NotFound
