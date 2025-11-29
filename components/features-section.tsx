"use client"

import { Sparkles, Globe, Users2, Award, BookOpen, Lightbulb } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const features = {
  en: [
    {
      icon: Globe,
      title: "Vision 2030 Aligned",
      description:
        "Our curriculum and approach are strategically aligned with Saudi Arabia's Vision 2030 educational transformation goals.",
    },
    {
      icon: BookOpen,
      title: "Cambridge Certified",
      description:
        "International curriculum standards with Cambridge certification ensuring global recognition and academic excellence.",
    },
    {
      icon: Users2,
      title: "Expert Educators",
      description: "Highly qualified teachers from around the world, committed to nurturing each student's potential.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "State-of-the-art facilities with technology-enhanced learning environments and STEM programs.",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description:
        "Award-winning education with consistent high performance in national and international assessments.",
    },
    {
      icon: Sparkles,
      title: "Holistic Development",
      description:
        "Balanced approach to Heart, Mind, and Body - developing well-rounded individuals ready for the future.",
    },
  ],
  ar: [
    {
      icon: Globe,
      title: "متوافق مع رؤية 2030",
      description: "مناهجنا ونهجنا متوافقة استراتيجياً مع أهداف التحول التعليمي لرؤية المملكة العربية السعودية 2030.",
    },
    {
      icon: BookOpen,
      title: "معتمد من كامبريدج",
      description: "معايير المناهج الدولية مع اعتماد كامبريدج يضمن الاعتراف العالمي والتميز الأكاديمي.",
    },
    {
      icon: Users2,
      title: "معلمون خبراء",
      description: "معلمون مؤهلون تأهيلاً عالياً من جميع أنحاء العالم، ملتزمون برعاية إمكانات كل طالب.",
    },
    {
      icon: Lightbulb,
      title: "التركيز على الابتكار",
      description: "مرافق حديثة مع بيئات تعلم معززة بالتكنولوجيا وبرامج STEM.",
    },
    {
      icon: Award,
      title: "تميز مثبت",
      description: "تعليم حائز على جوائز مع أداء متسق عالٍ في التقييمات الوطنية والدولية.",
    },
    {
      icon: Sparkles,
      title: "تطوير شامل",
      description: "نهج متوازن للقلب والعقل والجسد - تطوير أفراد متكاملين مستعدين للمستقبل.",
    },
  ],
}

export function FeaturesSection() {
  const { language, t } = useLanguage()
  const currentFeatures = features[language]

  return (
    <section id="framework" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#b8a04c]/10 text-[#8a7a3a] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-[#b8a04c]" />
            {t("Why Choose Waad", "لماذا تختار وعد")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            {t("Excellence in Every Dimension", "التميز في كل بُعد")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              "Discover what makes Waad Education the preferred choice for families seeking quality education in Saudi Arabia.",
              "اكتشف ما يجعل وعد للتعليم الخيار المفضل للعائلات الباحثة عن تعليم عالي الجودة في المملكة.",
            )}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Learning Framework Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#3d5a5a] to-[#4a6b6b] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="framework-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="white" />
              </pattern>
              <rect width="100" height="100" fill="url(#framework-pattern)" />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {t("Waad Education Learning Framework", "إطار التعلم في وعد للتعليم")}
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t(
                  "Our unique learning framework centers around the Impactful Learner and Enabling Leader model, developing students through four interconnected dimensions for comprehensive learning outcomes.",
                  "يتمحور إطار التعلم الفريد لدينا حول نموذج المتعلم المؤثر والقائد الممكّن، مع تطوير الطلاب من خلال أربعة أبعاد مترابطة لنتائج تعلم شاملة.",
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {t("Learning Outcomes", "مخرجات التعلم")}
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {t("Learning Ecosystem", "منظومة التعلم")}
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {t("Visible Impact", "الأثر المرئي")}
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {t("Deep Understanding", "الفهم العميق")}
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                {/* Simplified Framework Visualization */}
                <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
                <div className="absolute inset-4 border-4 border-white/30 rounded-full" />
                <div className="absolute inset-8 border-4 border-white/40 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#b8a04c]">WEC</div>
                    <div className="text-sm text-white/70">{t("Learning Framework", "إطار التعلم")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
