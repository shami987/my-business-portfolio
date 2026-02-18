import Hero from './Hero'
import AboutSection from '../about/AboutSection'
import ServicesSection from '../services/sections/ServicesSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  )
}
