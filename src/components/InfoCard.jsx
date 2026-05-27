import { Clock, Phone, Mail, MapPin, CheckCircle, Info } from 'lucide-react'
import { contactConfig } from '../config/contact.js'

export default function InfoCard() {
  return (
    <section id="tentang" className="info-section" aria-labelledby="about-title">
      <div className="container">
        <div className="info-inner">
          <div className="info-content">
            <div className="section-label">
              <Info size={13} />
              <span>Tentang Layanan</span>
            </div>
            <h2 id="about-title" className="section-title">
              Informasi Layanan Kami
            </h2>
            <p className="section-desc">
              KrediOne berkomitmen memberikan informasi yang transparan dan akurat untuk membantu kebutuhan Anda.
            </p>

            <div className="info-badges">
              <span className="info-badge green">
                <CheckCircle size={12} />
                Informasi Transparan
              </span>
              <span className="info-badge blue">
                <CheckCircle size={12} />
                Layanan Profesional
              </span>
              <span className="info-badge amber">
                <CheckCircle size={12} />
                Respon Cepat
              </span>
            </div>

            <div className="info-list">
              {[
                'Informasi layanan yang jelas dan lengkap',
                'Panduan penggunaan yang mudah dipahami',
                'Transparansi status dan perkembangan',
                'Dukungan sepanjang proses',
              ].map((item, i) => (
                <div key={i} className="info-list-item">
                  <div className="info-list-dot" aria-hidden="true">
                    <CheckCircle size={12} />
                  </div>
                  <p className="info-list-text">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card-box">
            <div className="section-label" style={{ marginBottom: 'var(--space-5)' }}>
              <Phone size={13} />
              <span>Kontak Layanan</span>
            </div>
            <div className="info-card-detail">
              <div className="info-detail-row">
                <div className="info-detail-icon" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="info-detail-label">WhatsApp</div>
                  <div className="info-detail-value">{contactConfig.displayPhone}</div>
                </div>
              </div>
              <div className="info-detail-row">
                <div className="info-detail-icon" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="info-detail-label">Email</div>
                  <div className="info-detail-value">{contactConfig.email}</div>
                </div>
              </div>
              <div className="info-detail-row">
                <div className="info-detail-icon" aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="info-detail-label">Jam Operasional</div>
                  <div className="info-detail-value">{contactConfig.operationalHours}</div>
                </div>
              </div>
              <div className="info-detail-row">
                <div className="info-detail-icon" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="info-detail-label">Lokasi</div>
                  <div className="info-detail-value">{contactConfig.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
