"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/contexts/language-context"
import { Brain, Heart, Dumbbell, Lightbulb, Users, Globe, BookOpen, Target } from "lucide-react"

const learnerOutcomes = [
  {
    icon: Brain,
    nameEn: "Cognitive Competencies",
    nameAr: "الكفاءات المعرفية",
    descEn: "Critical thinking, problem-solving, and analytical skills",
    descAr: "التفكير النقدي وحل المشكلات والمهارات التحليلية",
  },
  {
    icon: Heart,
    nameEn: "Emotional Intelligence",
    nameAr: "الذكاء العاطفي",
    descEn: "Self-awareness, empathy, and emotional regulation",
    descAr: "الوعي الذاتي والتعاطف والتنظيم العاطفي",
  },
  {
    icon: Users,
    nameEn: "Social Competencies",
    nameAr: "الكفاءات الاجتماعية",
    descEn: "Collaboration, communication, and leadership",
    descAr: "التعاون والتواصل والقيادة",
  },
  {
    icon: Dumbbell,
    nameEn: "Physical Wellbeing",
    nameAr: "الصحة البدنية",
    descEn: "Health, fitness, and physical development",
    descAr: "الصحة واللياقة والتطور البدني",
  },
]

const ecosystemElements = [
  {
    icon: BookOpen,
    nameEn: "Quality Curriculum",
    nameAr: "منهج عالي الجودة",
    descEn: "Cambridge-aligned, globally recognized programs",
    descAr: "برامج متوافقة مع كامبريدج ومعترف بها عالمياً",
  },
  {
    icon: Users,
    nameEn: "Expert Educators",
    nameAr: "معلمون خبراء",
    descEn: "Qualified teachers as facilitators of learning",
    descAr: "معلمون مؤهلون كميسرين للتعلم",
  },
  {
    icon: Globe,
    nameEn: "Learning Environment",
    nameAr: "بيئة التعلم",
    descEn: "Safe, inspiring, and technology-enabled spaces",
    descAr: "مساحات آمنة وملهمة ومجهزة بالتكنولوجيا",
  },
  {
    icon: Target,
    nameEn: "Assessment & Growth",
    nameAr: "التقييم والنمو",
    descEn: "Continuous feedback and personalized development",
    descAr: "تغذية راجعة مستمرة وتطوير شخصي",
  },
]

