"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { Globe, Leaf, Recycle, Sun, Droplets, TreePine, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EnvironmentalInitiativesPage() {
  const { t, isRTL } = useLanguage()

  const initiatives = [
    {
      titleEn: "Green Campus",
      titleAr: "الحرم الأخضر",
      descEn: "Solar panels, energy-efficient buildings, and sustainable infrastructure across all our schools",
      descAr: "ألواح شمسية ومباني موفرة للطاقة وبنية تحتية مستدامة في جميع مدارسنا",
      icon: Sun,
    },
    {
      titleEn: "Recycling Programs",
      titleAr: "برامج إعادة التدوير",
      descEn: "Comprehensive recycling initiatives with student-led collection and education programs",
      descAr: "مبادرات شاملة لإعادة التدوير مع برامج جمع وتثقيف يقودها الطلاب",
      icon: Recycle,
    },
    {
      titleEn: "Water Conservation",
      titleAr: "الحفاظ على المياه",
      descEn: "Smart irrigation systems and water-saving fixtures to minimize water consumption",
      descAr: "أنظمة ري ذكية وتركيبات موفرة للمياه لتقليل استهلاك المياه",
      icon: Droplets,
    },
    {
      titleEn: "Tree Planting",
      titleAr: "زراعة الأشجار",
      descEn: "Annual tree planting events with students and community members",
      descAr: "فعاليات سنوية لزراعة الأشجار مع الطلاب وأفراد المجتمع",
      icon: TreePine,
    },
  ]

  const stats = [
    { valueEn: "30%", valueAr: "30%", labelEn: "Energy Reduction", labelAr: "تخفيض الطاقة" },
    { valueEn: "5000+", valueAr: "+5000", labelEn: "Trees Planted", labelAr: "شجرة مزروعة" },
    { valueEn: "40%", valueAr: "40%", labelEn: "Waste Recycled", labelAr: "نفايات معاد تدويرها" },
    { valueEn: "50%", valueAr: "50%", labelEn: "Water Saved", labelAr: "مياه موفرة" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Environmental Initiatives"
        titleAr="المبادرات البيئية"
        breadcrumbEn={["Home", "About", "CSR", "Environmental Initiatives"]}
        breadcrumbAr={["الرئيسية", "من نحن", "المسؤولية الاجتماعية", "المبادرات البيئية"]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? "order-2" : ""}>
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ lineHeight: "1.4" }}>
                {t("Protecting Our Planet for Future Generations", "حماية كوكبنا للأجيال القادمة")}
              </h2>
              <p className="text-gray-600 text-lg mb-6" style={{ lineHeight: "1.9" }}>
                {t(
                  "At Waad Education, environmental stewardship is a core value we instill in our students. Through practical initiatives and educational programs, we're building a generation of environmentally conscious leaders.",
                  "في وعد للتعليم، الإشراف البيئي قيمة أساسية نغرسها في طلابنا. من خلال المبادرات العملية والبرامج التعليمية، نبني جيلاً من القادة الواعين بيئياً.",
                )}
              </p>
              <p className="text-gray-600" style={{ lineHeight: "1.9" }}>
                {t(
                  "Our commitment to sustainability extends to every aspect of our operations, from green building design to curriculum integration of environmental education.",
                  "يمتد التزامنا بالاستدامة إلى كل جانب من جوانب عملياتنا، من تصميم المباني الخضراء إلى دمج التعليم البيئي في المناهج الدراسية.",
                )}
              </p>
            </div>
            <div className={`relative ${isRTL ? "order-1" : ""}`}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/school-environmental-green-initiative.jpg"
                  alt="Environmental initiatives"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600">
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

      {/* Initiatives Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              {t("Our Green Programs", "برامجنا الخضراء")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Key Initiatives", "المبادرات الرئيسية")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <initiative.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(initiative.titleEn, initiative.titleAr)}</h3>
                <p className="text-gray-600" style={{ lineHeight: "1.8" }}>
                  {t(initiative.descEn, initiative.descAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 lg:p-16 rounded-3xl text-center">
            <Leaf className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("Join Our Green Movement", "انضم لحركتنا الخضراء")}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8" style={{ lineHeight: "1.9" }}>
              {t(
                "Together, we can make a lasting impact on our environment. Learn more about how you can participate in our sustainability programs.",
                "معاً، يمكننا إحداث تأثير دائم على بيئتنا. تعرف على المزيد حول كيفية المشاركة في برامج الاستدامة لدينا.",
              )}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t("Get Involved", "شارك معنا")}
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
