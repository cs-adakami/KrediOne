import {
  FileText, ClipboardList, Search, HelpCircle,
  MessageCircle,
} from 'lucide-react'
import { contactConfig } from '../config/contact.js'

const iconMap = {
  FileText,
  ClipboardList,
  Search,
  HelpCircle,
}

export default function MenuCard() {
  const waUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`

  return (
    <section id="layanan" className="menu-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header center">
          <div className="section-label">
            <MessageCircle size={13} />
            <span>Layanan Kami</span>
          </div>
          <h2 id="services-title" className="section-title">Apa yang Bisa Kami Bantu?</h2>
          <p className="section-desc">
            Tim layanan kami siap memberikan informasi dan panduan yang Anda butuhkan.
          </p>
        </div>

        <div className="menu-grid" role="list">
          {contactConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || HelpCircle
            return (
              <a
                key={i}
                href={waUrl}
                className="menu-card"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label={`${service.title} - ${service.description}`}
              >
                <div className="menu-card-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <h3 className="menu-card-title">{service.title}</h3>
                <p className="menu-card-desc">{service.description}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