export default function LearningFrameworkPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      <PageHeader
        titleEn="Learning Framework"
        titleAr="إطار التعلم"
        breadcrumbEn={["Home", "Learning Framework"]}
        breadcrumbAr={["الرئيسية", "إطار التعلم"]}
      />

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#486266]/10 text-[#486266] rounded-full text-sm font-semibold mb-6">
              {t("Our Educational Philosophy", "فلسفتنا التعليمية")}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              style={{ lineHeight: isRTL ? "1.5" : "1.3" }}
            >
              {t("Heart, Mind, and Body", "القلب والعقل والجسد")}
            </h2>
            <p className="text-gray-600 text-lg" style={{ lineHeight: "2" }}>
              {t(
                "At Waad Education, our Learning Framework is built on the belief that true education develops the whole person. We focus on nurturing not just academic excellence, but also emotional intelligence, social skills, and physical wellbeing.",
                "في وعد للتعليم، يُبنى إطار التعلم لدينا على الإيمان بأن التعليم الحقيقي يطور الإنسان بالكامل. نركز على رعاية ليس فقط التميز الأكاديمي، بل أيضاً الذكاء العاطفي والمهارات الاجتماعية والصحة البدنية.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Framework Diagram */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Learning Outcomes */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {t("Learning Outcomes", "مخرجات التعلم")}
                </h3>
                <p className="text-gray-500 text-center mb-8 text-sm">{t("The Impactful Learner", "المتعلم المؤثر")}</p>

                <div className="relative">
                  {/* Center Circle */}
                  <div className="w-32 h-32 mx-auto bg-[#486266] rounded-full flex items-center justify-center mb-8">
                    <div className="text-center">
                      <Lightbulb className="w-10 h-10 text-[#c9a84c] mx-auto mb-1" />
                      <span className="text-white text-xs font-medium">{t("Impactful", "المتعلم")}</span>
                      <br />
                      <span className="text-white text-xs font-medium">{t("Learner", "المؤثر")}</span>
                    </div>
                  </div>

                  {/* Outcomes Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {learnerOutcomes.map((outcome, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-xl hover:bg-[#486266] group transition-colors duration-300"
                      >
                        <outcome.icon className="w-8 h-8 text-[#486266] group-hover:text-[#c9a84c] mb-3 transition-colors" />
                        <h4 className="font-semibold text-gray-900 group-hover:text-white text-sm mb-1 transition-colors">
                          {t(outcome.nameEn, outcome.nameAr)}
                        </h4>
                        <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors">
                          {t(outcome.descEn, outcome.descAr)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Ecosystem */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {t("Learning Ecosystem", "منظومة التعلم")}
                </h3>
                <p className="text-gray-500 text-center mb-8 text-sm">{t("The Enabling Leader", "القائد الممكّن")}</p>

                <div className="relative">
                  {/* Center Circle */}
                  <div className="w-32 h-32 mx-auto bg-[#c9a84c] rounded-full flex items-center justify-center mb-8">
                    <div className="text-center">
                      <Target className="w-10 h-10 text-white mx-auto mb-1" />
                      <span className="text-white text-xs font-medium">{t("Enabling", "القائد")}</span>
                      <br />
                      <span className="text-white text-xs font-medium">{t("Leader", "الممكّن")}</span>
                    </div>
                  </div>

                  {/* Ecosystem Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {ecosystemElements.map((element, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-xl hover:bg-[#c9a84c] group transition-colors duration-300"
                      >
                        <element.icon className="w-8 h-8 text-[#c9a84c] group-hover:text-white mb-3 transition-colors" />
                        <h4 className="font-semibold text-gray-900 group-hover:text-white text-sm mb-1 transition-colors">
                          {t(element.nameEn, element.nameAr)}
                        </h4>
                        <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors">
                          {t(element.descEn, element.descAr)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#486266]">
              <h4 className="text-lg font-bold text-gray-900 mb-3">{t("Learning Outcomes", "مخرجات التعلم")}</h4>
              <p className="text-gray-600" style={{ lineHeight: "1.8" }}>
                {t(
                  "The learning outcomes are centered around the Learner, who develops through four interconnected dimensions forming comprehensive learning outcomes.",
                  "تتمحور مخرجات التعلم حول المتعلم، الذي يتطور من خلال أربعة أبعاد مترابطة تشكل مخرجات تعلم شاملة.",
                )}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#c9a84c]">
              <h4 className="text-lg font-bold text-gray-900 mb-3">{t("Learning Ecosystem", "منظومة التعلم")}</h4>
              <p className="text-gray-600" style={{ lineHeight: "1.8" }}>
                {t(
                  "The learning ecosystem places the Leader at its center—effectively guiding, supporting, and enabling all four dimensions.",
                  "تضع منظومة التعلم القائد في مركزها - يوجه ويدعم ويمكّن جميع الأبعاد الأربعة بفعالية.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Alignment */}
      <section className="py-20 lg:py-28 bg-[#486266]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-6">
              {t("Vision 2030 Alignment", "التوافق مع رؤية 2030")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t("Building the Leaders of Tomorrow", "بناء قادة الغد")}
            </h2>
            <p className="text-white/80 text-lg" style={{ lineHeight: "2" }}>
              {t(
                "Our Learning Framework is designed to align with Saudi Arabia's Vision 2030, preparing students to contribute to the Kingdom's educational transformation and meet the future workforce needs.",
                "تم تصميم إطار التعلم لدينا ليتوافق مع رؤية المملكة العربية السعودية 2030، لإعداد الطلاب للمساهمة في التحول التعليمي للمملكة وتلبية احتياجات القوى العاملة المستقبلية.",
              )}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
