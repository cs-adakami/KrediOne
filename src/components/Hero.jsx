import { MessageCircle, ChevronDown, CheckCircle, Headphones } from 'lucide-react'
import { contactConfig } from '../config/contact.js'

export default function Hero() {
  const waUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`

  const scrollToServices = () => {
    document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <CheckCircle size={13} />
              <span>Pusat Bantuan Resmi</span>
            </div>

            <h1 id="hero-title" className="hero-title">
              Pusat Bantuan <span>KrediOne</span>
            </h1>

            <p className="hero-desc">
              {contactConfig.description}
            </p>

            <div className="hero-actions">
              <a
                href={waUrl}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi tim layanan via WhatsApp"
              >
                <MessageCircle size={18} />
                <span>Hubungi Tim Layanan</span>
              </a>
              <button
                className="btn-secondary"
                onClick={scrollToServices}
                aria-label="Lihat layanan yang tersedia"
              >
                <span>Lihat Layanan</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="hero-stats" role="list" aria-label="Statistik layanan">
              {contactConfig.stats.map((stat, i) => (
                <div key={i} className="hero-stat" role="listitem">
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-icon">
                  <Headphones size={24} />
                </div>
                <div>
                  <div className="hero-card-title">Tim Layanan Kami</div>
                  <div className="hero-card-subtitle">{contactConfig.operationalHours}</div>
                </div>
              </div>
              <div className="hero-card-items">
                {[
                  'Informasi layanan lengkap',
                  'Panduan penggunaan',
                  'Status permintaan Anda',
                  'Pertanyaan & konsultasi',
                ].map((item, i) => (
                  <div key={i} className="hero-card-item">
                    <div className="hero-card-item-dot" />
                    <div className="hero-card-item-text">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
