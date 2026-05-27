import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react'
import LogoMark from './LogoMark.jsx'
import { contactConfig } from '../config/contact.js'

export default function Footer() {
  const waUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <LogoMark size={36} />
              <div className="footer-brand-name">KrediOne</div>
            </div>
            <p className="footer-brand-desc">
              {contactConfig.tagline}. Kami berkomitmen memberikan informasi yang transparan dan layanan yang bertanggung jawab.
            </p>
            <div className="footer-legal">
              {contactConfig.legalNotice}
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navigasi</div>
            <div className="footer-links">
              <a href="#layanan" className="footer-link">Layanan</a>
              <a href="#tentang" className="footer-link">Tentang</a>
              <a href="#keunggulan" className="footer-link">Keunggulan</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Kontak</div>
            <div>
              <div className="footer-contact-item">
                <Phone size={14} aria-hidden="true" />
                <span>{contactConfig.displayPhone}</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} aria-hidden="true" />
                <span>{contactConfig.email}</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={14} aria-hidden="true" />
                <span>{contactConfig.operationalHours}</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={14} aria-hidden="true" />
                <span>{contactConfig.address}</span>
              </div>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                marginTop: 'var(--space-4)',
                padding: 'var(--space-2) var(--space-4)',
                background: '#25d366',
                color: '#ffffff',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: '600',
              }}
              aria-label="Hubungi kami via WhatsApp"
            >
              <MessageCircle size={14} aria-hidden="true" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} {contactConfig.serviceName}. Hak cipta dilindungi undang-undang.
          </p>
          <div className="footer-bottom-links">
            {contactConfig.footerLinks.map((link, i) => (
              <a key={i} href={link.href} className="footer-bottom-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
