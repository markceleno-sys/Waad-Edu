"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { BookOpen, Globe, GraduationCap, Laptop, Music, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Globe, nameEn: "Cambridge Curriculum", nameAr: "منهج كامبريدج" },
  { icon: Laptop, nameEn: "Smart Classrooms", nameAr: "فصول ذكية" },
  { icon: GraduationCap, nameEn: "Expert Teachers", nameAr: "معلمون خبراء" },
  { icon: Music, nameEn: "Arts & Music", nameAr: "الفنون والموسيقى" },
  { icon: Dumbbell, nameEn: "Sports Programs", nameAr: "برامج رياضية" },
  { icon: BookOpen, nameEn: "Library Resources", nameAr: "موارد المكتبة" },
]

const programs = [
  {
    titleEn: "Early Years (KG1-KG3)",
    titleAr: "السنوات المبكرة (روضة 1-3)",
    descEn: "Play-based learning that develops foundational skills and curiosity.",
    descAr: "التعلم القائم على اللعب الذي يطور المهارات الأساسية والفضول.",
  },
  {
    titleEn: "Primary Years (Grades 1-5)",
    titleAr: "المرحلة الابتدائية (1-5)",
    descEn: "Building strong academic foundations with Cambridge Primary.",
    descAr: "بناء أسس أكاديمية قوية مع كامبريدج للمرحلة الابتدائية.",
  },
  {
    titleEn: "Middle Years (Grades 6-8)",
    titleAr: "المرحلة المتوسطة (6-8)",
    descEn: "Developing critical thinking with Cambridge Lower Secondary.",
    descAr: "تطوير التفكير النقدي مع كامبريدج للمرحلة المتوسطة.",
  },
  {
    titleEn: "High School (Grades 9-12)",
    titleAr: "المرحلة الثانوية (9-12)",
    descEn: "IGCSE and A-Level programs preparing students for global universities.",
    descAr: "برامج IGCSE و A-Level تعد الطلاب للجامعات العالمية.",
  },
]

export default function WaadAcademyPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Waad Academy"
        titleAr="أكاديمية وعد"
        breadcrumbEn={["Home", "Schools", "Waad Academy"]}
        breadcrumbAr={["الرئيسية", "المدارس", "أكاديمية وعد"]}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? "lg:flex-row-reverse" : ""}`}>
            <div>
              <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-6">
                {t("Cambridge Accredited", "معتمدة من كامبريدج")}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                style={{ lineHeight: isRTL ? "1.5" : "1.3" }}
              >
                {t("Excellence in International Education", "التميز في التعليم الدولي")}
              </h2>
              <p className="text-gray-600 text-lg mb-8" style={{ lineHeight: "1.9" }}>
                {t(
                  "Waad Academy is a leading Cambridge-accredited international school in Jeddah, offering world-class education from Kindergarten through Grade 12. Our curriculum combines academic rigor with holistic development.",
                  "أكاديمية وعد هي مدرسة دولية رائدة معتمدة من كامبريدج في جدة، تقدم تعليمًا عالمي المستوى من الروضة حتى الصف الثاني عشر. يجمع منهجنا بين الدقة الأكاديمية والتطوير الشامل.",
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
                  {t("Virtual Tour", "جولة افتراضية")}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/placeholder.svg?key=b8xxm" alt="Waad Academy Campus" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#486266] text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="text-4xl font-bold mb-1">2,500+</div>
                <div className="text-white/80 text-sm">{t("Students", "طالب")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#486266]/10 rounded-xl flex items-center justify-center mb-3">
                  <feature.icon className="w-6 h-6 text-[#486266]" />
                </div>
                <span className="text-sm font-medium text-gray-700">{t(feature.nameEn, feature.nameAr)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
              {t("Academic Programs", "البرامج الأكاديمية")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t("Programs for Every Stage", "برامج لكل مرحلة")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-[#486266] group transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#486266] group-hover:bg-white rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <GraduationCap className="w-6 h-6 text-white group-hover:text-[#486266] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {t(program.titleEn, program.titleAr)}
                </h3>
                <p
                  className="text-gray-600 group-hover:text-white/80 text-sm transition-colors"
                  style={{ lineHeight: "1.7" }}
                >
                  {t(program.descEn, program.descAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#486266]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t("Ready to Join Waad Academy?", "مستعد للانضمام لأكاديمية وعد؟")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8" style={{ lineHeight: "1.8" }}>
            {t(
              "Take the first step towards world-class education for your child.",
              "اتخذ الخطوة الأولى نحو تعليم عالمي المستوى لطفلك.",
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#486266] hover:bg-gray-100 px-8 h-12 text-base font-semibold">
              {t("Apply Now", "سجل الآن")}
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 h-12 text-base bg-transparent"
            >
              {t("Contact Admissions", "تواصل مع القبول")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
