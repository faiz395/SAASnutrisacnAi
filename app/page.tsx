import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

