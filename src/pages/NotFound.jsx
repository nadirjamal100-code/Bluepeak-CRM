import { useEffect } from 'react'
import usePageMeta from '../hooks/usePageMeta'
import Button from '../components/Button'

export default function NotFound() {
  usePageMeta({
    title: 'Page not found | BluePeak Demo',
    description: 'The sample page you requested could not be found.',
    path: '/404',
  })

  useEffect(() => {
    // Tell crawlers this client-rendered view is not an indexable page.
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <section className="section not-found">
      <div className="container container--narrow center">
        <p className="eyebrow">Error 404</p>
        <h1>This sample page could not be found.</h1>
        <p className="section-heading__intro">The demo link may be outdated or the page may have moved.</p>
        <div className="not-found__actions">
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </section>
  )
}
