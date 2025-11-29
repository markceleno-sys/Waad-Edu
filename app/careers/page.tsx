"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Clock, Briefcase, ChevronRight, ChevronLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const jobs = [
  {
    id: 1,
    titleEn: "Math Teacher - Secondary",
    titleAr: "معلم رياضيات - ثانوي",
    schoolEn: "Waad Academy",
    schoolAr: "أكاديمية وعد",
    locationEn: "Jeddah",
    locationAr: "جدة",
    typeEn: "Full-time",
    typeAr: "دوام كامل",
    postedEn: "2 days ago",
    postedAr: "منذ يومين",
  },
  {
    id: 2,
    titleEn: "English Teacher - Primary",
    titleAr: "معلم لغة إنجليزية - ابتدائي",
    schoolEn: "Dar Al-Thikr",
    schoolAr: "دار الذكر",
    locationEn: "Jeddah",
    locationAr: "جدة",
    typeEn: "Full-time",
    typeAr: "دوام كامل",
    postedEn: "1 week ago",
    postedAr: "منذ أسبوع",
  },
  {
    id: 3,
    titleEn: "Early Years Educator",
    titleAr: "معلمة رياض أطفال",
    schoolEn: "Bloom Schools",
    schoolAr: "مدارس بلوم",
    locationEn: "Jeddah",
    locationAr: "جدة",
    typeEn: "Full-time",
    typeAr: "دوام كامل",
    postedEn: "3 days ago",
    postedAr: "منذ 3 أيام",
  },
  {
    id: 4,
    titleEn: "Science Teacher - Middle School",
    titleAr: "معلم علوم - متوسط",
    schoolEn: "Waad Academy",
    schoolAr: "أكاديمية وعد",
    locationEn: "Jeddah",
    locationAr: "جدة",
    typeEn: "Full-time",
    typeAr: "دوام كامل",
    postedEn: "5 days ago",
    postedAr: "منذ 5 أيام",
  },
  {
    id: 5,
    titleEn: "School Counselor",
    titleAr: "مرشد طلابي",
    schoolEn: "Dar Al-Thikr",
    schoolAr: "دار الذكر",
    locationEn: "Jeddah",
    locationAr: "جدة",
    typeEn: "Full-time",
    typeAr: "دوام كامل",
    postedEn: "1 week ago",
    postedAr: "منذ أسبوع",
  },
  {
    id: 6,
    titleEn: "IT Administrator",
    titleAr: "مدير تقنية المعلومات",
    schoolEn: "Waad Education HQ",
    schoolAr: "مقر وعد للتعليم",
    locationEn: "Jeddah",
    locationAr: "جدة",
    typeEn: "Full-time",
    typeAr: "دوام كامل",
    postedEn: "2 weeks ago",
    postedAr: "منذ أسبوعين",
  },
]

const benefits = [
  { titleEn: "Competitive Salary", titleAr: "راتب تنافسي" },
  { titleEn: "Health Insurance", titleAr: "تأمين صحي" },
  { titleEn: "Professional Development", titleAr: "تطوير مهني" },
  { titleEn: "Annual Leave", titleAr: "إجازة سنوية" },
  { titleEn: "Housing Allowance", titleAr: "بدل سكن" },
  { titleEn: "Transportation", titleAr: "مواصلات" },
]

export default function CareersPage() {
  const { t, isRTL } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSchool, setSelectedSchool] = useState("all")
  const Arrow = isRTL ? ChevronLeft : ChevronRight

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = t(job.titleEn, job.titleAr).toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSchool = selectedSchool === "all" || job.schoolEn.toLowerCase().includes(selectedSchool.toLowerCase())
    return matchesSearch && matchesSchool
  })

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Careers"
        titleAr="الوظائف"
        breadcrumbEn={["Home", "Careers"]}
        breadcrumbAr={["الرئيسية", "الوظائف"]}
      />

      {/* Why Join Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
              {t("Join Our Team", "انضم لفريقنا")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Why Work at Waad Education?", "لماذا تعمل في وعد للتعليم؟")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: "1.8" }}>
              {t(
                "Join a team of dedicated professionals committed to shaping the future of education in Saudi Arabia.",
                "انضم لفريق من المحترفين المتفانين الملتزمين بتشكيل مستقبل التعليم في المملكة العربية السعودية.",
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl text-center hover:bg-[#486266] group transition-colors duration-300"
              >
                <span className="text-gray-700 group-hover:text-white font-medium text-sm transition-colors">
                  {t(benefit.titleEn, benefit.titleAr)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Open Positions", "الوظائف المتاحة")}
            </h2>
          </div>

          {/* Filters */}
          <div className={`flex flex-col md:flex-row gap-4 mb-8 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            <div className="relative flex-grow">
              <Search
                className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? "right-4" : "left-4"}`}
              />
              <input
                type="text"
                placeholder={t("Search positions...", "ابحث عن وظيفة...")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full h-12 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#486266] focus:border-transparent ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"}`}
              />
            </div>
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="h-12 px-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#486266] focus:border-transparent min-w-[200px]"
            >
              <option value="all">{t("All Schools", "جميع المدارس")}</option>
              <option value="waad">{t("Waad Academy", "أكاديمية وعد")}</option>
              <option value="dar">{t("Dar Al-Thikr", "دار الذكر")}</option>
              <option value="bloom">{t("Bloom Schools", "مدارس بلوم")}</option>
            </select>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div
                  className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ${isRTL ? "lg:flex-row-reverse" : ""}`}
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t(job.titleEn, job.titleAr)}</h3>
                    <div
                      className={`flex flex-wrap items-center gap-4 text-sm text-gray-500 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {t(job.schoolEn, job.schoolAr)}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {t(job.locationEn, job.locationAr)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {t(job.typeEn, job.typeAr)}
                      </span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <span className="text-sm text-gray-400">{t(job.postedEn, job.postedAr)}</span>
                    <Button className="bg-[#486266] hover:bg-[#3a5154] text-white">
                      {t("Apply", "قدم الآن")}
                      <Arrow className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {t("No positions found matching your criteria.", "لا توجد وظائف تطابق معاييرك.")}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
