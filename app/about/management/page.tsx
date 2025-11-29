"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const leaders = [
  {
    nameEn: "Dr. Ahmed Al-Rashid",
    nameAr: "د. أحمد الراشد",
    roleEn: "Chairman & CEO",
    roleAr: "رئيس مجلس الإدارة والرئيس التنفيذي",
    bioEn:
      "With over 30 years of experience in education, Dr. Al-Rashid has been instrumental in shaping Waad Education's strategic vision.",
    bioAr:
      "بخبرة تزيد عن 30 عامًا في مجال التعليم، كان للدكتور الراشد دور فعال في صياغة الرؤية الاستراتيجية لوعد للتعليم.",
    image: "/professional-arab-businessman-in-suit-portrait.jpg",
  },
  {
    nameEn: "Mrs. Sarah Al-Zahrani",
    nameAr: "أ. سارة الزهراني",
    roleEn: "Chief Academic Officer",
    roleAr: "المدير الأكاديمي",
    bioEn:
      "Mrs. Al-Zahrani leads our academic initiatives with a focus on innovation and student-centered learning approaches.",
    bioAr: "تقود السيدة الزهراني مبادراتنا الأكاديمية مع التركيز على الابتكار ومناهج التعلم المتمحورة حول الطالب.",
    image: "/professional-arab-businesswoman-hijab-portrait.jpg",
  },
  {
    nameEn: "Mr. Khalid Al-Otaibi",
    nameAr: "أ. خالد العتيبي",
    roleEn: "Chief Operations Officer",
    roleAr: "المدير التنفيذي للعمليات",
    bioEn: "Mr. Al-Otaibi oversees the operational excellence across all Waad Education schools and facilities.",
    bioAr: "يشرف السيد العتيبي على التميز التشغيلي في جميع مدارس ومنشآت وعد للتعليم.",
    image: "/professional-arab-man-in-business-attire-portrait.jpg",
  },
  {
    nameEn: "Dr. Fatima Al-Harbi",
    nameAr: "د. فاطمة الحربي",
    roleEn: "Director of Curriculum Development",
    roleAr: "مديرة تطوير المناهج",
    bioEn: "Dr. Al-Harbi brings international expertise in curriculum design and educational innovation.",
    bioAr: "تجلب الدكتورة الحربي خبرة دولية في تصميم المناهج والابتكار التعليمي.",
    image: "/professional-arab-woman-educator-hijab-portrait.jpg",
  },
]

export default function ManagementPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Head Management"
        titleAr="الإدارة العليا"
        breadcrumbEn={["Home", "About", "Management"]}
        breadcrumbAr={["الرئيسية", "من نحن", "الإدارة العليا"]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
              {t("Leadership Team", "فريق القيادة")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Meet Our Leaders", "تعرف على قادتنا")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: "1.8" }}>
              {t(
                "Our leadership team brings decades of experience in education, committed to excellence and innovation.",
                "يجلب فريق قيادتنا عقودًا من الخبرة في التعليم، ملتزمون بالتميز والابتكار.",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="group">
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={t(leader.nameEn, leader.nameAr)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#486266] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#486266] hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{t(leader.nameEn, leader.nameAr)}</h3>
                <p className="text-[#c9a84c] font-medium mb-3">{t(leader.roleEn, leader.roleAr)}</p>
                <p className="text-gray-600 text-sm" style={{ lineHeight: "1.7" }}>
                  {t(leader.bioEn, leader.bioAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
