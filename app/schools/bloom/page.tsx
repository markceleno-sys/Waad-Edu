"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { Palette, Music, Users, Sparkles, Heart, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Palette, nameEn: "Creative Arts", nameAr: "الفنون الإبداعية", color: "bg-pink-100 text-pink-600" },
  { icon: Music, nameEn: "Music & Movement", nameAr: "الموسيقى والحركة", color: "bg-purple-100 text-purple-600" },
  { icon: Users, nameEn: "Social Skills", nameAr: "المهارات الاجتماعية", color: "bg-blue-100 text-blue-600" },
  { icon: Sparkles, nameEn: "Discovery Learning", nameAr: "التعلم الاستكشافي", color: "bg-yellow-100 text-yellow-600" },
  { icon: Heart, nameEn: "Emotional Growth", nameAr: "النمو العاطفي", color: "bg-red-100 text-red-600" },
  { icon: Smile, nameEn: "Play-Based", nameAr: "التعلم باللعب", color: "bg-green-100 text-green-600" },
]

export default function BloomPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Bloom Schools"
        titleAr="مدارس بلوم"
        breadcrumbEn={["Home", "Schools", "Bloom"]}
        breadcrumbAr={["الرئيسية", "المدارس", "بلوم"]}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? "lg:flex-row-reverse" : ""}`}>
            <div>
              <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-6">
                {t("Early Childhood", "الطفولة المبكرة")}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                style={{ lineHeight: isRTL ? "1.5" : "1.3" }}
              >
                {t("Where Little Minds Bloom", "حيث تتفتح العقول الصغيرة")}
              </h2>
              <p className="text-gray-600 text-lg mb-8" style={{ lineHeight: "1.9" }}>
                {t(
                  "Bloom Schools provide a nurturing environment for early childhood development. Our play-based curriculum encourages exploration, creativity, and social-emotional growth.",
                  "توفر مدارس بلوم بيئة حاضنة لتنمية الطفولة المبكرة. يشجع منهجنا القائم على اللعب على الاستكشاف والإبداع والنمو الاجتماعي العاطفي.",
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#486266] hover:bg-[#3a5154] text-white px-8 h-12 text-base">
                  {t("Enroll Now", "سجل الآن")}
                </Button>
                <Button
                  variant="outline"
                  className="border-[#486266] text-[#486266] hover:bg-[#486266] hover:text-white px-8 h-12 text-base bg-transparent"
                >
                  {t("Schedule Visit", "حدد موعد زيارة")}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/placeholder.svg?key=ivwri" alt="Bloom Schools" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
              {t("Our Programs", "برامجنا")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t("Nurturing Every Aspect", "رعاية كل جانب")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t(feature.nameEn, feature.nameAr)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("Age Groups", "الفئات العمرية")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-pink-50 rounded-2xl text-center">
              <div className="text-5xl font-bold text-pink-500 mb-4">2-3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("Toddlers", "الأطفال الصغار")}</h3>
              <p className="text-gray-600">
                {t("Sensory exploration and first social experiences", "الاستكشاف الحسي والتجارب الاجتماعية الأولى")}
              </p>
            </div>
            <div className="p-8 bg-purple-50 rounded-2xl text-center">
              <div className="text-5xl font-bold text-purple-500 mb-4">3-4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("Pre-KG", "ما قبل الروضة")}</h3>
              <p className="text-gray-600">
                {t("Language development and creative expression", "تطوير اللغة والتعبير الإبداعي")}
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">4-6</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("KG", "الروضة")}</h3>
              <p className="text-gray-600">
                {t("School readiness and foundational skills", "الاستعداد للمدرسة والمهارات الأساسية")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#486266]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t("Give Your Child the Best Start", "امنح طفلك أفضل بداية")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8" style={{ lineHeight: "1.8" }}>
            {t(
              "Join our nurturing community where every child is valued and celebrated.",
              "انضم لمجتمعنا الحاضن حيث يُقدَّر ويُحتفى بكل طفل.",
            )}
          </p>
          <Button className="bg-white text-[#486266] hover:bg-gray-100 px-8 h-12 text-base font-semibold">
            {t("Enroll Today", "سجل اليوم")}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
