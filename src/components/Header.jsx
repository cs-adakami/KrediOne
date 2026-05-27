import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import LogoMark from './LogoMark.jsx'
import { contactConfig } from '../config/contact.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="header-inner">
          <a href="/" className="header-brand" aria-label={`${contactConfig.serviceName} - Beranda`}>
            <LogoMark size={40} />
            <div>
              <div className="header-brand-name">
                Kredi<span>One</span>
              </div>
              <div className="header-tagline">Pusat Layanan Bantuan</div>
            </div>
          </a>

          <a
            href={waUrl}
            className="header-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi kami via WhatsApp"
          >
            <MessageCircle size={16} />
            <span>Hubungi Kami</span>
          </a>
        </div>
      </div>
    </header>
  )
}
