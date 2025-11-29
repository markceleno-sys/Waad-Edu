"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { Heart, Activity, Apple, Brain, Stethoscope, Dumbbell, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HealthWellnessPage() {
  const { t, isRTL } = useLanguage()

  const programs = [
    {
      titleEn: "Physical Education",
      titleAr: "التربية البدنية",
      descEn: "Comprehensive sports programs and fitness activities for all age groups",
      descAr: "برامج رياضية شاملة وأنشطة لياقة بدنية لجميع الفئات العمرية",
      icon: Dumbbell,
    },
    {
      titleEn: "Mental Health Support",
      titleAr: "دعم الصحة النفسية",
      descEn: "Professional counseling services and mental wellness programs for students",
      descAr: "خدمات استشارية مهنية وبرامج صحة نفسية للطلاب",
      icon: Brain,
    },
    {
      titleEn: "Nutrition Programs",
      titleAr: "برامج التغذية",
      descEn: "Healthy meal options and nutrition education for balanced diets",
      descAr: "خيارات وجبات صحية وتثقيف غذائي لأنظمة غذائية متوازنة",
      icon: Apple,
    },
    {
      titleEn: "Health Screenings",
      titleAr: "الفحوصات الصحية",
      descEn: "Regular health check-ups and preventive care services",
      descAr: "فحوصات صحية منتظمة وخدمات رعاية وقائية",
      icon: Stethoscope,
    },
  ]

  const stats = [
    { valueEn: "100%", valueAr: "100%", labelEn: "Students Covered", labelAr: "تغطية الطلاب" },
    { valueEn: "5", valueAr: "5", labelEn: "Sports Facilities", labelAr: "مرافق رياضية" },
    { valueEn: "3", valueAr: "3", labelEn: "School Nurses", labelAr: "ممرضات مدرسية" },
    { valueEn: "Weekly", valueAr: "أسبوعياً", labelEn: "Wellness Activities", labelAr: "أنشطة العافية" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Health & Wellness"
        titleAr="الصحة والعافية"
        breadcrumbEn={["Home", "About", "CSR", "Health & Wellness"]}
        breadcrumbAr={["الرئيسية", "من نحن", "المسؤولية الاجتماعية", "الصحة والعافية"]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? "order-2" : ""}>
              <div className="w-14 h-14 bg-rose-500 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ lineHeight: "1.4" }}>
                {t("Nurturing Healthy Minds and Bodies", "رعاية العقول والأجسام الصحية")}
              </h2>
              <p className="text-gray-600 text-lg mb-6" style={{ lineHeight: "1.9" }}>
                {t(
                  "At Waad Education, we believe that student success starts with good health. Our comprehensive health and wellness programs support the physical, mental, and emotional well-being of every student.",
                  "في وعد للتعليم، نؤمن بأن نجاح الطالب يبدأ بصحة جيدة. برامجنا الشاملة للصحة والعافية تدعم الرفاهية البدنية والعقلية والعاطفية لكل طالب.",
                )}
              </p>
              <p className="text-gray-600" style={{ lineHeight: "1.9" }}>
                {t(
                  "From nutritious meals to mental health support, we provide the resources students need to thrive both inside and outside the classroom.",
                  "من الوجبات المغذية إلى دعم الصحة النفسية، نوفر الموارد التي يحتاجها الطلاب للازدهار داخل وخارج الفصل الدراسي.",
                )}
              </p>
            </div>
            <div className={`relative ${isRTL ? "order-1" : ""}`}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/school-health-wellness-program-children.jpg"
                  alt="Health and wellness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-400 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose-100 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-rose-500">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{t(stat.valueEn, stat.valueAr)}</div>
                <div className="text-white/80">{t(stat.labelEn, stat.labelAr)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">
              {t("Our Programs", "برامجنا")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Wellness Initiatives", "مبادرات العافية")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow flex gap-6"
              >
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <program.icon className="w-7 h-7 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t(program.titleEn, program.titleAr)}</h3>
                  <p className="text-gray-600" style={{ lineHeight: "1.8" }}>
                    {t(program.descEn, program.descAr)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-8 lg:p-16 rounded-3xl text-center">
            <Activity className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("Prioritize Your Child's Health", "اهتم بصحة طفلك")}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8" style={{ lineHeight: "1.9" }}>
              {t(
                "Learn more about our health and wellness programs and how we support every student's journey to a healthier life.",
                "تعرف على المزيد حول برامج الصحة والعافية لدينا وكيف ندعم رحلة كل طالب نحو حياة أكثر صحة.",
              )}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t("Learn More", "اعرف المزيد")}
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
