import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { contactConfig } from '../config/contact.js'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-header center">
          <div className="section-label">
            <HelpCircle size={13} />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 id="faq-title" className="section-title">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="section-desc">
            Temukan jawaban atas pertanyaan umum seputar layanan bantuan kami.
          </p>
        </div>

        <div className="faq-list" role="list">
          {contactConfig.faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? ' open' : ''}`}
              role="listitem"
            >
              <button
                className="faq-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="faq-question">{faq.question}</span>
                <ChevronDown size={18} className="faq-icon" aria-hidden="true" />
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                <div className="faq-answer-inner">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
