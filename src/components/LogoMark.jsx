import { useState } from 'react'
import { contactConfig } from '../config/contact.js'

export default function LogoMark({ size = 40 }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="logo-mark"
      style={{ width: size, height: size }}
      aria-label={`${contactConfig.serviceName} logo`}
    >
      {!imgError ? (
        <img
          src="/logoweb.png"
          alt={contactConfig.serviceName}
          onError={() => setImgError(true)}
        />
      ) : (
        <span style={{ fontSize: size * 0.45 }}>K</span>
      )}
    </div>
  )
}
