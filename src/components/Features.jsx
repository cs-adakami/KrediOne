import { Shield, Clock, Award, Star } from 'lucide-react'
import { contactConfig } from '../config/contact.js'

const iconMap = {
  Shield,
  Clock,
  Award,
  Star,
}

export default function Features() {
  return (
    <section id="keunggulan" className="features-section" aria-labelledby="features-title">
      <div className="container">
        <div className="section-header center">
          <div className="section-label">
            <Star size={13} />
            <span>Keunggulan Kami</span>
          </div>
          <h2 id="features-title" className="section-title">Mengapa Memilih Layanan Kami?</h2>
          <p className="section-desc">
            Kami berkomitmen untuk memberikan pengalaman layanan yang terbaik, transparan, dan bertanggung jawab.
          </p>
        </div>

        <div className="features-grid" role="list">
          {contactConfig.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Shield
            return (
              <div key={i} className="feature-card" role="listitem">
                <div className="feature-icon" aria-hidden="true">
                  <Icon size={26} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
