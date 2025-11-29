"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { BookOpen, Heart, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  { icon: Heart, nameEn: "Islamic Values", nameAr: "القيم الإسلامية" },
  { icon: BookOpen, nameEn: "Academic Excellence", nameAr: "التميز الأكاديمي" },
  { icon: Globe, nameEn: "Global Perspective", nameAr: "منظور عالمي" },
  { icon: Star, nameEn: "Character Building", nameAr: "بناء الشخصية" },
]

export default function DarAlThikrPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Dar Al-Thikr Schools"
        titleAr="مدارس دار الذكر"
        breadcrumbEn={["Home", "Schools", "Dar Al-Thikr"]}
        breadcrumbAr={["الرئيسية", "المدارس", "دار الذكر"]}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? "lg:flex-row-reverse" : ""}`}>
            <div>
              <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-6">
                {t("Since 1995", "منذ 1995")}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                style={{ lineHeight: isRTL ? "1.5" : "1.3" }}
              >
                {t("Where Faith Meets Excellence", "حيث يلتقي الإيمان بالتميز")}
              </h2>
              <p className="text-gray-600 text-lg mb-8" style={{ lineHeight: "1.9" }}>
                {t(
                  "Dar Al-Thikr Schools provide a unique educational experience that integrates Islamic values with modern academic standards. We nurture students spiritually, academically, and socially.",
                  "توفر مدارس دار الذكر تجربة تعليمية فريدة تدمج القيم الإسلامية مع المعايير الأكاديمية الحديثة. نرعى الطلاب روحياً وأكاديمياً واجتماعياً.",
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#486266] hover:bg-[#3a5154] text-white px-8 h-12 text-base">
                  {t("Apply Now", "سجل الآن")}
                </Button>
                <Button
                  variant="outline"
                  className="border-[#486266] text-[#486266] hover:bg-[#486266] hover:text-white px-8 h-12 text-base bg-transparent"
                >
                  {t("Learn More", "اعرف المزيد")}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/placeholder.svg?key=f87fz" alt="Dar Al-Thikr Schools" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#486266]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-[#c9a84c]" />
                </div>
                <span className="text-white font-medium">{t(value.nameEn, value.nameAr)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-6">
              {t("Our Approach", "نهجنا")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t("Holistic Islamic Education", "التعليم الإسلامي الشامل")}
            </h2>
            <p className="text-gray-600 text-lg" style={{ lineHeight: "2" }}>
              {t(
                "At Dar Al-Thikr, we believe that true education nurtures the whole person. Our curriculum integrates Quranic studies, Arabic language, and Islamic values with comprehensive academic programs, preparing students to be successful in this world and the hereafter.",
                "في دار الذكر، نؤمن بأن التعليم الحقيقي يغذي الإنسان بالكامل. يدمج منهجنا الدراسات القرآنية واللغة العربية والقيم الإسلامية مع البرامج الأكاديمية الشاملة، لإعداد الطلاب للنجاح في الدنيا والآخرة.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#486266]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{t("Join Our Community", "انضم لمجتمعنا")}</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8" style={{ lineHeight: "1.8" }}>
            {t(
              "Give your child an education rooted in faith and excellence.",
              "امنح طفلك تعليمًا متجذرًا في الإيمان والتميز.",
            )}
          </p>
          <Button className="bg-white text-[#486266] hover:bg-gray-100 px-8 h-12 text-base font-semibold">
            {t("Apply Now", "سجل الآن")}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
