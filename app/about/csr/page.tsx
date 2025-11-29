"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, BookOpen, Globe, ArrowRight, ArrowLeft } from "lucide-react"

const initiatives = [
  {
    titleEn: "Scholarship Program",
    titleAr: "برنامج المنح الدراسية",
    descEn: "Providing educational opportunities for underprivileged students across Saudi Arabia.",
    descAr: "توفير فرص تعليمية للطلاب المحتاجين في جميع أنحاء المملكة العربية السعودية.",
    icon: BookOpen,
    image: "/students-receiving-scholarship-ceremony.jpg",
    href: "/about/csr/scholarship-program",
  },
  {
    titleEn: "Community Outreach",
    titleAr: "التواصل المجتمعي",
    descEn: "Regular programs to engage with local communities and support their educational needs.",
    descAr: "برامج منتظمة للتواصل مع المجتمعات المحلية ودعم احتياجاتهم التعليمية.",
    icon: Users,
    image: "/community-education-program-volunteers.jpg",
    href: "/about/csr/community-outreach",
  },
  {
    titleEn: "Environmental Initiatives",
    titleAr: "المبادرات البيئية",
    descEn: "Promoting sustainability and environmental awareness among students and staff.",
    descAr: "تعزيز الاستدامة والوعي البيئي بين الطلاب والموظفين.",
    icon: Globe,
    image: "/school-environmental-green-initiative.jpg",
    href: "/about/csr/environmental-initiatives",
  },
  {
    titleEn: "Health & Wellness",
    titleAr: "الصحة والعافية",
    descEn: "Supporting health initiatives and wellness programs for the community.",
    descAr: "دعم المبادرات الصحية وبرامج العافية للمجتمع.",
    icon: Heart,
    image: "/school-health-wellness-program-children.jpg",
    href: "/about/csr/health-wellness",
  },
]

export default function CSRPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="CSR & Charity Initiatives"
        titleAr="المسؤولية الاجتماعية والمبادرات الخيرية"
        breadcrumbEn={["Home", "About", "CSR"]}
        breadcrumbAr={["الرئيسية", "من نحن", "المسؤولية الاجتماعية"]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
              {t("Making a Difference", "صنع الفرق")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Our Community Impact", "أثرنا في المجتمع")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: "1.8" }}>
              {t(
                "At Waad Education, we believe in giving back to the community and creating positive change.",
                "في وعد للتعليم، نؤمن بالعطاء للمجتمع وخلق تغيير إيجابي.",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer block"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={t(item.titleEn, item.titleAr)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[#486266] rounded-xl flex items-center justify-center mb-4 -mt-14 relative z-10 shadow-lg group-hover:bg-[#c9a84c] transition-colors">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#486266] transition-colors">
                        {t(item.titleEn, item.titleAr)}
                      </h3>
                      <p className="text-gray-600" style={{ lineHeight: "1.8" }}>
                        {t(item.descEn, item.descAr)}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#486266]/10 flex items-center justify-center group-hover:bg-[#486266] transition-colors">
                      {isRTL ? (
                        <ArrowLeft className="w-5 h-5 text-[#486266] group-hover:text-white transition-colors" />
                      ) : (
                        <ArrowRight className="w-5 h-5 text-[#486266] group-hover:text-white transition-colors" />
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
