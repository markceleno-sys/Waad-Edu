"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import { Target, Eye, Heart, Users, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const { t, isRTL } = useLanguage()

  const values = [
    {
      icon: Target,
      titleEn: "Excellence",
      titleAr: "التميز",
      descEn: "We strive for excellence in everything we do, setting high standards for ourselves and our students.",
      descAr: "نسعى للتميز في كل ما نقوم به، ونضع معايير عالية لأنفسنا ولطلابنا.",
    },
    {
      icon: Heart,
      titleEn: "Integrity",
      titleAr: "النزاهة",
      descEn: "We uphold the highest ethical standards, fostering trust and respect in our community.",
      descAr: "نتمسك بأعلى المعايير الأخلاقية، ونعزز الثقة والاحترام في مجتمعنا.",
    },
    {
      icon: Users,
      titleEn: "Community",
      titleAr: "المجتمع",
      descEn: "We believe in building strong relationships between students, parents, and educators.",
      descAr: "نؤمن ببناء علاقات قوية بين الطلاب وأولياء الأمور والمعلمين.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="About Waad Education"
        titleAr="عن وعد للتعليم"
        breadcrumbEn={["Home", "About"]}
        breadcrumbAr={["الرئيسية", "من نحن"]}
      />

      {/* Introduction Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={isRTL ? "order-2 lg:order-1" : ""}>
              <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-6">
                {t("Our Story", "قصتنا")}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                style={{ lineHeight: isRTL ? "1.5" : "1.3" }}
              >
                {t(
                  "Shaping the Future of Education in Saudi Arabia",
                  "نصنع مستقبل التعليم في المملكة العربية السعودية",
                )}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6" style={{ lineHeight: "1.9" }}>
                {t(
                  "Waad Education Company was founded with a vision to transform education in the Kingdom of Saudi Arabia. With over 50 years of combined experience, we have established ourselves as a leading educational group committed to nurturing future leaders.",
                  "تأسست شركة وعد للتعليم برؤية لتحويل التعليم في المملكة العربية السعودية. بخبرة تزيد عن 50 عامًا، أثبتنا أنفسنا كمجموعة تعليمية رائدة ملتزمة برعاية قادة المستقبل.",
                )}
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: "1.9" }}>
                {t(
                  "Our group encompasses three distinguished schools: Waad Academy, Dar Al-Thikr Schools, and Bloom Schools, each offering unique educational experiences while sharing our core values of excellence, innovation, and holistic development.",
                  "تضم مجموعتنا ثلاث مدارس متميزة: أكاديمية وعد، ومدارس دار الذكر، ومدارس بلوم، كل منها تقدم تجارب تعليمية فريدة مع مشاركة قيمنا الأساسية في التميز والابتكار والتطوير الشامل.",
                )}
              </p>
            </div>
            <div className={`relative ${isRTL ? "order-1 lg:order-2" : ""}`}>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/modern-school-building-saudi-arabia-with-students.jpg" alt="Waad Education Campus" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#486266] text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold mb-1">50+</div>
                <div className="text-white/80 text-sm">{t("Years of Excellence", "عاماً من التميز")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-[#486266] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("Our Vision", "رؤيتنا")}</h3>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: "1.9" }}>
                {t(
                  "To be the leading educational group in Saudi Arabia, recognized for developing well-rounded individuals who contribute positively to society and align with Vision 2030.",
                  "أن نكون المجموعة التعليمية الرائدة في المملكة العربية السعودية، المعروفة بتطوير أفراد متكاملين يساهمون إيجابياً في المجتمع ويتوافقون مع رؤية 2030.",
                )}
              </p>
            </div>
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-[#c9a84c] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("Our Mission", "مهمتنا")}</h3>
              <p className="text-gray-600 leading-relaxed" style={{ lineHeight: "1.9" }}>
                {t(
                  "To provide world-class education that nurtures the heart, mind, and body, preparing students to become responsible global citizens and future leaders.",
                  "تقديم تعليم عالمي المستوى يغذي القلب والعقل والجسد، ويعد الطلاب ليصبحوا مواطنين عالميين مسؤولين وقادة المستقبل.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
              {t("Our Foundation", "أساسنا")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{t("Core Values", "القيم الأساسية")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-[#486266] transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-[#486266] group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                  <value.icon className="w-8 h-8 text-white group-hover:text-[#486266] transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  {t(value.titleEn, value.titleAr)}
                </h3>
                <p
                  className="text-gray-600 group-hover:text-white/80 transition-colors duration-500"
                  style={{ lineHeight: "1.8" }}
                >
                  {t(value.descEn, value.descAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links to Sub-pages */}
      <section className="py-20 lg:py-28 bg-[#486266]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t("Explore More", "اكتشف المزيد")}</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t(
                "Learn more about our leadership, achievements, and community initiatives.",
                "تعرف أكثر على قيادتنا وإنجازاتنا ومبادراتنا المجتمعية.",
              )}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/about/management"
              className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <Users className="w-10 h-10 text-[#c9a84c] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t("Head Management", "الإدارة العليا")}</h3>
              <p className="text-white/70">{t("Meet our leadership team", "تعرف على فريق القيادة")}</p>
            </a>
            <a
              href="/about/awards"
              className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <Award className="w-10 h-10 text-[#c9a84c] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t("Awards & Achievements", "الجوائز والإنجازات")}</h3>
              <p className="text-white/70">{t("Our recognitions and milestones", "تقديراتنا وإنجازاتنا")}</p>
            </a>
            <a
              href="/about/csr"
              className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <Heart className="w-10 h-10 text-[#c9a84c] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t("CSR Initiatives", "المسؤولية الاجتماعية")}</h3>
              <p className="text-white/70">{t("Our community impact", "أثرنا في المجتمع")}</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
