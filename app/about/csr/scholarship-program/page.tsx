"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, GraduationCap, Target, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"

export default function ScholarshipProgramPage() {
  const { t, isRTL } = useLanguage()

  const stats = [
    { valueEn: "500+", valueAr: "+500", labelEn: "Students Supported", labelAr: "طالب مستفيد" },
    { valueEn: "100%", valueAr: "100%", labelEn: "Tuition Coverage", labelAr: "تغطية الرسوم" },
    { valueEn: "15+", valueAr: "+15", labelEn: "Years of Impact", labelAr: "سنوات من التأثير" },
    { valueEn: "95%", valueAr: "95%", labelEn: "Graduation Rate", labelAr: "معدل التخرج" },
  ]

  const eligibility = [
    { en: "Saudi nationals or legal residents", ar: "مواطنون سعوديون أو مقيمون بشكل قانوني" },
    { en: "Demonstrated financial need", ar: "إثبات الحاجة المادية" },
    { en: "Strong academic performance", ar: "أداء أكاديمي متميز" },
    { en: "Good conduct and character", ar: "حسن السيرة والسلوك" },
    { en: "Commitment to complete the program", ar: "الالتزام بإكمال البرنامج" },
  ]

  const benefits = [
    {
      titleEn: "Full Tuition",
      titleAr: "الرسوم الدراسية الكاملة",
      descEn: "Complete coverage of all tuition fees throughout the academic year",
      descAr: "تغطية كاملة لجميع الرسوم الدراسية طوال العام الدراسي",
    },
    {
      titleEn: "Books & Materials",
      titleAr: "الكتب والمواد",
      descEn: "All required textbooks, uniforms, and learning materials provided",
      descAr: "توفير جميع الكتب المدرسية والزي والمواد التعليمية المطلوبة",
    },
    {
      titleEn: "Transportation",
      titleAr: "المواصلات",
      descEn: "School bus services for students who need transportation support",
      descAr: "خدمات الحافلات المدرسية للطلاب الذين يحتاجون دعم المواصلات",
    },
    {
      titleEn: "Mentorship",
      titleAr: "الإرشاد",
      descEn: "Dedicated academic advisors and mentors to guide student success",
      descAr: "مستشارون أكاديميون ومرشدون متخصصون لتوجيه نجاح الطلاب",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Scholarship Program"
        titleAr="برنامج المنح الدراسية"
        breadcrumbEn={["Home", "About", "CSR", "Scholarship Program"]}
        breadcrumbAr={["الرئيسية", "من نحن", "المسؤولية الاجتماعية", "برنامج المنح"]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? "order-2" : ""}>
              <div className="w-14 h-14 bg-[#486266] rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ lineHeight: "1.4" }}>
                {t("Empowering Dreams Through Education", "تمكين الأحلام من خلال التعليم")}
              </h2>
              <p className="text-gray-600 text-lg mb-6" style={{ lineHeight: "1.9" }}>
                {t(
                  "Our Scholarship Program is dedicated to providing quality education to talented students from underprivileged backgrounds. We believe every child deserves access to world-class education, regardless of their financial circumstances.",
                  "برنامج المنح الدراسية لدينا مكرس لتوفير تعليم عالي الجودة للطلاب الموهوبين من الأسر المحتاجة. نؤمن بأن كل طفل يستحق الوصول إلى تعليم عالمي المستوى، بغض النظر عن ظروفه المادية.",
                )}
              </p>
              <p className="text-gray-600" style={{ lineHeight: "1.9" }}>
                {t(
                  "Since our inception, we have supported hundreds of students in achieving their educational goals and building brighter futures for themselves and their families.",
                  "منذ تأسيسنا، دعمنا مئات الطلاب في تحقيق أهدافهم التعليمية وبناء مستقبل أفضل لأنفسهم وعائلاتهم.",
                )}
              </p>
            </div>
            <div className={`relative ${isRTL ? "order-1" : ""}`}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/students-receiving-scholarship-ceremony.jpg"
                  alt="Scholarship students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c9a84c] rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#486266]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#486266]">
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
              {t("What We Offer", "ما نقدمه")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Scholarship Benefits", "مزايا المنحة")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#c9a84c]/20 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(benefit.titleEn, benefit.titleAr)}</h3>
                <p className="text-gray-600" style={{ lineHeight: "1.8" }}>
                  {t(benefit.descEn, benefit.descAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
                {t("Requirements", "المتطلبات")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("Eligibility Criteria", "معايير الأهلية")}
              </h2>
              <p className="text-gray-600 mb-8" style={{ lineHeight: "1.9" }}>
                {t(
                  "To be considered for our scholarship program, applicants must meet the following criteria:",
                  "للنظر في طلب الحصول على برنامج المنح الدراسية، يجب على المتقدمين استيفاء المعايير التالية:",
                )}
              </p>
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#486266] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700" style={{ lineHeight: "1.7" }}>
                      {t(item.en, item.ar)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#486266] p-8 lg:p-12 rounded-2xl text-white">
              <Target className="w-12 h-12 text-[#c9a84c] mb-6" />
              <h3 className="text-2xl font-bold mb-4">{t("Apply Now", "قدم الآن")}</h3>
              <p className="text-white/80 mb-8" style={{ lineHeight: "1.9" }}>
                {t(
                  "Applications for the upcoming academic year are now open. Submit your application and supporting documents to be considered for our scholarship program.",
                  "طلبات التقديم للعام الدراسي القادم مفتوحة الآن. قدم طلبك والمستندات الداعمة للنظر في حصولك على برنامج المنح الدراسية.",
                )}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-white rounded-lg font-semibold hover:bg-[#b8963f] transition-colors"
              >
                {t("Start Application", "ابدأ التقديم")}
                {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
