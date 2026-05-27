import { MessageCircle } from 'lucide-react'
import { contactConfig } from '../config/contact.js'

export default function FloatingWhatsApp() {
  const waUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`

  return (
    <div className="floating-whatsapp" role="complementary" aria-label="Tombol WhatsApp cepat">
      <a
        href={waUrl}
        className="floating-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami via WhatsApp"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
