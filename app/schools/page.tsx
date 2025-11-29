"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Users, Award, BookOpen } from "lucide-react"

const schools = [
  {
    id: "waad-academy",
    nameEn: "Waad Academy",
    nameAr: "أكاديمية وعد",
    descEn: "A premier Cambridge-accredited international school offering world-class education from KG to Grade 12.",
    descAr: "مدرسة دولية معتمدة من كامبريدج تقدم تعليمًا عالمي المستوى من الروضة حتى الصف الثاني عشر.",
    image: "/placeholder.svg?key=urdgu",
    stats: { students: "2,500+", teachers: "150+", established: "2005" },
  },
  {
    id: "dar-althikr",
    nameEn: "Dar Al-Thikr Schools",
    nameAr: "مدارس دار الذكر",
    descEn: "Combining Islamic values with modern education, preparing students spiritually and academically.",
    descAr: "تجمع بين القيم الإسلامية والتعليم الحديث، وتعد الطلاب روحياً وأكاديمياً.",
    image: "/placeholder.svg?key=c5m1h",
    stats: { students: "1,800+", teachers: "120+", established: "1995" },
  },
  {
    id: "bloom",
    nameEn: "Bloom Schools",
    nameAr: "مدارس بلوم",
    descEn: "Nurturing early childhood development through play-based learning and creative exploration.",
    descAr: "رعاية تنمية الطفولة المبكرة من خلال التعلم القائم على اللعب والاستكشاف الإبداعي.",
    image: "/placeholder.svg?key=2m74k",
    stats: { students: "800+", teachers: "80+", established: "2015" },
  },
]

export default function SchoolsPage() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Our Schools"
        titleAr="مدارسنا"
        breadcrumbEn={["Home", "Schools"]}
        breadcrumbAr={["الرئيسية", "المدارس"]}
      />

      {/* Schools Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
              {t("Education Excellence", "التميز التعليمي")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Three Schools, One Vision", "ثلاث مدارس، رؤية واحدة")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: "1.8" }}>
              {t(
                "Each of our schools offers a unique educational experience while sharing our commitment to excellence and holistic development.",
                "كل مدرسة من مدارسنا تقدم تجربة تعليمية فريدة مع مشاركة التزامنا بالتميز والتطوير الشامل.",
              )}
            </p>
          </div>

          <div className="space-y-16">
            {schools.map((school, index) => (
              <div
                key={school.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className={index % 2 === 1 && !isRTL ? "lg:order-2" : isRTL && index % 2 === 0 ? "lg:order-2" : ""}
                >
                  <div className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={school.image || "/placeholder.svg"}
                      alt={t(school.nameEn, school.nameAr)}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
                <div
                  className={index % 2 === 1 && !isRTL ? "lg:order-1" : isRTL && index % 2 === 0 ? "lg:order-1" : ""}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {t(school.nameEn, school.nameAr)}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8" style={{ lineHeight: "1.9" }}>
                    {t(school.descEn, school.descAr)}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Users className="w-6 h-6 text-[#486266] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{school.stats.students}</div>
                      <div className="text-sm text-gray-500">{t("Students", "طالب")}</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Award className="w-6 h-6 text-[#486266] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{school.stats.teachers}</div>
                      <div className="text-sm text-gray-500">{t("Teachers", "معلم")}</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <BookOpen className="w-6 h-6 text-[#486266] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{school.stats.established}</div>
                      <div className="text-sm text-gray-500">{t("Est.", "تأسست")}</div>
                    </div>
                  </div>

                  <Link
                    href={`/schools/${school.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#486266] text-white rounded-xl font-semibold hover:bg-[#3a5154] transition-colors"
                  >
                    {t("Learn More", "اعرف المزيد")}
                    <Arrow className="w-5 h-5" />
                  </Link>
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
