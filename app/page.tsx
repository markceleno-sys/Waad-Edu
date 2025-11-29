import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { StatsSection } from "@/components/stats-section"
import { SchoolsSection } from "@/components/schools-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <StatsSection />
      <AboutSection />
      <SchoolsSection />
      <FeaturesSection />
      <NewsSection />
      <Footer />
    </main>
  )
}
