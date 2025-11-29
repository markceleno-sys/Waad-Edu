"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { Users, Heart, School, Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CommunityOutreachPage() {
  const { t, isRTL } = useLanguage()

  const programs = [
    {
      titleEn: "Educational Workshops",
      titleAr: "ورش العمل التعليمية",
      descEn: "Free workshops for parents on supporting children's education at home",
      descAr: "ورش عمل مجانية للآباء حول دعم تعليم الأطفال في المنزل",
      icon: School,
    },
    {
      titleEn: "Community Events",
      titleAr: "الفعاليات المجتمعية",
      descEn: "Regular community gatherings celebrating cultural and educational milestones",
      descAr: "تجمعات مجتمعية منتظمة للاحتفال بالإنجازات الثقافية والتعليمية",
      icon: Calendar,
    },
    {
      titleEn: "Local Partnerships",
      titleAr: "الشراكات المحلية",
      descEn: "Collaborations with local organizations to maximize community impact",
      descAr: "تعاون مع المنظمات المحلية لتعظيم الأثر المجتمعي",
      icon: Users,
    },
    {
      titleEn: "Volunteer Programs",
      titleAr: "برامج التطوع",
      descEn: "Opportunities for students and staff to give back to the community",
      descAr: "فرص للطلاب والموظفين للعطاء للمجتمع",
      icon: Heart,
    },
  ]

  const impacts = [
    { valueEn: "50+", valueAr: "+50", labelEn: "Community Events/Year", labelAr: "فعالية مجتمعية/سنة" },
    { valueEn: "10K+", valueAr: "+10 آلاف", labelEn: "People Reached", labelAr: "شخص تم الوصول إليهم" },
    { valueEn: "25+", valueAr: "+25", labelEn: "Partner Organizations", labelAr: "منظمة شريكة" },
    { valueEn: "1000+", valueAr: "+1000", labelEn: "Volunteer Hours", labelAr: "ساعة تطوعية" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Community Outreach"
        titleAr="التواصل المجتمعي"
        breadcrumbEn={["Home", "About", "CSR", "Community Outreach"]}
        breadcrumbAr={["الرئيسية", "من نحن", "المسؤولية الاجتماعية", "التواصل المجتمعي"]}
      />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? "order-2" : ""}>
              <div className="w-14 h-14 bg-[#486266] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ lineHeight: "1.4" }}>
                {t("Building Stronger Communities Together", "بناء مجتمعات أقوى معاً")}
              </h2>
              <p className="text-gray-600 text-lg mb-6" style={{ lineHeight: "1.9" }}>
                {t(
                  "Our Community Outreach program extends beyond the classroom walls to create meaningful connections with the communities we serve. We believe that education is a collaborative effort between schools, families, and communities.",
                  "يمتد برنامج التواصل المجتمعي لدينا إلى ما وراء جدران الفصول الدراسية لخلق روابط ذات مغزى مع المجتمعات التي نخدمها. نؤمن بأن التعليم جهد تعاوني بين المدارس والأسر والمجتمعات.",
                )}
              </p>
              <p className="text-gray-600" style={{ lineHeight: "1.9" }}>
                {t(
                  "Through various initiatives and partnerships, we work to address educational needs, promote cultural understanding, and foster a sense of belonging within our diverse community.",
                  "من خلال مبادرات وشراكات متنوعة، نعمل على تلبية الاحتياجات التعليمية وتعزيز التفاهم الثقافي وتعزيز الشعور بالانتماء داخل مجتمعنا المتنوع.",
                )}
              </p>
            </div>
            <div className={`relative ${isRTL ? "order-1" : ""}`}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/community-education-program-volunteers.jpg"
                  alt="Community outreach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9a84c] rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#486266]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#486266]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{t(stat.valueEn, stat.valueAr)}</div>
                <div className="text-white/80">{t(stat.labelEn, stat.labelAr)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
              {t("Our Initiatives", "مبادراتنا")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Outreach Programs", "برامج التواصل")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow flex gap-6"
              >
                <div className="w-14 h-14 bg-[#486266]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <program.icon className="w-7 h-7 text-[#486266]" />
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
          <div className="bg-gradient-to-br from-[#486266] to-[#3a5154] p-8 lg:p-16 rounded-3xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t("Get Involved", "انضم إلينا")}</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8" style={{ lineHeight: "1.9" }}>
              {t(
                "Join us in making a difference. Whether you want to volunteer, partner, or participate in our community events, we welcome your involvement.",
                "انضم إلينا في صنع الفرق. سواء كنت ترغب في التطوع أو الشراكة أو المشاركة في فعالياتنا المجتمعية، نرحب بمشاركتك.",
              )}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a84c] text-white rounded-lg font-semibold hover:bg-[#b8963f] transition-colors"
            >
              {t("Contact Us", "تواصل معنا")}
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
