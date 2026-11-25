import { useEffect } from 'react'
import { SITE_URL, SITE_NAME, TWITTER_HANDLE } from '../data/site'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(data) {
  const id = 'page-json-ld'
  let el = document.getElementById(id)
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Client-side page metadata. For crawlers that do not execute JavaScript, plan
 * build-time prerendering (see README → SEO).
 */
export default function usePageMeta({ title, description, path = '/', jsonLd = null }) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', 'index, follow')
    setCanonical(url)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:site', TWITTER_HANDLE)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setJsonLd(jsonLd)
  }, [title, description, path, jsonLd])
}
