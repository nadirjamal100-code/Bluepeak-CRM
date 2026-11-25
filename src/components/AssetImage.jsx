import { useState } from 'react'

/** Image that degrades to `fallback` if the asset has not been downloaded yet. */
export default function AssetImage({ src, alt, fallback = null, ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed) return fallback
  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} {...rest} />
}
