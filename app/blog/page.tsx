"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, ArrowLeft } from "lucide-react"

const posts = [
  {
    id: 1,
    slug: "cambridge-curriculum-global-success",
    titleEn: "How Cambridge Curriculum Prepares Students for Global Success",
    titleAr: "كيف يُعد منهج كامبريدج الطلاب للنجاح العالمي",
    excerptEn:
      "Discover how our Cambridge-accredited programs give students a competitive edge in university admissions worldwide.",
    excerptAr: "اكتشف كيف تمنح برامجنا المعتمدة من كامبريدج الطلاب ميزة تنافسية في القبول الجامعي حول العالم.",
    image: "/cambridge-students-graduation-success.jpg",
    categoryEn: "Education",
    categoryAr: "التعليم",
    dateEn: "Nov 25, 2024",
    dateAr: "25 نوفمبر 2024",
    authorEn: "Dr. Ahmed Al-Rashid",
    authorAr: "د. أحمد الراشد",
  },
  {
    id: 2,
    slug: "early-childhood-education-importance",
    titleEn: "The Importance of Early Childhood Education",
    titleAr: "أهمية التعليم في مرحلة الطفولة المبكرة",
    excerptEn: "Research shows that quality early education has lasting impacts on cognitive and social development.",
    excerptAr: "تظهر الأبحاث أن التعليم المبكر عالي الجودة له تأثيرات دائمة على التطور المعرفي والاجتماعي.",
    image: "/early-childhood-education-children-playing.jpg",
    categoryEn: "Early Years",
    categoryAr: "السنوات المبكرة",
    dateEn: "Nov 20, 2024",
    dateAr: "20 نوفمبر 2024",
    authorEn: "Mrs. Sarah Al-Zahrani",
    authorAr: "أ. سارة الزهراني",
  },
  {
    id: 3,
    slug: "technology-modern-classrooms",
    titleEn: "Integrating Technology in Modern Classrooms",
    titleAr: "دمج التكنولوجيا في الفصول الدراسية الحديثة",
    excerptEn: "Learn how Waad Education is leveraging technology to enhance learning outcomes.",
    excerptAr: "تعرف على كيفية استفادة وعد للتعليم من التكنولوجيا لتحسين نتائج التعلم.",
    image: "/technology-modern-classroom-students.jpg",
    categoryEn: "Innovation",
    categoryAr: "الابتكار",
    dateEn: "Nov 15, 2024",
    dateAr: "15 نوفمبر 2024",
    authorEn: "Mr. Khalid Al-Otaibi",
    authorAr: "أ. خالد العتيبي",
  },
  {
    id: 4,
    slug: "university-partnerships",
    titleEn: "Waad Education Partners with Leading Universities",
    titleAr: "وعد للتعليم تتشارك مع جامعات رائدة",
    excerptEn: "New partnerships open pathways for our graduates to top universities globally.",
    excerptAr: "شراكات جديدة تفتح مسارات لخريجينا إلى أفضل الجامعات عالمياً.",
    image: "/university-partnership-signing-ceremony.jpg",
    categoryEn: "News",
    categoryAr: "أخبار",
    dateEn: "Nov 10, 2024",
    dateAr: "10 نوفمبر 2024",
    authorEn: "Waad Education",
    authorAr: "وعد للتعليم",
  },
  {
    id: 5,
    slug: "sports-character-building",
    titleEn: "Building Character Through Sports Programs",
    titleAr: "بناء الشخصية من خلال البرامج الرياضية",
    excerptEn: "How physical education and sports contribute to holistic student development.",
    excerptAr: "كيف يساهم التربية البدنية والرياضة في التطوير الشامل للطلاب.",
    image: "/students-sports-competition-school.jpg",
    categoryEn: "Student Life",
    categoryAr: "الحياة الطلابية",
    dateEn: "Nov 5, 2024",
    dateAr: "5 نوفمبر 2024",
    authorEn: "Coach Mohammed",
    authorAr: "المدرب محمد",
  },
  {
    id: 6,
    slug: "vision-2030-education",
    titleEn: "Vision 2030 and the Future of Education in KSA",
    titleAr: "رؤية 2030 ومستقبل التعليم في المملكة",
    excerptEn: "How Waad Education aligns with Saudi Arabia's ambitious educational transformation goals.",
    excerptAr: "كيف تتوافق وعد للتعليم مع أهداف التحول التعليمي الطموحة للمملكة العربية السعودية.",
    image: "/vision-2030-education-transformation.jpg",
    categoryEn: "Vision 2030",
    categoryAr: "رؤية 2030",
    dateEn: "Nov 1, 2024",
    dateAr: "1 نوفمبر 2024",
    authorEn: "Dr. Fatima Al-Harbi",
    authorAr: "د. فاطمة الحربي",
  },
]

export default function BlogPage() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Blog"
        titleAr="المدونة"
        breadcrumbEn={["Home", "Blog"]}
        breadcrumbAr={["الرئيسية", "المدونة"]}
      />

      {/* Featured Post */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? "lg:flex-row-reverse" : ""}`}>
            <Link
              href={`/blog/${posts[0].slug}`}
              className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl group"
            >
              <Image
                src={posts[0].image || "/placeholder.svg"}
                alt={t(posts[0].titleEn, posts[0].titleAr)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-[#c9a84c] text-white rounded-full text-sm font-medium">
                  {t("Featured", "مميز")}
                </span>
              </div>
            </Link>
            <div>
              <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-4">
                {t(posts[0].categoryEn, posts[0].categoryAr)}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                style={{ lineHeight: isRTL ? "1.5" : "1.3" }}
              >
                {t(posts[0].titleEn, posts[0].titleAr)}
              </h2>
              <p className="text-gray-600 text-lg mb-6" style={{ lineHeight: "1.8" }}>
                {t(posts[0].excerptEn, posts[0].excerptAr)}
              </p>
              <div className={`flex items-center gap-6 text-sm text-gray-500 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {t(posts[0].authorEn, posts[0].authorAr)}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t(posts[0].dateEn, posts[0].dateAr)}
                </span>
              </div>
              <Link
                href={`/blog/${posts[0].slug}`}
                className="inline-flex items-center gap-2 text-[#486266] font-semibold hover:gap-3 transition-all"
              >
                {t("Read More", "اقرأ المزيد")}
                <Arrow className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("Latest Articles", "أحدث المقالات")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group block"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={t(post.titleEn, post.titleAr)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#486266]/10 text-[#486266] rounded-full text-xs font-medium mb-3">
                    {t(post.categoryEn, post.categoryAr)}
                  </span>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#486266] transition-colors"
                    style={{ lineHeight: isRTL ? "1.6" : "1.4" }}
                  >
                    {t(post.titleEn, post.titleAr)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2" style={{ lineHeight: "1.7" }}>
                    {t(post.excerptEn, post.excerptAr)}
                  </p>
                  <div
                    className={`flex items-center justify-between text-xs text-gray-400 ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <span>{t(post.authorEn, post.authorAr)}</span>
                    <span>{t(post.dateEn, post.dateAr)}</span>
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
