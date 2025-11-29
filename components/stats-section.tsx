"use client"

import { useEffect, useState, useRef } from "react"
import { Users, GraduationCap, Award, Building2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const stats = {
  en: [
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Students",
      description: "Enrolled across all schools",
    },
    {
      icon: GraduationCap,
      value: 15000,
      suffix: "+",
      label: "Graduates",
      description: "Since establishment",
    },
    {
      icon: Award,
      value: 25,
      suffix: "+",
      label: "Years",
      description: "Of educational excellence",
    },
    {
      icon: Building2,
      value: 3,
      suffix: "",
      label: "Schools",
      description: "In Saudi Arabia",
    },
  ],
  ar: [
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "طالب وطالبة",
      description: "مسجلين في جميع المدارس",
    },
    {
      icon: GraduationCap,
      value: 15000,
      suffix: "+",
      label: "خريج",
      description: "منذ التأسيس",
    },
    {
      icon: Award,
      value: 25,
      suffix: "+",
      label: "سنة",
      description: "من التميز التعليمي",
    },
    {
      icon: Building2,
      value: 3,
      suffix: "",
      label: "مدارس",
      description: "في المملكة العربية السعودية",
    },
  ],
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold mb-2">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  const { language, t } = useLanguage()
  const currentStats = stats[language]

  return (
    <section className="py-20 lg:py-28 bg-[#3d5a5a] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="stats-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#stats-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("Our Impact in Numbers", "تأثيرنا بالأرقام")}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t(
              "Building a legacy of educational excellence in Saudi Arabia",
              "نبني إرثاً من التميز التعليمي في المملكة العربية السعودية",
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {currentStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#b8a04c]/20 transition-colors duration-300">
                <stat.icon className="w-10 h-10 text-[#b8a04c]" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-sm text-white/50 mt-2">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
