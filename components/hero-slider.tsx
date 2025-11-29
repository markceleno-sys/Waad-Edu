"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const slides = {
  en: [
    {
      id: 1,
      title: "Shaping the Future",
      titleHighlight: "of Education",
      description: "Building the leaders of tomorrow through innovative education aligned with Saudi Vision 2030.",
      image: "/modern-school-campus-aerial-view-saudi-arabia.jpg",
      cta: "Explore Our Schools",
      ctaSecondary: "Watch Our Story",
      badge: "Now Enrolling 2025-2026",
    },
    {
      id: 2,
      title: "Excellence in",
      titleHighlight: "Learning",
      description: "Cambridge certified programs with international standards and local values. Heart, Mind, and Body.",
      image: "/students-in-modern-classroom-learning-technology.jpg",
      cta: "View Programs",
      ctaSecondary: "Virtual Tour",
      badge: "Cambridge Accredited",
    },
    {
      id: 3,
      title: "Award-Winning",
      titleHighlight: "Education",
      description:
        "Internationally recognized for our commitment to excellence and transformative learning experiences.",
      image: "/graduation-ceremony-students-celebrating.jpg",
      cta: "Our Achievements",
      ctaSecondary: "Meet Alumni",
      badge: "50+ Years of Excellence",
    },
  ],
  ar: [
    {
      id: 1,
      title: "نصنع مستقبل",
      titleHighlight: "التعليم",
      description: "نبني قادة الغد من خلال تعليم مبتكر متوافق مع رؤية السعودية 2030.",
      image: "/modern-school-campus-aerial-view-saudi-arabia.jpg",
      cta: "استكشف مدارسنا",
      ctaSecondary: "شاهد قصتنا",
      badge: "التسجيل مفتوح 2025-2026",
    },
    {
      id: 2,
      title: "التميز في",
      titleHighlight: "التعلم",
      description: "برامج معتمدة من كامبريدج بمعايير دولية وقيم محلية. القلب والعقل والجسد.",
      image: "/students-in-modern-classroom-learning-technology.jpg",
      cta: "عرض البرامج",
      ctaSecondary: "جولة افتراضية",
      badge: "معتمد من كامبريدج",
    },
    {
      id: 3,
      title: "تعليم حائز",
      titleHighlight: "على جوائز",
      description: "معترف به دولياً لالتزامنا بالتميز وتجارب التعلم التحويلية.",
      image: "/graduation-ceremony-students-celebrating.jpg",
      cta: "إنجازاتنا",
      ctaSecondary: "خريجونا",
      badge: "+50 عام من التميز",
    },
  ],
}

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { language, isRTL } = useLanguage()

  const currentSlides = slides[language]

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % currentSlides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating, currentSlides.length])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + currentSlides.length) % currentSlides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating, currentSlides.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = currentSlides[currentSlide]

  return (
    <section className="relative h-[calc(100vh-140px)] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Images with Ken Burns effect */}
      {currentSlides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
          style={{ transitionDelay: index === currentSlide ? "0ms" : "0ms" }}
        >
          <img src={s.image || "/placeholder.svg"} alt={s.title} className="w-full h-full object-cover" />
          <div
            className={`absolute inset-0 ${
              isRTL
                ? "bg-gradient-to-l from-[#486266]/95 via-[#486266]/70 to-transparent"
                : "bg-gradient-to-r from-[#486266]/95 via-[#486266]/70 to-transparent"
            }`}
          />
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23c9a84c' fillOpacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      ))}

      {/* Content - Fixed RTL alignment with proper text-align and positioning */}
      <div
        className={`relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center ${isRTL ? "font-arabic" : ""}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className={`max-w-3xl w-full ${isRTL ? "mr-0 ml-auto text-right" : "ml-0 mr-auto text-left"}`}>
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 transition-all duration-700 ${
              isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a84c]"></span>
            </span>
            {slide.badge}
          </div>

          {/* Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight transition-all duration-700 delay-100 ${
              isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
            }`}
            style={{ lineHeight: isRTL ? "1.3" : "1.1", marginBottom: isRTL ? "0" : "1rem" }}
          >
            {slide.title}
          </h1>

          {/* Title Highlight */}
          <p
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text tracking-tight transition-all duration-700 delay-200 ${
              isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
            } overflow-visible`}
            style={{
              lineHeight: isRTL ? "1.4" : "1.1",
              paddingBottom: isRTL ? "0.5rem" : "0",
              marginTop: isRTL ? "-0.25rem" : "0",
              marginBottom: isRTL ? "1.5rem" : "2.5rem",
            }}
          >
            {slide.titleHighlight}
          </p>

          {/* Description */}
          <p
            className={`text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-loose transition-all duration-700 delay-300 ${
              isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
            } ${isRTL ? "mr-0" : "ml-0"}`}
            style={{ lineHeight: isRTL ? "2" : "1.75", marginBottom: "2rem" }}
          >
            {slide.description}
          </p>

          {/* CTA Buttons - Fixed RTL flex direction */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
            } ${isRTL ? "sm:flex-row-reverse sm:justify-end" : ""}`}
          >
            <Button
              size="lg"
              className="rounded-lg px-8 h-13 bg-[#c9a84c] hover:bg-[#d4b85c] text-[#486266] font-semibold text-base shadow-lg shadow-[#c9a84c]/25 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
            >
              {slide.cta}
              {isRTL ? (
                <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg px-8 h-13 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-medium text-base backdrop-blur-sm gap-2 transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              {slide.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Fixed position for RTL */}
      <div className={`absolute bottom-24 ${isRTL ? "left-4 lg:left-8" : "right-4 lg:right-8"} z-20 flex gap-2`}>
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center group"
          aria-label="Previous slide"
        >
          {isRTL ? (
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          ) : (
            <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          )}
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center group"
          aria-label="Next slide"
        >
          {isRTL ? (
            <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          ) : (
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          )}
        </button>
      </div>

      {/* Slide Counter */}
      <div
        className={`absolute bottom-8 ${isRTL ? "right-4 lg:right-8" : "left-4 lg:left-8"} z-20 flex items-center gap-4`}
      >
        <span className="text-white/50 text-sm font-mono">0{currentSlide + 1}</span>
        <div className="w-24 h-0.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#c9a84c] transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / currentSlides.length) * 100}%` }}
          />
        </div>
        <span className="text-white/50 text-sm font-mono">0{currentSlides.length}</span>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/30 to-transparent z-10" />
    </section>
  )
}
