"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import { Award, Trophy, Star, Medal } from "lucide-react"

const awards = [
  {
    year: "2024",
    titleEn: "Best Educational Institution - MENA Region",
    titleAr: "أفضل مؤسسة تعليمية - منطقة الشرق الأوسط",
    descEn: "Recognized for excellence in academic standards and innovative teaching methods.",
    descAr: "تقدير للتميز في المعايير الأكاديمية وأساليب التدريس المبتكرة.",
    icon: Trophy,
  },
  {
    year: "2023",
    titleEn: "Cambridge International Excellence Award",
    titleAr: "جائزة كامبريدج الدولية للتميز",
    descEn: "Awarded for outstanding student performance in Cambridge assessments.",
    descAr: "ُمنحت للأداء المتميز للطلاب في تقييمات كامبريدج.",
    icon: Award,
  },
  {
    year: "2023",
    titleEn: "Saudi Quality Award in Education",
    titleAr: "جائزة الجودة السعودية في التعليم",
    descEn: "Honored by the Ministry of Education for maintaining highest quality standards.",
    descAr: "تكريم من وزارة التعليم للحفاظ على أعلى معايير الجودة.",
    icon: Star,
  },
  {
    year: "2022",
    titleEn: "Innovation in Education Award",
    titleAr: "جائزة الابتكار في التعليم",
    descEn: "Recognized for implementing cutting-edge educational technologies.",
    descAr: "تقدير لتطبيق أحدث التقنيات التعليمية.",
    icon: Medal,
  },
]

export default function AwardsPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Awards & Achievements"
        titleAr="الجوائز والإنجازات"
        breadcrumbEn={["Home", "About", "Awards"]}
        breadcrumbAr={["الرئيسية", "من نحن", "الجوائز"]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-4">
              {t("Our Recognition", "تقديرنا")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Celebrating Excellence", "نحتفي بالتميز")}
            </h2>
          </div>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start gap-6 p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow ${isRTL ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#486266] rounded-2xl flex items-center justify-center">
                    <award.icon className="w-10 h-10 text-[#c9a84c]" />
                  </div>
                </div>
                <div className="flex-grow">
                  <span className="inline-block px-3 py-1 bg-[#486266] text-white rounded-full text-sm mb-3">
                    {award.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(award.titleEn, award.titleAr)}</h3>
                  <p className="text-gray-600" style={{ lineHeight: "1.8" }}>
                    {t(award.descEn, award.descAr)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
