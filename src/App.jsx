import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MenuCard from './components/MenuCard.jsx'
import InfoCard from './components/InfoCard.jsx'
import Features from './components/Features.jsx'
import FAQ from './components/FAQ.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <MenuCard />
        <InfoCard />
        <Features />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
